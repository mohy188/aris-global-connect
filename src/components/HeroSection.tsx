import heroBg from "@/assets/hero-bg.jpg";

const nodes = [
  { x: 10, y: 15, size: 4, delay: 0, dur: 3 },
  { x: 85, y: 20, size: 3, delay: 1.2, dur: 2.5 },
  { x: 25, y: 70, size: 5, delay: 0.5, dur: 3.5 },
  { x: 70, y: 80, size: 3, delay: 2, dur: 2.8 },
  { x: 50, y: 30, size: 4, delay: 0.8, dur: 3.2 },
  { x: 15, y: 50, size: 3, delay: 1.5, dur: 2.6 },
  { x: 90, y: 55, size: 5, delay: 0.3, dur: 3 },
  { x: 40, y: 85, size: 4, delay: 1.8, dur: 2.9 },
  { x: 60, y: 10, size: 3, delay: 2.5, dur: 3.4 },
  { x: 35, y: 45, size: 5, delay: 0.7, dur: 2.7 },
  { x: 78, y: 40, size: 3, delay: 1, dur: 3.1 },
  { x: 5, y: 90, size: 4, delay: 2.2, dur: 2.4 },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover animate-[hero-ken-burns_25s_ease-in-out_infinite_alternate]" width={1920} height={1080} />
      <div className="absolute inset-0 bg-navy/85" />

      {/* Animated blinking nodes */}
      <div className="absolute inset-0 z-[5]">
        {nodes.map((node, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary-foreground animate-[node-blink_var(--dur)_ease-in-out_infinite] animate-[node-float_var(--dur)_ease-in-out_infinite_alternate]"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: node.size,
              height: node.size,
              opacity: 0.7,
              animationName: 'node-blink, node-float',
              animationDuration: `${node.dur}s, ${node.dur * 2}s`,
              animationDelay: `${node.delay}s, ${node.delay}s`,
              animationTimingFunction: 'ease-in-out, ease-in-out',
              animationIterationCount: 'infinite, infinite',
              animationDirection: 'normal, alternate',
              boxShadow: '0 0 8px 2px rgba(255,255,255,0.4)',
            }}
          />
        ))}
        {/* Connecting lines between some nodes */}
        <svg className="absolute inset-0 w-full h-full opacity-15">
          <line x1="10%" y1="15%" x2="25%" y2="70%" stroke="white" strokeWidth="0.5" className="animate-[node-blink_4s_ease-in-out_infinite]" />
          <line x1="85%" y1="20%" x2="70%" y2="80%" stroke="white" strokeWidth="0.5" className="animate-[node-blink_3.5s_ease-in-out_infinite_0.5s]" />
          <line x1="50%" y1="30%" x2="35%" y2="45%" stroke="white" strokeWidth="0.5" className="animate-[node-blink_3s_ease-in-out_infinite_1s]" />
          <line x1="15%" y1="50%" x2="40%" y2="85%" stroke="white" strokeWidth="0.5" className="animate-[node-blink_4.5s_ease-in-out_infinite_0.3s]" />
          <line x1="60%" y1="10%" x2="78%" y2="40%" stroke="white" strokeWidth="0.5" className="animate-[node-blink_3.2s_ease-in-out_infinite_0.8s]" />
          <line x1="90%" y1="55%" x2="70%" y2="80%" stroke="white" strokeWidth="0.5" className="animate-[node-blink_2.8s_ease-in-out_infinite_1.5s]" />
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-40">
        <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-primary-foreground/50 mb-6 animate-fade-up">
          Procurement & Sourcing Experts
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-primary-foreground leading-[1.15] tracking-tight animate-fade-up animate-delay-100">
          Connecting Buyers with Trusted Suppliers Worldwide
        </h1>
        <p className="mt-8 text-base sm:text-lg text-primary-foreground/60 max-w-xl mx-auto leading-relaxed animate-fade-up animate-delay-200">
          Simplifying sourcing, procurement, and global trade with transparency, efficiency, and expert guidance.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-delay-300">
          <a href="#cta" className="px-8 py-3.5 bg-primary-foreground text-navy font-semibold text-sm tracking-wide uppercase hover:bg-primary-foreground/90 transition">
            Get Started
          </a>
          <a href="#contact" className="px-8 py-3.5 border border-primary-foreground/25 text-primary-foreground font-semibold text-sm tracking-wide uppercase hover:bg-primary-foreground/10 transition">
            Contact Us
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
