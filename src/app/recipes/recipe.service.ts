import { EventEmitter } from '@angular/core';

import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'First Recipe', 
            'First Recipe Description', 
            'http://images.media-allrecipes.com/userphotos/960x960/3758842.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 11)
            ]),
        new Recipe('Second Recipe', 
        'Second Recipe Description', 
        'https://cdn3.tmbi.com/secure/RMS/attachments/37/300x300/exps25157_FM153592B03_18_12b.jpg', 
        [
            new Ingredient('Bread', 4),
            new Ingredient('Souse', 15)
        ])
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}