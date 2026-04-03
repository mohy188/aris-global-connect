import { Building2, Shirt, UtensilsCrossed, ShoppingCart, Monitor } from "lucide-react";

const industries = [
  { icon: Building2, label: "Construction & Export", desc: "Large-scale sourcing for infrastructure and building materials" },
  { icon: Shirt, label: "Fabric & Apparel", desc: "Textile sourcing with quality verification and compliance" },
  { icon: UtensilsCrossed, label: "Food & Beverages", desc: "Supply chain solutions for importers and distributors" },
  { icon: ShoppingCart, label: "E-Commerce", desc: "Product sourcing and supplier matching for online sellers" },
  { icon: Monitor, label: "IT & Digital", desc: "Technology solutions and software service procurement" },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-32 bg-background relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-border mb-6">
            <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-muted-foreground">Industries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-tight">
            Sectors We Serve
          </h2>
          <p className="text-muted-foreground text-[15px] leading-relaxed max-w-lg mx-auto mt-6">
            Deep expertise across diverse industries, delivering tailored procurement solutions for every sector.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 border border-border">
          {industries.map((ind) => (
            <div
              key={ind.label}
              className="relative p-8 lg:p-6 xl:p-8 text-center group hover:bg-surface transition-all duration-500 border-r border-b border-border last:border-r-0 [&:nth-child(2)]:max-lg:border-r-0 [&:nth-child(4)]:max-lg:border-r-0 [&:nth-last-child(-n+1)]:border-b-0 lg:[&:nth-last-child(-n+5)]:border-b-0"
            >
              <div className="w-14 h-14 mx-auto border border-border flex items-center justify-center mb-5 group-hover:bg-foreground group-hover:text-background transition-all duration-400">
                <ind.icon className="w-5 h-5" />
              </div>
              <h3 className="text-[13px] font-semibold text-foreground mb-2 leading-snug">{ind.label}</h3>
              <p className="text-[11.5px] text-muted-foreground leading-relaxed hidden sm:block">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
