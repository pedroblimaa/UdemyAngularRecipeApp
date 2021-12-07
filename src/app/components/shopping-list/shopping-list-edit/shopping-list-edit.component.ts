import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core'
import { ShoppingListService } from 'src/app/service/shopping-list/shopping-list.service'
import { AmountType } from 'src/app/shared/ingredient/amout-type'
import { Ingredient } from 'src/app/shared/ingredient/ingredient.model'

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInput
  @ViewChild('amountInput', { static: false }) amountInput

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredient() {
    const name = this.nameInput.nativeElement.value
    const amount = this.amountInput.nativeElement.value
    const ingredient = new Ingredient(name, amount, AmountType.Cup)
    this.shoppingListService.addIngredient(ingredient)
  }

  ngOnInit(): void {}
}
