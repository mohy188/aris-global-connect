import { CheckCircle } from "lucide-react";

const points = [
  { title: "Trusted Supplier Network", desc: "Access verified suppliers across multiple industries worldwide" },
  { title: "Transparent Process", desc: "Clear commission and service structure with no hidden costs" },
  { title: "Fast Communication", desc: "Professional, reliable, and responsive support at every step" },
  { title: "Complete Support", desc: "End-to-end coverage — procurement, exports, e-commerce, digital services" },
  { title: "Market Insights", desc: "Global sourcing expertise backed by strong market intelligence" },
];

export default function WhyChooseSection() {
  return (
    <section id="why-us" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-border mb-6">
              <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
              <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-muted-foreground">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-tight mb-6">
              Your Trusted<br />Procurement Partner
            </h2>
            <p className="text-muted-foreground text-[15px] leading-[1.9] mb-10">
              We bring together deep industry knowledge, a global supplier network, and a commitment to transparency — so you can focus on growing your business.
            </p>
            <a href="#cta" className="inline-flex items-center gap-2 px-8 py-3.5 bg-foreground text-background text-[13px] font-semibold tracking-wide uppercase hover:bg-foreground/90 transition-all">
              Get Started
            </a>
          </div>

          {/* Right side */}
          <div className="space-y-0">
            {points.map((p, i) => (
              <div key={p.title} className="flex items-start gap-5 p-6 border-b border-border last:border-b-0 group hover:bg-background transition-all duration-300">
                <div className="mt-0.5 shrink-0">
                  <CheckCircle className="w-5 h-5 text-foreground/20 group-hover:text-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-foreground mb-1">{p.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
