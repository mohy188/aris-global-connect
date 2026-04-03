import { Building2, Shirt, UtensilsCrossed, ShoppingCart, Monitor } from "lucide-react";

const industries = [
  { icon: Building2, label: "Construction & Export Projects", desc: "Large-scale sourcing for infrastructure and building materials" },
  { icon: Shirt, label: "Fabric & Apparel Exports", desc: "Textile sourcing with quality verification and compliance" },
  { icon: UtensilsCrossed, label: "Food & Beverages", desc: "Supply chain solutions for F&B importers and distributors" },
  { icon: ShoppingCart, label: "Amazon & E-Commerce", desc: "Product sourcing and supplier matching for online sellers" },
  { icon: Monitor, label: "IT & Digital Services", desc: "Technology solutions and software service procurement" },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">Industries We Serve</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">Diverse Sector Expertise</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-0">
          {industries.map((ind, i) => (
            <div
              key={ind.label}
              className="relative p-8 border border-border group hover:bg-surface transition-colors duration-500 text-center"
            >
              <div className="w-16 h-16 mx-auto border border-border flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-all duration-400">
                <ind.icon className="w-6 h-6" />
              </div>
              <h3 className="text-[14px] font-semibold text-foreground mb-2 leading-snug">{ind.label}</h3>
              <p className="text-[12.5px] text-muted-foreground leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
