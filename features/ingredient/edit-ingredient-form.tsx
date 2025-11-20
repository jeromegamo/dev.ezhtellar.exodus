"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import addIngredient from "@/features/actions/add-ingredient";
import { Array, Option, pipe } from "effect";
import { useActionState } from "react";


const EditIngredientFrom = () => {
  const [state, addIngredientAction] = useActionState(addIngredient, {
    formData: {},
    errors: {}
  });

  const servingWeightUnit = [
    "Grams",
    "Kilograms",
    "Micrograms",
    "Milligrams",
    "Ounces",
    "Pound"
  ];

  const servingVolumeUnit = [
    "Cup",
    "Dessertspoon",
    "Fluid Ounce",
    "Gallon",
    "Liter",
    "Milliliter",
    "Pint",
    "Quart",
    "Tablespoon",
    "Teaspoon"
  ];

  const servingAmountUnit = [
    "Each",
    "Serving"
  ]

  return (
    <form className="w-full max-w-md" action={addIngredientAction}>
      <FieldGroup>
        <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="description">Description</FieldLabel>
                <Input name="description" type="text" defaultValue={
                  state.formData.description ?? ""
                }/>
                {pipe(
                   state.errors.description,
                   Option.fromNullable,
                   Option.map(error => (
                    <FieldError key="description">
                      {error}
                    </FieldError>
                  )),
                  Option.getOrNull
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor="qualifier">Qualifier</FieldLabel>
                <Input name="qualifier" type="text" defaultValue={
                  state.formData.qualifier ?? ""
                }/>
              </Field>
            </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <FieldSet>
          <FieldLegend>Measurement</FieldLegend>
          <Tabs defaultValue={state.formData.measurementType ?? "weight"}>
            <TabsList>
              <TabsTrigger value="weight">Weight</TabsTrigger>
              <TabsTrigger value="volume">Volume</TabsTrigger>
              <TabsTrigger value="amount">Amount</TabsTrigger>
            </TabsList>
            <TabsContent value="weight">
              <Input hidden name="measurementType" type="text" defaultValue="weight" />
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="measurementValue">Value</FieldLabel>
                  <Input name="measurementValue" type="text" defaultValue={
                    state.formData.measurementType === "weight"
                    ? state.formData.measurementValue ?? "" 
                    : "" 
                  }/>
                  {pipe(
                     state.errors.measurementValue,
                     Option.fromNullable,
                     Option.map(error => (
                      <FieldError key="measurementValue">
                        {error}
                      </FieldError>
                    )),
                    Option.getOrNull
                  )}
                </Field>
                <Field>
                  <FieldLabel htmlFor="measurementUnit">Unit</FieldLabel>
                  <Select name="measurementUnit" defaultValue={
                    state.formData.measurementType === "weight"
                    ? state.formData.measurementUnit ?? "" 
                    : "" 
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="--" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.map(servingWeightUnit, unit => (
                        <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {pipe(
                     state.errors.measurementUnit,
                     Option.fromNullable,
                     Option.map(error => (
                      <FieldError key="measurementUnit">
                        {error}
                      </FieldError>
                    )),
                    Option.getOrNull
                  )}
                </Field>
              </FieldGroup>
            </TabsContent>
            <TabsContent value="volume">
              <Input hidden name="measurementType" type="text" defaultValue="volume" />
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="measurementValue">Value</FieldLabel>
                  <Input name="measurementValue" type="text" defaultValue={
                    state.formData.measurementType === "volume"
                    ? state.formData.measurementValue ?? "" 
                    : "" 
                  }/>
                  {pipe(
                     state.errors.measurementValue,
                     Option.fromNullable,
                     Option.map(error => (
                      <FieldError key="measurementValue">
                        {error}
                      </FieldError>
                    )),
                    Option.getOrNull
                  )}
                </Field>
                <Field>
                  <FieldLabel htmlFor="measurementUnit">Unit</FieldLabel>
                  <Select name="measurementUnit" defaultValue={
                    state.formData.measurementType === "volume"
                    ? state.formData.measurementUnit ?? "" 
                    : "" 
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="--" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.map(servingVolumeUnit, unit => (
                        <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {pipe(
                     state.errors.measurementUnit,
                     Option.fromNullable,
                     Option.map(error => (
                      <FieldError key="measurementUnit">
                        {error}
                      </FieldError>
                    )),
                    Option.getOrNull
                  )}
                </Field>
              </FieldGroup>
            </TabsContent>
            <TabsContent value="amount">
              <Input hidden name="measurementType" type="text" defaultValue="amount" />
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="measurementValue">Value</FieldLabel>
                  <Input name="measurementValue" type="text" defaultValue={
                    state.formData.measurementType === "amount"
                    ? state.formData.measurementValue ?? "" 
                    : "" 
                  }/>
                  {pipe(
                     state.errors.measurementValue,
                     Option.fromNullable,
                     Option.map(error => (
                      <FieldError key="measurementValue">
                        {error}
                      </FieldError>
                    )),
                    Option.getOrNull
                  )}
                </Field>
                <Field>
                  <FieldLabel htmlFor="measurementUnit">Unit</FieldLabel>
                  <Select name="measurementUnit" defaultValue={
                    state.formData.measurementType === "amount"
                    ? state.formData.measurementUnit ?? ""
                    : "" 
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="--" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.map(servingAmountUnit, unit => (
                        <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {pipe(
                     state.errors.measurementUnit,
                     Option.fromNullable,
                     Option.map(error => (
                      <FieldError key="measurementUnit">
                        {error}
                      </FieldError>
                    )),
                    Option.getOrNull
                  )}
                </Field>
              </FieldGroup>
            </TabsContent>
          </Tabs>

        </FieldSet>
        <FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">Save</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldSet>
      </FieldGroup>
    </form>  
  )
}

export default EditIngredientFrom;
