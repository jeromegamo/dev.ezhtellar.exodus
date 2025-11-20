import { Option } from "effect"
import Ingredient from "@/domain/Ingredients"
import GroupedIngredient from "@/domain/GroupedIngredient"
import StepInstrucion from "@/domain/StepInstruction"

export type RecipeClassification =
  | "breakfast"
  | "soup"
  | "salad"
  | "meat"
  | "seafood"
  | "vegetarian"
  | "side-dish"
  | "snacks"
  | "condiment"

export interface MacroNutrients {
  id: string
  recipeId: string,
  calories: number
  protein: number
  carbohydrates: number
  fat: number
}

export default interface Recipe {
  id: string
  classification: RecipeClassification
  headnote: Option.Option<string>
  name: string
  slug: string
  macros: MacroNutrients
  ingredients: Option.Option<Ingredient[]>
  groupedIngredients: Option.Option<GroupedIngredient[]>
  instructions: Option.Option<StepInstrucion[]>
}
