import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://static01.nyt.com/images/2022/05/11/dining/06Apperex-polenta/merlin_204759390_6b518d19-ce2c-462e-bad4-d17d5d63d404-articleLarge.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://static01.nyt.com/images/2022/05/11/dining/06Apperex-polenta/merlin_204759390_6b518d19-ce2c-462e-bad4-d17d5d63d404-articleLarge.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
