import { Search, ShieldCheck, Handshake } from "lucide-react";

const services = [
  { icon: Search, title: "Procurement Facilitation", desc: "We manage the entire sourcing process, ensuring you get the right suppliers with the best value." },
  { icon: ShieldCheck, title: "Supplier Verification", desc: "We verify suppliers to ensure credibility, reliability, and quality assurance for your business." },
  { icon: Handshake, title: "End-to-End Consultancy", desc: "From sourcing to delivery, we provide complete guidance and support at every step." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-surface">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">Our Services</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">What We Offer</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((s) => (
            <div key={s.title} className="group">
              <div className="w-12 h-12 border border-border flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-[1.8] text-[15px]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
