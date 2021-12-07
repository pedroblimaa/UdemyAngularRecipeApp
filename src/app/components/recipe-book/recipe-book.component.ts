import { Component, OnInit } from '@angular/core'
import { RecipeBookService } from 'src/app/service/recipe-book/recipe-book.service'
import { Recipe } from './recipe/recipe.model'

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss'],
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: Recipe = null

  constructor(private recipeService: RecipeBookService) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: any) => {
      this.selectedRecipe = recipe
    })
  }
}
