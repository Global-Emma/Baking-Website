import Layout from "@/components/Layout";
import { Separator } from "@/components/ui/separator";

interface MenuItem {
  name: string;
  description: string;
  price?: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const menuSections: MenuSection[] = [
  {
    title: "Baked Goods & Pastries",
    items: [
      { name: "Butter Croissant", description: "Flaky, golden, and perfectly buttery", price: "₦1,500" },
      { name: "Pain au Chocolat", description: "Chocolate-filled French pastry", price: "₦1,800" },
      { name: "Cinnamon Rolls", description: "Soft rolls with cinnamon sugar glaze", price: "₦1,200" },
      { name: "Sourdough Bread", description: "Artisan-style slow-fermented loaf", price: "₦2,500" },
      { name: "Meat Pie", description: "Savory minced beef in flaky pastry", price: "₦800" },
      { name: "Sausage Roll", description: "Seasoned sausage wrapped in puff pastry", price: "₦600" },
      { name: "Chin Chin", description: "Crunchy fried dough snack, sweet or spiced", price: "₦500" },
      { name: "Doughnut", description: "Soft ring doughnut with sugar or glaze", price: "₦500" },
    ],
  },
  {
    title: "Custom Cakes",
    items: [
      { name: "Birthday Cake", description: "Custom designed birthday cakes in all sizes", price: "From ₦15,000" },
      { name: "Wedding Cake", description: "Elegant multi-tier wedding cakes", price: "From ₦50,000" },
      { name: "Cupcakes (Box of 12)", description: "Assorted flavors with buttercream frosting", price: "₦8,000" },
      { name: "Cheesecake Slice", description: "Rich and creamy New York-style cheesecake", price: "₦2,500" },
    ],
  },
  {
    title: "Quick Bites & Small Plates",
    items: [
      { name: "Club Sandwich", description: "Triple-decker with chicken, bacon & egg", price: "₦3,500" },
      { name: "Sharwarma", description: "Grilled chicken wrap with fresh vegetables", price: "₦2,500" },
      { name: "Spring Rolls", description: "Crispy rolls stuffed with vegetables", price: "₦1,500" },
      { name: "Chicken Wings", description: "Spicy or BBQ glazed crispy wings", price: "₦3,000" },
      { name: "Puff Puff", description: "Golden fried dough balls, soft and sweet", price: "₦500" },
    ],
  },
  {
    title: "Lunch & Dinner",
    items: [
      { name: "Jollof Rice & Chicken", description: "Nigerian party-style jollof with grilled chicken", price: "₦4,500" },
      { name: "Fried Rice & Assorted Meat", description: "Flavorful fried rice with mixed proteins", price: "₦5,000" },
      { name: "Pasta Bolognese", description: "Al dente pasta with rich meat sauce", price: "₦4,000" },
      { name: "Grilled Fish & Chips", description: "Fresh grilled fish with seasoned fries", price: "₦5,500" },
      { name: "Pepper Soup", description: "Spicy, aromatic Nigerian pepper soup", price: "₦3,500" },
    ],
  },
  {
    title: "Drinks & Beverages",
    items: [
      { name: "Fresh Juice", description: "Orange, watermelon, or pineapple", price: "₦1,500" },
      { name: "Smoothie", description: "Blended fruits with yoghurt or milk", price: "₦2,000" },
      { name: "Cappuccino", description: "Rich espresso with steamed milk foam", price: "₦1,800" },
      { name: "Chapman", description: "Classic Nigerian cocktail mocktail", price: "₦1,500" },
    ],
  },
  {
    title: "Alcohol & Beer",
    items: [
      { name: "Craft Beer Selection", description: "Local and imported craft beers", price: "From ₦1,500" },
      { name: "Wine by the Glass", description: "Red, white, or rosé selection", price: "From ₦2,500" },
      { name: "Cocktails", description: "Signature and classic cocktails", price: "From ₦3,000" },
    ],
  },
  {
    title: "Catering Services",
    items: [
      { name: "Event Pastry Package", description: "Assorted pastries for 50+ guests", price: "From ₦50,000" },
      { name: "Full Catering Service", description: "Complete food and drinks setup for events", price: "Custom Quote" },
      { name: "Corporate Lunch Package", description: "Boxed or buffet lunch for meetings", price: "From ₦5,000/head" },
    ],
  },
];

const MenuPage = () => {
  return (
    <Layout>
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">What We Offer</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From freshly baked pastries to hearty meals and refreshing drinks — there's something for everyone at Toria Bakes.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          {menuSections.map((section, idx) => (
            <div key={section.title} className={idx > 0 ? "mt-12" : ""}>
              <h2 className="font-display text-2xl font-bold mb-6 text-center">{section.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start p-4 rounded-lg bg-card border border-border hover:shadow-sm transition-shadow">
                    <div className="flex-1 mr-4">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                    </div>
                    {item.price && (
                      <span className="text-accent font-semibold text-sm whitespace-nowrap">{item.price}</span>
                    )}
                  </div>
                ))}
              </div>
              {idx < menuSections.length - 1 && <Separator className="mt-12" />}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default MenuPage;
