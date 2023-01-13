import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { RecipeService } from '../recipes/recipe.service'
import { Recipe } from '../recipes/recipe-list/recipe.model'
import { map, tap } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  recipesUrl: string =
    'https://angular-course-a164d-default-rtdb.firebaseio.com/recipes.json'

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes()

    return this.http
      .put<Recipe[]>(this.recipesUrl, recipes)
      .subscribe((response) => {
        console.log(response)
      })
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(this.recipesUrl).pipe(
      map((recipes) => {
        return this.normalizeRecipesIngredients(recipes)
      }),
      tap((recipes) => {
        this.recipeService.setRecipes(recipes)
      })
    )
  }

  normalizeRecipesIngredients = (recipes: any) => {
    return recipes.map((recipe: Recipe) => {
      return {
        ...recipe,
        ingredients: recipe.ingredients ? recipe.ingredients : [],
      }
    })
  }
}
