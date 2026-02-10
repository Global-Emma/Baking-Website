import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Truck, UtensilsCrossed, Star, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-bakery.jpg";
import cakeImage from "@/assets/cake-display.jpg";
import pastriesImage from "@/assets/pastries.jpg";
import smallPlatesImage from "@/assets/small-plates.jpg";
import interiorImage from "@/assets/interior.jpg";
import outdoorImage from "@/assets/outdoor-seating.jpg";

const highlights = [
  { icon: Clock, title: "Open 24 Hours", desc: "We never close. Fresh bakes any time." },
  { icon: Truck, title: "Delivery & Takeaway", desc: "Get your favorites delivered to your door." },
  { icon: UtensilsCrossed, title: "Dine-In & Catering", desc: "Cozy dining or premium event catering." },
];

const featuredItems = [
  { image: cakeImage, name: "Custom Cakes", desc: "Elegant wedding & birthday cakes crafted to perfection" },
  { image: pastriesImage, name: "Fresh Pastries", desc: "Buttery croissants, danish, and artisan bread daily" },
  { image: smallPlatesImage, name: "Small Plates", desc: "Gourmet sandwiches and savory quick bites" },
];

const testimonials = [
  { name: "Adaeze O.", text: "The best bakery in Awka! Their cakes are absolutely divine and the atmosphere is so welcoming.", rating: 5 },
  { name: "Chidi N.", text: "I love that they're open 24 hours. Perfect for late-night cravings. The pastries are always fresh!", rating: 5 },
  { name: "Ngozi E.", text: "We had Toria Bakes cater our wedding and it was spectacular. Highly recommend their services.", rating: 5 },
];

const galleryPreview = [interiorImage, outdoorImage, cakeImage, pastriesImage];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Freshly baked bread and pastries at Toria Bakes" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-warm-gold font-medium text-sm tracking-widest uppercase mb-4 animate-fade-up opacity-0 stagger-1">
              Welcome to Toria Bakes
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0 stagger-2">
              Freshly Baked Delights, Served Anytime
            </h1>
            <p className="text-primary-foreground/80 text-lg sm:text-xl mb-8 leading-relaxed animate-fade-up opacity-0 stagger-3">
              Your cozy 24-hour bakery & dine-in spot in Awka. Enjoy premium pastries, delicious meals, and warm ambience — for dine-in, takeaway, or delivery.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 stagger-4">
              <Link to="/menu">
                <Button variant="hero" size="lg">View Menu</Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="lg">Book a Table</Button>
              </Link>
              <a href="tel:+2347032557389">
                <Button variant="heroOutline" size="lg">Order Now</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/20 mb-4">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">Our Specialties</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Featured Baked Delights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <div key={item.name} className="card-warm hover-lift">
                <div className="aspect-square overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/menu">
              <Button variant="outline" size="lg" className="gap-2">
                View Full Menu <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">What People Say</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Customer Testimonials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-background rounded-lg p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm mb-4 italic leading-relaxed">"{t.text}"</p>
                <p className="font-semibold text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">A Peek Inside</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Our Space & Creations</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPreview.map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg">
                <img src={img} alt="Gallery preview" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery">
              <Button variant="outline" size="lg" className="gap-2">
                View Gallery <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
