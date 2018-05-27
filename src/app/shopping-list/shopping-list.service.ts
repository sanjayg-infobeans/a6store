import { EventEmitter } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

export class ShoppingListService {
    ingredientChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Mangos', 4),
        new Ingredient('Potatos', 40),
    ];

    getIngridients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        //console.log(ingredient);
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}