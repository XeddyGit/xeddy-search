import { Restaurant } from '../../types';

export const banditTaco: Restaurant = {
  id: 3,
  name: "Bandit Taco Tenleytown",
  imageUrl: "https://i.imgur.com/HPbxfBF.png",
  cuisine: ["mexican", "appetizers", "tacos"],
  address: "4629 41st St NW, Washington, DC 20016",
  nearestUniversity: ["American University"],
  acceptsCampusCard: true,
  distance: "0.9 miles",
  rating: 4.2,
  latitude: 38.9505,
  longitude: -77.0803,
  menuItems: [
    { name: "Refried Beans and Egg Taco", price: 3.75, description: "Flour tortilla, scrambled eggs, mozzarella cheese, refried beans and poblano sauce. (Add protein +$0.75)" },
    { name: "Crispy Chicken and Egg Taco", price: 4.25, description: "Flour tortilla, scrambled eggs, fried chicken, mozzarella cheese and chipotle sauce." },
    { name: "Steak and Egg Taco", price: 4.50, description: "Flour tortilla, scrambled eggs, steak, mozzarella cheese, chipotle sauce and potatoes." },
    { name: "Bacon and Egg Taco", price: 3.75, description: "Flour tortilla, scrambled eggs, bacon, mozzarella cheese. (Add protein +$0.75)" },
    { name: "Breakfast Torta", price: 10.00, description: "Bread, scrambled eggs, mozzarella cheese, bean spread, guac spread and poblano sauce. (Add protein +$1.50-$2.25)" },
    { name: "Breakfast Burrito", price: 10.00, description: "Mozzarella cheese, potatoes, refried beans, scrambled eggs and poblano sauce. (Add protein +$1.50-$2.25)" },
    { name: "Breakfast Quesadilla", price: 10.00, description: "Scrambled eggs, refried beans, bacon, mozzarella cheese, and chipotle sauce. (Add protein +$1.50-$2.25)" },
  
    // Tacos Menu Items
    { name: "Skirt Steak Taco", price: 4.35, description: "Onions, scallions, cilantro and radishes on a corn tortilla." },
    { name: "Adobo Chicken Taco", price: 3.85, description: "Onions, scallions, cilantro and radishes on a corn tortilla." },
    { name: "Al Pastor Taco", price: 4.60, description: "Onions, scallions, cilantro, radishes and pineapple on a corn tortilla." },
    { name: "Crispy Shrimp Taco", price: 4.60, description: "Onions, scallions, cilantro, cabbage, radishes, salsa verde and lemon sake on a corn tortilla. Choose up to 3 sauces: Salsa Verde, Salsa Roja, Habanero." },
    { name: "Tofu Taco", price: 4.35, description: "Corn and mixed peppers, cilantro, scallions, and poblano sauce on corn tortilla." },
    { name: "Barbacoa Taco", price: 4.35, description: "Spicy beef with onions, cilantro and radishes." },
    { name: "Chorizo Taco", price: 3.85, description: "Onions, scallions, cilantro and radishes on a corn tortilla." },
    { name: "Korean Beef Taco", price: 4.35, description: "Onions, scallions, cilantro and radishes on a corn tortilla." },
    { name: "Carnitas Taco", price: 3.85, description: "Onions, scallions, cilantro and radishes on a corn tortilla." },
    { name: "Baja Fish Taco", price: 4.60, description: "Onions, scallions, cilantro, cabbage, radishes, salsa verde and chipotle sauce on a corn tortilla." },
    { name: "Wild Mushroom Taco", price: 4.35, description: "Corn, mixed peppers, cilantro, scallions, and poblano sauce on corn tortilla." },
    { name: "Chicken Tinga Taco", price: 3.85, description: "Smoky shredded chicken breast, lightly spiced and garnished with cilantro, scallions, and radishes. Choose up to 3 sauces: Salsa Verde, Salsa Roja, Habanero." },
    { name: "Veggie Taco", price: 3.85, description: "Corn, mixed peppers, cilantro, scallions, and poblano sauce on corn tortilla." },
  
    // Burritos Menu Items
    { name: "Skirt Steak Burrito", price: 11.00, description: "Lettuce, rice, beans, cheese, sour cream, and pico de gallo." },
    { name: "Adobo Chicken Burrito", price: 10.00, description: "Lettuce, rice, beans, cheese, sour cream, and pico de gallo." },
    { name: "Al Pastor Burrito", price: 10.00, description: "Lettuce, rice, beans, cheese, sour cream, pineapple and pico de gallo." },
    { name: "Crispy Shrimp Burrito", price: 13.00, description: "Lettuce, rice, beans, cheese, sour cream, and pico de gallo." },
    { name: "Tofu Burrito", price: 10.00, description: "Lettuce, rice, beans, cheese, sour cream, and pico de gallo." },
    { name: "Barbacoa Burrito", price: 11.00, description: "Lettuce, rice, beans, cheese, sour cream and pico de gallo." },
    { name: "Chorizo Burrito", price: 10.00, description: "Lettuce, rice, beans, cheese, sour cream, and pico de gallo." },
    { name: "Korean Beef Burrito", price: 11.00, description: "Lettuce, rice, beans, cheese, sour cream, and pico de gallo." },
    { name: "Carnitas Burrito", price: 10.00, description: "Lettuce, rice, beans, cheese, sour cream, and pico de gallo." },
    { name: "Baja Fish Burrito", price: 13.00, description: "Lettuce, rice, beans, cheese, sour cream, and pico de gallo." },
    { name: "Wild Mushroom Burrito", price: 10.00, description: "Lettuce, rice, beans, cheese, sour cream, and pico de gallo." },
    { name: "Chicken Tinga Burrito", price: 10.00, description: "Smoky shredded chicken breast, light spicy, lettuce, rice, beans, cheese, sour cream and pico de gallo." },
    { name: "Veggie Burrito", price: 9.50, description: "Lettuce, rice, beans, cheese, sour cream, and pico de gallo." },
    { name: "Breakfast Burrito", price: 9.00, description: "Chorizo, egg, cheese, sour cream, and pico de gallo." },
  
    // Bowls Menu Items
    { name: "Skirt Steak Bowl", price: 11.00, description: "Lettuce, rice, beans, cheese, sour cream, and pico de gallo." },
    { name: "Adobo Chicken Bowl", price: 10.00, description: "Lettuce, rice, beans, cheese, sour cream, and pico de gallo." },
    { name: "Al Pastor Bowl", price: 10.00, description: "Cheese, onions, pineapple, mixed peppers, with a side of sour cream and pico de gallo." },
    { name: "Crispy Shrimp Bowl", price: 13.00, description: "Lettuce, rice, beans, cheese, sour cream, and pico de gallo." },
    { name: "Chorizo Bowl", price: 10.00, description: "Lettuce, rice, beans, cheese, sour cream, and pico de gallo." },
    { name: "Barbacoa Bowl", price: 11.00, description: "Lettuce, rice, beans, cheese, sour cream, and pico de gallo." },
    { name: "Baja Fish Bowl", price: 13.00, description: "Lettuce, rice, beans, cheese, sour cream, and pico de gallo." },
    { name: "Korean Beef Bowl", price: 11.00, description: "Lettuce, rice, beans, cheese, sour cream, and pico de gallo." },
    { name: "Carnitas Bowl", price: 10.00, description: "Lettuce, rice, beans, cheese, sour cream, and pico de gallo." },
    { name: "Wild Mushroom Bowl", price: 10.00, description: "Cheese, onions, red and green peppers, with a side of sour cream and pico de gallo." },
    { name: "Chicken Tinga Bowl", price: 10.00, description: "Cheese, onions, red and green peppers, with a side of sour cream and pico de gallo." },
    { name: "Veggie Bowl", price: 9.50, description: "Cheese, onions, red and green peppers, with a side of sour cream and pico de gallo." },
    { name: "Tofu Bowl", price: 10.00, description: "Lettuce, rice, beans, cheese, sour cream, and pico de gallo." }

  ],
  delivery: {
    doordash: true,
    ubereats: true,
    grubhub: true,
    inhouse: false
  }
}; 