import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryRecipesComponent } from './pages/category-recipes/category-recipes.component';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:category', component: CategoryRecipesComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
