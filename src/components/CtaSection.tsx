export default function CtaSection() {
  return (
    <section id="cta" className="py-24 bg-navy text-primary-foreground">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Simplify Your Procurement?</h2>
        <p className="text-lg text-primary-foreground/80 mb-10">
          Let us help you connect with the right suppliers and grow your business globally.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:arisandcompany@icloud.com?subject=Quote%20Request" className="px-8 py-3.5 rounded-lg bg-gold text-gold-foreground font-semibold text-lg hover:brightness-110 transition shadow-lg">
            Request a Quote
          </a>
          <a href="#contact" className="px-8 py-3.5 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition">
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
}
