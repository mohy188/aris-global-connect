export default function AboutSection() {
  return (
    <section id="about" className="py-28 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">About Us</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">Who We Are</h2>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-16">
          <div>
            <div className="w-10 h-[2px] bg-foreground mb-6" />
            <h3 className="text-lg font-semibold text-foreground mb-4">Our Story</h3>
            <p className="text-muted-foreground leading-[1.8] text-[15px]">
              ARIS & Company, powered by ARIS Universal Solutions Pvt Ltd, is a professional procurement and facilitation firm dedicated to connecting buyers with reliable and trustworthy suppliers worldwide.
            </p>
            <p className="text-muted-foreground leading-[1.8] text-[15px] mt-4">
              We specialize in simplifying the sourcing and procurement process, making it efficient, transparent, and result-driven.
            </p>
          </div>
          <div>
            <div className="w-10 h-[2px] bg-foreground mb-6" />
            <h3 className="text-lg font-semibold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-[1.8] text-[15px]">
              To deliver seamless sourcing solutions, end-to-end consultancy, and expert guidance that helps businesses reduce costs, optimize procurement, and ensure timely project execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
