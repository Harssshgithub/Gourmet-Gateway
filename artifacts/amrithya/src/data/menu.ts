export const menuCategories = [
  { id: "starters", label: "Starters" },
  { id: "mains", label: "Main Course" },
  { id: "mocktails", label: "Mocktails" },
  { id: "desserts", label: "Desserts" },
  { id: "specials", label: "Chef Specials" },
] as const;

export type MenuCategoryId = (typeof menuCategories)[number]["id"];

export const menuTags = [
  "Vegetarian",
  "Vegan",
  "Gluten-Free",
  "Spicy",
  "Dairy-Free",
  "Contains Nuts",
  "Chef's Signature",
  "Seafood",
  "Contains Egg",
] as const;

export type MenuTag = (typeof menuTags)[number];

export type MenuItem = {
  id: string;
  category: MenuCategoryId;
  name: string;
  desc: string;
  price: string;
  tags: readonly MenuTag[];
};

export const menuItems: readonly MenuItem[] = [
  {
    id: "smoked-burrata",
    category: "starters",
    name: "Smoked Burrata",
    desc: "Saffron honey, black pepper tuile, micro greens",
    price: "780",
    tags: ["Vegetarian", "Gluten-Free"],
  },
  {
    id: "truffle-edamame-dim-sum",
    category: "starters",
    name: "Truffle Edamame Dim Sum",
    desc: "Hand-folded crystal wrapper, white truffle oil",
    price: "650",
    tags: ["Vegetarian", "Vegan", "Dairy-Free"],
  },
  {
    id: "charred-asparagus-tikka",
    category: "starters",
    name: "Charred Asparagus Tikka",
    desc: "Creamy cashew marinade, mint, charcoal dust",
    price: "620",
    tags: ["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "Contains Nuts"],
  },
  {
    id: "lotus-stem-crisp",
    category: "starters",
    name: "Lotus Stem Crisp",
    desc: "Honey-chili glaze, toasted sesame, spring onion",
    price: "550",
    tags: ["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "Spicy"],
  },
  {
    id: "saffron-kofta-curry",
    category: "mains",
    name: "Saffron Kofta Curry",
    desc: "Cottage cheese dumplings, rich cashew gravy, edible gold",
    price: "850",
    tags: ["Vegetarian", "Gluten-Free", "Contains Nuts", "Chef's Signature"],
  },
  {
    id: "wild-mushroom-risotto",
    category: "mains",
    name: "Wild Mushroom Risotto",
    desc: "Arborio rice, porcini dust, aged parmesan",
    price: "920",
    tags: ["Vegetarian", "Gluten-Free", "Chef's Signature"],
  },
  {
    id: "pan-seared-sea-bass",
    category: "mains",
    name: "Pan-Seared Sea Bass",
    desc: "Lemon butter emulsion, crushed baby potatoes, asparagus",
    price: "1250",
    tags: ["Gluten-Free", "Seafood", "Chef's Signature"],
  },
  {
    id: "black-garlic-udon",
    category: "mains",
    name: "Black Garlic Udon",
    desc: "Hand-pulled noodles, black garlic soy, shiitake",
    price: "880",
    tags: ["Vegetarian", "Contains Egg", "Chef's Signature"],
  },
  {
    id: "the-golden-hour",
    category: "mocktails",
    name: "The Golden Hour",
    desc: "Smoked orange, rosemary syrup, ginger ale",
    price: "450",
    tags: ["Vegan", "Dairy-Free", "Gluten-Free"],
  },
  {
    id: "midnight-rose",
    category: "mocktails",
    name: "Midnight Rose",
    desc: "Rose petal extract, lychee, activated charcoal",
    price: "420",
    tags: ["Vegan", "Dairy-Free", "Gluten-Free"],
  },
  {
    id: "amrithya-elixir",
    category: "mocktails",
    name: "Amrithya Elixir",
    desc: "Clarified green apple, elderflower, gold leaf",
    price: "480",
    tags: ["Vegan", "Dairy-Free", "Gluten-Free", "Chef's Signature"],
  },
  {
    id: "citrus-basil-smash",
    category: "mocktails",
    name: "Citrus Basil Smash",
    desc: "Fresh basil, yuzu juice, sparkling water",
    price: "380",
    tags: ["Vegan", "Dairy-Free", "Gluten-Free"],
  },
  {
    id: "24k-chocolate-dome",
    category: "desserts",
    name: "24K Chocolate Dome",
    desc: "Dark chocolate mousse, hazelnut praline, gold dust",
    price: "850",
    tags: ["Vegetarian", "Gluten-Free", "Contains Nuts", "Contains Egg", "Chef's Signature"],
  },
  {
    id: "rose-pistachio-tres-leches",
    category: "desserts",
    name: "Rose & Pistachio Tres Leches",
    desc: "Layered sponge, pistachio cream, dried rose",
    price: "750",
    tags: ["Vegetarian", "Contains Nuts", "Contains Egg"],
  },
  {
    id: "saffron-panna-cotta",
    category: "desserts",
    name: "Saffron Panna Cotta",
    desc: "Milk sponge, saffron infusion, almond brittle",
    price: "680",
    tags: ["Vegetarian", "Gluten-Free", "Contains Nuts"],
  },
  {
    id: "classic-tiramisu",
    category: "desserts",
    name: "Classic Tiramisu",
    desc: "Coffee soaked sponge, mascarpone, cocoa dust",
    price: "620",
    tags: ["Vegetarian", "Contains Egg"],
  },
  {
    id: "chefs-tasting-platter",
    category: "specials",
    name: "Chef's Tasting Platter",
    desc: "A curated journey through our signature flavours",
    price: "2400",
    tags: ["Vegetarian", "Contains Nuts", "Chef's Signature"],
  },
  {
    id: "lobster-thermidor",
    category: "specials",
    name: "Lobster Thermidor",
    desc: "Classic French style, gruyere crust, herb salad",
    price: "1850",
    tags: ["Gluten-Free", "Seafood", "Contains Egg", "Chef's Signature"],
  },
  {
    id: "tandoori-artichoke",
    category: "specials",
    name: "Tandoori Artichoke",
    desc: "Imported artichoke hearts, mustard marination",
    price: "950",
    tags: ["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "Spicy", "Chef's Signature"],
  },
  {
    id: "wagyu-beef-filet",
    category: "specials",
    name: "Wagyu Beef Filet",
    desc: "Truffle mash, glazed carrots, red wine jus",
    price: "3200",
    tags: ["Gluten-Free", "Chef's Signature"],
  },
];