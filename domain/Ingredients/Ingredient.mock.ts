import { Option } from "effect";
import Ingredient from "@/domain/Ingredients/Ingredients";
import GroupedIngredient from "@/domain/GroupedIngredient/GroupedIngredient";

const INGREDIENT_MOCK: Ingredient[] = [
  /**
   * Recipe 1
   */
  Ingredient.make({
      id: "ingredient-1",
      recipeId: "recipe-1",
      description: "6-inch corn tortillas",
      multiplier: 4,
  }),
  Ingredient.make({
    id: "ingredient-2",
    recipeId: "recipe-1",
    description: "Olive Oil",
    measurement: Option.some({
        value: "2",
        unit: "teaspoon",
    })
  }),
  Ingredient.make({
    id: "ingredient-3",
    recipeId: "recipe-1",
    description: "large eggs",
    multiplier: 4,
  }),
  Ingredient.make({
    id: "ingredient-4",
    recipeId: "recipe-1",
    description: "Tomatillo Salsa"
  }),
  Ingredient.make({
    id: "ingredient-5",
    recipeId: "recipe-1",
    description: "Black Bean Filling, warmed, or any favorite beans",
    measurement: Option.some({
      value: "2",
      unit: "cup"
    })
  }),
  Ingredient.make({
    id: "ingredient-6",
    recipeId: "recipe-1",
    description: "Red Onion",
    qualifier: Option.some("chopped"),
    measurement: Option.some({
      value: "1/4",
      unit: "cup"
    }),
  }),
  Ingredient.make({
    id: "ingredient-7",
    recipeId: "recipe-1",
    description: "Avocado",
    qualifier: Option.some("diced"),
    measurement: Option.some({
      value: "1/4",
      unit: "cup"
    }),
  }),
  Ingredient.make({
    id: "ingredient-8",
    recipeId: "recipe-1",
    description: "Fresh Cilantro Leaves",
    measurement: Option.some({
      value: "1/4",
      unit: "cup"
    }),
  }),
  /**
   * Recipe 2
   */
  Ingredient.make({
    id: "ingredient-9",
    recipeId: "recipe-2",
    description: "Large Onions",
    multiplier: 7,
  }),
  Ingredient.make({
    id: "ingredient-10",
    recipeId: "recipe-2",
    description: "Olive Oil",
    measurement: Option.some({
      value: "2",
      unit: "tablespoon"
    })
  }),
  Ingredient.make({
    id: "ingredient-11",
    recipeId: "recipe-2",
    description: "Thyme Leaves",
    qualifier: Option.some("plus more for garnish"),
    measurement: Option.some({
      value: "1",
      unit: "tablespoon"
    })
  }),
  Ingredient.make({
    id: "ingredient-12",
    recipeId: "recipe-2",
    description: "Kosher salt",
    qualifier: Option.some("plus more for seasoning"),
    measurement: Option.some({
      value: "2",
      unit: "teaspoon"
    })
  }),
  Ingredient.make({
    id: "ingredient-13",
    recipeId: "recipe-2",
    description: "Ground Black Pepper",
    qualifier: Option.some("plus more for seasoning"),
    measurement: Option.some({
      value: "1/2",
      unit: "teaspoon"
    })
  }),
  Ingredient.make({
      id: "ingredient-14",
      recipeId: "recipe-2",
      description: "Thyme Sprigs",
      qualifier: Option.some("fresh"),
      multiplier: 0
  }),
  Ingredient.make({
      id: "ingredient-15",
      recipeId: "recipe-2",
      description: "Low-Sodium Chicken Broth",
      measurement: Option.some({
        value: "4",
        unit: "cup"
      })
  }),
  Ingredient.make({
      id: "ingredient-16",
      recipeId: "recipe-2",
      description: "Unsalter Butter",
      measurement: Option.some({
        value: "1",
        unit: "teaspoon"
      })
  }),
  Ingredient.make({
      id: "ingredient-17",
      recipeId: "recipe-2",
      description: "Plain Unsweetened Oat",
      measurement: Option.some({
        value: "1",
        unit: "cup"
      })
  }),
  /**
   * Recipe 3
   */
  Ingredient.make({
      id: "ingredient-18",
      recipeId: "recipe-3",
      description: "Zest of Lemon",
      multiplier: 1
  }),
  Ingredient.make({
      id: "ingredient-19",
      recipeId: "recipe-3",
      description: "Lemon Juice",
      qualifier: Option.some("fresh"),
      measurement: Option.some({
        value: "1",
        unit: "tablespoon"
      })
  }),
]

export default INGREDIENT_MOCK;
