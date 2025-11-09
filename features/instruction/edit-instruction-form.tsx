import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { redirect } from "next/navigation";

const EditInstructionForm = () => {
  const saveAction = async () => {
    "use server";
    redirect("/recipes/1/edit");
  }

  const cancelAction = async () => {
    "use server";
    redirect("/recipes/1/edit");
  }
  return (
    <form className="w-full max-w-md" action={saveAction}>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="instruction">Step Instruction</FieldLabel>
            <Textarea
              id="instruction"
              name="instruction"
            />
          </Field>
          <Field orientation="horizontal">
            <Button type="submit">Save</Button>
            <Button
              variant="outline"
              type="submit"
              formAction={cancelAction}
            >
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>  
  )
}

export default EditInstructionForm;
