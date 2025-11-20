import RecipeRepo from "@/domain/RecipeRepo/RecipeRepo";
import RecipeSingle from "@/features/recipe-single/recipe-single";

const RecipeItemPage = async (props: PageProps<'/recipes/[slug]'>) => {
  const { slug } = await props.params;
  const recipe = await RecipeRepo.findRecipeBySlug(slug);
  return (
    <RecipeSingle recipe={recipe} />
  );
}

export default RecipeItemPage;
