import Layout from "@/components/Layout";
import { Accessibility, Users, Heart, MapPin } from "lucide-react";
import interiorImage from "@/assets/interior.jpg";
import outdoorImage from "@/assets/outdoor-seating.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">Our Story</p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">About Toria Bakes</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Born from a deep passion for quality baking and great dining, Toria Bakes is Awka's premier 24-hour bakery and dine-in destination. Every creation is made with love, using the finest ingredients to deliver unforgettable flavors.
            </p>
          </div>
        </div>
      </section>

      {/* Story + Image */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">A Cozy Space for Everyone</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Whether you're looking for a romantic dinner spot, a place to catch up with friends, a family-friendly dining experience, or a quiet corner for solo dining — Toria Bakes welcomes you.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our warm, inviting atmosphere blends modern elegance with cozy charm. From our beautifully designed interior to our lovely outdoor seating area, every detail is crafted to make your visit special.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Heart, label: "Cozy & Romantic" },
                  { icon: Users, label: "Groups & Families" },
                  { icon: MapPin, label: "Tourist-Friendly" },
                  { icon: Accessibility, label: "Wheelchair Accessible" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm">
                    <item.icon className="w-5 h-5 text-accent shrink-0" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <img src={interiorImage} alt="Toria Bakes interior" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] overflow-hidden rounded-lg mt-8">
                <img src={outdoorImage} alt="Outdoor seating" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center max-w-2xl mx-auto">
          <Accessibility className="w-10 h-10 text-accent mx-auto mb-4" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">Accessibility</h2>
          <p className="text-muted-foreground leading-relaxed">
            Toria Bakes is proud to be accessible to everyone. We offer wheelchair-accessible car parking and wheelchair-accessible restrooms to ensure all guests enjoy their visit comfortably.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
