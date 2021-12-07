import { Component, OnInit } from '@angular/core'
import { RecipeBookService } from 'src/app/service/recipe-book/recipe-book.service'
import { Recipe } from '../recipe/recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = []

  constructor(private recipeService: RecipeBookService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes()
  }
}
