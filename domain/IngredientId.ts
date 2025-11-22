import { Schema } from "effect";


const IngredientId = Schema.String.pipe(Schema.brand("IngredientId"));

type IngredientId = Schema.Schema.Type<typeof IngredientId>;

export default IngredientId;
