import { useState } from "react";
import { motion } from "framer-motion";
import { menuCategories, menuItems, type MenuCategoryId } from "@/data/menu";

export function MenuPreview() {
  const [activeTab, setActiveTab] = useState<MenuCategoryId>("starters");

  return (
    <section id="menu" className="py-24 lg:py-48 relative bg-background">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-8 border-t border-primary/30" />
            <span className="text-primary tracking-[0.3em] text-[11px] uppercase font-medium">
              CULINARY ART
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground tracking-[-0.02em] leading-[1.0]"
          >
            A Taste of Eternity
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-8 md:gap-12 mb-20"
        >
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              data-testid={`button-preview-category-${cat.id}`}
              onClick={() => setActiveTab(cat.id)}
              className="relative py-2 text-[11px] tracking-[0.2em] uppercase transition-colors duration-[0.7s] text-foreground/60 hover:text-foreground"
            >
              <span className={`relative z-10 transition-colors duration-[0.7s] ${activeTab === cat.id ? "text-primary" : ""}`}>
                {cat.label}
              </span>
              {activeTab === cat.id && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary"
                  initial={false}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </button>
          ))}
        </motion.div>

        <div className="max-w-4xl mx-auto min-h-[400px]">
          <div className="space-y-0">
            {menuItems.filter((item) => item.category === activeTab).map((item) => (
              <div key={item.id} data-testid={`menu-preview-item-${item.id}`} className="group py-6 border-b border-primary/10 last:border-0 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                <div className="flex-shrink-0 md:max-w-[400px]">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 data-testid={`text-preview-dish-${item.id}`} className="font-serif text-2xl md:text-3xl text-foreground transition-colors duration-[0.7s]">
                      {item.name}
                    </h3>
                    {item.tags.includes("Chef's Signature") && (
                      <span className="text-[9px] uppercase tracking-[0.2em] text-primary/70">
                        Chef's Pick
                      </span>
                    )}
                  </div>
                  <p data-testid={`text-preview-description-${item.id}`} className="text-foreground/70 font-light text-sm md:text-base leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
                
                <div className="hidden md:block flex-1 border-b border-dotted border-primary/20 mx-8 mb-2 opacity-50" />
                
                <div data-testid={`text-preview-price-${item.id}`} className="text-primary font-medium tracking-[0.1em] text-lg md:text-xl font-serif shrink-0">
                  ₹{item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}