import { Option, String } from "effect";
import { Array } from "effect";
import { LucideSquarePen } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment, PropsWithChildren } from "react";

import { Button } from "@/components/ui/button";
import GroupedIngredient from "@/domain/GroupedIngredient";
import Ingredient from "@/domain/Ingredient";
import Recipe from "@/domain/Recipe";

export type RecipeSingleProps = {
  recipe: Option.Option<Recipe>
}

const RecipeSingle = ({
  recipe: maybeRecipe
}: RecipeSingleProps) => {
  
  if (Option.isNone(maybeRecipe))
  {
    notFound();
  }

  const ingredients = maybeRecipe.pipe(
    Option.map(recipe => recipe.ingredients),
    Option.map(Array.groupBy(ingredient => ingredient._tag))
  )

  const getIngredientItem = (ingredient: Ingredient) => (
    <li key={ingredient.id} className="lowercase">
      {ingredient.measurement.pipe(
        Option.map(m => `${m.value} ${m._tag === "AmountMeasurement" ? String.empty : m.unit} `),
        Option.getOrElse(() => String.empty)
      )} 
      {ingredient.description}
      {ingredient.qualifier.pipe(
        Option.map(q => `, ${q}`),
        Option.getOrElse(() => String.empty)
      )}
    </li>
  )

  const getGroupedIngredients = (grouped: GroupedIngredient) => (
    <Fragment key={grouped.id}>
      <h2 className="mt-4 text-xl font-semibold tracking-tight">{grouped.description}</h2>
      <ul className="ml-2 [&>li]:mt-2">
        {Array.map(grouped.ingredients, getIngredientItem)}
      </ul>
    </Fragment>
  )
 
  return maybeRecipe.pipe(
    Option.andThen(recipe => (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h1 className="flex-1 text-4xl font-extrabold tracking-tight text-balance">
          {recipe.name}
        </h1>
        <Button asChild>
          <Link href={`/recipes/${recipe.slug}/edit`}>
            <LucideSquarePen />
          </Link>
        </Button>
      </div>
      <p className="mt-2">
        {recipe.headnote.pipe(Option.getOrElse(() => String.empty))}
      </p>
      <h2 className="mt-6 text-3xl font-semibold tracking-tight">Ingredients</h2>
      <ul className="ml-2 [&>li]:mt-2">
      </ul>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight">Instructions</h2>

      <ol className="ml-6 list-decimal [&>li]:mt-2">
      </ol>
    </div>
    )),
    Option.getOrNull,
  )
}

export default RecipeSingle;

const Em = ({ children }: PropsWithChildren) => {
  return (  
    <span className="font-semibold">{children}</span>
  )
}
