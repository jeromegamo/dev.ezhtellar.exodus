import { Data } from "effect"
import Ingredient from "./Ingredients"

interface GroupedIngredient {
  id: string
  _tag: "GroupedIngredient"
  recipeId: string
  description: string
  ingredients: Ingredient[] 
}

const GroupedIngredient = {
  make: Data.tagged<GroupedIngredient>("GroupedIngredient")
}

export default GroupedIngredient;
