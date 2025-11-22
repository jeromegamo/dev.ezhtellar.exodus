import { Option,Schema } from "effect";

import IngredientRepo from "@/domain/IngredientRepo/IngredientRepo";
import EditIngredientFrom from "@/features/ingredient/edit-ingredient-form";


const Person = Schema.Struct({
  name: Schema.String,
  // a schema that decodes a string to a number
  age: Schema.optionalWith(Schema.NumberFromString, { as: "Option" })
})

const EditIngredientsPage = async (props: PageProps<'/recipes/[slug]/edit/ingredient'>) => {
  const { slug } = await props.params;
  const ingredient = await IngredientRepo.findIngredient(slug)

  const resultEncode = Schema.encodeSync(Person)({ name: "Alice", age: Option.some(30) })
  console.log("encode: ", resultEncode);
  const resultDecode = Schema.decodeSync(Person)(resultEncode);
  console.log("decode: ", resultDecode);

  return (
    <EditIngredientFrom  ingredient={Option.getOrUndefined(ingredient)} />
  )
}

export default EditIngredientsPage;
