import { Schema } from "effect";

export const ServingWeightUnit = Schema.Literal(
  "Grams",
  "Kilograms",
  "Micrograms",
  "Milligrams",
  "Ounces",
  "Pound"
);

export type ServingWeightUnit = Schema.Schema.Type<typeof ServingWeightUnit>

export const ServingVolumeUnit = Schema.Literal(
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
);

export type ServingVolumeUnit = Schema.Schema.Type<typeof ServingVolumeUnit>

export const ServingAmountUnit = Schema.Literal(
  "Each",
  "Serving"
)

export type ServingAmountUnit = Schema.Schema.Type<typeof ServingAmountUnit>

export class WeightMeasurement extends Schema.TaggedClass<WeightMeasurement>()(
  "WeightMeasurement",
  {
    value: Schema.NonEmptyString,
    unit: ServingWeightUnit
  }
) {}

export class VolumeMeasurement extends Schema.TaggedClass<VolumeMeasurement>()(
  "VolumeMeasurement",
  {
    value: Schema.NonEmptyString,
    unit: ServingVolumeUnit
  }
) {}

export class AmountMeasurement extends Schema.TaggedClass<AmountMeasurement>()(
  "AmountMeasurement",
  {
    value: Schema.NonEmptyString,
    unit: ServingAmountUnit
  }
) {}

const Measurement = Schema.Union(AmountMeasurement, VolumeMeasurement, WeightMeasurement);

type Measurement = Schema.Schema.Type<typeof Measurement>

export default Measurement;
