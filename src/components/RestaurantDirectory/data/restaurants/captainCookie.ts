import { Restaurant } from '../../types';

export const captainCookie: Restaurant = {
  id: 15,
  name: "Captain Cookie And The Milk Man",
  imageUrl: "https://i.imgur.com/JOwgcZG.jpeg",
  cuisine: ["cookies", "ice cream"],
  address: "2000 Pennsylvania Ave NW Suite 1-A, Washington, DC 20006",
  nearestUniversity: ["George Washington University"],
  acceptsCampusCard: true,
  distance: "0.9 miles",
  rating: 4.2,
  latitude: 38.9000,
  longitude: -77.0455,
  menuItems: [
    {
      name: "Gift Box",
      price: 28.00,
      description:
        "A delightful gift box filled with a variety of delicious treats, perfect for any occasion!",
    },
    {
      name: "Electronic Gift Card",
      price: 0.00,
      description:
        "A versatile and thoughtful gift for any cookie lover, redeemable online or in-store.",
    },
    {
      name: "Cookie of the Month — One-time Box",
      price: 42.00,
      description:
        "Savor a curated selection of our best cookies in this one-time box of joy.",
    },
    {
      name: "Ice Cream Sandwich",
      price: 8.50,
      description:
        "Handmade with scratch-made cookies and premium ice cream from a local creamery.",
    },
    {
        "name": "Cookies for a Crowd (box of 25)",
        "price": 50.00,
        "description": "Perfect for parties or events, this box comes packed with 25 fresh-baked cookies."
    },
    {
        "name": "Cookies & Milk Combo",
        "price": 7.00,
        "description": "The classic pairing of cookies and milk, made even better with our fresh-baked cookies."
    },
    {
        "name": "The Duo (cookie + scoop)",
        "price": 6.50,
        "description": "A perfect pair: your choice of cookie and a scoop of creamy ice cream."
    },
    {
        "name": "Baker’s Dozen",
        "price": 25.00,
        "description": "A classic assortment of 13 fresh-baked cookies."
    },
    {
        "name": "Half Dozen",
        "price": 12.00,
        "description": "Six perfectly baked cookies, ready to delight."
    },
    {
        "name": "Chocolate Chip Cookie",
        "price": 2.50,
        "description": "This cookie is what it’s all about – literally the reason for the existence of Captain Cookie. Try it and you’ll instantly understand why!"
    },
    {
        "name": "Double Chocolate Cookie",
        "price": 2.50,
        "description": "Chocolate lovers — prepare yourselves. Our made-from-scratch double chocolate cookies are rich, delectable, and will melt in your mouth!"
    },
    {
        "name": "Snickerdoodle Cookie",
        "price": 2.50,
        "description": "Our made-from-scratch snickerdoodles will send you right back to grandma’s kitchen. Take a deep breath, that’s the delicious scent of cinnamon!"
    },
    {
        "name": "Confetti Cookie",
        "price": 2.50,
        "description": "Put some fun in your day with our most playful cookie. Sprinkles are joy!"
    },
    {
        "name": "Oatmeal Raisin Cookie",
        "price": 2.50,
        "description": "For many, oatmeal raisin is the only cookie that exists. Try out our classic recipe – a chewy cookie with just the right amount of crispness, spice, and, of course, raisins!"
    },
    {
        "name": "Ginger Molasses Cookie",
        "price": 2.50,
        "description": "The hidden gem of our cookie lineup. One bite and you’ll be a fan for life!"
    },
    {
        "name": "Peanut Butter Cookie",
        "price": 2.50,
        "description": "Just enough crisp, just enough crumble, and all that smoothness of the best peanut butter. Pair it with a cold glass of milk from our local dairy partner and experience perfection."
    },
    {
        "name": "Vegan Chocolate Chip",
        "price": 2.50,
      description:
        "We knew we’d mastered our vegan chocolate chip recipe when Kirk tricked Juliann into thinking it was a regular chocolate chip cookie. We churn our own vegan 'butter' from scratch. Come taste the difference!",
    },  
    {
      name: "Edible Cookie Dough",
      price: 5.00,
      description:
        "Enjoy spoonfuls of our safe-to-eat raw cookie dough in a variety of flavors.",
    },
  ],
  delivery: {
    doordash: true,
    ubereats: true,
    grubhub: true,
    inhouse: true,
  },
  hasDeals: false,
};
