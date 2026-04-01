const points = [
  "Trusted supplier network across multiple industries",
  "Transparent commission and service structure",
  "Fast, reliable, and professional communication",
  "Complete end-to-end support (procurement, exports, e-commerce, digital services)",
  "Global sourcing expertise with strong market insights",
];

export default function WhyChooseSection() {
  return (
    <section id="why-us" className="py-28 bg-foreground text-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-background/40 mb-4">Why Choose Us</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Your Trusted Procurement Partner</h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-6">
          {points.map((p, i) => (
            <div key={p} className="flex items-start gap-5">
              <span className="text-[13px] font-medium text-background/30 mt-0.5 tabular-nums">0{i + 1}</span>
              <div className="flex-1 border-b border-background/10 pb-6">
                <p className="text-[15px] text-background/80 leading-relaxed">{p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
