import { EventEmitter, Injectable } from '@angular/core'
import { AmountType } from 'src/app/shared/ingredient/amout-type'
import { Ingredient } from 'src/app/shared/ingredient/ingredient.model'

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>()

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5, AmountType.Unit),
    new Ingredient('Tomatoes', 10, AmountType.Unit),
    new Ingredient('Butter', 2, AmountType.SoupSpoon),
  ]

  constructor() {}

  getIngredients(): Ingredient[] {
    return this.ingredients.slice()
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  setIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
}
