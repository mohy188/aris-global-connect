const steps = [
  { num: "01", title: "Share Your Requirement", desc: "Tell us what you need — products, services, or suppliers." },
  { num: "02", title: "We Source & Verify", desc: "Our team finds and verifies the best-matched suppliers." },
  { num: "03", title: "Compare & Finalize", desc: "Review options side-by-side and choose the best fit." },
  { num: "04", title: "Execute & Deliver", desc: "We manage the process through to successful delivery." },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-32 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-background/15 mb-6">
            <div className="w-1.5 h-1.5 bg-background rounded-full" />
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-background/40">Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
            How It Works
          </h2>
          <p className="text-background/40 text-[15px] leading-relaxed max-w-lg mx-auto mt-6">
            A streamlined four-step process designed to deliver results efficiently and transparently.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-background/10" />

          {steps.map((s) => (
            <div key={s.num} className="relative p-8 md:p-10 border border-background/10 group hover:bg-background/5 transition-all duration-500 text-center">
              <div className="relative z-10 w-16 h-16 mx-auto border border-background/15 flex items-center justify-center mb-8 group-hover:bg-background group-hover:text-foreground transition-all duration-400">
                <span className="text-lg font-semibold">{s.num}</span>
              </div>
              <h3 className="text-[15px] font-semibold mb-3">{s.title}</h3>
              <p className="text-background/40 text-[13px] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
