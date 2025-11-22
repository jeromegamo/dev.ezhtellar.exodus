import { Schema } from "effect";

const MacroNutrientsId = Schema.String.pipe(Schema.brand("MacroNutrientsId"));

type MacroNutrientsId = Schema.Schema.Type<typeof MacroNutrientsId>;

export default MacroNutrientsId;
