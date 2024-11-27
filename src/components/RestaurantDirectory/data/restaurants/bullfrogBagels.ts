import { Restaurant } from '../../types';

export const bullfrogBagels: Restaurant = {
  id: 8,
  name: "Bullfrog Bagels",
  imageUrl: "https://i.imgur.com/hcVCdit.jpeg",
  cuisine: ["bagels", "breakfast", "sandwiches"],
  address: "2000 Pennsylvania Ave NW, Suite FH13, Washington, D.C. 20006",
  nearestUniversity: ["George Washington University"],
  acceptsCampusCard: true,
  distance: "0.5 miles",
  rating: 4.2,
  latitude: 38.90004,
  longitude: -77.04551,
  menuItems: [
    { name: "Plain Bagel", price: 2.5, description: "A classic plain bagel." },
    { name: "Sesame Bagel", price: 2.5, description: "A bagel topped with sesame seeds." },
    { name: "Everything Bagel", price: 2.5, description: "A bagel topped with a mix of seeds, onion, garlic, and salt." },
    { name: "Poppy Bagel", price: 2.5, description: "A bagel topped with poppy seeds." },
    { name: "Salt Bagel", price: 2.5, description: "A bagel topped with coarse salt." },
    { name: "Onion Bagel", price: 2.5, description: "A bagel infused with onion flavor." },
    { name: "Cinnamon Raisin Bagel", price: 2.5, description: "A sweet bagel with cinnamon and raisins." },
    { name: "Asiago Bagel", price: 2.5, description: "A bagel topped with asiago cheese." },
    { name: "Multigrain Bagel", price: 2.5, description: "A healthy bagel made with multigrain flour." },
    { name: "Blueberry Bagel", price: 2.5, description: "A sweet bagel with blueberries baked in." },
    { name: "Pumpernickel Bagel", price: 2.5, description: "A dark, flavorful bagel made with pumpernickel flour." },
    { name: "Everything Pumpernickel Bagel", price: 2.5, description: "A pumpernickel bagel topped with everything seasoning." },
    { name: "Bialy - Onion-Poppy (Vegan)", price: 2.5, description: "A vegan onion and poppy seed bialy." },
    { name: "Egg & Cheese Bagelwich", price: 6.25, description: "A bagel sandwich with egg and cheese." },
    { name: "Bacon, Egg & Cheese Bagelwich", price: 7.25, description: "A bagel sandwich with bacon, egg, and cheese." },
    { name: "Sausage, Egg & Cheese Bagelwich", price: 7.0, description: "A bagel sandwich with sausage, egg, and cheese." },
    { name: "Turkey, Avocado, Egg & Cheese Bagelwich", price: 9.0, description: "A bagel sandwich with turkey, avocado, egg, and cheese." },
    { name: "Corned Beef, Egg & Cheese Bagelwich", price: 9.0, description: "A bagel sandwich with corned beef, egg, and cheese." },
    { name: "Hot Pastrami, Egg & Cheese Bagelwich", price: 9.0, description: "A bagel sandwich with hot pastrami, egg, and cheese." },
    { name: "SSA Bagelwich", price: 12.0, description: "Smoked salmon, avocado, egg, and chive scallion cream cheese on a bagel." },
    { name: "The Natitude", price: 10.0, description: "Hot pastrami, Swiss cheese, and Dijon mustard sauce on a bagel." },
    { name: "TBA Bagelwich", price: 9.5, description: "Smoked turkey, bacon, avocado, and Sriracha mayo on a bagel." },
    { name: "The Oriole", price: 11.0, description: "Baltimore braised brisket, muenster cheese, and jus on a bagel." },
    { name: "Reuben", price: 9.5, description: "Corned beef, house-made sauerkraut, Swiss cheese, and 1000 Island dressing on a bagel." },
    { name: "Whitefish", price: 9.0, description: "Whitefish salad, tomato, red onion, capers, and cream cheese on a bagel." },
    { name: "The Wurst", price: 7.2, description: "Neuske's liverwurst, tomato, red onion, mayo, and cracked black pepper on a bagel." },
    { name: "Tuna Melt", price: 8.5, description: "Tuna salad, tomato, and cheddar cheese on a bialy." },
    { name: "BLT", price: 7.0, description: "Bacon, lettuce, tomato, and mayo on a bagel." },
    { name: "Salmon BLT", price: 10.0, description: "Bacon, lettuce, tomato, and cream cheese on a bagel with smoked salmon." }

  ],
  delivery: {
    doordash: true,
    ubereats: true,
    grubhub: true,
    inhouse: false
  }
}; 