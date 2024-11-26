import { Restaurant } from '../../types';

export const mamanJoon: Restaurant = {
  id: 4,
  name: "Maman Joon Kitchen",
  imageUrl: "https://i.imgur.com/BUNlQIk.png",
  cuisine: ["persian", "kabobs", "comfort food"],
  address: "4531 Wisconsin Ave NW, Washington, DC 20016",
  nearestUniversity: ["American University"],
  acceptsCampusCard: true,
  distance: "0.8 miles",
  rating: 4.2,
  latitude: 38.94896,
  longitude: 77.07992,
  menuItems: [
    { name: "Dolmeh", price: 5.50, description: "Stuffed veggie grape leaves" },
        { name: "Falafel", price: 6.24, description: "Chickpea patties with tahini sauce" },
        { name: "Hummus", price: 6.24, description: "Chickpeas, sesame paste, garlic, olive oil, lemon juice" },
        { name: "Kashk O Bademjan", price: 6.24, description: "Sauteed eggplant, onion, mint, kashk" },
        { name: "Must O Mooseer", price: 6.24, description: "Yogurt mixed with chopped Persian shallots" },
        { name: "Shirazi Salad", price: 5.50, description: "Diced cucumber, tomato, onion, mint, olive oil lemon juice" },
        { name: "Ash E Reshteh", price: 6.24, description: "Chopped herbs, beans, caramelized onions, garlic, noodles, mint, kashk" },
        { name: "Maman's Salad", price: 0, description: "Spring greens, lettuce, tomato, cucumber, kalamata olives, Dijon herb dressing" },
        { name: "Mediterranean Salad", price: 10.70, description: "Spring greens, lettuce, tomato, cucumber, parsley, onion, olives, feta cheese, virgin olive oil and lemon juice dressing" },
        { name: "Tabbouleh Salad", price: 6.24, description: "Chopped parsley, spring onion, tomato, cucumber, cracked wheat, virgin olive oil and lemon dressing" },
        { name: "Chicken Kabob Sandwich", price: 12.45, description: "Chunks of chicken breast" },
        { name: "Falafel Wrap", price: 10.99, description: "Chickpea patties, Hummus, lettuce, pickles, shirazi salad, tahini sauce" },
        { name: "Ground Chicken Kabob Sandwich", price: 12.45, description: "Ground chicken, grated onion, cilantro, seasoning" },
        { name: "Koobideh Kabob", price: 13.45, description: "Ground beef, grated onions" },
        { name: "Spicy Ground Chicken Kabob", price: 12.45, description: "Ground chicken, grated onion with seasoning" },
        { name: "Barg (Filet Mignon Kabob)", price: 21.83, description: "Farmed Persian kabob prepared with prime cut of beef" },
        { name: "Beef Chenjeh Kabob", price: 18.99, description: "Marinated tender chunks of prime beef" },
        { name: "Chicken Kabob", price: 15.99, description: "Chicken breast in a special marinade" },
        { name: "Fesenjan with basmati rice", price: 16.60, description: "Chicken, walnut, pomegranate sauce" },
        { name: "Gheymeh Bademjan with basmati rice", price: 15.60, description: "Eggplant, beef, split peas, sun dried lime" },
        { name: "Ghormeh Sabzi with basmati rice", price: 15.60, description: "Beef cubes, fresh chopped herbs, beans and sun dried lime" },
        { name: "Ground Chicken Kabob 2 Skewers", price: 15.99, description: "Ground chicken, grated onion, and cilantro" },
        { name: "Koobideh Kabob (2 Skewers)", price: 16.99, description: "Ground beef, grated onions" },
        { name: "Lamb Shank (Baghali Polo)", price: 18.71, description: "Slow cooked full lamb shank with broad bean, dill rice" },
        { name: "Salmon Kabob", price: 20.79, description: "Skinless Chunks of Salmon in a special house marinade" },
        { name: "Soltani", price: 26.00, description: "Barg and Koobideh combo" },
        { name: "Spicy Ground Chicken 2 Skewers", price: 15.99, description: "Ground chicken, grated onion with seasoning" }

  ],
  delivery: {
    doordash: true,
    ubereats: true,
    grubhub: true,
    inhouse: false
  }
}; 