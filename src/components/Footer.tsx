import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid md:grid-cols-3 gap-12 py-16 border-b border-background/10">
          {/* Brand */}
          <div>
            <img src={logo} alt="ARIS & Company" className="w-[140px] h-auto mb-6" />
            <p className="text-background/40 text-[13px] leading-[1.8] max-w-xs">
              Professional procurement and facilitation firm connecting buyers with trusted suppliers worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-background/30 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-background/50 hover:text-background text-[13px] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-background/30 mb-6">Contact</h4>
            <div className="space-y-4">
              <a href="mailto:arisandcompany@icloud.com" className="flex items-center gap-3 text-background/50 hover:text-background text-[13px] transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                arisandcompany@icloud.com
              </a>
              <a href="tel:+923069880662" className="flex items-center gap-3 text-background/50 hover:text-background text-[13px] transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                +92 306 9880662
              </a>
              <a href="tel:+923001732959" className="flex items-center gap-3 text-background/50 hover:text-background text-[13px] transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                +92 300 1732959
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/30 text-[12px] tracking-wide">© 2026 ARIS & Company – All Rights Reserved</p>
          <p className="text-background/30 text-[11px] tracking-wide">
            Powered by{" "}
            <a href="https://www.arisuniversalsolutions.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-background/60 transition-colors">
              ARIS Universal Solutions Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
