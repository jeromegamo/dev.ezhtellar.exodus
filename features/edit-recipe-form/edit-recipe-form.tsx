import { Array,Option, pipe, String } from "effect";
import { LucidePencil, LucidePlus, LucideSave, LucideTrash } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Ingredient from "@/domain/Ingredient";
import Recipe from "@/domain/Recipe";
import StepInstruction from "@/domain/StepInstruction";

export type EditRecipeFormProps = {
  recipe: Option.Option<Recipe>
}

const EditRecipeForm = (props: EditRecipeFormProps) => {
  const { recipe: maybeRecipe } = props;

  if (Option.isNone(maybeRecipe))
  {
    notFound();
  }

  return maybeRecipe.pipe(
    Option.map(recipe => (
      <form key={recipe.id}>
        <h1 className="text-3xl mb-6">Recipe</h1>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="recipeName">Write a descriptive name</FieldLabel>
              <Input
                id="recipeName"
                name="recipeName"
                type="text"
                defaultValue={recipe.name}
              />
            </Field>
            <Field>
              <FieldLabel>Write an engaging headnote</FieldLabel>
              <Textarea
                id="headnote"
                name="headnote"
                defaultValue={recipe.headnote.pipe(Option.getOrElse(() => String.empty))}
              />
            </Field>
          </FieldGroup>
        </FieldSet>
        <h2 className="text-2xl mt-6 mb-4">Ingredients</h2>
        <FieldSet>
          <Button>
            <LucidePlus />
            Add Ingredient
          </Button>
        </FieldSet>

        <h2 className="text-2xl mt-6 mb-4">Instructions</h2>
        <FieldSet>
          {pipe(
            recipe.instructions,
            Array.map(step => (
              <EditableInstructionItem key={step.id} instruction={step} />
            ))
          )}
          <Button asChild>
            <Link href="/recipes/1/edit/instruction">
              <LucidePlus />
              Add Instruction
            </Link>
          </Button>
        </FieldSet>
        <div className="mt-2 flex flex-col gap-y-2" >
          <Button className="w-full mt-6">
            <LucideSave />
            Save Recipe
          </Button>
          <Button className="w-full" asChild>
            <Link href="/recipes">
              Cancel
            </Link>
          </Button>
        </div>
      </form>
    )),
    Option.getOrNull
  )
}

export default EditRecipeForm;

type EditableIngredientItemProps = {
  ingredient: Ingredient
} 

const EditableIngredientItem = (props: EditableIngredientItemProps) => {
  const { ingredient } = props;
  return (
    <Card className="p-4">
      <div className="flex flex-col gap-y-2">
        <div className="flex-1 text-left lowercase">
          {ingredient.measurement.pipe(
            Option.map(m => `${m.value} ${m._tag === "AmountMeasurement" ? String.empty : m.unit} `),
            Option.getOrElse(() => String.empty)
          )} 
          {ingredient.description}
          {ingredient.qualifier.pipe(
            Option.map(q => `, ${q}`),
            Option.getOrElse(() => String.empty)
          )}
        </div>

        <div className="mt-2 flex flex-col gap-y-2" >
          <Button className="w-full" size="icon" asChild>
            <Link href="/recipes/1/edit/ingredient">
              <LucidePencil />
              Edit
            </Link>
          </Button>
          <Button className="w-full" size="icon">
            <LucideTrash />
            Delete
          </Button>
        </div>
      </div>
    </Card>
  )
}

type EditableInstructionItemProps = {
  instruction: StepInstruction
} 

const EditableInstructionItem = (props: EditableInstructionItemProps) => {
  const { instruction } = props;
  return (
    <Card className="p-4">
      <div className="flex flex-col gap-y-2">
          <div className="flex-1 text-left">
            {instruction.stepNo}.
            {instruction.instruction}
          </div>

          <div className="mt-2 flex flex-col gap-y-2">
              <Button className="w-full" size="icon" asChild>
                <Link href="/recipes/1/edit/instruction">
                  <LucidePencil />
                  Edit
                </Link>
              </Button>
              <Button className="w-full" size="icon">
                  <LucideTrash />
                  Delete
              </Button>
          </div>
      </div>
    </Card>
  )
}

