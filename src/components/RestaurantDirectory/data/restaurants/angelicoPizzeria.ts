import { Restaurant } from '../../types';

export const angelicoPizzeria: Restaurant = {
  id: 2,
  name: "Angelico Pizzeria",
  imageUrl: "https://i.imgur.com/eDNTNYA.png",
  cuisine: ["pizza", "italian", "comfort food"],
  address: "3205 Mt Pleasant St NW, Washington, DC 20010",
  nearestUniversity: ["American University"],
  acceptsCampusCard: true,
  distance: "3.2 miles",
  rating: 4.9,
  latitude: 38.9314,
  longitude: -77.0038,
  menuItems: [
    { name: "Margherita Pizza", price: 17.99, description: "Light tomato sauce, fresh mozzarella, basil & tomatoes drizzled with olive oil.", imageUrl: "https://i.imgur.com/yfsGBd0.png" },
    { name: "Chicken Pesto Pizza", price: 17.99, description: "Pesto sauce, mozzarella, grilled chicken breast, sun-dried tomatoes, roasted red peppers, red onions, kalamata olives & feta.", imageUrl: "https://i.imgur.com/WZ9yFYb.png" },
    { name: "Supremo Pizza", price: 17.99, description: "Tomato sauce, mozzarella, pepperoni, mushrooms, green peppers, caramelized onions, Italian sausage & black olives.", imageUrl: "https://i.imgur.com/ZOIcY4O.png" },
    { name: "Meat Classic Pizza", price: 17.99, description: "Tomato sauce, mozzarella, pepperoni, bacon, ham & Italian sausage.", imageUrl: "https://i.imgur.com/Dh8t0GW.png" },
    { name: "Spicy Chicken Pizza", price: 17.99, description: "Spicy roasted red pepper sauce, mozzarella, grilled chicken, mushrooms, sun-dried tomatoes & red onions.", imageUrl: "https://i.imgur.com/SXRwK7s.png" },
    { name: "Spinach & Artichoke Pizza", price: 17.99, description: "Garlic herb sauce, mozzarella, tomatoes, mushrooms, caramelized onions, baby spinach, artichokes & feta.", imageUrl: "https://i.imgur.com/eojP5xH.png" },
    { name: "Asiago Bacon Chicken Pizza", price: 17.99, description: "Asiago, bacon & chicken with mozzarella, caramelized onions, tomatoes, basil & olive oil sauce.", imageUrl: "https://i.imgur.com/QVmhtNj.png" },
    { name: "Roasted Eggplant Pizza", price: 17.99, description: "Garlic herb sauce, mozzarella, eggplant, sun-dried tomatoes, roasted red peppers, kalamata olives, feta & roasted garlic.", imageUrl: "https://i.imgur.com/kZ1WV7L.png" },
    { name: "Angelico Special Pizza", price: 17.99, description: "Tomato sauce, mozzarella, pepperoni, Italian sausage, ham, caramelized onions & roasted red peppers.", imageUrl: "https://i.imgur.com/rULQRJd.png" },
    { name: "Vegetariano Pizza", price: 17.99, description: "Tomato sauce, mozzarella, tomatoes, mushrooms, green peppers, red onions & black olives.", imageUrl: "https://i.imgur.com/yMPOVYR.png" },
    { name: "Portobello Mushroom Pizza", price: 17.99, description: "Garlic herb sauce, mozzarella, portobello mushrooms, roasted red peppers, baby spinach & feta.", imageUrl: "https://i.imgur.com/jqac3AP.png" },
    { name: "Sicilian Pizza", price: 17.99, description: "Light tomato sauce, prosciutto, fresh mozzarella, roasted red peppers, kalamata olives, drizzled with olive oil.", imageUrl: "https://i.imgur.com/dP7ohHn.png" },
    { name: "Pizza Prosciutto", price: 17.99, description: "Fresh mozzarella, prosciutto, caramelized onions, baby spinach & olive oil sauce.", imageUrl: "https://i.imgur.com/1PEeoOD.png" },
    { name: "Cheesesteak Asiago Pizza", price: 17.99, description: "Alfredo sauce, Asiago mozzarella, peppers, caramelized onions & sliced steak.", imageUrl: "https://i.imgur.com/LGIswd1.png" }

  ],
  delivery: {
    doordash: true,
    ubereats: true,
    grubhub: true,
    inhouse: false
  },
  hasDeals: false,
}; 