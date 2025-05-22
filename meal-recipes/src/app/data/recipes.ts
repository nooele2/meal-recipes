import { Recipe } from '../models/recipe.model';

export const RECIPES: Recipe[] = [

  // --- Pregnant Woman (Category ID: 1) ---
  {
    id: 1,
    categoryId: 1,
    title: 'Iron-Rich Spinach Omelette',
    description: 'High in iron and folic acid for expecting mothers.',
    imageUrl: 'assets/images/recipes/spinach-omelette.jpg',
    ingredients: [
      { name: 'Eggs', quantity: '2' },
      { name: 'Spinach', quantity: '1 cup' },
      { name: 'Olive oil', quantity: '1 tbsp' },
      { name: 'Feta cheese (optional)', quantity: '1/4 cup' }
    ],
    steps: [
      'Beat the eggs in a bowl.',
      'Stir in chopped spinach and optional feta.',
      'Heat olive oil in a non-stick pan over medium heat.',
      'Pour egg mixture into the pan and cook for 3-5 minutes, until set.',
      'Fold in half and serve warm.'
    ],
    cookingTime: '10 minutes',
    servings: 1,
    difficulty: 'Easy'
  },
  {
    id: 2,
    categoryId: 1,
    title: 'Salmon & Asparagus with Quinoa',
    description: 'Rich in Omega-3s and folate, essential for fetal development.',
    imageUrl: 'assets/images/recipes/salmon-asparagus-quinoa.jpg',
    ingredients: [
      { name: 'Salmon fillet', quantity: '150g' },
      { name: 'Asparagus spears', quantity: '6' },
      { name: 'Quinoa', quantity: '1/2 cup' },
      { name: 'Lemon', quantity: '1/2' },
      { name: 'Dill', quantity: '1 tbsp (fresh, chopped)' },
      { name: 'Olive oil', quantity: '1 tbsp' }
    ],
    steps: [
      'Cook quinoa according to package instructions.',
      'Toss asparagus with olive oil and roast at 200°C (400°F) for 10 minutes.',
      'Season salmon with salt, pepper, and a squeeze of lemon. Bake or pan-fry until cooked through.',
      'Serve salmon and asparagus over quinoa, garnished with fresh dill.'
    ],
    cookingTime: '25 minutes',
    servings: 1,
    difficulty: 'Medium'
  },

  // --- Halal (Category ID: 2) ---
  {
    id: 11,
    categoryId: 2,
    title: 'Halal Chicken Biryani',
    description: 'Aromatic and flavorful rice dish with certified halal chicken.',
    imageUrl: 'assets/images/recipes/chicken-biryani.jpg',
    ingredients: [
      { name: 'Halal Chicken Thighs', quantity: '500g' },
      { name: 'Basmati Rice', quantity: '2 cups' },
      { name: 'Onions', quantity: '2 (sliced)' },
      { name: 'Yogurt', quantity: '1/2 cup' },
      { name: 'Ginger-Garlic Paste', quantity: '2 tbsp' },
      { name: 'Biryani Masala', quantity: '2 tbsp' }
    ],
    steps: [
      'Marinate chicken with yogurt, ginger-garlic paste, and biryani masala for at least 30 minutes.',
      'Sauté sliced onions until golden brown.',
      'Layer marinated chicken, partially cooked rice, and fried onions in a large pot.',
      'Cook on low heat until chicken is tender and rice is fully cooked.',
      'Serve hot with raita.'
    ],
    cookingTime: '60 minutes',
    servings: 4,
    difficulty: 'Hard'
  },
  {
    id: 12,
    categoryId: 2,
    title: 'Lentil Soup (Adas Shorba)',
    description: 'A comforting and nutritious halal-friendly lentil soup.',
    imageUrl: 'assets/images/recipes/lentil-soup.jpg',
    ingredients: [
      { name: 'Red Lentils', quantity: '1 cup' },
      { name: 'Carrots', quantity: '1 (chopped)' },
      { name: 'Celery', quantity: '1 stalk (chopped)' },
      { name: 'Onion', quantity: '1 (chopped)' },
      { name: 'Vegetable Broth', quantity: '4 cups' },
      { name: 'Cumin', quantity: '1 tsp' }
    ],
    steps: [
      'Rinse lentils thoroughly.',
      'Sauté onion, carrots, and celery in a pot until softened.',
      'Add lentils, vegetable broth, and cumin. Bring to a boil, then simmer until lentils are tender.',
      'Blend partially or serve chunky. Season with salt and pepper.'
    ],
    cookingTime: '30 minutes',
    servings: 4,
    difficulty: 'Easy'
  },

  // --- Kids (Category ID: 3) ---
  {
    id: 21,
    categoryId: 3,
    title: 'Veggie Loaded Mac & Cheese',
    description: 'A hidden veggie twist on a kid-favorite, packed with nutrients.',
    imageUrl: 'assets/images/recipes/veggie-mac-cheese.jpg',
    ingredients: [
      { name: 'Macaroni', quantity: '1 cup' },
      { name: 'Milk', quantity: '1.5 cups' },
      { name: 'Cheddar Cheese', quantity: '1 cup (shredded)' },
      { name: 'Pureed Butternut Squash', quantity: '1/2 cup' },
      { name: 'Pureed Carrots', quantity: '1/4 cup' }
    ],
    steps: [
      'Cook macaroni according to package directions. Drain and set aside.',
      'In a saucepan, heat milk over medium heat. Add shredded cheese and stir until melted and smooth.',
      'Stir in butternut squash and carrot purees until well combined.',
      'Add cooked macaroni to the cheese sauce and mix well. Serve immediately.'
    ],
    cookingTime: '20 minutes',
    servings: 2,
    difficulty: 'Easy'
  },
  {
    id: 22,
    categoryId: 3,
    title: 'Mini Chicken & Veggie Meatballs',
    description: 'Bite-sized, healthy meatballs perfect for little hands.',
    imageUrl: 'assets/images/recipes/mini-meatballs.jpg',
    ingredients: [
      { name: 'Ground Chicken', quantity: '250g' },
      { name: 'Grated Zucchini', quantity: '1/4 cup' },
      { name: 'Grated Carrot', quantity: '1/4 cup' },
      { name: 'Breadcrumbs', quantity: '2 tbsp' },
      { name: 'Egg', quantity: '1' },
      { name: 'Tomato Sauce', quantity: 'for serving' }
    ],
    steps: [
      'Preheat oven to 180°C (350°F).',
      'In a bowl, combine ground chicken, zucchini, carrot, breadcrumbs, and egg. Mix well.',
      'Form into small, bite-sized meatballs.',
      'Bake for 15-20 minutes, or until cooked through.',
      'Serve with a side of tomato sauce for dipping.'
    ],
    cookingTime: '25 minutes',
    servings: 2,
    difficulty: 'Medium'
  },

  // --- Diabetic Friendly (Category ID: 4) ---
  {
    id: 31,
    categoryId: 4,
    title: 'Grilled Salmon with Roasted Broccoli',
    description: 'A low-carb, high-protein meal, excellent for blood sugar management.',
    imageUrl: 'assets/images/recipes/diabetic-salmon-broccoli.jpg',
    ingredients: [
      { name: 'Salmon Fillet', quantity: '150g' },
      { name: 'Broccoli Florets', quantity: '2 cups' },
      { name: 'Olive Oil', quantity: '1 tbsp' },
      { name: 'Garlic Powder', quantity: '1/2 tsp' },
      { name: 'Lemon Wedges', quantity: 'for serving' }
    ],
    steps: [
      'Preheat oven to 200°C (400°F).',
      'Toss broccoli with olive oil, salt, pepper, and garlic powder. Spread on a baking sheet.',
      'Roast broccoli for 15-20 minutes, or until tender-crisp.',
      'Season salmon with salt and pepper. Grill or pan-fry until cooked through.',
      'Serve salmon alongside roasted broccoli with a squeeze of fresh lemon.'
    ],
    cookingTime: '25 minutes',
    servings: 1,
    difficulty: 'Easy'
  },
  {
    id: 32,
    categoryId: 4,
    title: 'Chicken & Vegetable Stir-Fry',
    description: 'A quick and colorful meal with lean protein and plenty of non-starchy vegetables.',
    imageUrl: 'assets/images/recipes/diabetic-stir-fry.jpg',
    ingredients: [
      { name: 'Chicken Breast', quantity: '1 (sliced)' },
      { name: 'Broccoli', quantity: '1 cup (chopped)' },
      { name: 'Bell Peppers (various colors)', quantity: '1 cup (sliced)' },
      { name: 'Snow Peas', quantity: '1/2 cup' },
      { name: 'Soy Sauce (low sodium)', quantity: '2 tbsp' },
      { name: 'Ginger (grated)', quantity: '1 tsp' },
      { name: 'Garlic (minced)', quantity: '1 tsp' }
    ],
    steps: [
      'Heat a large wok or skillet over medium-high heat.',
      'Add a little oil and stir-fry chicken until cooked through. Remove from pan.',
      'Add vegetables to the pan and stir-fry until tender-crisp.',
      'Return chicken to the pan. Add soy sauce, ginger, and garlic. Toss to combine.',
      'Serve immediately, optionally with a small portion of brown rice.'
    ],
    cookingTime: '20 minutes',
    servings: 2,
    difficulty: 'Medium'
  },

  // --- Vegetarian (Category ID: 5) ---
  {
    id: 41,
    categoryId: 5,
    title: 'Chickpea & Spinach Curry',
    description: 'A hearty and flavorful plant-based curry, rich in protein and fiber.',
    imageUrl: 'assets/images/recipes/chickpea-spinach-curry.jpg',
    ingredients: [
      { name: 'Canned Chickpeas', quantity: '1 can (drained)' },
      { name: 'Fresh Spinach', quantity: '4 cups' },
      { name: 'Canned Diced Tomatoes', quantity: '1 can' },
      { name: 'Onion', quantity: '1 (chopped)' },
      { name: 'Garlic (minced)', quantity: '2 cloves' },
      { name: 'Ginger (grated)', quantity: '1 tbsp' },
      { name: 'Curry Powder', quantity: '2 tbsp' },
      { name: 'Coconut Milk', quantity: '1/2 can' }
    ],
    steps: [
      'Sauté onion, garlic, and ginger in a pot until fragrant.',
      'Add curry powder and cook for 1 minute.',
      'Stir in diced tomatoes, chickpeas, and coconut milk. Bring to a simmer.',
      'Add spinach and cook until wilted. Season to taste.',
      'Serve hot with rice or naan.'
    ],
    cookingTime: '30 minutes',
    servings: 4,
    difficulty: 'Easy'
  },
  {
    id: 42,
    categoryId: 5,
    title: 'Vegetarian Lentil Shepherd\'s Pie',
    description: 'A comforting and wholesome vegetarian take on a classic comfort food.',
    imageUrl: 'assets/images/recipes/lentil-shepherds-pie.jpg',
    ingredients: [
      { name: 'Brown Lentils', quantity: '1 cup (cooked)' },
      { name: 'Mixed Vegetables (peas, carrots, corn)', quantity: '2 cups' },
      { name: 'Vegetable Broth', quantity: '1 cup' },
      { name: 'Tomato Paste', quantity: '2 tbsp' },
      { name: 'Mashed Potatoes', quantity: '3 cups' },
      { name: 'Cheese (optional)', quantity: '1/2 cup (shredded)' }
    ],
    steps: [
      'In a oven-safe dish, combine cooked lentils, mixed vegetables, vegetable broth, and tomato paste. Mix well.',
      'Top evenly with mashed potatoes.',
      'Optionally sprinkle with shredded cheese.',
      'Bake at 190°C (375°F) for 25-30 minutes, or until bubbling and golden on top.'
    ],
    cookingTime: '45 minutes',
    servings: 4,
    difficulty: 'Medium'
  },

  // --- Asian Food (Category ID: 6) ---
  {
    id: 51,
    categoryId: 6,
    title: 'Chicken Pad Thai',
    description: 'A classic Thai stir-fried noodle dish with sweet, sour, and savory flavors.',
    imageUrl: 'assets/images/recipes/chicken-pad-thai.jpg',
    ingredients: [
      { name: 'Rice Noodles', quantity: '200g' },
      { name: 'Chicken Breast', quantity: '1 (sliced)' },
      { name: 'Shrimp', quantity: '100g' },
      { name: 'Eggs', quantity: '2' },
      { name: 'Bean Sprouts', quantity: '1 cup' },
      { name: 'Peanuts (crushed)', quantity: '1/4 cup' },
      { name: 'Pad Thai Sauce', quantity: '1/2 cup' }
    ],
    steps: [
      'Cook rice noodles according to package instructions. Drain.',
      'Stir-fry chicken and shrimp in a wok until cooked. Push to one side.',
      'Scramble eggs in the wok. Add noodles and Pad Thai sauce. Toss to combine.',
      'Add bean sprouts and crushed peanuts. Stir-fry briefly. Serve hot.'
    ],
    cookingTime: '30 minutes',
    servings: 2,
    difficulty: 'Medium'
  },
  {
    id: 52,
    categoryId: 6,
    title: 'Japanese Miso Soup',
    description: 'A light and comforting Japanese soup, perfect as a starter.',
    imageUrl: 'assets/images/recipes/miso-soup.jpg',
    ingredients: [
      { name: 'Dashi Stock', quantity: '4 cups' },
      { name: 'Miso Paste', quantity: '2-3 tbsp' },
      { name: 'Tofu (silken, cubed)', quantity: '1/2 block' },
      { name: 'Wakame Seaweed (dried)', quantity: '1 tbsp' },
      { name: 'Green Onions (sliced)', quantity: '2 tbsp' }
    ],
    steps: [
      'Heat dashi stock in a pot until simmering (do not boil).',
      'Dissolve miso paste in a small amount of warm dashi, then add to the pot.',
      'Add cubed tofu and dried wakame. Cook for a few minutes until wakame rehydrates.',
      'Remove from heat and garnish with sliced green onions before serving.'
    ],
    cookingTime: '15 minutes',
    servings: 4,
    difficulty: 'Easy'
  },

  // --- European Food (Category ID: 7) ---
  {
    id: 61,
    categoryId: 7,
    title: 'Classic Spaghetti Bolognese',
    description: 'A rich and savory Italian meat sauce served over spaghetti.',
    imageUrl: 'assets/images/recipes/spaghetti-bolognese.jpg',
    ingredients: [
      { name: 'Ground Beef', quantity: '500g' },
      { name: 'Onion', quantity: '1 (chopped)' },
      { name: 'Carrot', quantity: '1 (chopped)' },
      { name: 'Celery Stalk', quantity: '1 (chopped)' },
      { name: 'Canned Crushed Tomatoes', quantity: '1 (large can)' },
      { name: 'Red Wine (optional)', quantity: '1/2 cup' },
      { name: 'Spaghetti', quantity: '400g' }
    ],
    steps: [
      'Brown ground beef in a large pot. Drain excess fat.',
      'Add chopped onion, carrot, and celery. Cook until softened.',
      'Stir in crushed tomatoes and optional red wine. Simmer for at least 30 minutes (longer for more flavor).',
      'Cook spaghetti according to package directions. Serve bolognese sauce over spaghetti.'
    ],
    cookingTime: '60 minutes',
    servings: 4,
    difficulty: 'Medium'
  },
  {
    id: 62,
    categoryId: 7,
    title: 'French Onion Soup',
    description: 'A comforting and flavorful soup with caramelized onions and cheesy croutons.',
    imageUrl: 'assets/images/recipes/french-onion-soup.jpg',
    ingredients: [
      { name: 'Onions (sliced)', quantity: '4 large' },
      { name: 'Beef Broth', quantity: '6 cups' },
      { name: 'Dry White Wine', quantity: '1/2 cup' },
      { name: 'Baguette Slices', quantity: '4' },
      { name: 'Gruyere Cheese (shredded)', quantity: '1 cup' },
      { name: 'Thyme (fresh)', quantity: '1 tsp' }
    ],
    steps: [
      'Sauté sliced onions in butter until deeply caramelized (about 30-40 minutes).',
      'Deglaze with white wine, then add beef broth and thyme. Simmer for 15 minutes.',
      'Toast baguette slices. Ladle soup into oven-safe bowls. Top with a baguette slice and shredded Gruyere.',
      'Broil until cheese is melted and bubbly.'
    ],
    cookingTime: '60 minutes',
    servings: 4,
    difficulty: 'Hard'
  },

  // --- Low Carb (Category ID: 8) ---
  {
    id: 71,
    categoryId: 8,
    title: 'Keto Chicken & Avocado Salad',
    description: 'A quick and satisfying low-carb salad, high in healthy fats and protein.',
    imageUrl: 'assets/images/recipes/keto-chicken-avocado-salad.jpg',
    ingredients: [
      { name: 'Cooked Chicken Breast', quantity: '1 cup (shredded)' },
      { name: 'Avocado', quantity: '1 (diced)' },
      { name: 'Cherry Tomatoes', quantity: '1/2 cup (halved)' },
      { name: 'Cucumber', quantity: '1/2 cup (diced)' },
      { name: 'Olive Oil', quantity: '2 tbsp' },
      { name: 'Lemon Juice', quantity: '1 tbsp' }
    ],
    steps: [
      'In a large bowl, combine shredded chicken, diced avocado, halved cherry tomatoes, and diced cucumber.',
      'Drizzle with olive oil and lemon juice. Season with salt and pepper.',
      'Toss gently to combine. Serve immediately, optionally over a bed of mixed greens.'
    ],
    cookingTime: '10 minutes',
    servings: 1,
    difficulty: 'Easy'
  },
  {
    id: 72,
    categoryId: 8,
    title: 'Zucchini Noodles with Pesto & Cherry Tomatoes',
    description: 'A light and fresh low-carb alternative to pasta.',
    imageUrl: 'assets/images/recipes/zucchini-pesto-noodles.jpg',
    ingredients: [
      { name: 'Zucchini', quantity: '2 medium (spiralized)' },
      { name: 'Pesto', quantity: '1/4 cup' },
      { name: 'Cherry Tomatoes', quantity: '1 cup (halved)' },
      { name: 'Parmesan Cheese (shredded)', quantity: '2 tbsp' }
    ],
    steps: [
      'Spiralize zucchini into "noodles".',
      'In a large pan, sauté zucchini noodles for 2-3 minutes until slightly softened (do not overcook).',
      'Remove from heat and toss with pesto and halved cherry tomatoes.',
      'Serve immediately, garnished with shredded Parmesan cheese.'
    ],
    cookingTime: '15 minutes',
    servings: 2,
    difficulty: 'Easy'
  },

  // --- High Protein (Category ID: 9) ---
  {
    id: 81,
    categoryId: 9,
    title: 'Lean Steak with Sweet Potato & Broccoli',
    description: 'A balanced meal packed with protein and complex carbs for muscle building.',
    imageUrl: 'assets/images/recipes/steak-sweetpotato-broccoli.jpg',
    ingredients: [
      { name: 'Lean Steak (e.g., sirloin)', quantity: '180g' },
      { name: 'Sweet Potato', quantity: '1 medium' },
      { name: 'Broccoli Florets', quantity: '1.5 cups' },
      { name: 'Olive Oil', quantity: '1 tbsp' }
    ],
    steps: [
      'Preheat oven to 200°C (400°F).',
      'Dice sweet potato and toss with olive oil, salt, and pepper. Roast for 20-25 minutes.',
      'Toss broccoli with a little olive oil and add to the roasting tray for the last 10-15 minutes.',
      'Season steak with salt and pepper. Cook in a hot pan to desired doneness.',
      'Rest steak for a few minutes before slicing. Serve with roasted sweet potato and broccoli.'
    ],
    cookingTime: '35 minutes',
    servings: 1,
    difficulty: 'Medium'
  },
  {
    id: 82,
    categoryId: 9,
    title: 'Greek Yogurt & Berry Protein Bowl',
    description: 'A quick and easy high-protein breakfast or snack.',
    imageUrl: 'assets/images/recipes/yogurt-berry-protein-bowl.jpg',
    ingredients: [
      { name: 'Greek Yogurt (plain, full-fat)', quantity: '1 cup' },
      { name: 'Mixed Berries', quantity: '1/2 cup' },
      { name: 'Protein Powder (vanilla or unflavored)', quantity: '1 scoop' },
      { name: 'Chia Seeds', quantity: '1 tbsp' },
      { name: 'Almonds (sliced)', quantity: '2 tbsp' }
    ],
    steps: [
      'In a bowl, combine Greek yogurt and protein powder. Mix until smooth.',
      'Stir in mixed berries and chia seeds.',
      'Top with sliced almonds and serve immediately.'
    ],
    cookingTime: '5 minutes',
    servings: 1,
    difficulty: 'Easy'
  },

  // --- Quick & Easy (Category ID: 10) ---
  {
    id: 91,
    categoryId: 10,
    title: 'One-Pan Lemon Herb Chicken & Veggies',
    description: 'Minimal cleanup and maximum flavor in under 30 minutes.',
    imageUrl: 'assets/images/recipes/one-pan-chicken-veggies.jpg',
    ingredients: [
      { name: 'Chicken Thighs (boneless, skinless)', quantity: '2' },
      { name: 'Bell Peppers (sliced)', quantity: '1 cup' },
      { name: 'Zucchini (sliced)', quantity: '1 cup' },
      { name: 'Cherry Tomatoes', quantity: '1 cup' },
      { name: 'Olive Oil', quantity: '2 tbsp' },
      { name: 'Italian Seasoning', quantity: '1 tsp' },
      { name: 'Lemon', quantity: '1/2 (sliced)' }
    ],
    steps: [
      'Preheat oven to 200°C (400°F).',
      'On a large baking sheet, toss chicken thighs, bell peppers, zucchini, and cherry tomatoes with olive oil and Italian seasoning.',
      'Arrange in a single layer and top with lemon slices.',
      'Bake for 20-25 minutes, or until chicken is cooked through and vegetables are tender.'
    ],
    cookingTime: '25 minutes',
    servings: 2,
    difficulty: 'Easy'
  },
  {
    id: 92,
    categoryId: 10,
    title: 'Avocado Toast with Egg',
    description: 'A classic quick breakfast or snack, elevated with a fried egg.',
    imageUrl: 'assets/images/recipes/avocado-toast-egg.jpg',
    ingredients: [
      { name: 'Bread (sourdough or whole grain)', quantity: '1 slice' },
      { name: 'Avocado', quantity: '1/2' },
      { name: 'Egg', quantity: '1' },
      { name: 'Chili Flakes (optional)', quantity: 'pinch' },
      { name: 'Salt & Pepper', quantity: 'to taste' }
    ],
    steps: [
      'Toast bread to your liking.',
      'Mash avocado onto the toast. Season with salt and pepper.',
      'Fry or poach an egg to your preference.',
      'Place the cooked egg on top of the avocado toast. Sprinkle with chili flakes if desired.'
    ],
    cookingTime: '10 minutes',
    servings: 1,
    difficulty: 'Easy'
  },
];

