import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RecipeBookComponent } from './components/recipe-book/recipe-book.component'
import { ShoppingListComponent } from './components/shopping-list/shopping-list/shopping-list.component'

const routes: Routes = [
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
  },
  {
    path: 'recipe',
    component: RecipeBookComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
