import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">Get in Touch</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for orders, reservations, catering inquiries, or just to say hello!
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Visit Us</h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground text-sm">14 Nnadozie Street, Umuike, Awka</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+2347032557389" className="text-muted-foreground text-sm hover:text-accent transition-colors">0703 255 7389</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-muted-foreground text-sm">Open 24 Hours, Monday – Sunday</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <a href="tel:+2347032557389">
                  <Button className="gap-2"><Phone className="w-4 h-4" /> Call Now</Button>
                </a>
                <a href="https://www.google.com/maps/place/53XF%2B36+Awka" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2"><Navigation className="w-4 h-4" /> Get Directions</Button>
                </a>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-border aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d7.07!3d6.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMzYuMCJOIDfCsDA0JzEyLjAiRQ!5e0!3m2!1sen!2sng!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Toria Bakes location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name</label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    maxLength={255}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    maxLength={1000}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
