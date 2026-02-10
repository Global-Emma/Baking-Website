import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-bakery.jpg";
import cakeImage from "@/assets/cake-display.jpg";
import pastriesImage from "@/assets/pastries.jpg";
import interiorImage from "@/assets/interior.jpg";
import smallPlatesImage from "@/assets/small-plates.jpg";
import outdoorImage from "@/assets/outdoor-seating.jpg";
import cateringImage from "@/assets/catering.jpg";
import drinksImage from "@/assets/drinks.jpg";

const images = [
  { src: heroImage, alt: "Freshly baked bread display" },
  { src: cakeImage, alt: "Elegant custom cake" },
  { src: pastriesImage, alt: "Golden croissants and pastries" },
  { src: interiorImage, alt: "Cozy bakery interior" },
  { src: smallPlatesImage, alt: "Gourmet small plates" },
  { src: outdoorImage, alt: "Beautiful outdoor seating" },
  { src: cateringImage, alt: "Premium catering spread" },
  { src: drinksImage, alt: "Craft drinks and beverages" },
];

const Gallery = () => {
  return (
    <Layout>
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">Visual Journey</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the world of Toria Bakes — our delicious creations, cozy interior, and vibrant atmosphere.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-lg ${
                  i === 0 || i === 5 ? "sm:col-span-2 aspect-[2/1]" : "aspect-square"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
