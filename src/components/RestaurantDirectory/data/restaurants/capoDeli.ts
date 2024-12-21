import { Restaurant } from '../../types';

export const capoDeli: Restaurant = {
  id: 14,
  name: "Capo Italian Deli",
  imageUrl: "https://i.imgur.com/CWXN6zO.jpeg",
  cuisine: ["italian", "deli"],
  address: "2000 Pennsylvania Ave NW, Washington, D.C. 20006",
  nearestUniversity: ["George Washington University"],
  acceptsCampusCard: true,
  distance: "0.9 miles",
  rating: 4.3,
  latitude: 38.9000,
  longitude: -77.0456,
  menuItems: [
    // Cold Subs
    { "name": "Prosciutto and Provolone", "price": 16.99, "description": "Cold Sub: Comes with Lettuce, Tomato, Onion, Provolone Cheese and homemade Italian dressing" },
    { "name": "Ovengold Roast Turkey Breast, Hot Capicola, and Provolone", "price": 16.99, "description": "Cold Sub: Comes with Lettuce, Tomato, Onion, Provolone Cheese and homemade Italian dressing" },
    { "name": "Ovengold Roast Turkey Breast, Home Cooked Roast Beef", "price": 16.99, "description": "Cold Sub: Comes with Lettuce, Tomato, Onion, Provolone Cheese and homemade Italian dressing" },
    { "name": "Ovengold Roast Turkey Breast", "price": 16.99, "description": "Cold Sub: Comes with Lettuce, Tomato, Onion, Provolone Cheese and homemade Italian dressing" },
    { "name": "Maple Glazed Honey Turkey Breast", "price": 16.99, "description": "Cold Sub: Comes with Lettuce, Tomato, Onion, Provolone Cheese and homemade Italian dressing" },
    { "name": "Maple Glazed Honey Ham", "price": 16.99, "description": "Cold Sub: Comes with Lettuce, Tomato, Onion, Provolone Cheese and homemade Italian dressing" },
    { "name": "Italian Combo- Salami, Hot Capicola, Provolone", "price": 16.99, "description": "Cold Sub: Comes with Lettuce, Tomato, Onion, Provolone Cheese and homemade Italian dressing" },
    { "name": "Hot Capicola & Provolone", "price": 16.99, "description": "Cold Sub: Comes with Lettuce, Tomato, Onion, Provolone Cheese and homemade Italian dressing" },
    { "name": "Homemade Tuna Salad", "price": 16.99, "description": "Cold Sub: Comes with Lettuce, Tomato, Onion, Provolone Cheese and homemade Italian dressing" },
    { "name": "Homemade Chicken Salad", "price": 16.99, "description": "Cold Sub: Comes with Lettuce, Tomato, Onion, Provolone Cheese and homemade Italian dressing" },
    { "name": "Home Cooked Roast Beef", "price": 16.99, "description": "Cold Sub: Comes with Lettuce, Tomato, Onion, Provolone Cheese and homemade Italian dressing" },
    { "name": "Genoa Salami, Ham, and Provolone", "price": 16.99, "description": "Cold Sub: Comes with Lettuce, Tomato, Onion, Provolone Cheese and homemade Italian dressing" },
    { "name": "Genoa Salami and Provolone", "price": 16.99, "description": "Cold Sub: Comes with Lettuce, Tomato, Onion, Provolone Cheese and homemade Italian dressing" },
    { "name": "Caprese", "price": 16.99, "description": "Cold Sub: Comes with Lettuce, Tomato, Onion, Provolone Cheese and homemade Italian dressing" },
    { "name": "Deluxe Ham & Cheese", "price": 16.99, "description": "Cold Sub: Comes with Lettuce, Tomato, Onion, Provolone Cheese and homemade Italian dressing" },
    { "name": "Capo Special", "price": 16.99, "description": "Cold Sub: Soppressata, Mortadella, Provolone (Mortadella contains pistachios)" },

    // Hot Subs
    { "name": "Chicken Cheesesteak", "price": 16.99, "description": "Hot Sub: Provolone cheese, peppers and onions" },
    { "name": "Original Cheesesteak Chicken Or Beef", "price": 16.99, "description": "Hot Sub: Provolone Cheese, Peppers & Onions" },
    { "name": "Capo Cheesesteak", "price": 16.99, "description": "Hot Sub: Provolone Cheese, Peppers, Onion, Homemade Tomato Sauce" },
    { "name": "California Cheesesteak", "price": 16.99, "description": "Hot Sub: Provolone Cheese, Lettuce, Tomato, Onion, Mayonnaise" },
    { "name": "Buffalo Chicken Cheesesteak", "price": 16.99, "description": "Hot Sub: Pepperjack Cheese, Buffalo Sauce, Ranch Dressing, Lettuce, Tomatoes" },
    { "name": "Traditional Homemade Chicken Parmigiano", "price": 16.99, "description": "Hot Sub: Homemade Chicken Breast, Marinara, Mozzarella" },
    { "name": "Italian Beef", "price": 16.99, "description": "Hot Sub: Home Cooked Roast Beef with Marinara Sauce, Fresh Garlic, Onions, Romano Cheese & Melted Mozarella" },
    { "name": "Homemade Meatball Parm", "price": 16.99, "description": "Hot Sub: Meatballs, Marinara, Mozarella" },
    { "name": "Grilled Chicken Breast", "price": 16.99, "description": "Hot Sub: Bacon, Arugula & Fresh Tomato" },
    { "name": "Eggplant Parm", "price": 16.99, "description": "Hot Sub: Homemade Eggplant, Marinara, Mozzarella" },
    { "name": "Classic Cuban", "price": 16.99, "description": "Hot Sub: Deluxe Ham, House-made Roast Pork, Swiss Cheese, Mustard and Pickles" },
    { "name": "Chicken Fontina", "price": 16.99, "description": "Hot Sub: Chicken Cutlet with Melted Fontina Cheese, Roasted Red Peppers, Arugula & Basil Aioli" },
    { "name": "Chicken Alla Vodka", "price": 18.50, "description": "Hot Sub: Chicken Cutlet, Prosciutto, Fresh Mozzarella, Sweet Roasted Peppers, Garlic Sauteed Spinach with homemade Vodka sauce" },

    // Italian Kitchen Dishes
    { "name": "Tuna Salad (1/2 LB/ 1 LB)", "price": 9.50, "description": "Freshly made in house" },
    { "name": "Eggplant Parm (1 LB)", "price": 12.00, "description": "Freshly made in house" },
    { "name": "Chicken Parm", "price": 13.50, "description": "Freshly made in house" },
    { "name": "Chicken Salad (1/2 LB/ 1 LB)", "price": 9.50, "description": "Freshly made in house" },
    { "name": "Tri-colored Pasta (1/2 LB/ 1 LB)", "price": 7.00, "description": "Freshly made in house" },
    { "name": "Meatball (1 pc / 3 pcs)", "price": 4.50, "description": "Freshly made in house" },

    // Deli Merch
    { "name": "Pickle", "price": 2.25, "description": "" },
    { "name": "Chips Sour Cream & Onion", "price": 2.00, "description": "" },
    { "name": "Chips Miss Vicky's Salt & Vinegar", "price": 2.00, "description": "" },
    { "name": "Chips Sun Garden Salsa", "price": 2.00, "description": "" },
    { "name": "Chips Lays Regular", "price": 2.00, "description": "" },
    { "name": "Italian Seeded Baguette", "price": 3.50, "description": "" },

    // Drinks
    { "name": "Water Bottle", "price": 1.99, "description": "" },
    { "name": "San Pellegrino Lemonata", "price": 2.75, "description": "" },
    { "name": "Pepsi Can", "price": 2.25, "description": "" },

    // Sweets
    { "name": "Banana Bread Pudding", "price": 7.00, "description": "" },
    { "name": "Tiramisu", "price": 7.00, "description": "" },
    { "name": "Cannoli", "price": 4.00, "description": "House made cream and filled fresh to order" },

    // Catering
    { "name": "Catering Contact", "price": 0.00, "description": "Call: 202-951-1978 or email: hello@capodeli.com" }
  ],
  delivery: {
    doordash: false,
    ubereats: true,
    grubhub: false,
    inhouse: false,
  },
  hasDeals: false,
};