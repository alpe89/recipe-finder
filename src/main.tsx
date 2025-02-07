import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

import "./index.css";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

async function enableMocking() {
  const { worker } = await import("./mocks/browser");

  return worker.start();
}

enableMocking()
  .then(() => {
    const rootElement = document.getElementById("root")!;
    if (!rootElement.innerHTML) {
      const root = createRoot(rootElement);

      root.render(
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>
      );
    }
  })
  .catch(() => {
    console.error("Failed to enable mocking");
  });
