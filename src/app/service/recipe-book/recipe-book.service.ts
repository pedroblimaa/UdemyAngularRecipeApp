import { EventEmitter, Injectable } from '@angular/core'
import { Recipe } from 'src/app/components/recipe-book/recipe/recipe.model'
import { AmountType } from 'src/app/shared/ingredient/amout-type'
import { Ingredient } from 'src/app/shared/ingredient/ingredient.model'

@Injectable({
  providedIn: 'root',
})
export class RecipeBookService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [new Ingredient('Meat', 1, AmountType.Unit), new Ingredient('French Fries', 20, AmountType.Unit)]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [new Ingredient('Buns', 2, AmountType.Unit), new Ingredient('Meat', 1, AmountType.Unit)]
    ),
  ]

  constructor() {}

  getRecipes(): Recipe[] {
    return this.recipes.slice()
  }
}
