import RecipeRepo from "@/domain/RecipeRepo/RecipeRepo";
import EditRecipeForm from "@/features/edit-recipe-form/edit-recipe-form";

const EditRecipePage = async (props: PageProps<'/recipes/[slug]/edit'>) => {
  const { slug } = await props.params;
  const recipe = await RecipeRepo.findRecipeBySlug(slug);
  return (
    <EditRecipeForm recipe={recipe} />
  );
}

export default EditRecipePage;
