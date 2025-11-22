import { Schema } from "effect";

const GroupedIngredientId = Schema.String.pipe(Schema.brand("GroupedIngredientId"));

type GroupedIngredientId = Schema.Schema.Type<typeof GroupedIngredientId>;

export default GroupedIngredientId;
