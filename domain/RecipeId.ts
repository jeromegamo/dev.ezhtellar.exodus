import { Schema } from "effect";

const RecipeId = Schema.String.pipe(Schema.brand("RecipeId"));

type RecipeId = Schema.Schema.Type<typeof RecipeId>

export default RecipeId;
