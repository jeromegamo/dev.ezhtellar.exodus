import { PropsWithChildren } from "react";

const RecipeSingle = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold tracking-tight text-balance">
        Chilaquiles
      </h1>
      <h2 className="mt-6 text-3xl font-semibold tracking-tight">Ingredients</h2>
      <ul className="ml-2 [&>li]:mt-2">
        <li>4 6-inch corn tortillas</li>
        <li>2 teaspoons olive oil</li>
        <li>4 large eggs</li>
        <li>Tomatillo Salsa (recipe follows)</li>
        <li>2 cups Black Bean Filling, warmed, or any favorite beans</li>
        <li>¼ cup chopped red onion</li>
        <li>¼ cup diced avocado</li>
        <li>¼ cup fresh cilantro leaves</li>
      </ul>

      <h2 className="mt-4 text-xl font-semibold tracking-tight">FOR THE TOMATILLO SALSA</h2>
      <ul className="ml-2 [&>li]:mt-2">
        <li>1 tablespoon olive oil</li>
        <li>1 large onion, diced</li>
        <li>2 garlic cloves, sliced</li>
        <li>1 medium jalapeño, diced (and seeded, if you want less heat)</li>
        <li>1½ cups drained canned whole tomatillos, halved (or see Chef’s Tip</li>
        <li>for roasting fresh tomatillos)</li>
        <li>⅓ cup water</li>
        <li>½ teaspoon salt</li>
        <li>⅓ cup chopped fresh cilantro</li>
      </ul>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight">Instructions</h2>
      <ol className="ml-6 list-decimal [&>li]:mt-2">
        <li>
          Make the tortilla strips: Preheat the oven to 375°F.
        </li>
        <li>
          Place each tortilla on a cutting board and use a pastry brush to
        evenly coat both sides with the olive oil.
        </li>
        <li>
          Cut the tortillas into ½-inch-thick strips. Spread the strips out
        evenly on a rimmed baking sheet. Bake until golden and crisped,
        about 30 minutes, tossing them halfway through to evenly toast.
        (Baked tortillas can be stored for up to 5 days in an airtight
        container.)
        </li>
        <li> Make the tomatillo salsa: Heat the olive oil in a medium (at least 4-
        quart) pot over medium-high heat. Add the onion and cook, stirring
        occasionally, until lightly golden, 2 minutes. Add the garlic and cook
        for 1 more minute.
        </li>
        <li> Add the jalapeño, tomatillos, water, and salt to the pot. Use a
        potato masher or fork to carefully press down on the tomatillos to
        release some of their juices. Cook over medium heat until the
        tomatillos are completely broken down and the sauce is slightly
        thickened, about 5 minutes. Remove from the heat and cool slightly.
        </li>
        <li> Make the eggs: Spray a large (12-inch) nonstick skillet with
        cooking spray and heat over medium heat. Crack the eggs into the
        skillet and cook until the whites are set but the yolks are still runny, 2
        to 3 minutes.
        </li>
        <li> Assemble the chilaquiles: Place the salsa in a large (12-inch)
        nonstick skillet and warm over medium-low heat until sputtering, 2 to
        3 minutes. Add the tortilla strips and toss to coat.
        </li>
        <li>
          Divide the tortilla mixture among 4 plates. Use a spatula to transfer
        1 fried egg to top each plate, then spoon approximately ½ cup of the
        beans on each plate. Garnish each serving with 1 tablespoon each of
        the red onion, avocado, and cilantro leaves.
        </li>
      </ol>
    </div>
  )
}

export default RecipeSingle;

const Em = ({ children }: PropsWithChildren) => {
  return (  
    <span className="font-semibold">{children}</span>
  )
}
