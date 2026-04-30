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
    <section id="menu" className="py-32 md:py-40 border-t border-primary/15 relative bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 border-t border-primary/15" />
            <span className="text-primary tracking-[0.25em] text-[11px] uppercase font-medium">
              CULINARY ART
            </span>
            <div className="w-8 border-t border-primary/15" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl lg:text-6xl text-foreground tracking-[-0.02em]"
          >
            A Taste of Eternity
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-8 mb-20"
        >
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className="relative py-2 text-[11px] tracking-[0.2em] uppercase transition-colors duration-500 text-foreground/60 hover:text-foreground"
            >
              <span className={`relative z-10 ${activeTab === cat.id ? "text-primary" : ""}`}>
                {cat.label}
              </span>
              {activeTab === cat.id && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-0"
            >
              {menuItems[activeTab].map((item, idx) => (
                <div key={idx} className="group py-6 border-b border-primary/10 last:border-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div className="flex-shrink-0 max-w-[280px] sm:max-w-none">
                    <div className="flex items-center gap-4 mb-1">
                      <h3 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors duration-500">
                        {item.name}
                      </h3>
                      {item.isChefPick && (
                        <span className="text-[9px] uppercase tracking-[0.2em] text-primary px-2 py-0.5 border border-primary/30 rounded-full shrink-0">
                          Chef's Pick
                        </span>
                      )}
                    </div>
                    <p className="text-foreground/60 font-light text-sm italic font-serif">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="hidden sm:block flex-1 border-b border-dotted border-primary/20 mx-6 mb-2 opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  <div className="text-primary font-medium tracking-[0.1em] text-lg font-serif shrink-0">
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