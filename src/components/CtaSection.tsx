export default function CtaSection() {
  return (
    <section id="cta" className="py-28 bg-foreground text-background">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">Ready to Simplify Your Procurement?</h2>
        <p className="text-background/50 text-[15px] leading-relaxed mb-12">
          Let us help you connect with the right suppliers and grow your business globally.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:arisandcompany@icloud.com?subject=Quote%20Request" className="px-8 py-3.5 bg-background text-foreground font-semibold text-sm tracking-wide uppercase hover:bg-background/90 transition">
            Request a Quote
          </a>
          <a href="#contact" className="px-8 py-3.5 border border-background/25 text-background font-semibold text-sm tracking-wide uppercase hover:bg-background/10 transition">
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
}
