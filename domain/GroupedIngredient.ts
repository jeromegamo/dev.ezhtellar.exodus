import { Schema } from "effect"

import GroupedIngredientId from "@/domain/GroupedIngredientId"
import Ingredient from "@/domain/Ingredient"
import RecipeId from "@/domain/RecipeId"

export default class GroupedIngredient
extends Schema.TaggedClass<GroupedIngredient>()(
  "GroupedIngredient",
  {  
    id: GroupedIngredientId,
    recipeId: RecipeId,
    description: Schema.NonEmptyString,
    ingredients: Schema.Array(Ingredient)
  }
) {}
