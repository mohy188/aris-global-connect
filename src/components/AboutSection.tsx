import { Target, Eye } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-foreground/50 mb-3">About Us</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Who We Are</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-5">
              <Eye className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              ARIS & Company, powered by ARIS Universal Solutions Pvt Ltd, is a professional procurement and facilitation firm dedicated to connecting buyers with reliable and trustworthy suppliers worldwide.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              We specialize in simplifying the sourcing and procurement process, making it efficient, transparent, and result-driven.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver seamless sourcing solutions, end-to-end consultancy, and expert guidance that helps businesses reduce costs, optimize procurement, and ensure timely project execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
