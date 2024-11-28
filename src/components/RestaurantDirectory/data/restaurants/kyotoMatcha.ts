import { Restaurant } from '../../types';

export const kyotoMatcha: Restaurant = {
    id: 13,
    name: "Kyoto Matcha",
    imageUrl: "https://i.imgur.com/a4fLKWz.jpeg",
    cuisine: ["matcha", "japanese", "cafe"],
    address: "1 East Joppa Rd, Towson, MD 21286",
    nearestUniversity: ["Towson University"],
    acceptsCampusCard: true,
    distance: "0.5 miles",
    rating: 4.7,
    latitude: 39.4019,
    longitude: -76.6017,
    menuItems: [
        {
            name: "Matcha Milk Cap Cake",
            price: 11.00,
            description: ""
          },
          {
            name: "Dream of Sakura",
            price: 7.50,
            description: ""
          },
          {
            name: "Mochi Ice Cream",
            price: 4.25,
            description: ""
          },
          {
            name: "Matcha Frozen Soft Serve",
            price: 11.00,
            description: "",
          },
          {
            name: "Matcha Nama Chocolate",
            price: 9.00,
            description: "6 pieces."
          },
          {
            name: "Matcha (cold)",
            price: 6.50,
            description: "Cold."
          },
          {
            name: "Cherry Blossom Frappuccino",
            price: 7.50,
            description: ""
          },
          {
            name: "Matcha Yuzu",
            price: 6.50,
            description: ""
          },
          {
            name: "Strawberry Milk Drink",
            price: 7.50,
            description: "Only strawberry jam is added (no sugar level)."
          },
          {
            name: "Matcha Frappuccino",
            price: 7.50,
            description: ""
          },
          {
            name: "Matcha (hot)",
            price: 7.50,
            description: "Hot."
          },
          {
            name: "Strawberry Matcha Latte",
            price: 7.50,
            description: ""
          },
          {
            name: "Brown Sugar Boba Milk Drink",
            price: 7.50,
            description: "Only brown sugar was added (no sugar level)."
          },
            {
              name: "Matcha Red Bean Towel Cake",
              price: 12.00,
              description: ""
            },
            {
              name: "Ube Towel Cake",
              price: 12.00,
              description: ""
            },
            {
              name: "Hokkaido Milk Salty Roll Cake",
              price: 12.00,
              description: ""
            },
            {
              name: "Matcha Cheese Mousse Cake",
              price: 11.00,
              description: ""
            },
            {
              name: "Mini Matcha Cheesecake",
              price: 4.99,
              description: ""
            },
            {
              name: "Sakura Cheese Mousse Cake",
                price: 11.00,
              description: ""
            },
            {
              name: "Hokkaido Fromage Cheesecake",
              price: 12.00,
              description: ""
            },
            {
              name: "Matcha Roll Cake",
              price: 11.00,
              description: ""
            },
            {
              name: "Mini Yuzu Cheesecake",
              price: 4.50,
              description: ""
            },
            {
              name: "Matcha Crepe Layer Cake",
              price: 11.50,
              description: ""
            },
            {
              name: "Chocolate Crepe Layer Cake",
              price: 11.50,
              description: ""
            },
            {
              name: "Ube Crepe Layer Cake",
              price: 11.50,
              description: ""
            },
            {
              name: "Passion Fruit Crepe Cake",
              price: 11.50,
              description: ""
            },
            {
              name: "Tiramisu Crepe Layer Cake",
              price: 11.50,
              description: ""
            },
            {
              name: "Whole Crepe Cake",
              price: 119.00,
              description: "Please call the restaurant to confirm which flavor of crepe is available before placing order."
            },
            {
              name: "Peach Oolong Crepe Layer Cake",
              price: 11.50,
              description: ""
            }
          
    ],
    delivery: {
        doordash: true,
        ubereats: true,
    },
    hasDeals: false,
}