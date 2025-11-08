export interface RecipeListItem {
  mealType:
    | "breakfast"
    | "soup"
    | "salad"
    | "meat"
    | "seafood"
    | "vegetarian"
    | "side-dish"
    | "snacks"
  name: string
  calories: number
  protein: number
  carbohydrates: number
  fat: number
}

export const RECIPE_LIST_ITEMS: RecipeListItem[] = [
  {
    mealType: "breakfast",
    name: "Chilaquiles",
    calories: 356,
    protein: 14.8,
    carbohydrates: 37,
    fat: 17.4
  },
  {
    mealType: "soup",
    name: "Creamy Onion Soup",
    calories: 226,
    protein: 27.9,
    carbohydrates: 8.1,
    fat: 10.6
  },
  {
      mealType: "salad",
      name: "Grilled-Chicken Fattoush Salad",
      calories: 329,
      protein: 29,
      carbohydrates: 23.5,
      fat: 14.1
  },
  {
      mealType: "meat",
      name: "Orange Beef Stir-fry",
      calories: 304,
      protein: 17.9,
      carbohydrates: 30.5,
      fat: 13.1
  },
  {
      mealType: "seafood",
      name: "Shrimp & Veggie Fried Rice",
      calories: 425,
      protein: 25.2,
      carbohydrates: 40.1,
      fat: 18.6
  },
  {
      mealType: "vegetarian",
      name: "Broccoli & Orzo Risotto",
      calories: 398,
      protein: 14.2,
      carbohydrates: 56,
      fat: 11.6
  },
  {
      mealType: "side-dish",
      name: "Sweet & Spicy Brussels Sprout",
      calories: 146,
      protein: 6,
      carbohydrates: 24,
      fat: 0
  },
  {
      mealType: "snacks",
      name: "Sweet Potato Chips with Onion Dip",
      calories: 199,
      protein: 5.6,
      carbohydrates: 20.5,
      fat: 10.9
  }
]
