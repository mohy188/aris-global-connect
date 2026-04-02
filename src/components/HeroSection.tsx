import NetworkBackground from "./NetworkBackground";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      
      {/* Animated network nodes */}
      <NetworkBackground />

      {/* Bottom vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(0,0,0,0.6)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-40">
        <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-primary-foreground/40 mb-6 animate-fade-up">
          Procurement & Sourcing Experts
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-primary-foreground leading-[1.15] tracking-tight animate-fade-up animate-delay-100">
          Connecting Buyers with Trusted Suppliers Worldwide
        </h1>
        <p className="mt-8 text-base sm:text-lg text-primary-foreground/50 max-w-xl mx-auto leading-relaxed animate-fade-up animate-delay-200">
          Simplifying sourcing, procurement, and global trade with transparency, efficiency, and expert guidance.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-delay-300">
          <a href="#cta" className="px-8 py-3.5 bg-primary-foreground text-navy font-semibold text-sm tracking-wide uppercase hover:bg-primary-foreground/90 transition">
            Get Started
          </a>
          <a href="#contact" className="px-8 py-3.5 border border-primary-foreground/20 text-primary-foreground font-semibold text-sm tracking-wide uppercase hover:bg-primary-foreground/10 transition">
            Contact Us
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
