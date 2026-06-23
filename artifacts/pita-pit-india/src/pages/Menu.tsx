import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MenuCard } from "@/components/MenuCard";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const menuData = {
  "Pita Wraps": [
    { name: "Chicken Club Pita Wrap", isVeg: false, description: "Grilled chicken, crispy bacon, fresh lettuce, tomato & club sauce", price: "₹349", imageQuery: "chicken,club,wrap" },
    { name: "Falafel Pita Wrap", isVeg: true, description: "Golden falafel, hummus, cucumber, red onion & tahini", price: "₹299", imageQuery: "falafel,pita" },
    { name: "Roasted Chicken Breast Pita Wrap", isVeg: false, description: "Herb-roasted chicken, roasted peppers, spinach & garlic aioli", price: "₹329", imageQuery: "roasted,chicken,wrap" },
    { name: "Paneer Tikka Pita Wrap", isVeg: true, description: "Tandoori paneer, pickled onions, mint chutney & fresh coriander", price: "₹299", imageQuery: "paneer,tikka,wrap" },
    { name: "Prawn & Avocado Pita Wrap", isVeg: false, description: "Chilled prawns, ripe avocado, shredded slaw & lemon-herb mayo", price: "₹379", imageQuery: "prawn,avocado,wrap" },
  ],
  "Salads": [
    { name: "Chicken Crave Salad", isVeg: false, description: "Grilled chicken on a crisp mix of greens, corn, avocado & honey-mustard", price: "₹289", imageQuery: "chicken,salad,greens" },
    { name: "Chicken Tikka Salad", isVeg: false, description: "Tandoor-kissed chicken tikka, kachumber salad & mint chutney drizzle", price: "₹299", imageQuery: "chicken,tikka,salad" },
    { name: "Veg Greek Salad", isVeg: true, description: "Crisp romaine, olives, cucumber, feta & classic Greek vinaigrette", price: "₹249", imageQuery: "greek,salad" },
    { name: "Garden Fresh Salad", isVeg: true, description: "Seasonal greens, cherry tomatoes, seeds & a light citrus vinaigrette", price: "₹229", imageQuery: "garden,salad,fresh" },
  ],
  "Rice Bowls": [
    { name: "Grilled Chicken Rice Bowl", isVeg: false, description: "Herb-seasoned chicken, steamed rice, roasted veggies & garlic sauce", price: "₹319", imageQuery: "chicken,rice,bowl" },
    { name: "Falafel Rice Bowl", isVeg: true, description: "Falafel, saffron rice, hummus, cucumber & herb dressing", price: "₹289", imageQuery: "falafel,rice,bowl" },
    { name: "Paneer Rice Bowl", isVeg: true, description: "Marinated paneer, basmati rice, pickled veggies & mint-yogurt drizzle", price: "₹299", imageQuery: "paneer,rice,bowl" },
  ],
  "Sides": [
    { name: "Classic Hummus & Pita Chips", isVeg: true, description: "Creamy house hummus served with baked pita chips", price: "₹149", imageQuery: "hummus,pita,chips" },
    { name: "Baked Wedges", isVeg: true, description: "Herb-seasoned potato wedges, oven-baked, served with dipping sauce", price: "₹129", imageQuery: "potato,wedges,baked" },
    { name: "Garden Soup of the Day", isVeg: true, description: "Ask your server for today's fresh seasonal soup", price: "₹119", imageQuery: "soup,bowl,fresh" },
  ],
  "Beverages": [
    { name: "Classic Mango Milkshake", isVeg: true, description: "Thick, chilled Alphonso mango shake — pure summer in a cup", price: "₹179", imageQuery: "mango,milkshake" },
    { name: "Dark Chocolate Protein Shake", isVeg: true, description: "Belgian dark chocolate blended with whey protein & almond milk", price: "₹219", imageQuery: "chocolate,milkshake" },
    { name: "Fresh Lemonade", isVeg: true, description: "Freshly squeezed lemon, mint & a touch of rock salt", price: "₹99", imageQuery: "lemonade,fresh,drink" },
    { name: "Cold Brew Iced Coffee", isVeg: true, description: "Slow-steeped cold brew, lightly sweetened, served over ice", price: "₹149", imageQuery: "cold,brew,iced,coffee" },
  ],
  "Desserts": [
    { name: "Chocolate Brownie", isVeg: true, description: "Fudgy dark chocolate brownie, served warm", price: "₹129", imageQuery: "chocolate,brownie" },
    { name: "Fruit & Yogurt Parfait", isVeg: true, description: "Greek yogurt, fresh seasonal fruit & granola crunch", price: "₹149", imageQuery: "yogurt,parfait,fruit" },
    { name: "Pita Pudding", isVeg: true, description: "House-made bread pudding with a caramel drizzle", price: "₹139", imageQuery: "bread,pudding,dessert" },
  ]
};

const buildYourOwn = {
  fillings: ["Chicken Club", "Falafel", "Paneer Tikka", "Roasted Chicken", "Prawn & Avocado"],
  toppings: ["Lettuce", "Tomato", "Cucumber", "Red Onion", "Olives", "Roasted Peppers", "Corn", "Avocado", "Jalapeños", "Feta Cheese"],
  sauces: ["Tahini", "Garlic Aioli", "Mint Chutney", "Honey Mustard", "Club Sauce", "Hot Sauce"]
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState<keyof typeof menuData>("Pita Wraps");
  const [vegOnly, setVegOnly] = useState(false);

  // Build Your Own state
  const [selectedFillings, setSelectedFillings] = useState<string[]>([]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [selectedSauces, setSelectedSauces] = useState<string[]>([]);

  const toggleItem = (item: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const displayedMenu = vegOnly 
    ? menuData[activeTab].filter(item => item.isVeg)
    : menuData[activeTab];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="pt-16 pb-10 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <h1 className="font-serif text-5xl font-bold text-foreground">Our Menu</h1>
              <div className="flex items-center space-x-2 bg-secondary/50 px-4 py-2 rounded-full border border-border">
                <Label htmlFor="veg-mode" className="font-medium cursor-pointer text-sm">Veg Only</Label>
                <Switch 
                  id="veg-mode" 
                  checked={vegOnly} 
                  onCheckedChange={setVegOnly}
                  className="data-[state=checked]:bg-green-600"
                />
                <div className="w-2.5 h-2.5 rounded-full bg-green-600 ml-1"></div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex overflow-x-auto py-6 mt-6 gap-2 hide-scrollbar">
              {(Object.keys(menuData) as Array<keyof typeof menuData>).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab 
                      ? "bg-primary text-primary-foreground shadow-md" 
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-background/50 flex-grow">
        <div className="container mx-auto px-4 md:px-6">
          {displayedMenu.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {displayedMenu.map((item, index) => (
                <ScrollReveal key={item.name} delay={index * 50}>
                  <MenuCard {...item} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No vegetarian options available in this category.</p>
              <Button 
                variant="outline" 
                className="mt-4 rounded-full" 
                onClick={() => setVegOnly(false)}
              >
                View All Options
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Build Your Own Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Build Your Own Pita</h2>
              <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Mix and match exactly what you're craving. Click below to plan your perfect wrap.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16">
            <ScrollReveal delay={100} className="space-y-4">
              <h3 className="font-serif text-2xl font-semibold mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm mr-3">1</span> 
                Fillings
              </h3>
              <div className="flex flex-wrap gap-2">
                {buildYourOwn.fillings.map(item => (
                  <button
                    key={item}
                    onClick={() => toggleItem(item, selectedFillings, setSelectedFillings)}
                    className={`px-4 py-2 rounded-full border transition-colors text-sm font-medium ${
                      selectedFillings.includes(item)
                        ? "bg-accent border-accent text-white"
                        : "border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="space-y-4">
              <h3 className="font-serif text-2xl font-semibold mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm mr-3">2</span> 
                Toppings
              </h3>
              <div className="flex flex-wrap gap-2">
                {buildYourOwn.toppings.map(item => (
                  <button
                    key={item}
                    onClick={() => toggleItem(item, selectedToppings, setSelectedToppings)}
                    className={`px-4 py-2 rounded-full border transition-colors text-sm font-medium ${
                      selectedToppings.includes(item)
                        ? "bg-accent border-accent text-white"
                        : "border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300} className="space-y-4">
              <h3 className="font-serif text-2xl font-semibold mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm mr-3">3</span> 
                Sauces
              </h3>
              <div className="flex flex-wrap gap-2">
                {buildYourOwn.sauces.map(item => (
                  <button
                    key={item}
                    onClick={() => toggleItem(item, selectedSauces, setSelectedSauces)}
                    className={`px-4 py-2 rounded-full border transition-colors text-sm font-medium ${
                      selectedSauces.includes(item)
                        ? "bg-accent border-accent text-white"
                        : "border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={400} className="text-center">
            <Button size="lg" className="bg-accent text-white hover:bg-accent/90 rounded-full px-10 h-14 text-lg shadow-lg">
              Find an Outlet to Order
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
