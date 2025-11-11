import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RecipeListItem } from "@/features/recipe-list/recipe-list.viewModel"
import Link from "next/link"

export type RecipeCardProps = {
  recipeItem: RecipeListItem  
}

const RecipeCard = ({
  recipeItem
}: RecipeCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {recipeItem.name}
        </CardTitle>
        <CardDescription>
          <Badge>{recipeItem.mealType}</Badge>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-x-1 gap-y-2">
          <div className="flex flex-col">
            <div className="text-xs uppercase text-right">
              Calories
            </div>
            <div className="text-right">
              {recipeItem.calories}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-xs uppercase text-right">
              Protein
            </div>
            <div className="text-right">
              {recipeItem.protein}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-xs uppercase text-right">
              Carbohydrates
            </div>
            <div className="text-right">
              {recipeItem.carbohydrates}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-xs uppercase text-right">
              Fat
            </div>
            <div className="text-right">
              {recipeItem.fat}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={`/recipes/${recipeItem.slug}`}>
            View
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default RecipeCard;
