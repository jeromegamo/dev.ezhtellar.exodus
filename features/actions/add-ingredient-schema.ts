import { Schema } from "effect";

const description = Schema.NonEmptyString.annotations({
  message: () => "Please provide a description."
});
const measurementType = Schema.Literal("weight", "volume", "amount");
// TODO: add mathjs validation
const measurementValue = Schema.NonEmptyString.annotations({
  message: () => "Please provide a value."
});
const measurementUnit = Schema.NonEmptyString.annotations({
  message: () => "Please provide a unit of measurement."
})

const AddIngredientSchema = Schema.Struct({
  description,
  qualifier: Schema.String,
  measurementType,
  measurementValue,
  measurementUnit,
});

type AddIngredientSchema = Schema.Schema.Type<typeof AddIngredientSchema>

export default AddIngredientSchema;

