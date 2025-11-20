"use server";
import AddIngredientSchema from "@/features/actions/add-ingredient-schema";
import { Array, Either, ParseResult, pipe, Schema, Option } from "effect";
import { redirect } from "next/navigation";

type AddIngredientState = {
  formData: {
    description?: string
    qualifier?: string
    measurementType?: string
    measurementValue?: string
    measurementUnit?: string
  },
  errors: {
    description?: string
    measurementValue?: string
    measurementUnit?: string
  }
}

const addIngredient = async (
  _prevState: AddIngredientState,
  formData: FormData
): Promise<AddIngredientState> => {

  const incomingData = {
    description: formData.get("description")?.toString(),
    qualifier: formData.get("qualifier")?.toString(),
    measurementType: formData.get("measurementType")?.toString(),
    measurementValue: formData.get("measurementValue")?.toString(),
    measurementUnit: formData.get("measurementUnit")?.toString(),
  }

  const decoded = Schema.decodeUnknownEither(AddIngredientSchema)(incomingData, { errors: "all" })

  return Either.match(decoded, {
    onLeft: (result) => {
      
      const parsedResult = ParseResult.ArrayFormatter.formatErrorSync(result);

      const descriptionError = pipe(
        parsedResult,
        Array.findFirst(v => Array.contains(v.path, "description")),
        Option.map(v => v.message),
        Option.getOrUndefined
      );

      const measurmentValueError = pipe(
        parsedResult,
        Array.findFirst(v => Array.contains(v.path, "measurementValue")),
        Option.map(v => v.message),
        Option.getOrUndefined
      );

      const measurementUnitError = pipe(
        parsedResult,
        Array.findFirst(v => Array.contains(v.path, "measurementUnit")),
        Option.map(v => v.message),
        Option.getOrUndefined
      );

      return {
        formData: incomingData,
        errors: {
            description: descriptionError,
            measurementValue: measurmentValueError,
            measurementUnit: measurementUnitError
        }
      } satisfies AddIngredientState
    },
    onRight: () => {
      // TODO: call repository
      redirect("/recipes/1/edit");
    }
  })

}

export default addIngredient;
