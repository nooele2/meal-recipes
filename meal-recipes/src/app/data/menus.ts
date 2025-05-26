import { Menu } from "../models/menu.model";

export const MENUS: Menu[] = [
  // --- Pregnant Woman (Category ID: 1) ---
  {
    id: 1,
    categoryId: 1,
    name: 'Iron-Rich Spinach Omelette',
    description: 'High in iron and folic acid for expecting mothers.',
    imageUrl: '/img/Sample.jpg'
  },
  {
    id: 2,
    categoryId: 1,
    name: 'Salmon & Asparagus with Quinoa',
    description: 'Rich in Omega-3s and folate, essential for fetal development.',
    imageUrl: '/img/Sample.jpg'
  },

  // --- Halal (Category ID: 2) ---
  {
    id: 11,
    categoryId: 2,
    name: 'Halal Chicken Biryani',
    description: 'Aromatic and flavorful rice dish with certified halal chicken.',
    imageUrl: '/img/Sample.jpg'  },
  {
    id: 12,
    categoryId: 2,
    name: 'Lentil Soup (Adas Shorba)',
    description: 'A comforting and nutritious halal-friendly lentil soup.',
    imageUrl: '/img/Sample.jpg'
  },

  // --- Kids (Category ID: 3) ---
  {
    id: 21,
    categoryId: 3,
    name: 'Veggie Loaded Mac & Cheese',
    description: 'A hidden veggie twist on a kid-favorite, packed with nutrients.',
    imageUrl: '/img/Sample.jpg'
  },
  {
    id: 22,
    categoryId: 3,
    name: 'Mini Chicken & Veggie Meatballs',
    description: 'Bite-sized, healthy meatballs perfect for little hands.',
    imageUrl: '/img/Sample.jpg'
  },

  // --- Diabetic Friendly (Category ID: 4) ---
  {
    id: 31,
    categoryId: 4,
    name: 'Grilled Salmon with Roasted Broccoli',
    description: 'A low-carb, high-protein meal, excellent for blood sugar management.',
    imageUrl: '/img/Sample.jpg'
  },
  {
    id: 32,
    categoryId: 4,
    name: 'Chicken & Vegetable Stir-Fry',
    description: 'A quick and colorful meal with lean protein and plenty of non-starchy vegetables.',
    imageUrl: '/img/Sample.jpg'
  },

  // --- Vegetarian (Category ID: 5) ---
  {
    id: 41,
    categoryId: 5,
    name: 'Chickpea & Spinach Curry',
    description: 'A hearty and flavorful plant-based curry, rich in protein and fiber.',
    imageUrl: '/img/Sample.jpg'
  },
  {
    id: 42,
    categoryId: 5,
    name: 'Vegetarian Lentil Shepherd\'s Pie',
    description: 'A comforting and wholesome vegetarian take on a classic comfort food.',
    imageUrl: '/img/Sample.jpg'
  },

  // --- Asian Food (Category ID: 6) ---
  {
    id: 51,
    categoryId: 6,
    name: 'Chicken Pad Thai',
    description: 'A classic Thai stir-fried noodle dish with sweet, sour, and savory flavors.',
    imageUrl: '/img/Sample.jpg'
  },
  {
    id: 52,
    categoryId: 6,
    name: 'Japanese Miso Soup',
    description: 'A light and comforting Japanese soup, perfect as a starter.',
    imageUrl: '/img/Sample.jpg'
  },

  // --- European Food (Category ID: 7) ---
  {
    id: 61,
    categoryId: 7,
    name: 'Classic Spaghetti Bolognese',
    description: 'A rich and savory Italian meat sauce served over spaghetti.',
    imageUrl: '/img/Sample.jpg'
  },
  {
    id: 62,
    categoryId: 7,
    name: 'French Onion Soup',
    description: 'A comforting and flavorful soup with caramelized onions and cheesy croutons.',
    imageUrl: '/img/Sample.jpg'
  },

  // --- Low Carb (Category ID: 8) ---
  {
    id: 71,
    categoryId: 8,
    name: 'Keto Chicken & Avocado Salad',
    description: 'A quick and satisfying low-carb salad, high in healthy fats and protein.',
    imageUrl: '/img/Sample.jpg'
  },
  {
    id: 72,
    categoryId: 8,
    name: 'Zucchini Noodles with Pesto & Cherry Tomatoes',
    description: 'A light and fresh low-carb alternative to pasta.',
    imageUrl: '/img/Sample.jpg'
  },

  // --- High Protein (Category ID: 9) ---
  {
    id: 81,
    categoryId: 9,
    name: 'Lean Steak with Sweet Potato & Broccoli',
    description: 'A balanced meal packed with protein and complex carbs for muscle building.',
    imageUrl: '/img/Sample.jpg'
  },
  {
    id: 82,
    categoryId: 9,
    name: 'Greek Yogurt & Berry Protein Bowl',
    description: 'A quick and easy high-protein breakfast or snack.',
    imageUrl: '/img/Sample.jpg'
  },

  // --- Quick & Easy (Category ID: 10) ---
  {
    id: 91,
    categoryId: 10,
    name: 'One-Pan Lemon Herb Chicken & Veggies',
    description: 'Minimal cleanup and maximum flavor in under 30 minutes.',
    imageUrl: '/img/Sample.jpg'
  },
  {
    id: 92,
    categoryId: 10,
    name: 'Avocado Toast with Egg',
    description: 'A classic quick breakfast or snack, elevated with a fried egg.',
    imageUrl: '/img/Sample.jpg'
  },
];

