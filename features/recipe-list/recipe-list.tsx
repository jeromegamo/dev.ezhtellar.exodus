import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RECIPE_LIST_ITEMS } from "@/features/recipe-list/recipe-list.viewModel";
import { Array } from "effect";


const RecipeList = () => {
  return (
    <div>
      <h1>Recipe List</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Type</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Calories</TableHead>
            <TableHead className="text-right">Protein</TableHead>
            <TableHead className="text-right">Carbs</TableHead>
            <TableHead className="text-right">Fat</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.map(RECIPE_LIST_ITEMS, (item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium capitalize">{item.mealType}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell className="text-right">{item.calories}</TableCell>
              <TableCell className="text-right">{item.protein}</TableCell>
              <TableCell className="text-right">{item.carbohydrates}</TableCell>
              <TableCell className="text-right">{item.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default RecipeList;
