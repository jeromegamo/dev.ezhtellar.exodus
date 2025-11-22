import { Schema } from "effect";

const StepInstructionId = Schema.String.pipe(Schema.brand("StepInstructionId"));

type StepInstructionId = Schema.Schema.Type<typeof StepInstructionId>;

export default StepInstructionId;
