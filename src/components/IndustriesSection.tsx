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
    <section id="industries" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-foreground/50 mb-3">Industries We Serve</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">We proudly serve a wide range of industries</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((ind) => (
            <div key={ind.label} className="flex flex-col items-center text-center bg-card rounded-2xl p-6 border border-border hover:border-foreground/20 transition-colors">
              <div className="w-14 h-14 rounded-full bg-foreground/5 flex items-center justify-center mb-4">
                <ind.icon className="w-7 h-7 text-foreground" />
              </div>
              <p className="text-sm font-semibold text-foreground">{ind.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
