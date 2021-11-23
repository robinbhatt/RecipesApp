import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RecipeModalComponent } from '../recipe-modal/recipe-modal.component';


@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(public dialog: MatDialog ) { }

  ngOnInit(): void {  }

  @Input() singleRecipe :any; // Recipe
  @Input() recipeData :any; // Recipe

  viewRecipe(){
    this.dialog.open(RecipeModalComponent,
      { data:this.singleRecipe,
        disableClose:true})
  }

}
