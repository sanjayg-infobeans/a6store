import { Component, OnInit } from '@angular/core';
import { Recipe } from "src/app/recipes/recipe-list/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('First Recipe', 'First Recipe Description', 'http://images.media-allrecipes.com/userphotos/960x960/3758842.jpg'),
    new Recipe('Second Recipe', 'Second Recipe Description', 'https://cdn3.tmbi.com/secure/RMS/attachments/37/300x300/exps25157_FM153592B03_18_12b.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
