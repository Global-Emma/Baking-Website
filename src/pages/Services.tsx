import Layout from "@/components/Layout";
import { UtensilsCrossed, Truck, Package, PartyPopper, TreePine, HandPlatter, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  { icon: UtensilsCrossed, title: "Dine-In", desc: "Enjoy your meal in our cozy, beautifully designed space with table service. Perfect for dates, family meals, and casual dining." },
  { icon: Package, title: "Takeaway", desc: "In a rush? Grab your freshly prepared food to go. All items are carefully packaged to maintain quality." },
  { icon: Truck, title: "Delivery", desc: "Can't make it to us? We'll deliver your favorite bakes and meals right to your doorstep within Awka." },
  { icon: PartyPopper, title: "Catering", desc: "From intimate gatherings to large events — our catering service provides premium food packages tailored to your needs." },
  { icon: TreePine, title: "Outdoor Seating", desc: "Dine al fresco on our charming patio with string lights. Perfect for warm evenings and relaxed vibes." },
  { icon: HandPlatter, title: "Table Service", desc: "Our friendly staff ensure a seamless dining experience. From order to table, we've got you covered." },
];

const Services = () => {
  return (
    <Layout>
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">How We Serve You</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're dining in, ordering out, or planning an event — Toria Bakes has you covered.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="card-warm p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/20 mb-4">
                  <s.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center max-w-md mx-auto">
          <Clock className="w-10 h-10 text-accent mx-auto mb-4" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">Opening Hours</h2>
          <div className="bg-background rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center py-3 border-b border-border">
              <span className="font-medium">Monday – Sunday</span>
              <span className="text-accent font-semibold">Open 24 Hours</span>
            </div>
            <p className="text-muted-foreground text-sm mt-4">We never close — fresh bakes around the clock!</p>
          </div>
          <div className="mt-8">
            <Link to="/contact">
              <Button size="lg">Book a Table</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
