/**
 * Make specific properties optional 
 *  type Recipe = {
 *    id: string
 *    recipeId: string
 *    description: string
 *    qualifier: Option.Option<string>
 *    multiplier: number
 *    measurement: Option.Option<Measurement>
 *  }
 *
 *  type RecipeWithOptionals = PartialProps<Recipe, 'qualifier' | 'multiplier' | 'measurement'>;
 *
 *  // output
 *  type RecipeWithOptionals = {
 *    id: string;
 *    recipeId: string;
 *    description: string;
 *    qualifier?: Option.Option<string>;
 *    multiplier?: number;
 *    measurement?: Option.Option<Measurement>;
 *  };
 */
export type PartialProps<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
