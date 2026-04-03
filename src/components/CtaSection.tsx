export default function CtaSection() {
  return (
    <section id="cta" className="py-32 bg-surface relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-border/30 opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full border border-border/30 opacity-30" />

      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-border mb-8">
          <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
          <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-muted-foreground">Let's Work Together</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-tight mb-6">
          Ready to Simplify Your<br />Procurement?
        </h2>
        <p className="text-muted-foreground text-[15px] leading-[1.9] mb-12 max-w-xl mx-auto">
          Let us help you connect with the right suppliers and grow your business globally. Start your journey today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:arisandcompany@icloud.com?subject=Quote%20Request" className="px-10 py-4 bg-foreground text-background font-semibold text-[13px] tracking-wide uppercase hover:bg-foreground/90 transition-all">
            Request a Quote
          </a>
          <a href="#contact" className="px-10 py-4 border border-border text-foreground font-semibold text-[13px] tracking-wide uppercase hover:bg-foreground hover:text-background transition-all">
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
}
