import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Why Us", href: "#why-us" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="ARIS & Company" className="h-8 invert" />
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#cta" className="ml-2 px-5 py-2 rounded-lg bg-primary-foreground text-navy text-sm font-semibold hover:bg-primary-foreground/90 transition">
            Get Started
          </a>
        </div>
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-navy border-t border-primary-foreground/10 px-4 pb-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-primary-foreground/80 hover:text-primary-foreground py-2 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#cta" onClick={() => setOpen(false)} className="px-5 py-2 rounded-lg bg-primary-foreground text-navy text-sm font-semibold text-center hover:bg-primary-foreground/90 transition">
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
