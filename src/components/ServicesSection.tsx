import { Search, ShieldCheck, Handshake, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Procurement Facilitation",
    desc: "We manage the entire sourcing process, ensuring you get the right suppliers with the best value.",
    highlights: ["Vendor shortlisting", "Price negotiation", "Quality assurance"],
  },
  {
    icon: ShieldCheck,
    title: "Supplier Verification",
    desc: "We verify suppliers to ensure credibility, reliability, and quality assurance for your business.",
    highlights: ["Background checks", "Compliance review", "Performance tracking"],
  },
  {
    icon: Handshake,
    title: "End-to-End Consultancy",
    desc: "From sourcing to delivery, we provide complete guidance and support at every step.",
    highlights: ["Strategic planning", "Risk mitigation", "Logistics coordination"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">Our Services</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">What We Offer</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-0">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="relative p-10 md:p-12 border border-border group hover:bg-background transition-colors duration-500"
              style={{ borderLeftWidth: i === 0 ? undefined : undefined }}
            >
              <div className="w-14 h-14 border border-border flex items-center justify-center mb-8 group-hover:bg-foreground group-hover:text-background transition-all duration-400">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-[1.8] text-[14.5px] mb-8">{s.desc}</p>
              <ul className="space-y-3">
                {s.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-[13px] text-muted-foreground">
                    <ArrowRight className="w-3 h-3 text-foreground/30" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
