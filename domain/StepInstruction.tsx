import { Schema } from "effect"

import RecipeId from "@/domain/RecipeId"
import StepInstructionId from "@/domain/StepInstructionId"

export default class StepInstruction
extends Schema.Class<StepInstruction>("StepInstruction")({
  id: StepInstructionId,
  recipeId: RecipeId,
  stepNo: Schema.NumberFromString,
  instruction: Schema.NonEmptyString
}) {}
