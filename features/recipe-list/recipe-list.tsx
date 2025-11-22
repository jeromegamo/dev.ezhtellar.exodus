import { Array } from "effect";
import { LucidePlus } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Recipe from "@/domain/Recipe";
import RecipeCard from "@/features/recipe-card/recipe-card";

export type RecipeListProps = {
  recipeListItems: Recipe[]
}

const RecipeList = ({
  recipeListItems
}: RecipeListProps) => {

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
        {Array.map(recipeListItems, (item, index) => (
          <RecipeCard key={index} recipeItem={item} />
        ))}
      </div>
    </div>
  )
}

export default RecipeList;
