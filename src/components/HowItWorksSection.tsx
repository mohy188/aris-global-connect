const steps = [
  { num: "01", title: "Share Your Requirement", desc: "Tell us what you need — products, services, or suppliers." },
  { num: "02", title: "We Source & Verify", desc: "Our team finds and verifies the best-matched suppliers." },
  { num: "03", title: "Compare & Finalize", desc: "Review options side-by-side and choose the best fit." },
  { num: "04", title: "Execute & Deliver", desc: "We manage the process through to successful delivery." },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">Simple & Efficient Process</h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-10 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px bg-border" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {steps.map((s) => (
              <div key={s.num} className="relative p-8 md:p-10 border border-border group hover:bg-background transition-colors duration-500 text-center">
                <div className="relative z-10 w-14 h-14 mx-auto border border-border flex items-center justify-center mb-6 bg-surface group-hover:bg-foreground group-hover:text-background transition-all duration-400">
                  <span className="text-sm font-semibold">{s.num}</span>
                </div>
                <h3 className="text-[15px] font-semibold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-[13.5px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
