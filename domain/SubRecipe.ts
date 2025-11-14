import { Data } from "effect"

interface SubRecipe {
  id: string
  _tag: "SubRecipe"
  recipeId: string
  subRecipeId: string
}

const SubRecipe = {
  make: Data.tagged<SubRecipe>("SubRecipe")
}

export default SubRecipe;
