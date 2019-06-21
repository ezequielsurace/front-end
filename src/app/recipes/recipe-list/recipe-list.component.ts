import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Banana Cake','This is a test', 'https://sugarspunrun.com/wp-content/uploads/2018/03/Banana-Cake-Recipe-1-of-1-7.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
