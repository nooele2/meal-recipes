import { Component } from '@angular/core';
import { RECIPES } from '../../data/recipes';
import { Recipe } from '../../models/recipe.model';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-recipes',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './category-recipes.component.html',
  styleUrl: './category-recipes.component.css'
})
export class CategoryRecipesComponent {
  recipes: Recipe[] = RECIPES;
  filteredRecipes: Recipe[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const menuId = +this.route.snapshot.paramMap.get('menu')!;
    this.filteredRecipes = this.recipes.filter(r => r.menuId === menuId);
  }
}
