import { createFileRoute } from "@tanstack/react-router";
import { BASE_URL } from "@constants";

const getRecipes = async () => {
  try {
    const response = await fetch(`${BASE_URL}/recipes`);

    if (!response.ok) {
      throw new Error("failed to fetch recipes");
    }

    return await response.json();
  } catch {
    console.log("unexpected error in fetching recipes");
  }
};

export const Route = createFileRoute("/")({
  component: Index,
  loader: () => getRecipes(),
});

function Index() {
  const data = Route.useLoaderData();

  console.log(data);

  return (
    <main>
      <h1>Plate Pilot</h1>
    </main>
  );
}
