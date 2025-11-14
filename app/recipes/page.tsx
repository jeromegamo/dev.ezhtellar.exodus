import Recipe from "@/domain/Recipe/Recipe";
import RecipeRepo from "@/domain/RecipeRepo";
import RecipeList from "@/features/recipe-list/recipe-list";

const RecipesPage = async () => {
  const recipes: Recipe[] = await RecipeRepo.getAll();
  return (
    <RecipeList recipeListItems={recipes} />
  );
}

export default RecipesPage;
