import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiKey = '8c84e4ad4e9543c9ae7b9390d3bb4d46';
  private baseUrl = 'https://api.spoonacular.com/recipes';

  public static readonly RECIPE_CATEGORIES = [
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

  constructor(private http: HttpClient) {}

  getAllRecipes(type?: string): Observable<any> {
    const params: any = {
      apiKey: this.apiKey,
      number: '100'
    };

    if (type) {
      params.type = type;
    }

    return this.http.get(`${this.baseUrl}/complexSearch`, { params });
  }

  getRecipeDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/information`, {
      params: {
        apiKey: this.apiKey
      }
    });
  }
}
