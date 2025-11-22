import crypto from "crypto";
import { Array, Option } from "effect";

import MacroNutrients from "@/domain/MacroNutrients";
import MacroNutrientsId from "@/domain/MacroNutrientsId";
import Recipe from "@/domain/Recipe";
import { BROCCOLI_RISOTTO_ID, BRUSSELS_SPROUT_ID, CHICKEN_FATTOUSH_ID, CHILAQUILES_ID, CREAMY_ONION_ID, ORANGE_BEEF_ID, POTATO_CHIPS_ID, SHRIMP_VEGGIE_ID } from "@/domain/RecipeRepo/Ids.mock";
import {
  CHICKEN_FATTOUSH_INGREDIENTS,
  CHILAQUILES_INGREDIENTS,
  CREAMYONIONSOUP_INGREDIENTS,
} from "@/domain/RecipeRepo/Ingredient.mock";
import { CHICKEN_FATTOUSH_INSTRUCTIONS, CHILAQUILES_INSTRUCTIONS, CREAMY_ONION_INSTRUCTIONS } from "@/domain/RecipeRepo/StepInstruction.mock";

const CHILAQUILES_RECIPE = Recipe.make({
  id: CHILAQUILES_ID,
  classification: "Breakfast",
  name: "Chilaquiles",
  slug: "chilaquiles",
  macros: MacroNutrients.make({
    id: MacroNutrientsId.make(crypto.randomUUID()),
    recipeId: CHILAQUILES_ID,
    calories: 356,
    protein: 14.8,
    carbohydrates: 37,
    fat: 17.4
  }),
  headnote: Option.some(`Chilaquiles are essentially corn tortilla pieces sautéed in a little oil,\
then simmered with salsa, cheese, beans, and eggs—although what your chilaquiles include is up to you.\
This version uses tangy green tomatillos instead of red salsa.`),
  ingredients: CHILAQUILES_INGREDIENTS,
  instructions: CHILAQUILES_INSTRUCTIONS
});

const CREAMYONIONSOUP_RECIPE = Recipe.make({
  id: CREAMY_ONION_ID,
  classification: "Soup",
  name: "Creamy Onion Soup",
  slug: "creamy-onion-soup",
  macros: MacroNutrients.make({
    id: MacroNutrientsId.make(crypto.randomUUID()),
    recipeId: CREAMY_ONION_ID,
    calories: 226,
    protein: 27.9,
    carbohydrates: 8.1,
    fat: 10.6
  }),
  headnote: Option.some(`This light and creamy onion soup gets its texture from oat or almond milk.\
Or, if you want a more indulgent treat, you could stir in a little half-and-half at the end to enrich the\
soup. Either way, this oniony soup is delicious and satisfying, especially with its roasted onion rings on\
top. Impress your friends, impress yourself.`),
  ingredients: CREAMYONIONSOUP_INGREDIENTS,
  instructions: CREAMY_ONION_INSTRUCTIONS
});


const CHICKENFATTOUSH_RECIPE = Recipe.make({
  id: CHICKEN_FATTOUSH_ID,
  classification: "Salad",
  name: "Grilled-Chicken Fattoush Salad",
  slug: "grilled-chicken-fattoush-salad",
  macros: MacroNutrients.make({
    id: MacroNutrientsId.make(crypto.randomUUID()),
    recipeId: CHICKEN_FATTOUSH_ID,
    calories: 329,
    protein: 29,
    carbohydrates: 23.5,
    fat: 14.1
  }),
  headnote: Option.some(`Traditional fattoush salad is the Mediterranean equivalent of a Caesar salad,\
but with fried pita chunks instead of croutons and an olive-oil-based dressing instead of a creamy dressing.\
In our lighter version, the pita is cut into thin strips and toasted rather than fried, and the dressing is\
bursting with tangy lemon and sumac, which is one of our favorite spices (and not just because we love the\
deep red color).`),
  ingredients: CHICKEN_FATTOUSH_INGREDIENTS,
  instructions: CHICKEN_FATTOUSH_INSTRUCTIONS
});

const ORANGEBEEF_RECIPE = Recipe.make({
  id: ORANGE_BEEF_ID,
  classification: "Meat",
  name: "Orange Beef Stir-fry",
  slug: "orange-beef-stir-fry",
  macros: MacroNutrients.make({
    id: MacroNutrientsId.make(crypto.randomUUID()),
    recipeId: ORANGE_BEEF_ID,
    calories: 304,
    protein: 17.9,
    carbohydrates: 30.5,
    fat: 13.1
  }),
  headnote: Option.none(),
  ingredients: Array.empty(),
  instructions: Array.empty(),
});

const SHRIMPVEGGIE_RECIPE = Recipe.make({
  id: SHRIMP_VEGGIE_ID,
  classification: "Seafood",
  name: "Shrimp & Veggie Fried Rice",
  slug: "shrimp-and-veggie-fried-rice",
  macros: MacroNutrients.make({
    id: MacroNutrientsId.make(crypto.randomUUID()),
    recipeId: SHRIMP_VEGGIE_ID,
    calories: 425,
    protein: 25.2,
    carbohydrates: 40.1,
    fat: 18.6
  }),
  headnote: Option.none(),
  ingredients: Array.empty(),
  instructions: Array.empty(),
});

const BROCCOLIRISOTTO_RECIPE = Recipe.make({
  id: BROCCOLI_RISOTTO_ID,
  classification: "Vegetarian",
  name: "Broccoli & Orzo Risotto",
  slug: "broccoli-and-orzo-risotto",
  macros: MacroNutrients.make({
    id: MacroNutrientsId.make(crypto.randomUUID()),
    recipeId: BROCCOLI_RISOTTO_ID,
    calories: 398,
    protein: 14.2,
    carbohydrates: 56,
    fat: 11.6
  }),
  headnote: Option.none(),
  ingredients: Array.empty(),
  instructions: Array.empty(),
});

const BRUSSELSSPROUT_RECIPE = Recipe.make({
  id: BRUSSELS_SPROUT_ID,
  classification: "Side-dish",
  name: "Sweet & Spicy Brussels Sprout",
  slug: "sweet-and-spicy-brussels-sprout",
  macros: MacroNutrients.make({
    id: MacroNutrientsId.make(crypto.randomUUID()),
    recipeId: BRUSSELS_SPROUT_ID,
    calories: 146,
    protein: 6,
    carbohydrates: 24,
    fat: 0
  }),
  headnote: Option.none(),
  ingredients: Array.empty(),
  instructions: Array.empty(),
});

const POTATOCHIPS_RECIPE = Recipe.make({
  id: POTATO_CHIPS_ID,
  classification: "Snacks",
  name: "Sweet Potato Chips with Onion Dip",
  slug: "sweet-potato-chips-with-onion-dip",
  macros: MacroNutrients.make({
    id: MacroNutrientsId.make(crypto.randomUUID()),
    recipeId: POTATO_CHIPS_ID,
    calories: 199,
    protein: 5.6,
    carbohydrates: 20.5,
    fat: 10.9
  }),
  headnote: Option.none(),
  ingredients: Array.empty(),
  instructions: Array.empty(),
});

const RECIPES_MOCK: Recipe[] = [
  CHILAQUILES_RECIPE,
  CREAMYONIONSOUP_RECIPE,
  CHICKENFATTOUSH_RECIPE,
  ORANGEBEEF_RECIPE,
  SHRIMPVEGGIE_RECIPE,
  BROCCOLIRISOTTO_RECIPE,
  BRUSSELSSPROUT_RECIPE,
  POTATOCHIPS_RECIPE,
]

export default RECIPES_MOCK;
