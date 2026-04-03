import { Target, Eye, TrendingUp } from "lucide-react";

const stats = [
  { value: "50+", label: "Global Suppliers" },
  { value: "100%", label: "Verified Partners" },
  { value: "24/7", label: "Support Available" },
  { value: "5+", label: "Industries Served" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-surface rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-surface rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-border mb-6">
            <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-muted-foreground">About Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-tight">
            Building Bridges in<br />Global Commerce
          </h2>
        </div>

        <p className="text-center text-muted-foreground text-[15px] leading-[1.9] max-w-xl mx-auto mb-20">
          A professional procurement and facilitation firm dedicated to connecting buyers with reliable and trustworthy suppliers worldwide.
        </p>

        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-border mb-20">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`p-8 text-center ${i < stats.length - 1 ? "border-r border-border max-lg:even:border-r-0" : ""} ${i < 2 ? "max-lg:border-b max-lg:border-border" : ""}`}
            >
              <p className="text-3xl sm:text-4xl font-semibold text-foreground mb-2">{s.value}</p>
              <p className="text-[12px] font-medium tracking-[0.15em] uppercase text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-0">
          <div className="relative p-10 md:p-12 border border-border group hover:bg-surface transition-all duration-500">
            <Eye className="w-8 h-8 text-foreground/10 mb-8 group-hover:text-foreground/25 transition-colors duration-500" />
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-muted-foreground/60 mb-6 block">Our Story</span>
            <h3 className="text-lg font-semibold text-foreground mb-4">Built on Trust</h3>
            <p className="text-muted-foreground leading-[1.85] text-[14px]">
              ARIS & Company, powered by{" "}
              <a href="https://www.arisuniversalsolutions.com/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-muted-foreground transition-colors underline underline-offset-4 decoration-border hover:decoration-foreground">
                ARIS Universal Solutions Pvt Ltd
              </a>
              , connects buyers with reliable suppliers worldwide through transparent procurement.
            </p>
          </div>

          <div className="relative p-10 md:p-12 border border-border border-l-0 max-md:border-l max-md:border-t-0 group hover:bg-surface transition-all duration-500">
            <Target className="w-8 h-8 text-foreground/10 mb-8 group-hover:text-foreground/25 transition-colors duration-500" />
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-muted-foreground/60 mb-6 block">Our Mission</span>
            <h3 className="text-lg font-semibold text-foreground mb-4">Empowering Growth</h3>
            <p className="text-muted-foreground leading-[1.85] text-[14px]">
              Deliver seamless sourcing solutions and expert guidance that helps businesses reduce costs, optimize procurement, and ensure timely execution.
            </p>
          </div>

          <div className="relative p-10 md:p-12 border border-border border-l-0 max-md:border-l max-md:border-t-0 group hover:bg-surface transition-all duration-500">
            <TrendingUp className="w-8 h-8 text-foreground/10 mb-8 group-hover:text-foreground/25 transition-colors duration-500" />
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-muted-foreground/60 mb-6 block">Our Values</span>
            <h3 className="text-lg font-semibold text-foreground mb-4">Excellence First</h3>
            <p className="text-muted-foreground leading-[1.85] text-[14px]">
              Transparency, efficiency, and reliability form the foundation of every engagement. We ensure quality at every step of the process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
