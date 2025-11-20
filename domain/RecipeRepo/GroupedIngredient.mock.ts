import GroupedIngredient from "@/domain/GroupedIngredient";
import Ingredient from "@/domain/Ingredients";
import { Option } from "effect"

const GROUPED_INGREDIENTS: GroupedIngredient[] = [
  GroupedIngredient.make({
      id: "grouped-ingredient-1",
      recipeId: "recipe-1",
      description: "For the tomatillo salsa",
      ingredients: [
        Ingredient.make({
            id: "ingredient-100",
            recipeId: "recipe-1",
            description: "Olive Oil",
            measurement: Option.some({
              value: "1" ,
              unit: "tablespoon"
            })
        }),
        Ingredient.make({
            id: "ingredient-101",
            recipeId: "recipe-1",
            description: "Large Onion",
            qualifier: Option.some("diced"),
            multiplier: 1
        }),
        Ingredient.make({
            id: "ingredient-102",
            recipeId: "recipe-1",
            description: "Garlic Cloves",
            qualifier: Option.some("sliced"),
            multiplier: 2
        }),
        Ingredient.make({
            id: "ingredient-103",
            recipeId: "recipe-1",
            description: "Medium Jalapeño",
            qualifier: Option.some("diced (and seede, if you want less heat)"),
            multiplier: 1
        }),
        Ingredient.make({
            id: "ingredient-104",
            recipeId: "recipe-1",
            description: "Canned Whole Tomatillos",
            qualifier: Option.some("Drained, Halved"),
            measurement: Option.some({
              value: "1 1/2",
              unit: "cup"
            }),
        }),
        Ingredient.make({
            id: "ingredient-105",
            recipeId: "recipe-1",
            description: "Water",
            measurement: Option.some({
              value: "1/3",
              unit: "cup"
            })
        }),
        Ingredient.make({
            id: "ingredient-106",
            recipeId: "recipe-1",
            description: "Salt",
            measurement: Option.some({
              value: "1/2",
              unit: "teaspoon"
            })
        }),
        Ingredient.make({
            id: "ingredient-107",
            recipeId: "recipe-1",
            description: "Cilantro",
            qualifier: Option.some("Fresh, Chopped"),
            measurement: Option.some({
              value: "1/2",
              unit: "cup"
            })
        })
      ]
  })
]

export default GROUPED_INGREDIENTS;
