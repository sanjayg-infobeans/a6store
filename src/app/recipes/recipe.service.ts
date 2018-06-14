import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'First Recipe', 
            'First Recipe Description', 
            'http://images.media-allrecipes.com/userphotos/960x960/3758842.jpg',
            [
                new Ingredient('Pepper', 1),
                new Ingredient('Onion', 11)
            ]),
        new Recipe('Second Recipe', 
            'Second Recipe Description', 
            'https://cdn3.tmbi.com/secure/RMS/attachments/37/300x300/exps25157_FM153592B03_18_12b.jpg', 
            [
                new Ingredient('Bread', 2),
                new Ingredient('Pepper', 7)
            ]),
        new Recipe('Third Recipe', 
            'Third Recipe Description', 
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg', 
            [
                new Ingredient('Cream', 4),
                new Ingredient('Cheese', 1)
            ]),
        new Recipe('Forth Recipe', 
            'Forth Recipe Description', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBTerf2TZtzD7avgQwK8Om81HY11Wye_jRVAOtaEkmSyOonu-e', 
            [
                new Ingredient('Sweetcorn', 6),
                new Ingredient('Black olives', 2)
            ]),
        new Recipe('Fifth Recipe', 
            'Fifth Recipe Description', 
            'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg', 
            [
                new Ingredient('Pepper', 2),
                new Ingredient('Onion', 3),
                new Ingredient('mushroom', 5)
            ])
      ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}