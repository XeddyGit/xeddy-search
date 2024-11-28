import { Restaurant } from '../../types';

export const wingos: Restaurant = {
  id: 1,
  name: "Wingo's",
  imageUrl: "https://i.imgur.com/LKXBwav.png",
  cuisine: ["american", "appetizers", "comfort food"],
  address: "2218 Wisconsin Ave NW, Washington, D.C. 20007",
  nearestUniversity: ["Georgetown University", "American University", "George Washington University"],
  acceptsCampusCard: true,
  distance: "0.2 miles",
  rating: 4.2,
  latitude: 38.9197,
  longitude: -77.0711,
  menuItems: [
    {
      name: "BAKED MAC & CHEESE",
      price: 3.99,
      description: "Traditional mac and cheese topped with smoked cheddar and scallions",
      imageUrl: "https://i.imgur.com/ef7LQKZ.png"
    },
    {
      name: "BUTTERFLY SHRIMP",
      price: 8.99,
      description: "8 pcs served with cocktail sauce",
      imageUrl: "https://i.imgur.com/wlJ57Fc.png"
    },
    { name: "CORN ON THE COB", price: 3.99, description: "Grilled with salt, butter, and cilantro", imageUrl: "https://i.imgur.com/LvtykaP.png" },
    { name: "DEEP-FRIED MAC & CHEESE", price: 5.99, description: "8 pcs", imageUrl: "https://i.imgur.com/BzYcKZx.png" },
    { name: "LARGE FRIES", price: 9.99, description: "Your choice of seasoned or plain, then add your favorite toppings", imageUrl: "https://i.imgur.com/NKPz1WE.png" },
    { name: "MEDIUM FRIES", price: 6.99, description: "Your choice of seasoned or plain, then add your favorite toppings", imageUrl: "https://i.imgur.com/NKPz1WE.png" },
    { name: "SMALL FRIES", price: 4.99, description: "Your choice of seasoned or plain, then add your favorite toppings", imageUrl: "https://i.imgur.com/NKPz1WE.png" },
    { name: "FRESH FRIED MOZZARELLA", price: 6.99, description: "Mozzarella cheese, battered and fried, sprinkled with basil", imageUrl: "https://i.imgur.com/uWgVpeA.png" },
    { name: "FRIED CHEESE RAVIOLI", price: 6.99, description: "8 pieces of cheese ravioli, battered and fried to perfection", imageUrl: "https://i.imgur.com/AK4u9Ps.png" },
    { name: "JALAPENO POPPERS", price: 6.99, description: "6 pcs Jalapeno peppers stuffed with cream cheese", imageUrl: "https://i.imgur.com/pyDEATy.png" },
    { name: "JUMBO BAVARIAN PRETZEL", price: 6.99, description: "", imageUrl: "https://i.imgur.com/xqfjpwD.png" },
    { name: "MASHED POTATOES & GRAVY", price: 3.99, description: "Fresh Idaho potatoes puree topped with scallions, a hint of kosher salt and Malsabar black peppercorns", imageUrl: "https://i.imgur.com/mzbECbs.png" },
    { name: "MINI CORN DOGS", price: 6.99, description: "8 pieces of beef dogs wrapped in dough and fried. served with bbq dip", imageUrl: "https://i.imgur.com/4ZqIyQC.png" },
    { name: "MOZZARELLA STICKS", price: 6.99, description: "8 pieces served with marinara", imageUrl: "https://i.imgur.com/uWgVpeA.png" },
    { name: "ONION RINGS", price: 5.99, description: "8 hand sliced & battered onion rings, fried to perfection", imageUrl: "https://i.imgur.com/N7Drj4T.png" },
    { name: "POTATO SKINS", price: 6.99, description: "With bacon, sour cream, scallions, and cheddar", imageUrl: "https://i.imgur.com/Ygs9J9U.png" },
    { name: "SEASONED FRIES SMALL", price: 4.99, description: "", imageUrl: "https://i.imgur.com/NKPz1WE.png" },
    { name: "SEASONED FRIES LARGE", price: 9.99, description: "", imageUrl: "https://i.imgur.com/NKPz1WE.png" },
    { name: "SEASONED FRIES MEDIUM", price: 6.99, description: "", imageUrl: "https://i.imgur.com/NKPz1WE.png" },
    { name: "STEAK & CHEESE POPPERS", price: 6.99, description: "(3 pcs) Straight From the Bronx, Steak, onions and cheddar", imageUrl: "https://i.imgur.com/hKpEcws.png" },
    { name: "MISS VICKIES POTATO CHIPS", price: 1.49, description: "", imageUrl: "https://i.imgur.com/SKcNQUL.png" },
    { name: "Wingo's Wings - Personal Order", price: 14.99, description: "10 pieces of classic wings. Customize with your preferred chili level or sauce.", imageUrl: "https://i.imgur.com/0VIEyv0.png" },
    { name: "Wingo's Wings - Double Trouble", price: 27.99, description: "20 pieces of classic wings. Perfect for sharing. Customize with your preferred chili level or sauce.", imageUrl: "https://i.imgur.com/9nANI2x.png" },
    { name: "Wingo's Wings - The Bucket", price: 64.99, description: "50 pieces of classic wings. Great for a crowd. Customize with your preferred chili level or sauce.", imageUrl: "https://i.imgur.com/QlcTxOP.png" },
    { name: "Wingo's Wings - Super Bucket", price: 119.99, description: "100 pieces of classic wings. Perfect for large gatherings. Customize with your preferred chili level or sauce.", imageUrl: "https://i.imgur.com/QpxyOir.png" },
    { name: "Southern Fried Chicken Wings", price: 14.99, description: "Ten lightly breaded plain fried wings. Perfect for dipping or enjoying as is.", imageUrl: "https://i.imgur.com/0XjOzvB.png" },
    { name: "Chili Levels", price: 0, description: "Choose from a variety of chili levels and sauces: plain, honey mustard, BBQ honey, teriyaki, garlic parmesan, lemon pepper, lemon pepper honey, golden BBQ, BBQ, bourbon, Old Bay, Old Bay honey, salt & pepper, mild, mango habanero, hot garlic, hot, BBQ hot, Mombo, Jamaican jerk, abusive, sriracha, nuclear, suicidal, bite me.", imageUrl: "https://i.imgur.com/xrn3oxt.png" }

  ],
  delivery: {
    doordash: true,
    ubereats: true,
    grubhub: false,
    inhouse: true
  },
  hasDeals: false,
};
