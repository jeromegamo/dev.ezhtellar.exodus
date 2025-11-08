import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Array } from "effect";

const AddIngredientFrom = () => {
  const addIngredient = (formData: FormData) => { }

  const unitsOfMeasurement = [
    "each",
    "cup",
    "gram",
    "kilogram",
    "ounces",
    "pound",
    "teaspoon",
    "tablespoon",
    "fluid ounces"
  ];

  return (
    <form className="w-full max-w-md" action={addIngredient}>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="description">Description</FieldLabel>
            <Input name="description" type="text" />
          </Field>
          <Field>
            <FieldLabel htmlFor="measurement">Measurement</FieldLabel>
            <Input name="measurement" type="text" />
          </Field>
          <Field>
            <FieldLabel htmlFor="unit">Unit of Measurement</FieldLabel>
            <Select name="unit">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {Array.map(unitsOfMeasurement, unit => (
                  <SelectItem value={unit}>{unit}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel htmlFor="multiplier">Multiplier</FieldLabel>
            <Input name="multiplier" type="text" />
          </Field>

          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>  
  )
}

export default AddIngredientFrom;
