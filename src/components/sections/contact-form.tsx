"use client";
import { useState } from "react";
import { toast } from "sonner";
import { Send, Mail, Phone, Building2, Globe } from "lucide-react";

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
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left Content: Value Prop ── */}
          <div className="space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-[10px] font-bold tracking-widest uppercase border border-brand/20">
                Contact Us
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 font-heading leading-tight">
                Claim Your Free{" "}
                <span className="text-brand">Amazon Opportunity Audit</span>
              </h2>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                Our experts will analyze your account, expose revenue leaks, and
                present a custom growth blueprint — free of charge and with zero
                obligation.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: "Email Support",
                  value: "support@goldenshiruhllc.com",
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  label: "Direct Call",
                  value: "+1 213-816-2229",
                },
                {
                  icon: <Globe className="w-5 h-5" />,
                  label: "Global Presence",
                  value: "Serving Sellers Worldwide",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand/5 border border-brand/10 flex items-center justify-center text-brand">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      {item.label}
                    </p>
                    <p className="text-sm font-bold text-gray-900">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Verification Badge */}
            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 flex items-center gap-x-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 font-bold text-lg">✓</span>
              </div>
              <p className="text-xs font-medium text-gray-600">
                Your data is 100% secure. We never share your Seller Central
                information.
              </p>
            </div>
          </div>

          {/* ── Right Content: The Form ── */}
          <div className="relative">
            <div className="absolute -inset-4 bg-brand/5 rounded-[3rem] -rotate-1 pointer-events-none" />

            <form
              onSubmit={handleSubmit}
              className="relative rounded-[2.5rem] bg-white border border-gray-100 shadow-2xl p-8 md:p-10 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Name"
                    className="w-full h-12 px-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-brand/30 focus:bg-white transition-all text-sm"
                  />
                </div>
                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">
                    Work Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="[EMAIL_ADDRESS]"
                    className="w-full h-12 px-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-brand/30 focus:bg-white transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full h-12 px-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-brand/30 focus:bg-white transition-all text-sm"
                  />
                </div>
                {/* Company Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">
                    Brand Name
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                    <input
                      required
                      type="text"
                      placeholder="My Amazon Brand"
                      className="w-full h-12 pl-11 pr-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-brand/30 focus:bg-white transition-all text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Marketplace Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">
                  Primary Marketplace
                </label>
                <select className="w-full h-12 px-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-brand/30 focus:bg-white transition-all text-sm appearance-none cursor-pointer">
                  <option>Amazon US (.com)</option>
                  <option>Amazon UK (.co.uk)</option>
                  <option>Amazon Europe (.de, .fr, etc.)</option>
                  <option>Amazon Canada (.ca)</option>
                  <option>Other / Multiple</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">
                  How can we help?
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your brand and growth goals..."
                  className="w-full p-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-brand/30 focus:bg-white transition-all text-sm resize-none"
                />
              </div>

              <button
                disabled={loading}
                className="w-full h-14 rounded-full bg-brand hover:bg-brand-hover text-white font-bold flex items-center justify-center gap-x-3 transition-all duration-300 shadow-xl shadow-brand/20 disabled:opacity-70 group"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Audit Request
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest">
                We typically respond in less than 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
