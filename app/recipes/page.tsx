import Recipe from "@/domain/Recipe";
import RecipeRepo from "@/domain/RecipeRepo/RecipeRepo";
import RecipeList from "@/features/recipe-list/recipe-list";

const RecipesPage = async () => {
  const recipes: Recipe[] = await RecipeRepo.getAll();
  return (
    <RecipeList recipeListItems={recipes} />
  );
}

export default RecipesPage;
