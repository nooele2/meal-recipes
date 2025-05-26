import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipes: any[] = [];
  categories: string[] = [
    'main course',
    'side dish',
    'dessert',
    'appetizer',
    'salad',
    'bread',
    'breakfast',
    'soup',
    'beverage',
    'sauce',
    'marinade',
    'fingerfood',
    'snack',
  ];
  selectedCategory: string = '';

  selectCategory(category: string) {
  this.selectedCategory = category;
  this.loadRecipes(category);
}

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.loadRecipes();
  }

  loadRecipes(category: string = '') {
    this.recipeService.getAllRecipes(category).subscribe({
      next: (res) => {
        console.log('API response:', res);
        if (res && res.results) {
          this.recipes = res.results;
        } else {
          this.recipes = [];
          console.warn('No recipes found in response.');
        }
      },
      error: (err) => {
        console.error('Error fetching recipes:', err);
      }
    });
  }

  onCategoryChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.selectedCategory = select.value;
    this.loadRecipes(this.selectedCategory);
  }
}
