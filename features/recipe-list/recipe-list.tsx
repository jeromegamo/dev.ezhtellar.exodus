import { Button } from "@/components/ui/button";
import RecipeCard from "@/features/recipe-card/recipe-card";
import { RECIPE_LIST_ITEMS } from "@/features/recipe-list/recipe-list.viewModel";
import { Array } from "effect";
import { LucidePlus } from "lucide-react";
import Link from "next/link";

const RecipeList = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-xl">Recipe List</h1>
        <Button size="sm" asChild>
          <Link href="/recipes/1/edit">
            <LucidePlus />
          </Link>
        </Button>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {Array.map(RECIPE_LIST_ITEMS, (item, index) => (
          <RecipeCard key={index} recipeItem={item} />
        ))}
      </div>
    </div>
  )
}

export default RecipeList;
