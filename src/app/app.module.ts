import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ShoppingListComponent } from './components/shopping-list/shopping-list/shopping-list.component'
import { ShoppingListEditComponent } from './components/shopping-list/shopping-list-edit/shopping-list-edit.component'
import { RecipeListComponent } from './components/recipe-book/recipe-list/recipe-list.component'
import { RecipeItemComponent } from './components/recipe-book/recipe-item/recipe-item.component'
import { RecipeDetailComponent } from './components/recipe-book/recipe-detail/recipe-detail.component'
import { HeaderComponent } from './components/header/header.component'
import { RecipeBookComponent } from './components/recipe-book/recipe-book.component'
import { DropdownDirective } from './shared/directive/dropdown.directive'

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipeBookComponent,
    DropdownDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
