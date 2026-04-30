import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuCategories = [
  { id: "starters", label: "Starters" },
  { id: "mains", label: "Main Course" },
  { id: "mocktails", label: "Mocktails" },
  { id: "desserts", label: "Desserts" },
  { id: "specials", label: "Chef Specials" },
];

const menuItems: Record<string, { name: string; desc: string; price: string; isChefPick?: boolean }[]> = {
  starters: [
    { name: "Smoked Burrata", desc: "Saffron honey, black pepper tuile, micro greens", price: "780", isChefPick: true },
    { name: "Truffle Edamame Dim Sum", desc: "Hand-folded crystal wrapper, white truffle oil", price: "650" },
    { name: "Charred Asparagus Tikka", desc: "Creamy cashew marinade, mint, charcoal dust", price: "620" },
    { name: "Lotus Stem Crisp", desc: "Honey-chili glaze, toasted sesame, spring onion", price: "550" },
  ],
  mains: [
    { name: "Saffron Kofta Curry", desc: "Cottage cheese dumplings, rich cashew gravy, edible gold", price: "850", isChefPick: true },
    { name: "Wild Mushroom Risotto", desc: "Arborio rice, porcini dust, aged parmesan", price: "920" },
    { name: "Pan-Seared Sea Bass", desc: "Lemon butter emulsion, crushed baby potatoes, asparagus", price: "1250" },
    { name: "Black Garlic Udon", desc: "Hand-pulled noodles, black garlic soy, shiitake", price: "880" },
  ],
  mocktails: [
    { name: "The Golden Hour", desc: "Smoked orange, rosemary syrup, ginger ale", price: "450", isChefPick: true },
    { name: "Midnight Rose", desc: "Rose petal extract, lychee, activated charcoal", price: "420" },
    { name: "Amrithya Elixir", desc: "Clarified green apple, elderflower, gold leaf", price: "480" },
    { name: "Citrus Basil Smash", desc: "Fresh basil, yuzu juice, sparkling water", price: "380" },
  ],
  desserts: [
    { name: "24K Chocolate Dome", desc: "Dark chocolate mousse, hazelnut praline, gold dust", price: "850", isChefPick: true },
    { name: "Rose & Pistachio Tres Leches", desc: "Layered sponge, pistachio cream, dried rose", price: "750" },
    { name: "Saffron Panna Cotta", desc: "Milk sponge, saffron infusion, almond brittle", price: "680" },
  ],
  specials: [
    { name: "Chef's Tasting Platter", desc: "A curated journey through our signature flavors", price: "2400", isChefPick: true },
    { name: "Lobster Thermidor", desc: "Classic french style, gruyere crust, herb salad", price: "1850" },
    { name: "Tandoori Artichoke", desc: "Imported artichoke hearts, mustard marination", price: "950" },
  ]
};

export function MenuPreview() {
  const [activeTab, setActiveTab] = useState("starters");

  return (
    <section id="menu" className="py-24 md:py-32 border-t border-border/30 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-primary tracking-[0.2em] text-xs uppercase mb-4 block">
            Culinary Art
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            A Taste of Eternity
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-2 text-sm tracking-widest uppercase transition-all duration-300 border-b-2 ${
                activeTab === cat.id 
                  ? "text-primary border-primary" 
                  : "text-foreground/50 border-transparent hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {menuItems[activeTab].map((item, idx) => (
                <div key={idx} className="group flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-1">
                      <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      {item.isChefPick && (
                        <span className="text-[10px] uppercase tracking-wider bg-primary/10 text-primary px-2 py-0.5 border border-primary/20 rounded-sm">
                          Chef's Pick
                        </span>
                      )}
                    </div>
                    <p className="text-foreground/60 font-light text-sm">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="hidden sm:block flex-1 border-b border-dotted border-border/50 mx-4 mb-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="text-primary font-medium tracking-wider">
                    ₹{item.price}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}