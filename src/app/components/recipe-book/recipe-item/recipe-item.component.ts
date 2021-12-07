import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { RecipeBookService } from 'src/app/service/recipe-book/recipe-book.service'
import { RecipeBookComponent } from '../recipe-book.component'
import { Recipe } from '../recipe/recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe = null

  constructor(private recipeService: RecipeBookService) {}

  goToDetail() {
    this.recipeService.recipeSelected.emit(this.recipe)
  }

  ngOnInit(): void {}
}
