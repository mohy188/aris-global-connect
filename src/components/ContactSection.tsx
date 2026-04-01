import { Mail, Globe, Phone, MapPin } from "lucide-react";

const details = [
  { icon: Mail, label: "Email", value: "arisandcompany@icloud.com", href: "mailto:arisandcompany@icloud.com" },
  { icon: Globe, label: "Website", value: "www.arisandcompany.com", href: "https://www.arisandcompany.com" },
  { icon: Phone, label: "Phone", value: "+92 306 9880662 | +92 300 1732959", href: "tel:+923069880662" },
  { icon: MapPin, label: "Address", value: "Near Chinioti Gate, Chak Jhumra, Faisalabad, Pakistan", href: undefined },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-foreground/50 mb-3">Contact Us</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Get in Touch</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {details.map((d) => (
            <div key={d.label} className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border">
              <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center shrink-0">
                <d.icon className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{d.label}</p>
                {d.href ? (
                  <a href={d.href} className="text-foreground hover:text-foreground/70 transition-colors text-sm" target={d.label === "Website" ? "_blank" : undefined} rel={d.label === "Website" ? "noopener noreferrer" : undefined}>
                    {d.value}
                  </a>
                ) : (
                  <p className="text-foreground text-sm">{d.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
