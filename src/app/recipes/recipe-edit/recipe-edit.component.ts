import { Component, OnInit } from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { RecipeService } from './../recipe.service'
import { Recipe } from '../recipe-list/recipe.model'

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id: number
  editMode = false
  recipeForm: FormGroup

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.editMode = params['id'] != null
      this.initForm()
    })
  }

  private initForm() {
    let recipeName = ''
    let recipeImagePath = ''
    let recipeDescription = ''
    let recipeIngredients = new FormArray([])

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id)

      recipeName = recipe.name
      recipeImagePath = recipe.imagePath
      recipeDescription = recipe.description

      this.populateIngredients(recipe, recipeIngredients)
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients,
    })
  }

  private populateIngredients(recipe, recipeIngredients) {
    if (recipe['ingredients']) {
      for (let Ingredient of recipe.ingredients) {
        recipeIngredients.push(
          new FormGroup({
            name: new FormControl(Ingredient.name, Validators.required),
            amount: new FormControl(Ingredient.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/),
            ]),
          })
        )
      }
    }
  }

  onSubmit() {
    this.editMode
      ? this.recipeService.updateRecipe(this.id, this.recipeForm.value)
      : this.recipeService.addRecipe(this.recipeForm.value)

    this.router.navigate(['../'], { relativeTo: this.route })
  }

  getIngredientControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls
  }

  onAddIngredient() {
    ;(<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    )
  }

  onDeleteIngredient(index: number) {
    ;(<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }
}
