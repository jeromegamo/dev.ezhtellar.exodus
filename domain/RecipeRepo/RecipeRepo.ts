import { Array, Option, pipe } from "effect";

import Recipe from "@/domain/Recipe";
import RECIPES_MOCK from "@/domain/RecipeRepo/Recipe.mock";

const getAll = async () => {
  return RECIPES_MOCK;
}

const findRecipe = async (id: string): Promise<Option.Option<Recipe>>  => {
  return pipe(
    RECIPES_MOCK,
    Array.findFirst(recipe => recipe.id === id),
  )
}

const findRecipeBySlug = async (slug: string): Promise<Option.Option<Recipe>>  => {
  return pipe(
    RECIPES_MOCK,
    Array.findFirst(recipe => recipe.slug === slug),
  )
}
const RecipeRepo = {
  getAll,
  findRecipe,
  findRecipeBySlug
}

export default RecipeRepo;
