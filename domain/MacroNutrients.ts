import { Schema } from "effect";

import MacroNutrientsId from "@/domain/MacroNutrientsId";
import RecipeId from "@/domain/RecipeId";

export default class MacroNutrients
extends Schema.Class<MacroNutrients>("MacroNutrients")({
  id: MacroNutrientsId,
  recipeId: RecipeId,
  calories: Schema.NumberFromString,
  protein: Schema.NumberFromString,
  carbohydrates: Schema.NumberFromString,
  fat: Schema.NumberFromString
}) {}

