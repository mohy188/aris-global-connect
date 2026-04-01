import { CheckCircle2 } from "lucide-react";

const points = [
  "Trusted supplier network across multiple industries",
  "Transparent commission and service structure",
  "Fast, reliable, and professional communication",
  "Complete end-to-end support (procurement, exports, e-commerce, digital services)",
  "Global sourcing expertise with strong market insights",
];

export default function WhyChooseSection() {
  return (
    <section id="why-us" className="py-24 bg-navy text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/50 mb-3">Why Choose Us</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Your Trusted Procurement Partner</h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-5">
          {points.map((p) => (
            <div key={p} className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary-foreground shrink-0 mt-0.5" />
              <p className="text-lg text-primary-foreground/90">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
