import RECIPES_MOCK from "@/domain/Recipe/Recipe.mock";

const getAll = async () => {
  return RECIPES_MOCK
}

const findRecipe = async (id: string) => {
}

const RecipeRepo = {
  getAll,
}

export default RecipeRepo;
