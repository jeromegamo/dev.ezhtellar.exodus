import { Schema } from "effect"

import GroupedIngredient from "@/domain/GroupedIngredient"
import Ingredient from "@/domain/Ingredient"
import MacroNutrients from "@/domain/MacroNutrients"
import RecipeId from "@/domain/RecipeId"
import StepInstruction from "@/domain/StepInstruction"

const RecipeClassification = Schema.Literal(
  "Breakfast",
  "Soup",
  "Salad",
  "Meat",
  "Seafood",
  "Vegetarian",
  "Side-dish",
  "Snacks",
  "Condiment",
)

export type RecipeClassification = Schema.Schema.Type<typeof RecipeClassification>

export default class Recipe extends Schema.Class<Recipe>("Recipe")({
  id: RecipeId,
  classification: RecipeClassification,
  headnote: Schema.optionalWith(Schema.String, { as: "Option" }),
  name: Schema.NonEmptyString,
  slug: Schema.NonEmptyString,
  macros: MacroNutrients,
  ingredients: Schema.Array(Schema.Union(Ingredient, GroupedIngredient)),
  instructions: Schema.Array(StepInstruction)
}) { }
