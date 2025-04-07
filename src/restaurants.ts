export type Restaurant = {
  id: number;
  name: string;
  description: string;
};

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Casa Zoraya",
    description:
      "Since Zoraya Zambrano and her children, Gary and Gloria Marmanillo, opened Casa Zoraya back in 2018, this Peruvian spot has been Piedmont's under-the-radar gem: Ceviches land at the table like a work of art, fried calamari adding crunch to a bed of fresh seasonal seafood tossed with  a summery leche de tigre. Arroz Chaufa, a Peruvian fried rice dish, gets an upgrade with a passionfruit rocoto sauce, which adds dose of acidity, sweetness, and peppery zip. And the pisco sours feel like they're shipped straight from Lima, best sipped on Casa Zoraya's back patio on nice days.",
  },
  {
    id: 2,
    name: "Hat Yai",
    description:
      "Akkapong Earl Ninsom did it again: After treating Portland to deftly executed Thai cooking at Langbaan and Paadee, the chef —alongside co-founder and co-owner Alan Akwai — created a casual southern Thai compatriot on Northeast Killingsworth with hardcore devotees. Hat Yai's shallot-fried chicken, salty and crunchy, pairs exceptionally well with Malayu-style curry and crispy roti, all available inthe popular combo No. 1. And yet, diners will be rewarded for straying from the top billing: The restaurant's searingly spicy kua gling ground pork is abundant with aromatics and alliums, and the dtom som shrimp combines seafood with meaty oyster mushrooms in a broth pleasingly sour with tamarind and ginger.",
  },
  {
    id: 3,
    name: "Gabbiano's",
    description:
      "In a period of time where so many Portland restaurants are overwhelmingly earnest, Killingsworth neighborhood Italian American joint Gabbiano's exudes a good-hearted ridiculousness, a commitment to the bit that feels truly refreshing. Fried mozzarella shot glasses filled with marinara? For sure. Caprese Negronis with sundried tomato Campari and mozzarella ball garnishes? Totally. But if Gabbiano's were simply a gimmick, it wouldn't appear on this map; each dish has a true sense of deliciousness, from frisbee-sized discs of juicy chicken Parm in a bright pomodoro, or a Dungeness crab alla vodka with the heat and crunch of pistachio chile crisp. Not every restaurant needs to be serious; this city needs its silly little corners, and Gabbiano's is one of them.",
  },
  {
    id: 4,
    name: "Baon Kainan",
    description:
      "Ethan and Geri Leung went from popping up in Seattle to opening this casual Alberta food cart, which offers a simultaneously inventive and accessible take on Filipino staples. Every dish has an incredible depth of flavor, whether it's the lingering floral brightness of calamansi in a rich roasted pork sisig, or the tamari-laden adobo, which hits the grill for a touch of char and smoke. Brunches include sticky glazed tocino and satisfyingly simple garlic rice, each dish popping with acid and salt.",
  },
  {
    id: 5,
    name: "Pasture PDX",
    description:
      "Farm-to-table is likely the most pervasive of the Portland culinary cliches; every restaurant in town touts some version of its ethos, name-dropping a few farms or grabbing a few seasonal items from the farmers market. But Pasture owners Kei Ohdera and HJ Schaible take their emphasis on responsible sourcing to a new level, seeking out and developing relationships with regenerative farms for whole-animal butchery inside the restaurant. The result: Straight-up delicious sandwiches, ranging from beef mortadella to achingly tender pastrami, served with house pickled peppers. It's not just walking the walk of sustainability; it's making it feel approachable (and delicious).",
  },
  {
    id: 6,
    name: "Mole Mole Mexican Cuisine",
    description:
      "Each day, during lunch hours, Alberta locals line up at this orange-and-green cart in pursuit of chiles en nogada stuffed with ground pork and bowls of lipstick-red pozole, sipping prickly pear agua fresca and horchata while they wait for their orders. The cart's menu is extensive, with everything from soy curl burritos to cochinita pibil, but it should be no surprise that this cart's particular specialty is its moles: a sweet and nutty mole negro, an herbaceous and vegetal mole verde. The cart's fuchsia mole rosa, a rarity at Portland Mexican restaurants made with earthy beets and hibiscus flowers, is available as a coating for tender enchiladas or simply paired with fresh salmon, a smart choice of protein for the sweet-earthy beet sauce. The artful plating — colorful ceramic bowls, garnished with flowers — sets each dish over the top, making this one of the city's finest Mexican carts.",
  },
  {
    id: 7,
    name: "Urdaneta",
    description:
      "At this intimate pintxo bar, Javier and Jael Canteras have developed a reputation for straight-up goofy dishes winking at Northern Spanish flavors, like a bikini (ham and cheese sandwich) made with American and jamon serrano, or an octopus a la brasa with chorizo XO. That being said, the traditional Spanish dishes on the menu remain true to the originals, whether it's crispy-on-the-outside, gooey-on-the-inside croquetas de jamon, or a blackened slice of Basque cheesecake. The restaurant's selection of vermouth and sherry would make any Iberian proud.",
  },
  {
    id: 8,
    name: "Lovely's Fifty Fifty",
    description:
      "In a North Mississippi pizza cafe that feels casual but intimate, pizzaiola Sarah Minnick embraces paradoxes: She took something brimming with childhood charm — pizza and ice cream — and gave it a high-end twist. Ever-changing pizzas are a garden of edible flowers and mushrooms, atop an airy-but-sturdy pizza dough made with Oregon whole grains; they're joined by salads and soups made with peak-season produce. While the menu changes on an almost weekly basis, Minnick's culinary creativity and attention to detail remains constant. If someone is defining Portland's distinct pizza style, it's Minnick.",
  },
  {
    id: 9,
    name: "The Rustic Spoon",
    description:
      "A cozy spot offering farm-to-table American cuisine with a modern twist.",
  },
  {
    id: 10,
    name: "Saffron & Sage",
    description:
      "Upscale Indian bistro known for its flavorful curries and artisanal cocktails.",
  },
  {
    id: 11,
    name: "Casa di Pasta",
    description:
      "Traditional Italian trattoria famous for handmade pasta and wood-fired pizzas.",
  },
  {
    id: 12,
    name: "Seaside Catch",
    description:
      "Fresh seafood and stunning ocean views make this a must-visit coastal eatery.",
  },
  {
    id: 13,
    name: "Tokyo Street",
    description:
      "Trendy Japanese fusion restaurant with sushi, ramen, and izakaya small plates.",
  },
  {
    id: 14,
    name: "Bistro Provence",
    description:
      "Charming French bistro serving authentic dishes from southern France.",
  },
  {
    id: 15,
    name: "El Fuego",
    description:
      "Vibrant Mexican grill known for its tacos, tequila flights, and live mariachi music.",
  },
  {
    id: 16,
    name: "Green Fork",
    description:
      "Plant-based eatery specializing in organic vegan bowls and smoothies.",
  },
  {
    id: 17,
    name: "The Butcher’s Block",
    description:
      "High-end steakhouse offering dry-aged beef and a curated whiskey selection.",
  },
  {
    id: 18,
    name: "Pho Haven",
    description:
      "Casual Vietnamese joint dishing out hearty pho, banh mi, and bubble tea.",
  },
  {
    id: 19,
    name: "Bella Luna",
    description:
      "Romantic Mediterranean restaurant with candlelit dining and rooftop seating.",
  },
  {
    id: 20,
    name: "Urban Dumpling Co.",
    description:
      "Modern Chinese street food served fast with a focus on handmade dumplings.",
  },
  {
    id: 20,
    name: "Urban Dumpling Co.",
    description:
      "Modern Chinese street food served fast with a focus on handmade dumplings.",
  },
  {
    id: 21,
    name: "The Curry Pot",
    description:
      "Homestyle South Indian cuisine served in a warm, rustic setting.",
  },
  {
    id: 22,
    name: "Kebab Kingdom",
    description:
      "Middle Eastern grill house specializing in shawarma and charcoal kebabs.",
  },
  {
    id: 23,
    name: "Burger & Barrel",
    description:
      "Craft burger joint with gourmet toppings and a selection of local brews.",
  },
  {
    id: 24,
    name: "La Taquería del Sol",
    description:
      "Street-style tacos, spicy salsas, and a vibrant Mexican atmosphere.",
  },
  {
    id: 25,
    name: "Noodle & Co.",
    description:
      "Pan-Asian noodle bar featuring ramen, udon, and wok-fried favorites.",
  },
  {
    id: 26,
    name: "The Garden Table",
    description:
      "Health-focused café offering salads, juices, and sustainable bites.",
  },
  {
    id: 27,
    name: "Smoke & Oak",
    description:
      "Barbecue smokehouse with slow-cooked meats and signature sauces.",
  },
  {
    id: 28,
    name: "Tandoori Nights",
    description:
      "Classic North Indian dishes with rich flavors and traditional tandoor cooking.",
  },
  {
    id: 29,
    name: "The Sushi Loft",
    description:
      "Chic rooftop sushi lounge serving premium rolls and sake cocktails.",
  },
  {
    id: 30,
    name: "Crepe & Co.",
    description:
      "French-style creperie offering sweet and savory options all day long.",
  },
  {
    id: 31,
    name: "Pita Planet",
    description:
      "Casual Mediterranean café with wraps, hummus, and fresh-baked pita.",
  },
  {
    id: 32,
    name: "The Vegan Joint",
    description:
      "Plant-powered comfort food with global flavors and creative twists.",
  },
  {
    id: 33,
    name: "Steamy Buns",
    description: "Trendy spot for bao buns, dim sum, and Asian street snacks.",
  },
  {
    id: 34,
    name: "The Crab Shack",
    description:
      "Laid-back seafood spot famous for its crab boils and beachy vibes.",
  },
  {
    id: 35,
    name: "Al Dente",
    description:
      "Upscale Italian dining experience with an extensive wine list and fresh pasta.",
  },
  {
    id: 36,
    name: "Chopsticks & Wok",
    description:
      "Quick-serve Asian eatery known for stir-fries and takeout classics.",
  },
  {
    id: 37,
    name: "Tapas & Vino",
    description:
      "Spanish tapas bar serving small plates and a wide variety of wines.",
  },
  {
    id: 38,
    name: "The Brunch House",
    description:
      "All-day brunch café with pancakes, eggs benedict, and bottomless mimosas. Great for weekend gatherings.",
  },
  {
    id: 39,
    name: "Rollin’ Sushi",
    description:
      "Funky sushi food truck turned full restaurant, known for bold flavors.",
  },

  {
    id: 40,
    name: "The Ember Room",
    description:
      "Nestled in the heart of downtown, The Ember Room offers a moody, candlelit atmosphere with an open-fire kitchen that specializes in flame-kissed meats, seasonal vegetables, and elevated comfort food. Perfect for date nights and late-night bites.",
  },
  {
    id: 41,
    name: "Harvest & Hearth",
    description:
      "A farm-to-fork concept rooted in sustainability, Harvest & Hearth works with local farmers to bring you an ever-changing menu inspired by the seasons. Expect colorful produce, rustic breads, and handcrafted mains served in a warm, earthy setting.",
  },
  {
    id: 42,
    name: "Lotus & Lantern",
    description:
      "An upscale Pan-Asian restaurant blending traditional flavors with modern plating, Lotus & Lantern offers dishes like lemongrass-crusted salmon and tamarind duck confit. The space is zen-inspired, complete with bamboo walls and soft ambient lighting.",
  },
  {
    id: 43,
    name: "Brass Bell Tavern",
    description:
      "This old-world pub delivers hearty plates and cozy vibes, with leather booths, exposed brick, and an impressive selection of whiskeys and craft beers. From shepherd’s pie to truffle mac and cheese, every dish is made to warm your soul.",
  },
  {
    id: 44,
    name: "Sora Sky Kitchen",
    description:
      "Perched atop a high-rise, Sora offers breathtaking city views alongside an avant-garde Japanese dining experience. Expect omakase tasting menus, rare imported sakes, and dishes that are as much art as they are food.",
  },
  {
    id: 45,
    name: "Nomad’s Table",
    description:
      "A globally inspired dining adventure, Nomad’s Table pulls recipes from every corner of the world. Whether it's Moroccan tagine, Korean bulgogi, or Peruvian ceviche, each dish is authentically crafted and beautifully presented in a boho-chic environment.",
  },
  {
    id: 46,
    name: "Velvet Fig",
    description:
      "A romantic European-inspired bistro known for its candlelit tables, wine pairings, and slow-cooked dishes like duck à l’orange and porcini risotto. Velvet Fig is where timeless flavors meet impeccable hospitality.",
  },
  {
    id: 47,
    name: "Backyard Smokehouse",
    description:
      "What started as a backyard pitmaster’s weekend hobby has grown into a local legend. Backyard Smokehouse serves up low-and-slow barbecue with bold, smoky flavor—think brisket, burnt ends, and jalapeño cornbread with honey butter.",
  },
  {
    id: 48,
    name: "Bloom Plant Kitchen",
    description:
      "A vibrant, colorful space that celebrates all things plant-based, Bloom offers a creative, globally inspired vegan menu. From beet poke bowls to jackfruit tacos and cashew cheesecakes, each plate is as nourishing as it is Instagram-worthy.",
  },
  {
    id: 49,
    name: "Marée Coastal Cuisine",
    description:
      "Marée delivers a luxurious seafood experience right on the waterfront. Featuring sustainably caught fish, an oyster bar with selections from both coasts, and a curated wine list, this is fine dining with a fresh ocean breeze.",
  },
  {
    id: 50,
    name: "Crumbs & Whiskers Café",
    description:
      "A cozy, whimsical café where the pastries are homemade, the lattes are frothy, and rescue cats roam freely for cuddles. Crumbs & Whiskers combines a café experience with a cat adoption center—yes, you might leave with a croissant *and* a kitten.",
  },
];
