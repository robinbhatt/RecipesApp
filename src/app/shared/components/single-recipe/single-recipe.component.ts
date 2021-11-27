import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SingleRecipeModalComponent } from '../single-recipe-modal/single-recipe-modal.component';

@Component({
  selector: 'single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {

  constructor(public dialog: MatDialog ) { }

  ngOnInit(): void {  }

  @Input() singleRecipe :any; // Recipe
  @Input() recipeData :any; // Recipe

  viewRecipe(){
    this.dialog.open(SingleRecipeModalComponent,
      { data:this.singleRecipe,
        disableClose:true})
  }
}
