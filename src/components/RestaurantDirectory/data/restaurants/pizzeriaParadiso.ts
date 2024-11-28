import { Restaurant } from '../../types';

export const pizzeriaParadiso: Restaurant = {
  id: 6,
  name: "Pizzeria Paradiso",
  imageUrl: "https://i.imgur.com/6VibhZT.png",
  cuisine: ["pizza", "italian", "comfort food"],
  address: "4850 Massachusetts Ave NW, Washington, D.C. 20016",
  nearestUniversity: ["American University"],
  acceptsCampusCard: true,
  distance: "0.5 miles",
  rating: 4.2,
  latitude: 38.94498,
  longitude: -77.09587,
  menuItems: [
    { name: "Margherita", price: 18.00, description: "Paradiso Tomato Sauce, Basil, Buffalo Mozzarella", largePrice: 25.00 },
    { name: "Macellaio", price: 18.00, description: "Paradiso Tomato Sauce, Pepperoni, Mozzarella, Pork Sausage, Red Onions", largePrice: 25.00 },
    { name: "Bosco", price: 17.00, description: "Paradiso Tomato Sauce, Spinach, Mozzarella, Mushrooms, Red Onions", largePrice: 24.00 },
    { name: "Quattro Formaggi", price: 17.00, description: "Gorgonzola, Pecorino, Grana Padano, Mozzarella, Minced Garlic, Parsley", largePrice: 24.00 },
    { name: "Atomica", price: 17.00, description: "Paradiso Tomato Sauce, Salami, Kalamata Olives, Hot Pepper Flakes, Mozzarella", largePrice: 24.00 },
    { name: "Genovese", price: 16.00, description: "Pesto, Potato, Grana Padano", largePrice: 23.00 },
    { name: "Napoletana", price: 17.00, description: "Paradiso Tomato Sauce, Basil, Anchovy, Capers, Mozzarella", largePrice: 24.00 },
    { name: "Bottarga", price: 18.00, description: "Paradiso Tomato Sauce, Minced Garlic, Parsley, Grana Padano, Egg, Bottarga", largePrice: 25.00 },
    { name: "Siciliana", price: 17.00, description: "Paradiso Tomato Sauce, Zucchini, Eggplant, Caper, Minced Garlic, Oregano, Mozzarella, Pecorino, Red Sweet Pepper, Red Onion", largePrice: 24.00 },
    { name: "Paesana", price: 18.00, description: "Spicy Garlic Pesto, Paradiso Chicken Sausage, Sweet Red Peppers, Roasted Escarole, Broccoli Rabe, Mozzarella, Ricotta", largePrice: 25.00 },
    { name: "Paradiso", price: 15.00, description: "Paradiso Tomato Sauce or Birreria Tomato Sauce, Mozzarella", largePrice: 22.00 },
    { name: "Miniera", price: 18.00, description: "Paradiso Tomato Sauce or Birreria Tomato Sauce, Mozzarella, Three Toppings of Your Choice", largePrice: 25.00 },
    { name: "Di Mare", price: 18.00, description: "Spicy Garlic Pesto, Shrimp, Spinach, Red Onions, Grana Padano", largePrice: 25.00 }

  ],
  delivery: {
    doordash: true,
    ubereats: true,
    grubhub: true,
    inhouse: false
  },
  hasDeals: false,
}; 