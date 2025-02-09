import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@mocks": path.resolve(__dirname, "src/mocks"),
      "@search": path.resolve(__dirname, "src/Search"),
      "@services": path.resolve(__dirname, "src/services"),
      "@recipe": path.resolve(__dirname, "src/Recipe"),
      "@favourites": path.resolve(__dirname, "src/favourites"),
    },
  },
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],
});
