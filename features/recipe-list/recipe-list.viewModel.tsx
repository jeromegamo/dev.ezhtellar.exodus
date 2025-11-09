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
  slug: string
  calories: number
  protein: number
  carbohydrates: number
  fat: number
}

export const RECIPE_LIST_ITEMS: RecipeListItem[] = [
  {
    mealType: "breakfast",
    name: "Chilaquiles",
    slug: "chilaquiles",
    calories: 356,
    protein: 14.8,
    carbohydrates: 37,
    fat: 17.4
  },
  {
    mealType: "soup",
    name: "Creamy Onion Soup",
    slug: "creamy-onion-soup",
    calories: 226,
    protein: 27.9,
    carbohydrates: 8.1,
    fat: 10.6
  },
  {
      mealType: "salad",
      name: "Grilled-Chicken Fattoush Salad",
      slug: "grilled-chicken-fattoush-salad",
      calories: 329,
      protein: 29,
      carbohydrates: 23.5,
      fat: 14.1
  },
  {
      mealType: "meat",
      name: "Orange Beef Stir-fry",
      slug: "orange-beef-stir-fry",
      calories: 304,
      protein: 17.9,
      carbohydrates: 30.5,
      fat: 13.1
  },
  {
      mealType: "seafood",
      name: "Shrimp & Veggie Fried Rice",
      slug: "shrimp-and-veggie-fried-rice",
      calories: 425,
      protein: 25.2,
      carbohydrates: 40.1,
      fat: 18.6
  },
  {
      mealType: "vegetarian",
      name: "Broccoli & Orzo Risotto",
      slug: "broccoli-and-orzo-risotto",
      calories: 398,
      protein: 14.2,
      carbohydrates: 56,
      fat: 11.6
  },
  {
      mealType: "side-dish",
      name: "Sweet & Spicy Brussels Sprout",
      slug: "sweet-and-spicy-brussels-sprout",
      calories: 146,
      protein: 6,
      carbohydrates: 24,
      fat: 0
  },
  {
      mealType: "snacks",
      name: "Sweet Potato Chips with Onion Dip",
      slug: "sweet-potato-chips-with-onion-dip",
      calories: 199,
      protein: 5.6,
      carbohydrates: 20.5,
      fat: 10.9
  }
]
