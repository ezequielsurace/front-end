import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

constructor(private shoppingListService: ShoppingListService) {}

recipeSelected = new EventEmitter<Recipe>();
  
private  recipes: Recipe[] = [
    new Recipe('Banana Cake',
    'This is a test', 
    'https://sugarspunrun.com/wp-content/uploads/2018/03/Banana-Cake-Recipe-1-of-1-7.jpg',
    [ new Ingredient('Banana', 2),
      new Ingredient('Milk', 250)
    ]
    )
  ];

  getRecipes() {
   return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }
}


