import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Check, ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { menuCategories, menuItems, menuTags, type MenuTag } from "@/data/menu";

export default function Menu() {
  const [selectedTags, setSelectedTags] = useState<MenuTag[]>([]);
  const [category, setCategory] = useState<"all" | (typeof menuCategories)[number]["id"]>("all");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    document.title = "Menu — Amrithya | The Eternal Dining";
    const description = "Explore Amrithya's seasonal menu and filter dishes by dietary preferences, ingredients, and chef signatures.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }, []);

  const filteredItems = useMemo(
    () =>
      menuItems.filter((item) => {
        const categoryMatches = category === "all" || item.category === category;
        const tagsMatch = selectedTags.every((tag) => item.tags.includes(tag));
        return categoryMatches && tagsMatch;
      }),
    [category, selectedTags],
  );

  const toggleTag = (tag: MenuTag) => {
    setSelectedTags((current) =>
      current.includes(tag) ? current.filter((selected) => selected !== tag) : [...current, tag],
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setCategory("all");
  };

  const hasFilters = selectedTags.length > 0 || category !== "all";

  return (
    <div className="min-h-[100dvh] bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Nav />

      <main>
        <header className="relative overflow-hidden border-b border-primary/10 pt-36 pb-20 md:pt-44 md:pb-28">
          <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
          <div className="container relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
            <Link
              href="/"
              data-testid="link-back-home"
              className="mb-14 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-foreground/45 transition-colors duration-500 hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.4} />
              Back to Amrithya
            </Link>
            <div className="grid items-end gap-10 md:grid-cols-[1fr_0.7fr] md:gap-20">
              <div>
                <div className="mb-7 flex items-center gap-4">
                  <div className="w-8 border-t border-primary/40" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-primary">
                    The Evening Menu
                  </span>
                </div>
                <h1 data-testid="text-menu-page-title" className="max-w-3xl font-serif text-6xl leading-[0.92] tracking-[-0.035em] text-foreground md:text-8xl">
                  An unhurried<br />
                  <span className="italic font-light text-foreground/70">table, thoughtfully set.</span>
                </h1>
              </div>
              <div className="border-l border-primary/20 pl-6 md:mb-1 md:pl-8">
                <p className="max-w-sm text-sm font-light leading-[1.85] text-foreground/60 md:text-base">
                  A considered collection of flavours from the kitchen at Amrithya. Choose a preference, or simply follow your appetite.
                </p>
                <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-primary/70">
                  Dehradun · Seasonal selection
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="container mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20 lg:px-16" aria-labelledby="menu-filter-heading">
          <div className="mb-8 flex items-center justify-between gap-6">
            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.24em] text-primary">Find your way through</p>
              <h2 id="menu-filter-heading" className="font-serif text-3xl text-foreground md:text-4xl">The menu</h2>
            </div>
            <button
              type="button"
              data-testid="button-toggle-filters"
              aria-expanded={filtersOpen}
              aria-controls="menu-filters"
              onClick={() => setFiltersOpen((open) => !open)}
              className="inline-flex items-center gap-2 border border-primary/20 px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-foreground/70 transition-colors duration-500 hover:border-primary hover:text-primary md:hidden"
            >
              <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={1.4} />
              Filters
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-500 ${filtersOpen ? "rotate-180" : ""}`} strokeWidth={1.4} />
            </button>
          </div>

          <div id="menu-filters" className={`${filtersOpen ? "block" : "hidden"} mb-14 md:block`}>
            <div className="border-y border-primary/15 py-6">
              <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
                <span className="mr-2 text-[10px] uppercase tracking-[0.2em] text-foreground/40">Course</span>
                <button
                  type="button"
                  data-testid="button-filter-category-all"
                  aria-pressed={category === "all"}
                  onClick={() => setCategory("all")}
                  className={`text-[11px] uppercase tracking-[0.18em] transition-colors duration-500 ${category === "all" ? "text-primary" : "text-foreground/60 hover:text-foreground"}`}
                >
                  All courses
                </button>
                {menuCategories.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    data-testid={`button-filter-category-${item.id}`}
                    aria-pressed={category === item.id}
                    onClick={() => setCategory(item.id)}
                    className={`text-[11px] uppercase tracking-[0.18em] transition-colors duration-500 ${category === item.id ? "text-primary" : "text-foreground/60 hover:text-foreground"}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="border-b border-primary/15 py-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40">Dietary &amp; preference</span>
                {hasFilters && (
                  <button
                    type="button"
                    data-testid="button-clear-filters"
                    onClick={clearFilters}
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-primary transition-colors duration-500 hover:text-foreground"
                  >
                    <X className="h-3 w-3" strokeWidth={1.5} />
                    Clear all
                  </button>
                )}
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {menuTags.map((tag) => {
                  const selected = selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      data-testid={`button-filter-${tag.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      aria-pressed={selected}
                      onClick={() => toggleTag(tag)}
                      className={`flex min-h-11 items-center justify-between border px-4 py-3 text-left text-[11px] uppercase tracking-[0.13em] transition-colors duration-500 ${selected ? "border-primary bg-primary/10 text-primary" : "border-primary/10 text-foreground/65 hover:border-primary/45 hover:text-foreground"}`}
                    >
                      <span>{tag}</span>
                      <span className={`flex h-4 w-4 items-center justify-center border transition-colors duration-500 ${selected ? "border-primary bg-primary text-background" : "border-foreground/25"}`}>
                        {selected && <Check className="h-3 w-3" strokeWidth={2} />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mb-7 flex items-end justify-between border-b border-primary/15 pb-5">
            <p data-testid="text-menu-result-count" className="text-[11px] uppercase tracking-[0.2em] text-foreground/45">
              <span className="text-primary">{filteredItems.length}</span> {filteredItems.length === 1 ? "dish" : "dishes"} to consider
            </p>
            {hasFilters && (
              <p className="hidden text-[10px] uppercase tracking-[0.18em] text-foreground/35 sm:block">
                Your preferences, together
              </p>
            )}
          </div>

          <AnimatePresence mode="popLayout" initial={false}>
            {filteredItems.length > 0 ? (
              <motion.div
                key={`${category}-${selectedTags.join("-")}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-x-14 md:grid-cols-2"
              >
                {filteredItems.map((item, index) => {
                  const categoryLabel = menuCategories.find((entry) => entry.id === item.category)?.label;
                  return (
                    <article
                      key={item.id}
                      data-testid={`menu-result-${item.id}`}
                      className={`group py-8 ${index < filteredItems.length - 2 ? "border-b border-primary/10" : ""} ${index === filteredItems.length - 1 && filteredItems.length % 2 === 0 ? "border-b-0" : ""} md:border-b md:border-primary/10`}
                    >
                      <div className="mb-4 flex items-start justify-between gap-5">
                        <div>
                          <p className="mb-3 text-[9px] uppercase tracking-[0.22em] text-primary/65">{categoryLabel}</p>
                          <h3 data-testid={`text-dish-name-${item.id}`} className="font-serif text-3xl leading-none text-foreground transition-colors duration-500 group-hover:text-primary md:text-4xl">
                            {item.name}
                          </h3>
                        </div>
                        <span data-testid={`text-dish-price-${item.id}`} className="shrink-0 pt-6 font-serif text-xl tracking-[0.06em] text-primary">
                          ₹{item.price}
                        </span>
                      </div>
                      <p data-testid={`text-dish-description-${item.id}`} className="max-w-md text-sm font-light leading-[1.7] text-foreground/60">
                        {item.desc}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                        {item.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-[9px] uppercase tracking-[0.15em] text-foreground/35">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-primary/15 px-6 py-20 text-center"
                data-testid="empty-menu-results"
              >
                <p className="mb-4 font-serif text-4xl text-foreground">A rare combination.</p>
                <p className="mx-auto max-w-md text-sm font-light leading-[1.7] text-foreground/55">
                  Nothing on the current menu meets every preference selected. Try removing one filter to continue exploring.
                </p>
                <button
                  type="button"
                  data-testid="button-empty-clear-filters"
                  onClick={clearFilters}
                  className="mt-8 border border-primary/35 px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-primary transition-colors duration-500 hover:bg-primary hover:text-background"
                >
                  Return to the full menu
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <section className="border-t border-primary/10 bg-card/30 py-20 md:py-28">
          <div className="container mx-auto max-w-4xl px-6 text-center md:px-10">
            <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-primary">A note from the kitchen</p>
            <p className="font-serif text-3xl leading-[1.2] text-foreground/80 md:text-5xl">
              “The finest ingredient is time.”
            </p>
            <p className="mx-auto mt-6 max-w-lg text-sm font-light leading-[1.8] text-foreground/50">
              Menus change with the seasons, the market, and the quiet instinct of our chefs. Please tell your server about any allergies when you arrive.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}