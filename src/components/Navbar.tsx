import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="ARIS & Company" className={`w-[160px] h-auto transition-all duration-300 ${scrolled ? "invert" : ""}`} />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={`text-[13px] font-medium tracking-wide uppercase transition-colors ${scrolled ? "text-foreground/60 hover:text-foreground" : "text-primary-foreground/70 hover:text-primary-foreground"}`}>
              {l.label}
            </a>
          ))}
          <a href="#cta" className={`ml-4 px-6 py-2.5 text-[13px] font-semibold tracking-wide uppercase transition-all ${scrolled ? "bg-foreground text-background hover:bg-foreground/90" : "bg-primary-foreground text-navy hover:bg-primary-foreground/90"}`}>
            Get Started
          </a>
        </div>
        <button className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6 pt-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[13px] font-medium tracking-wide uppercase text-foreground/60 hover:text-foreground py-3 border-b border-border/50 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#cta" onClick={() => setOpen(false)} className="mt-4 px-6 py-2.5 bg-foreground text-background text-[13px] font-semibold tracking-wide uppercase text-center hover:bg-foreground/90 transition">
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
