import { Mail, Globe, Phone, MapPin } from "lucide-react";

const details = [
  { icon: Mail, label: "Email", value: "arisandcompany@icloud.com", href: "mailto:arisandcompany@icloud.com" },
  { icon: Globe, label: "Website", value: "www.arisandcompany.com", href: "https://www.arisandcompany.com" },
  { icon: Phone, label: "Phone", value: "+92 306 9880662\n+92 300 1732959", href: "tel:+923069880662" },
  { icon: MapPin, label: "Address", value: "Near Chinioti Gate, Chak Jhumra, Faisalabad, Pakistan", href: undefined },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-[13px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">Contact Us</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">Get in Touch</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {details.map((d) => (
            <div key={d.label} className="flex items-start gap-5 p-6 border-b border-border">
              <d.icon className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-muted-foreground mb-2">{d.label}</p>
                {d.href ? (
                  <a href={d.href} className="text-foreground hover:text-muted-foreground transition-colors text-[15px] whitespace-pre-line" target={d.label === "Website" ? "_blank" : undefined} rel={d.label === "Website" ? "noopener noreferrer" : undefined}>
                    {d.value}
                  </a>
                ) : (
                  <p className="text-foreground text-[15px]">{d.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
