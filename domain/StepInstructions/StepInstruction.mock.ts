import StepInstruction from "@/domain/StepInstructions/StepInstruction";

const INSTRUCTIONS_MOCK: StepInstruction[] = [
  /**
   * Recipe 1
   */
  {
      id: "instruction-1",
      recipeId: "recipe-1",
      stepNo: 1,
      instruction: `
       Make the tortilla strips: Preheat the oven to 375°F. 
      `
  },
  {
      id: "instruction-2",
      recipeId: "recipe-1",
      stepNo: 2,
      instruction: `
        Place each tortilla on a cutting board and use a pastry brush to evenly coat both sides with the olive oil.
      `
  },
  {
      id: "instruction-3",
      recipeId: "recipe-1",
      stepNo: 3,
      instruction: `
        Cut the tortillas into ½-inch-thick strips. Spread the strips out evenly on a rimmed baking sheet.
        Bake until golden and crisped, about 30 minutes, tossing them halfway through to evenly toast.
        (Baked tortillas can be stored for up to 5 days in an airtight container.)
      `
  },
  {
      id: "instruction-4",
      recipeId: "recipe-1",
      stepNo: 4,
      instruction: `
        Make the tomatillo salsa: Heat the olive oil in a medium (at least 4-quart) pot over medium-high heat.
        Add the onion and cook, stirring occasionally, until lightly golden, 2 minutes. Add the garlic and cook
        for 1 more minute.
      `
  },
  {
      id: "instruction-5",
      recipeId: "recipe-1",
      stepNo: 5,
      instruction: `
        Add the jalapeño, tomatillos, water, and salt to the pot. Use a potato masher or fork to carefully
        press down on the tomatillos to release some of their juices. Cook over medium heat until the
        tomatillos are completely broken down and the sauce is slightly thickened, about 5 minutes.
        Remove from the heat and cool slightly.
      `
  },
  {
      id: "instruction-6",
      recipeId: "recipe-1",
      stepNo: 6,
      instruction: `
        Make the eggs: Spray a large (12-inch) nonstick skillet with cooking spray and heat over medium heat.
        Crack the eggs into the skillet and cook until the whites are set but the yolks are still runny,
        2 to 3 minutes
      `
  },
  {
      id: "instruction-7",
      recipeId: "recipe-1",
      stepNo: 7,
      instruction: `
        Assemble the chilaquiles: Place the salsa in a large (12-inch) nonstick skillet and warm over
        medium-low heat until sputtering, 2 to 3 minutes. Add the tortilla strips and toss to coat.
      `
  },
  {
      id: "instruction-8",
      recipeId: "recipe-1",
      stepNo: 8,
      instruction: `
        Divide the tortilla mixture among 4 plates. Use a spatula to transfer 1 fried egg to top each plate,
        then spoon approximately ½ cup of the beans on each plate. Garnish each serving with 1 tablespoon
        each of the red onion, avocado, and cilantro leaves.
      `
  },
  /**
   * Recipe 2
   */
  {
    id: "instruction-9",
    recipeId: "recipe-2",
    stepNo: 1,
    instruction: `
      Sauté the onions: Chop 6 of the onions (to make about 6 cups of chopped onions).
    `
  },
  {
    id: "instruction-10",
    recipeId: "recipe-2",
    stepNo: 2,
    instruction: `
      Heat 1 tablespoon of the olive oil in a large (at least 6-quart) soup pot over high heat.
      Add the chopped onions, the thyme leaves, 1½ teaspoons of the salt, and the pepper. Cook,
      stirring, until the onions begin to soften, about 10 minutes.
    `
  },
  {
    id: "instruction-11",
    recipeId: "recipe-2",
    stepNo: 3,
    instruction: `
      Reduce the heat to low and continue to cook the onions until they are golden and caramelized,
      stirring often to prevent them from burning and sticking to the pot, adding 1 to 2 tablespoons
      of water as needed. This should take 30 to 35 minutes.
    `
  },
  {
    id: "instruction-12",
    recipeId: "recipe-2",
    stepNo: 4,
    instruction: `
      Roast the onion rings: Preheat the oven to 375°F.
    `
  },
  {
    
    id: "instruction-13",
    recipeId: "recipe-2",
    stepNo: 5,
    instruction: `
      Peel the remaining onion and cut it into four ½-inch rounds. Line a baking sheet with parchment
      paper. Brush both sides of the onion rounds with the remaining 1 tablespoon olive oil and season
      generously with salt and pepper; scatter on the thyme sprigs. Roast the onion rounds until tender
      and golden, 30 to 35 minutes. Discard the thyme sprigs.
    `
  },
  {
    
    id: "instruction-14",
    recipeId: "recipe-2",
    stepNo: 6,
    instruction: `
      Make it soup: Add the broth to the pot with the onions, then add the butter and remaining ½ teaspoon
      salt. Bring the soup to a boil over high heat, reduce the heat to medium. and simmer until the onions
      have absorbed a bit of the liquid, about 10 minutes.
    `
  },
  {
    id: "instruction-15",
    recipeId: "recipe-2",
    stepNo: 7,
    instruction: `
      Add the milk and stir to incorporate, then use an immersion blender to puree until smooth (or transfer in batches to a stand
      blender or food processor), 30 to 45 seconds. Season to taste with more salt and pepper.
    `
  },
  {    
    id: "instruction-16",
    recipeId: "recipe-2",
    stepNo: 8,
    instruction: `
      Serve the soup: Divide the soup among 4 bowls, top each bowl with a roasted onion round, then garnish with
      the remaining thyme leaves. Serve hot.
    `
  }
]

export default INSTRUCTIONS_MOCK;
