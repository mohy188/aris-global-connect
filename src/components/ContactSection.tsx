import { useState } from "react";
import { Mail, Globe, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

const details = [
  { icon: Mail, label: "Email", value: "arisandcompany@icloud.com", href: "mailto:arisandcompany@icloud.com" },
  { icon: Globe, label: "Website", value: "www.arisandcompany.com", href: "https://www.arisandcompany.com", external: true },
  {
    icon: Phone,
    label: "Phone",
    lines: [
      { display: "+92 306 9880662", href: "tel:+923069880662" },
      { display: "+92 300 1732959", href: "tel:+923001732959" },
    ],
  },
  { icon: MapPin, label: "Address", value: "Near Chinioti Gate, Chak Jhumra,\nFaisalabad, Pakistan" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setSending(true);
    try {
      const subject = encodeURIComponent(`New message from ${form.firstName} ${form.lastName}`);
      const body = encodeURIComponent(
        `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
      );
      window.location.href = `mailto:arisandcompany@icloud.com?subject=${subject}&body=${body}`;
      toast.success("Opening your email client...");
      setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-background relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-border mb-6">
            <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-muted-foreground">Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-tight">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-[15px] leading-relaxed max-w-lg mx-auto mt-6">
            Have a question or want to discuss a project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-0 border border-border">
          {/* Contact Info */}
          <div className="lg:col-span-2 bg-foreground text-background p-10 md:p-12">
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
            <p className="text-background/40 text-[14px] mb-10">Reach out to us through any of these channels.</p>

            <div className="space-y-8">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <d.icon className="w-5 h-5 text-background/30 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-background/30 mb-1.5">{d.label}</p>
                    {"lines" in d && d.lines ? (
                      <div className="space-y-1">
                        {d.lines.map((line: { display: string; href: string }) => (
                          <a key={line.href} href={line.href} className="block text-background/80 hover:text-background transition-colors text-[14px]">
                            {line.display}
                          </a>
                        ))}
                      </div>
                    ) : d.href ? (
                      <a href={d.href} className="text-background/80 hover:text-background transition-colors text-[14px]" target={d.external ? "_blank" : undefined} rel={d.external ? "noopener noreferrer" : undefined}>
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-background/80 text-[14px] whitespace-pre-line">{d.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 p-10 md:p-12">
            <h3 className="text-xl font-semibold text-foreground mb-2">Send Us a Message</h3>
            <p className="text-muted-foreground text-[14px] mb-8">Fill in the form and we'll get back to you promptly.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="text-[12px] font-medium uppercase tracking-[0.1em] text-muted-foreground mb-2 block">
                    First Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border bg-transparent text-foreground text-[14px] placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="text-[12px] font-medium uppercase tracking-[0.1em] text-muted-foreground mb-2 block">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border bg-transparent text-foreground text-[14px] placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="text-[12px] font-medium uppercase tracking-[0.1em] text-muted-foreground mb-2 block">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border bg-transparent text-foreground text-[14px] placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-[12px] font-medium uppercase tracking-[0.1em] text-muted-foreground mb-2 block">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border bg-transparent text-foreground text-[14px] placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                    placeholder="+1 234 567 890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-[12px] font-medium uppercase tracking-[0.1em] text-muted-foreground mb-2 block">
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border bg-transparent text-foreground text-[14px] placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full sm:w-auto px-10 py-4 bg-foreground text-background font-semibold text-[13px] tracking-wide uppercase hover:bg-foreground/90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {sending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
