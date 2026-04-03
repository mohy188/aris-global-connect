import { Target, Eye } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">About Us</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">Who We Are</h2>
        </div>

        <p className="text-center text-muted-foreground text-[15px] leading-relaxed max-w-2xl mx-auto mt-6 mb-20">
          A professional procurement and facilitation firm dedicated to connecting buyers with reliable and trustworthy suppliers worldwide.
        </p>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Our Story */}
          <div className="relative p-10 md:p-14 border border-border group hover:bg-surface transition-colors duration-500">
            <div className="absolute top-10 md:top-14 right-10 md:right-14">
              <Eye className="w-8 h-8 text-foreground/8 group-hover:text-foreground/15 transition-colors duration-500" />
            </div>
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-muted-foreground/60 mb-8 block">01 — Our Story</span>
            <h3 className="text-xl font-semibold text-foreground mb-5">Built on Trust & Expertise</h3>
            <p className="text-muted-foreground leading-[1.85] text-[14.5px]">
              ARIS & Company, powered by{" "}
              <a href="https://www.arisuniversalsolutions.com/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-muted-foreground transition-colors underline underline-offset-4 decoration-border hover:decoration-foreground">
                ARIS Universal Solutions Pvt Ltd
              </a>
              , is a professional procurement and facilitation firm dedicated to connecting buyers with reliable and trustworthy suppliers worldwide.
            </p>
            <p className="text-muted-foreground leading-[1.85] text-[14.5px] mt-4">
              We specialize in simplifying the sourcing and procurement process, making it efficient, transparent, and result-driven.
            </p>
          </div>

          {/* Our Mission */}
          <div className="relative p-10 md:p-14 border border-border border-l-0 max-md:border-l max-md:border-t-0 group hover:bg-surface transition-colors duration-500">
            <div className="absolute top-10 md:top-14 right-10 md:right-14">
              <Target className="w-8 h-8 text-foreground/8 group-hover:text-foreground/15 transition-colors duration-500" />
            </div>
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-muted-foreground/60 mb-8 block">02 — Our Mission</span>
            <h3 className="text-xl font-semibold text-foreground mb-5">Empowering Global Trade</h3>
            <p className="text-muted-foreground leading-[1.85] text-[14.5px]">
              To deliver seamless sourcing solutions, end-to-end consultancy, and expert guidance that helps businesses reduce costs, optimize procurement, and ensure timely project execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Transparency", "Efficiency", "Reliability"].map((tag) => (
                <span key={tag} className="text-[11px] font-medium tracking-[0.15em] uppercase px-4 py-2 border border-border text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
