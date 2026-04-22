"use client";
import { useState } from "react";
import { toast } from "sonner";
import { Send, Mail, Phone, Building2, Globe, ShieldCheck } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      toast.success("Audit request sent! We'll contact you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section
      id="contact-form"
      className="relative py-20 sm:py-32 lg:py-40 bg-white overflow-hidden"
    >
      {/* Architectural Grid Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.05]">
        {[...Array(10)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-brand w-full"
            style={{ top: `${10 * (i + 1)}%` }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-brand h-full"
            style={{ left: `${8.33 * (i + 1)}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto lg:max-w-7xl w-full px-6 sm:px-10 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* ── Left Content: Value Prop ── */}
          <div className="space-y-10 sm:space-y-14">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-x-3 text-brand text-[9px] sm:text-[10px] font-bold tracking-[0.4em] uppercase mx-auto lg:mx-0">
                <span className="w-8 sm:w-12 h-px bg-brand/30" />
                Partner With Us
              </div>
              <h2 
                className="text-gray-900 font-heading tracking-tight leading-[1.1]"
                style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)", fontWeight: 600 }}
              >
                Claim Your Free <span className="italic text-brand">Amazon Opportunity Audit</span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Our experts will analyze your account, expose revenue leaks, and
                present a custom growth blueprint — free of charge and with zero
                obligation.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: "Strategic Support",
                  value: "support@goldenshiruhllc.com",
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  label: "Growth Consultation",
                  value: "+1 213-816-2229",
                },
                {
                  icon: <Globe className="w-5 h-5" />,
                  label: "Global Operations",
                  value: "Scaling Brands Across All Regions",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-x-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-brand/5 border border-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                      {item.label}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-brand transition-colors">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Verification Badge */}
            <div className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex items-start gap-x-5 relative overflow-hidden group shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="w-12 h-12 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-brand" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-600 leading-relaxed relative z-10">
                <span className="font-bold text-gray-900 block mb-1">NDA Protected Analysis</span>
                Your data is 100% secure. We never share your Seller Central information or brand metrics with third parties.
              </p>
            </div>
          </div>

          {/* ── Right Content: The Form ── */}
          <div className="relative group">
            <div className="absolute -inset-6 bg-brand/5 rounded-[4rem] -rotate-1 pointer-events-none group-hover:rotate-0 transition-transform duration-700" />

            <form
              onSubmit={handleSubmit}
              className="relative rounded-[3rem] bg-white border border-gray-100 shadow-2xl p-8 sm:p-12 space-y-8"
            >
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                {/* Full Name */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] px-1">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    className="w-full h-13 px-6 rounded-2xl bg-gray-50/50 border border-gray-100 focus:outline-none focus:border-brand/30 focus:bg-white focus:ring-4 focus:ring-brand/5 transition-all text-sm font-medium placeholder:text-gray-300"
                  />
                </div>
                {/* Email Address */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] px-1">
                    Work Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="name@company.com"
                    className="w-full h-13 px-6 rounded-2xl bg-gray-50/50 border border-gray-100 focus:outline-none focus:border-brand/30 focus:bg-white focus:ring-4 focus:ring-brand/5 transition-all text-sm font-medium placeholder:text-gray-300"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                {/* Phone */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] px-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full h-13 px-6 rounded-2xl bg-gray-50/50 border border-gray-100 focus:outline-none focus:border-brand/30 focus:bg-white focus:ring-4 focus:ring-brand/5 transition-all text-sm font-medium placeholder:text-gray-300"
                  />
                </div>
                {/* Company Name */}
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] px-1">
                    Brand Name
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                    <input
                      required
                      type="text"
                      placeholder="My Amazon Brand"
                      className="w-full h-13 pl-12 pr-6 rounded-2xl bg-gray-50/50 border border-gray-100 focus:outline-none focus:border-brand/30 focus:bg-white focus:ring-4 focus:ring-brand/5 transition-all text-sm font-medium placeholder:text-gray-300"
                    />
                  </div>
                </div>
              </div>

              {/* Marketplace Selection */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] px-1">
                  Primary Marketplace
                </label>
                <div className="relative">
                  <select className="w-full h-13 px-6 rounded-2xl bg-gray-50/50 border border-gray-100 focus:outline-none focus:border-brand/30 focus:bg-white focus:ring-4 focus:ring-brand/5 transition-all text-sm font-medium appearance-none cursor-pointer">
                    <option>Amazon US (.com)</option>
                    <option>Amazon UK (.co.uk)</option>
                    <option>Amazon Europe (.de, .fr, etc.)</option>
                    <option>Amazon Canada (.ca)</option>
                    <option>Other / Multiple</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <Mail className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] px-1">
                  Growth Objectives
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your current challenges and 12-month goals..."
                  className="w-full p-6 rounded-3xl bg-gray-50/50 border border-gray-100 focus:outline-none focus:border-brand/30 focus:bg-white focus:ring-4 focus:ring-brand/5 transition-all text-sm font-medium resize-none placeholder:text-gray-300"
                />
              </div>

              <button
                disabled={loading}
                className="w-full h-14 sm:h-16 rounded-full bg-brand hover:bg-brand-hover text-white font-bold text-base sm:text-lg flex items-center justify-center gap-x-3 transition-all duration-300 shadow-2xl shadow-brand/40 disabled:opacity-70 group active:scale-[0.98]"
              >
                {loading ? (
                  <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Initialize Strategic Audit
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </button>

              <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-[0.2em]">
                Strict NDA Protected &bull; Response within 24 Hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
