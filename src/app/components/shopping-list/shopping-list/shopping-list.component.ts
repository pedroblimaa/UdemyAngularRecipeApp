import { Component, OnInit } from '@angular/core'
import { ShoppingListService } from 'src/app/service/shopping-list/shopping-list.service'
import { AmountType } from 'src/app/shared/ingredient/amout-type'
import { Ingredient } from '../../../shared/ingredient/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = []

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients()
    this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients
    })
  }
}
