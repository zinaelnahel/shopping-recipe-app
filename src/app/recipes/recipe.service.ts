
import {  Injectable } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService {


  private recipes: Recipe[]=[
        new Recipe('Schnitzel', 
        'This is simply a test',
         'https://images.unsplash.com/photo-1560611588-163f295eb145?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', 
         [new Ingredient('Meat', 1), new Ingredient ( ' French fries ', 20) ]),
        new Recipe('Burger', 'This is simply a test', 
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1299&q=80', 
        [ new Ingredient ( 'Buns',2 ), new Ingredient ( 'Meat',2 )])
      ];
  constructor(private slService : ShoppingListService ){}
   getRecipes(){
     return this.recipes.slice();
   } 
   getRecipe(index:number )  {
     return this.recipes[index];
   }
   addIngredientsToShoppingList(ingredients:Ingredient[]){
     this.slService.addIngredients(ingredients);
   }
}