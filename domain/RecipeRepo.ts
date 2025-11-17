import GROUPED_INGREDIENTS from "@/domain/GroupedIngredient/GroupedIngredient.mock";
import INGREDIENT_MOCK from "@/domain/Ingredients/Ingredient.mock";
import Recipe from "@/domain/Recipe/Recipe";
import RECIPES_MOCK from "@/domain/Recipe/Recipe.mock";
import INSTRUCTIONS from "@/domain/StepInstructions/StepInstruction.mock";
import { Array, Option, pipe } from "effect";

const getAll = async () => {
  return pipe(
    RECIPES_MOCK,
    Array.map(recipe => {
      const ingredients = Array.filter(INGREDIENT_MOCK, ingredient => ingredient.recipeId === recipe.id);
      const instructions = Array.filter(INSTRUCTIONS, instruction => instruction.recipeId === recipe.id);
      const groupedIngredients = Array.filter(GROUPED_INGREDIENTS, ingredients => ingredients.recipeId === recipe.id);
      recipe.ingredients = Option.some(ingredients)
      recipe.instructions = Option.some(instructions)
      recipe.groupedIngredients = Option.some(groupedIngredients);
      return recipe
    })
  )
}

const findRecipe = async (id: string): Promise<Option.Option<Recipe>>  => {
  return pipe(
    RECIPES_MOCK,
    Array.findFirst(recipe => recipe.id === id),
    Option.andThen(recipe => {
      const ingredients = Array.filter(INGREDIENT_MOCK, ingredient => ingredient.recipeId === id)
      recipe.ingredients = Option.some(ingredients)
      const instructions = Array.filter(INSTRUCTIONS, instruction => instruction.recipeId === id)
      recipe.instructions = Option.some(instructions)
      const groupedIngredients = Array.filter(GROUPED_INGREDIENTS, ingredients => ingredients.recipeId === recipe.id);
      recipe.groupedIngredients = Option.some(groupedIngredients);
      return recipe
    }),
  )
}

const findRecipeBySlug = async (slug: string): Promise<Option.Option<Recipe>>  => {
  return pipe(
    RECIPES_MOCK,
    Array.findFirst(recipe => recipe.slug === slug),
    Option.andThen(recipe => {
      const ingredients = Array.filter(INGREDIENT_MOCK, ingredient => ingredient.recipeId === recipe.id)
      recipe.ingredients = Option.some(ingredients)
      const instructions = Array.filter(INSTRUCTIONS, instruction => instruction.recipeId === recipe.id)
      recipe.instructions = Option.some(instructions)
      const groupedIngredients = Array.filter(GROUPED_INGREDIENTS, ingredients => ingredients.recipeId === recipe.id);
      recipe.groupedIngredients = Option.some(groupedIngredients);
      return recipe
    }),
  )
}
const RecipeRepo = {
  getAll,
  findRecipe,
  findRecipeBySlug
}

export default RecipeRepo;
