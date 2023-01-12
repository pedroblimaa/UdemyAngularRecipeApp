import { Injectable } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'

import { Recipe } from './recipe-list/recipe.model'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>()

  constructor(private slService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      2,
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ]

  getRecipes() {
    return this.recipes.slice()
  }

  getRecipe(id: number) {
    return this.recipes.find((recipe) => recipe.id === id)
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.changeIngredients(ingredients)
  }

  addRecipe(recipe: Recipe) {
    recipe.id = this.recipes.length + 1
    this.recipes.push(recipe)
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(id: number, recipe: Recipe) {
    const index = this.recipes.findIndex((recipe) => id === recipe.id)
    recipe.id = id
    this.recipes[index] = recipe
    this.recipesChanged.next(this.recipes.slice())

    console.log(this.recipes)
  }

  deleteRecipe(id: number) {
    const index = this.recipes.findIndex((recipe) => id === recipe.id)
    this.recipes.splice(index, 1)
    this.recipesChanged.next(this.recipes.slice())
  }
}
