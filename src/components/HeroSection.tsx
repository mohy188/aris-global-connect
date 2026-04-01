import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-32">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight animate-fade-up">
          Connecting Buyers with Trusted Suppliers <span className="text-gold">Worldwide</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up animate-delay-200">
          Simplifying sourcing, procurement, and global trade with transparency, efficiency, and expert guidance.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-delay-300">
          <a href="#cta" className="px-8 py-3.5 rounded-lg bg-gold text-gold-foreground font-semibold text-lg hover:brightness-110 transition shadow-lg">
            Get Started
          </a>
          <a href="#contact" className="px-8 py-3.5 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
