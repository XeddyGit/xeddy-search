import { Restaurant } from '../../types';

export const saladworks: Restaurant = {
  id: 8,
  name: "Saladworks",
  imageUrl: "https://i.imgur.com/Juzru14.png",
  cuisine: ["salad", "healthy", "fast food"],
  address: "2424 18th St NW, Washington, DC 20009",
  nearestUniversity: ["American University"],
  acceptsCampusCard: true,
  distance: "0.5 miles",
  rating: 4.2,
  latitude: 38.9166,
  longitude: -77.0466,
  menuItems: [
    { name: "A Salad Creation of Your Own", price: 12.29, description: "Be Original by creating your own Salad. Start by picking your base, then add your favorite toppings and dressing." },
    { name: "Grilled Chicken Caesar Salad", price: 11.99, description: "Our Grilled Chicken Caesar comes recommended with a base of Romaine/Iceberg Blend, topped with grilled chicken, parmesan cheese, and croutons." },
    { name: "Smoky BBQ Chicken Salad", price: 11.99, description: "This Chef-inspired Signature starts with a recommended base of Romaine/Iceberg Blend, topped with BBQ chicken, corn, black beans, and tortilla strips." },
    { name: "Avocado Cobb Salad", price: 11.99, description: "Fresh Avocado enhances this timeless classic! Start with the recommended Romaine/Iceberg Blend, topped with grilled chicken, bacon, egg, and blue cheese." },
    { name: "Southwest Chipotle Ranch Salad", price: 11.99, description: "Our Chef-inspired regional favorite starts with a recommended base of Romaine/Iceberg Blend, topped with spicy chicken, corn, black beans, and tortilla strips." },
    { name: "Bently Salad", price: 11.99, description: "Our Chef recommends a base of our Romaine/Iceberg Blend. It is served with grilled chicken, cranberries, apple chips, and walnuts." },
    { name: "Asian Chicken Salad", price: 11.99, description: "Our Chef recommends a base of our Super Greens Blend. It is served with grilled chicken, mandarin oranges, crispy noodles, and sesame ginger dressing." },
    { name: "Sophie's Salad", price: 11.99, description: "This Napa-inspired Signature starts with a recommended base of our Spring Mix, topped with grilled chicken, goat cheese, cranberries, and candied pecans." },
    { name: "Grilled Chicken Mediterranean Salad", price: 11.99, description: "This Mediterranean-inspired Signature features a recommended base of our Spring Mix, topped with grilled chicken, feta cheese, olives, and grape tomatoes." },
    { name: "Buffalo Bleu Salad", price: 11.99, description: "Our Chef recommends a base of our Romaine/Iceberg Blend. It's served with buffalo chicken, blue cheese crumbles, tomatoes, and celery." },
    { name: "Farmers Market Salad", price: 11.99, description: "Our Chef-inspired Farmers Market features a recommended base of our Super Greens Blend, topped with seasonal roasted vegetables and balsamic vinaigrette." },
    { name: "Roasted Turkey Club Salad", price: 11.99, description: "Our Roasted Turkey Club starts with a recommended base of Romaine/Iceberg Blend, topped with turkey, bacon, cheddar cheese, and tomatoes." },
    { name: "Classic Greek Salad", price: 11.99, description: "Our Classic Greek Salad starts with a recommended base of Romaine/Iceberg Blend, topped with feta cheese, kalamata olives, red onions, and grape tomatoes." },
    { name: "Turkey 'n Cheddar (Sandwich)", price: 11.99, description: "Turkey medallions, spring mix, cheddar cheese, sliced tomatoes, on rustic white, honey mustard" },
    { name: "Turkey Bacon 'n Ranch (Sandwich)", price: 11.99, description: "Roasted turkey, smoky bacon, sliced tomato, spring mix, cheddar cheese, on hearty wheatberry, ranch" },
    { name: "Cranberry 'n Pecan Chicken Salad (Sandwich)", price: 11.99, description: "Housemade chicken salad made with honey roasted pecans, dried cranberries, chopped celery, spring mix, on hearty wheatberry" },
    { name: "Avocado BLT (Sandwich)", price: 11.99, description: "Smoky bacon, sliced tomato, spring mix, fresh avocado, on rustic white, green goddess" }  
 
  ],
  delivery: {
    doordash: true,
    ubereats: true,
    grubhub: true,
    inhouse: false
  }
}; 