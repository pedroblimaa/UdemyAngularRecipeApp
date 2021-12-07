import { Component, Input } from '@angular/core'
import { ShoppingListService } from 'src/app/service/shopping-list/shopping-list.service'
import { Recipe } from '../recipe/recipe.model'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe

  constructor(private slService: ShoppingListService) {}

  addIncredients() {
    this.slService.setIngredients(this.recipe.ingredients)
  }
}
