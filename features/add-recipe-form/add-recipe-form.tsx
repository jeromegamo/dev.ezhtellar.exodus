import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LucideSave, LucidePencil, LucidePlus, LucideTrash } from "lucide-react";

const AddRecipeForm = () => {
  return (
    <form>
      <h1 className="text-3xl mb-6">Recipe</h1>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="recipeName">Write a descriptive name</FieldLabel>
            <Input id="recipeName" name="recipeName" type="text" />
          </Field>
          <Field>
            <FieldLabel>Write an engaging headnote</FieldLabel>
            <Textarea id="headnote" name="headnote" />
          </Field>
        </FieldGroup>
      </FieldSet>
      <h2 className="text-2xl mt-6 mb-4">Ingredients</h2>
      <FieldSet>
        <EditableIngredientItem />
        <EditableIngredientItem />
        <EditableIngredientItem />
        <Button>
          <LucidePlus />
          Add Ingredient
        </Button>
      </FieldSet>


      <h2 className="text-2xl mt-6 mb-4">Instructions</h2>
      <FieldSet>
        <EditableInstructionItem />
        <EditableInstructionItem />
        <EditableInstructionItem />
        <Button>
          <LucidePlus />
          Add Instruction
        </Button>
      </FieldSet>
      <div className="mt-2 flex flex-col gap-y-2" >
        <Button className="w-full mt-6">
          <LucideSave />
          Save Recipe
        </Button>
        <Button className="w-full">
          Cancel
        </Button>
      </div>
    </form>
  )
}

export default AddRecipeForm;

const EditableIngredientItem = () => {
  return (
    <Card className="p-4">
      <div className="flex flex-col gap-y-2">
        <div className="flex-1 text-left">
          1 cup plain nonfat Greek yogurt
        </div>

        <div className="mt-2 flex flex-col gap-y-2" >
          <Button className="w-full" size="icon">
            <LucidePencil />
            Edit
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

const EditableInstructionItem = () => {
    return (
      <Card className="p-4">
        <div className="flex flex-col gap-y-2">
            <div className="flex-1 text-left">
                1. Cook the onion: Heat the olive oil in a large (12-inch) skillet over
                medium-high heat. Add the onion and ¼ teaspoon of the salt and
                cook, stirring, for 5 minutes. Reduce the heat to medium-low, add the
                garlic, and cook, stirring, until the onion is golden but not charred,
                about 10 more minutes.
            </div>

            <div className="mt-2 flex flex-col gap-y-2">
                <Button className="w-full" size="icon">
                    <LucidePencil />
                    Edit
                </Button>
                <Button className="w-full" size="icon">
                    <LucideTrash />
                    Delete
                </Button>
            </div>
        </div>
    </Card>
  );
}

