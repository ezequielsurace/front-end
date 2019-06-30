import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

ingredients: Ingredient[] = [
  new Ingredient('banana',10),
  new Ingredient('flour',4)

];

  constructor() { }

  ngOnInit() {
  }

  addIngredient(ingredient : Ingredient) {
    this.ingredients.push(ingredient);
  }

}
