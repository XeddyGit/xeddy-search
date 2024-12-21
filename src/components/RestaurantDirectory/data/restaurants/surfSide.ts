import { Restaurant } from "../../types";

export const surfSide: Restaurant = {
  name: "Surf Side",
  imageUrl: "https://i.imgur.com/thPptO0.jpeg",
  cuisine: ["mexican", "tacos"],
  address: "1800 N St NW, Washington, DC 20036",
  nearestUniversity: ["George Washington University"],
  latitude: 38.9071,
  longitude: -77.0427,
  acceptsCampusCard: true,
  distance: "0.5 miles",
  rating: 4.5,
  id: 17,
  menuItems: [
    { name: "Guacamole & Chips", price: 11.95, description: "Freshly made daily with avocado, red onion, lime, cilantro, and jalapeños." },
    { name: "Salsa & Chips", price: 4.50, description: "House-made Surfside salsa with tortilla chips." },
    { name: "Queso & Chips", price: 9.95, description: "8 oz. queso & chips." },
    { name: "Bermuda Triangle", price: 18.95, description: "Our three favorites: Guacamole, White Queso, and Surfside Salsa with tortilla chips." },
  
    // Late Night Tacos
    { name: "Maui LN", price: 14.95, description: "Grilled fish, black bean & corn salsa, guacamole, cilantro, lime crema, corn tortillas." },
    { name: "Cabo San Lucas LN", price: 15.95, description: "Grilled steak, grilled poblano peppers & red onion, guacamole, lime crema, cilantro, flour tortillas." },
    { name: "Punta Cana LN", price: 13.95, description: "Fried chicken, creamy slaw, tomato corn salsa, cilantro, chipotle crema, flour tortillas." },
    { name: "Malibu LN", price: 12.95, description: "Wild mushroom, slow-roasted tomatoes, grilled queso fresco, sautéed spinach, hatch chili ranch, blue corn tortillas." },
    { name: "Plain Steak Taco", price: 14.95, description: "Served with a side of yellow rice." },
    { name: "Plain Shrimp Taco", price: 14.95, description: "Served with a side of yellow rice." },
    { name: "Jamaica Bowl", price: 16.95, description: "Grilled jerk chicken, black beans, pineapple, avocado, cilantro, lime crema, yellow rice." },
    { name: "Big Sur Bowl", price: 18.95, description: "Grilled steak, wild mushrooms, avocado, roasted tomato salsa, lime crema, yellow rice." },
    { name: "Punta Cana Bowl", price: 15.95, description: "Fried chicken, creamy slaw, tomato corn salsa, chipotle crema, yellow rice." },
    { name: "Malibu Bowl", price: 14.95, description: "Wild mushrooms, slow-roasted tomatoes, grilled queso fresco, sautéed spinach, hatch chili ranch, yellow rice." },
  
    // Salads
    { name: "Baja Salad", price: 16.95, description: "Grilled chicken, romaine, avocado, black bean & corn salsa, shredded jack cheese, crispy tortilla strips, cilantro lime dressing." },
    { name: "Key West Salad", price: 18.95, description: "Grilled steak, mixed greens, roasted sweet peppers, queso fresco, pickled onions, avocado, cilantro lime dressing." },
    { name: "Miami Beach Salad", price: 15.95, description: "Grilled shrimp, romaine, cucumber, red onion, shredded jack cheese, tomato corn salsa, cilantro lime dressing." },
    { name: "Capitol Hill Salad", price: 13.95, description: "Wild mushrooms, spinach, queso fresco, black bean & corn salsa, pickled onion, chipotle vinaigrette." },
  
    // Desserts
    { name: "Tres Leches Cake", price: 7.95, description: "Traditional three milk cake topped with whipped cream and a cherry." },
    { name: "Key Lime Pie", price: 6.95, description: "Classic key lime pie with a graham cracker crust." },
    { name: "Churros", price: 8.95, description: "Crispy fried dough rolled in cinnamon sugar with a side of chocolate sauce." },

  ],
  delivery: {
    doordash: true,
    ubereats: true,
    grubhub: true,
    inhouse: true,
  },
  hasDeals: false,
};
