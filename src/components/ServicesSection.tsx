import { Search, ShieldCheck, Handshake } from "lucide-react";

const services = [
  { icon: Search, title: "Procurement Facilitation", desc: "We manage the entire sourcing process, ensuring you get the right suppliers with the best value." },
  { icon: ShieldCheck, title: "Supplier Verification", desc: "We verify suppliers to ensure credibility, reliability, and quality assurance for your business." },
  { icon: Handshake, title: "End-to-End Consultancy", desc: "From sourcing to delivery, we provide complete guidance and support at every step." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-foreground/50 mb-3">Our Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What We Offer</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-6 group-hover:bg-foreground/80 transition-colors duration-300">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
