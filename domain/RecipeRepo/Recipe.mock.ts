import { Option } from "effect";
import Recipe from "@/domain/Recipe";

const RECIPES_MOCK: Recipe[] = [
  {
      id: "recipe-1",
      classification: "breakfast",
      name: "Chilaquiles",
      slug: "chilaquiles",
      macros: {
          id: "macro-1",
          recipeId: "recipe-1",
          calories: 356,
          protein: 14.8,
          carbohydrates: 37,
          fat: 17.4
      },
      headnote: Option.some(`Chilaquiles are essentially corn tortilla pieces sautéed in a little oil,\
then simmered with salsa, cheese, beans, and eggs—although what your chilaquiles include is up to you.\
This version uses tangy green tomatillos instead of red salsa.`),
      ingredients: Option.none(),
      instructions: Option.none(),
      groupedIngredients: Option.none()
  },
  {
      id: "recipe-2",
      classification: "soup",
      name: "Creamy Onion Soup",
      slug: "creamy-onion-soup",
      macros: {
          id: "macro-2",
          recipeId: "recipe-2",
          calories: 226,
          protein: 27.9,
          carbohydrates: 8.1,
          fat: 10.6
      },
      headnote: Option.some(`This light and creamy onion soup gets its texture from oat or almond milk.\
Or, if you want a more indulgent treat, you could stir in a little half-and-half at the end to enrich the\
soup. Either way, this oniony soup is delicious and satisfying, especially with its roasted onion rings on\
top. Impress your friends, impress yourself.`),
      ingredients: Option.none(),
      instructions: Option.none(),
      groupedIngredients: Option.none()
  },
  {
      id: "recipe-3",
      classification: "salad",
      name: "Grilled-Chicken Fattoush Salad",
      slug: "grilled-chicken-fattoush-salad",
      macros: {
          id: "macro-3",
          recipeId: "recipe-3",
          calories: 329,
          protein: 29,
          carbohydrates: 23.5,
          fat: 14.1
      },
      headnote: Option.some(`Traditional fattoush salad is the Mediterranean equivalent of a Caesar salad,\
but with fried pita chunks instead of croutons and an olive-oil-based dressing instead of a creamy dressing.\
In our lighter version, the pita is cut into thin strips and toasted rather than fried, and the dressing is\
bursting with tangy lemon and sumac, which is one of our favorite spices (and not just because we love the\
deep red color).`),
      ingredients: Option.none(),
      instructions: Option.none(),
      groupedIngredients: Option.none()
  },
  {
      id: "recipe-4",
      classification: "meat",
      name: "Orange Beef Stir-fry",
      slug: "orange-beef-stir-fry",
      macros: {
          id: "macro-4",
          recipeId: "recipe-4",
          calories: 304,
          protein: 17.9,
          carbohydrates: 30.5,
          fat: 13.1
      },
      headnote: Option.none(),
      ingredients: Option.none(),
      instructions: Option.none(),
      groupedIngredients: Option.none()
  },
  {
      id: "recipe-5",
      classification: "seafood",
      name: "Shrimp & Veggie Fried Rice",
      slug: "shrimp-and-veggie-fried-rice",
      macros: {
          id: "macro-5",
          recipeId: "recipe-5",
          calories: 425,
          protein: 25.2,
          carbohydrates: 40.1,
          fat: 18.6
      },
      headnote: Option.none(),
      ingredients: Option.none(),
      instructions: Option.none(),
      groupedIngredients: Option.none()
  },
  {
      id: "recipe-6",
      classification: "vegetarian",
      name: "Broccoli & Orzo Risotto",
      slug: "broccoli-and-orzo-risotto",
      macros: {
          id: "macro-6",
          recipeId: "recipe-6",
          calories: 398,
          protein: 14.2,
          carbohydrates: 56,
          fat: 11.6
      },
      headnote: Option.none(),
      ingredients: Option.none(),
      instructions: Option.none(),
      groupedIngredients: Option.none()
  },
  {
      id: "recipe-7",
      classification: "side-dish",
      name: "Sweet & Spicy Brussels Sprout",
      slug: "sweet-and-spicy-brussels-sprout",
      macros: {
          id: "macro-7",
          recipeId: "recipe-7",
          calories: 146,
          protein: 6,
          carbohydrates: 24,
          fat: 0
      },
      headnote: Option.none(),
      ingredients: Option.none(),
      instructions: Option.none(),
      groupedIngredients: Option.none()
  },
  {
      id: "recipe-8",
      classification: "snacks",
      name: "Sweet Potato Chips with Onion Dip",
      slug: "sweet-potato-chips-with-onion-dip",
      macros: {
          id: "macro-8",
          recipeId: "recipe-8",
          calories: 199,
          protein: 5.6,
          carbohydrates: 20.5,
          fat: 10.9
      },
      headnote: Option.none(),
      ingredients: Option.none(),
      instructions: Option.none(),
      groupedIngredients: Option.none()
  },
  {
      id: "recipe-9",
      classification: "condiment",
      name: "Tomatillo Salsa",
      slug: "tomatillo-salsa",
      macros: {          
          id: "macro-8",
          recipeId: "recipe-9",
          calories: 199,
          protein: 5.6,
          carbohydrates: 20.5,
          fat: 10.9
      },
      headnote: Option.none(),
      ingredients: Option.none(),
      instructions: Option.none(),
      groupedIngredients: Option.none()
  },
]

export default RECIPES_MOCK;
