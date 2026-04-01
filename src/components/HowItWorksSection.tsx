const steps = [
  { num: "01", title: "Share Your Requirement", desc: "Tell us what you need — products, services, or suppliers." },
  { num: "02", title: "We Source & Verify Suppliers", desc: "Our team finds and verifies the best-matched suppliers." },
  { num: "03", title: "Compare & Finalize Options", desc: "Review options side-by-side and choose the best fit." },
  { num: "04", title: "Execute & Deliver Successfully", desc: "We manage the process through to successful delivery." },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-foreground/50 mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Simple & Efficient Process</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="w-16 h-16 rounded-full bg-navy text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-5">
                {s.num}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
