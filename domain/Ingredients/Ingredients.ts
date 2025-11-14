import { PartialProps } from "@/lib/type-utils"
import { Data, Option } from "effect"

export interface Measurement {
  value: string
  unit: string
}

interface Ingredient {
  id: string
  _tag: "Ingredient"
  recipeId: string
  description: string
  qualifier: Option.Option<string>
  multiplier: number
  measurement: Option.Option<Measurement>
}

type Args = PartialProps<
  Omit<Ingredient, '_tag'>,
  'qualifier' | 'multiplier' | 'measurement'
>

const Ingredient = {
  make: (args: Args) => {
    return Data.tagged<Ingredient>("Ingredient")({
        id: args.id,
        recipeId: args.recipeId,
        description: args.description,
        qualifier: args.qualifier ?? Option.none(),
        multiplier: args.multiplier ?? 0,
        measurement: args.measurement ?? Option.none()
    })
  }
}

export default Ingredient;
