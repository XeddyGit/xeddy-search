import { Restaurant } from '../../types';

export const ocaMocha: Restaurant = {
  id: 10,
  name: "Oca Mocha",
  imageUrl: "https://i.imgur.com/Eh1CoEL.jpeg",
  cuisine: ["coffee", "cafe"],
  address: "5410 East Drive, Arbutus, MD 21227",
  nearestUniversity: ["University of Maryland Baltimore County"],
  acceptsCampusCard: true,
  distance: "0.5 miles",
  rating: 4.7,
  latitude: 39.2482,
  longitude: -76.6939,
  menuItems: [
    
        { "name": "Guatemala Drip Coffee", "price": 2.50, "description": "Medium roast, dark chocolate, orange", "largePrice": 3.00 },
        { "name": "Cattail Drip Coffee", "price": 2.50, "description": "Medium-dark roast, citrus, chocolate-cherry", "largePrice": 3.00 },
        { "name": "Espresso Double", "price": 2.25, "description": "Honduras, dark chocolate, honey", "largePrice": 3.00 },
        { "name": "Shaken Espresso", "price": 4.20, "description": "Shots shaken with ice, your choice of syrup and milk", "largePrice": 4.50 },
        { "name": "Latte", "price": 4.15, "description": "Espresso with milk", "largePrice": 5.50 },
        { "name": "OCA Mocha", "price": 5.25, "description": "Signature latte with Mexican spiced chocolate cocoa and dark chocolate sauce", "largePrice": 6.00 },
        { "name": "Americano", "price": 3.50, "description": "Espresso with water", "largePrice": 5.50 },
        { "name": "Matcha Latte", "price": 4.25, "description": "Powdered green tea with milk", "largePrice": 5.25 },
        { "name": "Hot Chocolate", "price": 3.85, "description": "Mexican spiced chocolate cocoa with dark chocolate sauce and milk", "largePrice": 4.50 },
        //tea      
        { "name": "Black Tea", "price": 2.75, "description": "Whole Assam, Earl Grey, Chai", "largePrice": 2.75 },
        { "name": "Green Tea", "price": 2.75, "description": "Tamayokucha, Peppermint", "largePrice": 2.75 },
        { "name": "Herbal Tea", "price": 2.75, "description": "Alpine Berry, Chamomile, Jasmine Petal", "largePrice": 2.75 },
        { "name": "Make It a Latte", "price": 3.75, "description": "Tea with steamed milk", "largePrice": 5.00 },
        //additions
        
        { "name": "House Made Syrups", "price": 0.50, "description": "Vanilla, Brown Sugar Cinnamon, Simple Syrup" },
        { "name": "Additional Syrups", "price": 0.50, "description": "Lavender, Mocha, White Mocha, Honey, Caramel (contains dairy), Sugar-Free (Caramel, Hazelnut, Vanilla)" },
        { "name": "Plant-Based Milks", "price": 0.50, "description": "Oat, Almond" },
        { "name": "Add Espresso Shot", "price": 0.75, "description": "" },
        //breakfast & lunch
        { "name": "Wake n’ Bacon (Wn’B)", "price": 7.75, "description": "Bacon, Egg & Cheese Bagel" },
        { "name": "Southwest Wn’B", "price": 9.25, "description": "Bacon, Egg, Pepperjack Cheese with Southwest Sauce & Onion" },
        { "name": "Avocado Tomato Wn’B", "price": 9.25, "description": "Bacon, Egg, Cream Cheese with Tomato & Avocado" },
        { "name": "Sausage Brekkie", "price": 7.75, "description": "Sausage, Egg & Cheese Bagel" },
        { "name": "Lox Bagel", "price": 11.50, "description": "Salmon Lox, Capers, Cream Cheese with Onion & Tomato" },
        { "name": "Southwest Retriever", "price": 12.50, "description": "Chicken, Bacon, Onion, Pepperjack, Southwest Aioli on Sourdough" },
        { "name": "Chicken Pesto", "price": 12.50, "description": "Chicken, Basil Pesto, Tomato, Onion, and Mozzarella on Sourdough" },
        { "name": "Caprese", "price": 8.25, "description": "Basil Pesto, Tomato, Onion, and Mozzarella on Sourdough" },
        { "name": "Grilled Cheese", "price": 7.00, "description": "Your choice of cheese on sourdough" },
        { "name": "Arbutus Avo", "price": 7.00, "description": "Avocado toast seasoned with garlic salt, black pepper & paprika" },
        { "name": "Beyond Brekkie", "price": 9.75, "description": "Vegan sausage, egg & cheese bagel" },
        { "name": "Beyond Southwest", "price": 11.50, "description": "Vegan sausage, egg & cheese bagel with vegan southwest aioli & onions" },
        { "name": "Beyond Avocado Tomato", "price": 11.50, "description": "Vegan sausage, egg & cheese bagel with avocado & tomato" },
        //sides & extras
        { "name": "Hashbrown", "price": 1.75, "description": "" },
        { "name": "Bagel", "price": 3.00, "description": "Plain, Everything, Wheat, Jalapeño, Asiago" },
        { "name": "Treats", "price": 1.50, "description": "Pastries available in display case, while supplies last" },
        { "name": "Bread", "price": 1.00, "description": "Sourdough, UDI Roll (GF)" },
        { "name": "Cheese", "price": 0.50, "description": "Cheddar, Pepperjack, Mozzarella, Cream Cheese, Vegan Gouda" }, 
  ],
  delivery: {
    doordash: true,
    ubereats: true,
    grubhub: false,
    inhouse: false
  },
  hasDeals: true,
  currentDeal: {
    dealType: "free",
    dealDescription: "Free coffee with UberEats or DoorDash order",
    dealCode: "OCAMOCHA"
  }
}; 