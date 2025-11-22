import { Array, Option } from "effect"

import GroupedIngredient from "@/domain/GroupedIngredient";
import Ingredient from "@/domain/Ingredient"
import INGREDIENTS_MOCK from "@/domain/RecipeRepo/Ingredient.mock";

const findIngredient = async (ingredientId: string): Promise<Option.Option<Ingredient | GroupedIngredient>> => {
  return Array.findFirst(
    INGREDIENTS_MOCK,
    ingredient => ingredient.id === ingredientId);
}

const IngredientRepo = {
  findIngredient,
}

export default IngredientRepo;
