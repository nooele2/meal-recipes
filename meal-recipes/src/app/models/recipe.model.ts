export interface Recipe{
  id: number;
  menuId: number;
  title: string;
  description: string;
  imageUrl: string;
  ingredients: { name: string; quantity: string }[];
  steps: string[];
  cookingTime: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}
