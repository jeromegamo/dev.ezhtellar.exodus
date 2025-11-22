import { Schema } from "effect"

import IngredientId from "@/domain/IngredientId";
import Measurement from "@/domain/Measurement";
import RecipeId from "@/domain/RecipeId";

export default class Ingredient
extends Schema.TaggedClass<Ingredient>()(
  "Ingredient",
  {
    id: IngredientId,
    recipeId: RecipeId,
    description: Schema.NonEmptyString,
    qualifier: Schema.optionalWith(Schema.String, { as: "Option" }),
    measurement: Schema.optionalWith(Measurement, { as: "Option" }),
  }
) {}
