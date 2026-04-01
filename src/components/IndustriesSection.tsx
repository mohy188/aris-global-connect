import { Building2, Shirt, UtensilsCrossed, ShoppingCart, Monitor } from "lucide-react";

const industries = [
  { icon: Building2, label: "Construction & Export Projects" },
  { icon: Shirt, label: "Fabric & Apparel Exports" },
  { icon: UtensilsCrossed, label: "Food & Beverages" },
  { icon: ShoppingCart, label: "Amazon & E-Commerce Businesses" },
  { icon: Monitor, label: "IT, Software & Digital Services" },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-28 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">Industries We Serve</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">Diverse Sector Expertise</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {industries.map((ind) => (
            <div key={ind.label} className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 border border-border flex items-center justify-center mb-5 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                <ind.icon className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-foreground leading-snug">{ind.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
