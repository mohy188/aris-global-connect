const steps = [
  { num: "01", title: "Share Your Requirement", desc: "Tell us what you need — products, services, or suppliers." },
  { num: "02", title: "We Source & Verify", desc: "Our team finds and verifies the best-matched suppliers." },
  { num: "03", title: "Compare & Finalize", desc: "Review options side-by-side and choose the best fit." },
  { num: "04", title: "Execute & Deliver", desc: "We manage the process through to successful delivery." },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-28 bg-surface">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">Simple & Efficient Process</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <span className="text-5xl font-extralight text-foreground/10 block mb-4">{s.num}</span>
              <h3 className="text-base font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-[14px] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
