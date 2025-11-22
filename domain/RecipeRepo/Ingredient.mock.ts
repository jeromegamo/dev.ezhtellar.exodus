import crypto from "crypto"
import { Array, Option, pipe } from "effect";

import GroupedIngredient from "@/domain/GroupedIngredient";
import GroupedIngredientId from "@/domain/GroupedIngredientId";
import Ingredient from "@/domain/Ingredient";
import IngredientId from "@/domain/IngredientId";
import { AmountMeasurement, VolumeMeasurement, WeightMeasurement } from "@/domain/Measurement";
import { CHICKEN_FATTOUSH_ID, CHILAQUILES_ID, CREAMY_ONION_ID } from "@/domain/RecipeRepo/Ids.mock";

export const CHILAQUILES_INGREDIENTS = Array.make(
  Ingredient.make({
    id: IngredientId.make(crypto.randomUUID()),
    recipeId: CHILAQUILES_ID,
    description: "6-inch corn tortillas",
    qualifier: Option.none(),
    measurement: Option.some(AmountMeasurement.make({
      value: "1",
      unit: "Each"
    }))
  }),
  Ingredient.make({
    id: IngredientId.make(crypto.randomUUID()),
    recipeId: CHILAQUILES_ID,
    description: "Olive Oil",
    qualifier: Option.none(),
    measurement: Option.some(VolumeMeasurement.make({
      value: "2",
      unit: "Teaspoon",
    }))
  }),
  Ingredient.make({
    id: IngredientId.make(crypto.randomUUID()),
    recipeId: CHILAQUILES_ID,
    description: "large eggs",
    qualifier: Option.none(),
    measurement: Option.some(AmountMeasurement.make({
      value: "4",
      unit: "Each"
    }))
  }),
  Ingredient.make({
    id: IngredientId.make(crypto.randomUUID()),
    recipeId: CHILAQUILES_ID,
    description: "Black Bean Filling, warmed, or any favorite beans",
    qualifier: Option.none(),
    measurement: Option.some(VolumeMeasurement.make({
      value: "2",
      unit: "Cup"
    }))
  }),
  Ingredient.make({
    id: IngredientId.make(crypto.randomUUID()),
    recipeId: CHILAQUILES_ID,
    description: "Red Onion",
    qualifier: Option.some("chopped"),
    measurement: Option.some(VolumeMeasurement.make({
      value: "1/4",
      unit: "Cup"
    })),
  }),
  Ingredient.make({
    id: IngredientId.make(crypto.randomUUID()),
    recipeId: CHILAQUILES_ID,
    description: "Avocado",
    qualifier: Option.some("diced"),
    measurement: Option.some(VolumeMeasurement.make({
      value: "1/4",
      unit: "Cup"
    })),
  }),
  Ingredient.make({
    id: IngredientId.make(crypto.randomUUID()),
    recipeId: CHILAQUILES_ID,
    description: "Fresh Cilantro Leaves",
    qualifier: Option.none(),
    measurement: Option.some(VolumeMeasurement.make({
      value: "1/4",
      unit: "Cup"
    })),
  }),
  GroupedIngredient.make({
    id: GroupedIngredientId.make(crypto.randomUUID()),
    recipeId: CHILAQUILES_ID,
    description: "Tomatillo Salsa",
    ingredients: Array.make(
      Ingredient.make({
        id: IngredientId.make(crypto.randomUUID()),
        recipeId: CHILAQUILES_ID,
        description: "Olive Oil",
        qualifier: Option.none(),
        measurement: Option.some(VolumeMeasurement.make({
          value: "1",
          unit: "Tablespoon"
        }))
      }),
      Ingredient.make({
        id: IngredientId.make(crypto.randomUUID()),
        recipeId: CHILAQUILES_ID,
        description: "Large Onion",
        qualifier: Option.some("Diced"),
        measurement: Option.some(AmountMeasurement.make({
          value: "1",
          unit: "Each"
        }))
      }),
      Ingredient.make({
        id: IngredientId.make(crypto.randomUUID()),
        recipeId: CHILAQUILES_ID,
        description: "Garlic Cloves",
        qualifier: Option.some("Sliced"),
        measurement: Option.some(AmountMeasurement.make({
          value: "2",
          unit: "Each"
        }))
      }),
      Ingredient.make({
        id: IngredientId.make(crypto.randomUUID()),
        recipeId: CHILAQUILES_ID,
        description: "Medium Jalapeno",
        qualifier: Option.some("Diced (and seeded, if you want less heat)"),
        measurement: Option.some(AmountMeasurement.make({
          value: "1",
          unit: "Each"
        }))
      }),
      Ingredient.make({
        id: IngredientId.make(crypto.randomUUID()),
        recipeId: CHILAQUILES_ID,
        description: "Canned Whole Tomatillos",
        qualifier: Option.some("Drained, Halved"),
        measurement: Option.some(VolumeMeasurement.make({
          value: "1 1/2",
          unit: "Cup"
        }))
      }),
      Ingredient.make({
        id: IngredientId.make(crypto.randomUUID()),
        recipeId: CHILAQUILES_ID,
        description: "Water",
        qualifier: Option.none(),
        measurement: Option.some(VolumeMeasurement.make({
          value: "1/3",
          unit: "Cup"
        }))
      }),
      Ingredient.make({
        id: IngredientId.make(crypto.randomUUID()),
        recipeId: CHILAQUILES_ID,
        description: "Salt",
        qualifier: Option.none(),
        measurement: Option.some(VolumeMeasurement.make({
          value: "1/2",
          unit: "Teaspoon"
        }))
      }),
    )
  }),
)


export const CREAMYONIONSOUP_INGREDIENTS = Array.make(
  Ingredient.make({
    id: IngredientId.make(crypto.randomUUID()),
    recipeId: CREAMY_ONION_ID,
    description: "Large Onions",
    qualifier: Option.none(),
    measurement: Option.some(AmountMeasurement.make({
      value: "7",
      unit: "Each"
    }))
  }),
  Ingredient.make({
    id: IngredientId.make(crypto.randomUUID()),
    recipeId: CREAMY_ONION_ID,
    description: "Olive Oil",
    qualifier: Option.none(),
    measurement: Option.some(VolumeMeasurement.make({
      value: "2",
      unit: "Tablespoon"
    }))
  }),
  Ingredient.make({
    id: IngredientId.make(crypto.randomUUID()),
    recipeId: CREAMY_ONION_ID,
    description: "Thyme Leaves",
    qualifier: Option.some("plus more for garnish"),
    measurement: Option.some(VolumeMeasurement.make({
      value: "1",
      unit: "Tablespoon"
    }))
  }),
  Ingredient.make({
    id: IngredientId.make(crypto.randomUUID()),
    recipeId: CREAMY_ONION_ID,
    description: "Kosher salt",
    qualifier: Option.some("plus more for seasoning"),
    measurement: Option.some(VolumeMeasurement.make({
      value: "2",
      unit: "Teaspoon"
    }))
  }),
  Ingredient.make({
    id: IngredientId.make(crypto.randomUUID()),
    recipeId: CREAMY_ONION_ID,
    description: "Ground Black Pepper",
    qualifier: Option.some("plus more for seasoning"),
    measurement: Option.some(VolumeMeasurement.make({
      value: "1/2",
      unit: "Teaspoon"
    }))
  }),
  Ingredient.make({
    id: IngredientId.make(crypto.randomUUID()),
    recipeId: CREAMY_ONION_ID,
    description: "Thyme Sprigs",
    qualifier: Option.some("fresh"),
    measurement: Option.some(AmountMeasurement.make({
      value: "1",
      unit: "Each"
    }))
  }),
  Ingredient.make({
    id: IngredientId.make(crypto.randomUUID()),
    recipeId: CREAMY_ONION_ID,
    description: "Low-Sodium Chicken Broth",
    qualifier: Option.none(),
    measurement: Option.some(VolumeMeasurement.make({
      value: "4",
      unit: "Cup"
    }))
  }),
  Ingredient.make({
    id: IngredientId.make(crypto.randomUUID()),
    recipeId: CREAMY_ONION_ID,
    description: "Unsalter Butter",
    qualifier: Option.none(),
    measurement: Option.some(VolumeMeasurement.make({
      value: "1",
      unit: "Teaspoon"
    }))
  }),
  Ingredient.make({
    id: IngredientId.make(crypto.randomUUID()),
    recipeId: CREAMY_ONION_ID,
    description: "Plain Unsweetened Oat",
    qualifier: Option.none(),
    measurement: Option.some(VolumeMeasurement.make({
      value: "1",
      unit: "Cup"
    }))
  }),
)


export const CHICKEN_FATTOUSH_INGREDIENTS = Array.make(
  GroupedIngredient.make({
    id: GroupedIngredientId.make(crypto.randomUUID()),
    recipeId: CHICKEN_FATTOUSH_ID,
    description: "For The Chicken",
    ingredients: [
      Ingredient.make({
        id: IngredientId.make(crypto.randomUUID()),
        recipeId: CHICKEN_FATTOUSH_ID,
        description: "Zest of Lemon",
        qualifier: Option.none(),
        measurement: Option.some(AmountMeasurement.make({
          value: "1",
          unit: "Each"
        }))
      }),
      Ingredient.make({
        id: IngredientId.make(crypto.randomUUID()),
        recipeId: CHICKEN_FATTOUSH_ID,
        description: "Fresh Lemon Juice",
        qualifier: Option.none(),
        measurement: Option.some(VolumeMeasurement.make({
          value: "1",
          unit: "Tablespoon"
        }))
      }),
      Ingredient.make({
        id: IngredientId.make(crypto.randomUUID()),
        recipeId: CHICKEN_FATTOUSH_ID,
        description: "Olive Oil",
        qualifier: Option.none(),
        measurement: Option.some(VolumeMeasurement.make({
          value: "1",
          unit: "Tablespoon"
        }))
      }),
      Ingredient.make({
        id: IngredientId.make(crypto.randomUUID()),
        recipeId: CHICKEN_FATTOUSH_ID,
        description: "Garlic Cloves",
        qualifier: Option.some("Smashed"),
        measurement: Option.some(AmountMeasurement.make({
          value: "1",
          unit: "Each"
        }))
      }),
      Ingredient.make({
        id: IngredientId.make(crypto.randomUUID()),
        recipeId: CHICKEN_FATTOUSH_ID,
        description: "Ground Sumac",
        qualifier: Option.none(),
        measurement: Option.some(VolumeMeasurement.make({
          value: "1/2",
          unit: "Teaspoon"
        }))
      }),
      Ingredient.make({
        id: IngredientId.make(crypto.randomUUID()),
        recipeId: CHICKEN_FATTOUSH_ID,
        description: "Ground Cumin",
        qualifier: Option.none(),
        measurement: Option.some(VolumeMeasurement.make({
          value: "1/2",
          unit: "Teaspoon"
        }))
      }),
      Ingredient.make({
        id: IngredientId.make(crypto.randomUUID()),
        recipeId: CHICKEN_FATTOUSH_ID,
        description: "Kosher Salt",
        qualifier: Option.none(),
        measurement: Option.some(VolumeMeasurement.make({
          value: "1/4",
          unit: "Teaspoon"
        }))
      }),
      Ingredient.make({
        id: IngredientId.make(crypto.randomUUID()),
        recipeId: CHICKEN_FATTOUSH_ID,
        description: "Chicken Breasts",
        qualifier: Option.some("Boneless, Skinless"),
        measurement: Option.some(WeightMeasurement.make({
          value: "1",
          unit: "Pound"
        }))
      }),
    ]
  }),
  GroupedIngredient.make({
    id: GroupedIngredientId.make(crypto.randomUUID()),
    recipeId: CHICKEN_FATTOUSH_ID,
    description: "For The Pita Strips",
    ingredients: [
      Ingredient.make({
        id: IngredientId.make(crypto.randomUUID()),
        recipeId: CHICKEN_FATTOUSH_ID,
        description: "Pita Bread",
        qualifier: Option.some("Split into 2 rounds"),
        measurement: Option.some(AmountMeasurement.make({
          value: "1",
          unit: "Each"
        }))
      }),
      Ingredient.make({
        id: IngredientId.make(crypto.randomUUID()),
        recipeId: CHICKEN_FATTOUSH_ID,
        description: "Olive Oil Cooking Spray",
        qualifier: Option.none(),
        measurement: Option.some(AmountMeasurement.make({
          value: "1",
          unit: "Each"
        }))
      }),
      Ingredient.make({
        id: IngredientId.make(crypto.randomUUID()),
        recipeId: CHICKEN_FATTOUSH_ID,
        description: "Kosher Salt",
        qualifier: Option.none(),
        measurement: Option.some(VolumeMeasurement.make({
          value: "1/4",
          unit: "Teaspoon"
        }))
      })
    ]
  }),
  GroupedIngredient.make({
    id: GroupedIngredientId.make(crypto.randomUUID()),
    recipeId: CHICKEN_FATTOUSH_ID,
    description: "For The Salad",
    ingredients: [
      Ingredient.make({
        id: IngredientId.make(crypto.randomUUID()),
        recipeId: CHICKEN_FATTOUSH_ID,
        description: "Heads Romaine Lettuce",
        qualifier: Option.some("Chopped"),
        measurement: Option.some(AmountMeasurement.make({
          value: "2",
          unit: "Each"
        }))
      }),
      Ingredient.make({
        id: IngredientId.make(crypto.randomUUID()),
        recipeId: CHICKEN_FATTOUSH_ID,
        description: "Vine-ripened Medium Tomatoes",
        qualifier: Option.some("Cut Into Wedges"),
        measurement: Option.some(AmountMeasurement.make({
          value: "3",
          unit: "Each"
        }))
      }),
      Ingredient.make({
        id: IngredientId.make(crypto.randomUUID()),
        recipeId: CHICKEN_FATTOUSH_ID,
        description: "Red Cabbage",
        qualifier: Option.some("Finely Shredded"),
        measurement: Option.some(VolumeMeasurement.make({
          value: "1",
          unit: "Cup"
        }))
      }),
      Ingredient.make({
        id: IngredientId.make(crypto.randomUUID()),
        recipeId: CHICKEN_FATTOUSH_ID,
        description: "Persion Cucumbers",
        qualifier: Option.some("Chopped"),
        measurement: Option.some(AmountMeasurement.make({
          value: "4",
          unit: "Each"
        }))
      }),
      Ingredient.make({
        id: IngredientId.make(crypto.randomUUID()),
        recipeId: CHICKEN_FATTOUSH_ID,
        description: "Fresh Parsley Leaves",
        qualifier: Option.some("Rinsed, and Dried"),
        measurement: Option.some(AmountMeasurement.make({
          value: "4",
          unit: "Each"
        }))
      }),
      Ingredient.make({
        id: IngredientId.make(crypto.randomUUID()),
        recipeId: CHICKEN_FATTOUSH_ID,
        description: "Small Red Onion",
        qualifier: Option.some("Thinly Sliced"),
        measurement: Option.some(AmountMeasurement.make({
          value: "1/2",
          unit: "Each"
        }))
      })
    ]
  }),
)

const INGREDIENTS_MOCK: (Ingredient | GroupedIngredient)[]  = pipe(
  Array.make(
    CHILAQUILES_INGREDIENTS,
    CREAMYONIONSOUP_INGREDIENTS,
    CHICKEN_FATTOUSH_INGREDIENTS
  ),
  Array.flatten
)

export default INGREDIENTS_MOCK;
