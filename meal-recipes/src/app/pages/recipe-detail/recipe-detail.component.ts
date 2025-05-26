import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: any;
  instructions: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getRecipeDetails(+id).subscribe({
        next: (data) => {
          this.recipe = data;
          this.instructions = data.analyzedInstructions?.[0]?.steps || [];
        },
        error: (err) => {
          console.error('Error fetching recipe details:', err);
        }
      });
    }
  }
  goBack(): void {
    this.location.back(); // ⬅️ built-in go back
  }
}
