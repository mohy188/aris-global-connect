import { Search, ShieldCheck, Handshake, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Search,
    num: "01",
    title: "Procurement Facilitation",
    desc: "We manage the entire sourcing process, ensuring you get the right suppliers with the best value.",
    highlights: ["Vendor shortlisting", "Price negotiation", "Quality assurance"],
  },
  {
    icon: ShieldCheck,
    num: "02",
    title: "Supplier Verification",
    desc: "We verify suppliers to ensure credibility, reliability, and quality assurance for your business.",
    highlights: ["Background checks", "Compliance review", "Performance tracking"],
  },
  {
    icon: Handshake,
    num: "03",
    title: "End-to-End Consultancy",
    desc: "From sourcing to delivery, we provide complete guidance and support at every step.",
    highlights: ["Strategic planning", "Risk mitigation", "Logistics coordination"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-foreground text-background relative overflow-hidden">
      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-background/15 mb-6">
              <div className="w-1.5 h-1.5 bg-background rounded-full" />
              <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-background/40">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              What We Offer
            </h2>
          </div>
          <p className="text-background/40 text-[15px] leading-relaxed max-w-md mt-6 lg:mt-0">
            Comprehensive procurement solutions tailored to your specific industry needs and business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative p-10 md:p-12 border border-background/10 hover:bg-background/5 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="w-14 h-14 border border-background/15 flex items-center justify-center group-hover:bg-background group-hover:text-foreground transition-all duration-400">
                  <s.icon className="w-6 h-6" />
                </div>
                <span className="text-5xl font-extralight text-background/5 group-hover:text-background/10 transition-colors">{s.num}</span>
              </div>

              <h3 className="text-xl font-semibold mb-4">{s.title}</h3>
              <p className="text-background/50 leading-[1.8] text-[14px] mb-8">{s.desc}</p>

              <div className="space-y-3 pt-6 border-t border-background/8">
                {s.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-3">
                    <ArrowUpRight className="w-3.5 h-3.5 text-background/25" />
                    <span className="text-[13px] text-background/50">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
