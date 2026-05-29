"use client";

import React, { useState, useEffect } from "react";
import {
  translations,
  skillsData,
  experiences,
  TranslationDictionary,
  ExperienceItem
} from "./data";

export default function PortfolioHome() {
  // Theme and Locale State
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [locale, setLocale] = useState<"en" | "vi">("en");

  // Translation Dictionary shortcut
  const t: TranslationDictionary = translations[locale];

  // Active Skill Highlight State
  const [activeSkill, setActiveSkill] = useState<{ name: string; desc: string } | null>({
    name: "gRPC & WebRTC",
    desc: "Leveraged for ultra-low latency internal microservice APIs and real-time surveillance streaming (under 500ms)."
  });



  // Contact Form State
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">("idle");

  // Load and apply theme/locale configurations
  useEffect(() => {
    // Default to dark theme on document load
    document.documentElement.classList.add("dark");

    // Auto-detect browser language
    if (typeof window !== "undefined") {
      const browserLang = navigator.language.slice(0, 2);
      if (browserLang === "vi") {
        setLocale("vi");
      }
    }
  }, []);

  // Theme Toggler
  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  };





  // Handle contact form submit simulation
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-purple-500 selection:text-white pb-16">
      {/* Dynamic Background Glowing Blobs */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>

      {/* Floating Theme / Locale Quick-Access Navbar */}
      <header className="sticky top-0 z-50 w-full glass-panel border-b border-opacity-10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2 text-xl font-bold tracking-tight glow-text">
            {/* <span className="text-purple-500">Tu Nguyen</span> */}
            {/* <span className="text-cyan-400">.dev /&gt;</span> */}
          </a>

          {/* Nav items */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-purple-500 transition-colors">{t.navAbout}</a>
            <a href="#experience" className="hover:text-purple-500 transition-colors">{t.navExperience}</a>
            <a href="#skills" className="hover:text-purple-500 transition-colors">{t.navSkills}</a>
            <a href="#contact" className="hover:text-purple-500 transition-colors">{t.navContact}</a>
          </nav>

          {/* Quick-Access Controls */}
          <div className="flex items-center space-x-4">
            {/* Locale Toggle */}
            <button
              onClick={() => setLocale(locale === "en" ? "vi" : "en")}
              className="px-3 py-1 text-xs font-semibold rounded-md border border-opacity-20 hover:border-purple-500 glass-panel flex items-center space-x-1"
              aria-label="Toggle language"
            >
              <span>{locale === "en" ? "🇻🇳 VI" : "🇺🇸 EN"}</span>
            </button>

            {/* Dark/Light Toggler */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full theme-toggle-btn w-9 h-9 flex items-center justify-center text-lg"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* Resume Call-to-action */}
            <a
              href="/Nguyen-Dang-Tu.pdf"
              download="Nguyen-Dang-Tu-CV.pdf"
              className="hidden sm:inline-flex px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md hover:from-purple-500 hover:to-indigo-500 shadow-md glow-btn"
            >
              {t.cvDownload}
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 sm:pt-20">

        {/* HERO SECTION */}
        <section id="hero" className="min-h-[70vh] flex flex-col items-center justify-center text-center py-16 max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-6 sm:space-y-8">
            {/* Greeting badge */}
            <div className="inline-flex w-fit items-center space-x-2 px-3 py-1 rounded-full border border-purple-500 border-opacity-20 bg-purple-500 bg-opacity-5 text-purple-400 font-mono text-sm">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping"></span>
              <span>{t.heroGreeting} {t.heroName}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight leading-tight">
              {t.heroSub}
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-secondary max-w-2xl font-light leading-relaxed">
              {t.heroSubtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 items-center justify-center">
              <a
                href="#experience"
                className="px-8 py-4 text-center text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:opacity-95 shadow-lg glow-btn min-w-[180px]"
              >
                {locale === "en" ? "View Experience" : "Xem Kinh Nghiệm"}
              </a>
              <a
                href="#contact"
                className="px-8 py-4 text-center text-sm font-semibold border border-purple-500 border-opacity-30 rounded-lg hover:bg-purple-500 hover:bg-opacity-5 glass-panel min-w-[180px]"
              >
                {t.navContact}
              </a>
              <a
                href="/Nguyen-Dang-Tu.pdf"
                download="Nguyen-Dang-Tu-CV.pdf"
                className="sm:hidden px-8 py-4 text-center text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 glow-btn min-w-[180px]"
              >
                {t.cvDownload}
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT & EDUCATION SECTION */}
        <section id="about" className="py-20 border-t border-opacity-10 border-purple-500">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* About text */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight glow-text">{t.aboutTitle}</h2>
              <p className="text-secondary leading-relaxed text-lg font-light">
                {t.aboutText}
              </p>
            </div>

            {/* Education Card */}
            <div className="lg:col-span-6">
              <div className="glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-purple-500 bg-opacity-10 rounded-full filter blur-xl"></div>
                <h3 className="text-xl font-bold mb-6 text-purple-400 font-mono tracking-wider">{t.eduTitle.toUpperCase()}</h3>

                <div className="flex items-start space-x-4">
                  {/* HCMUT Logo Mock / Icon */}
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-purple-500 bg-opacity-10 flex items-center justify-center text-purple-400">
                    🎓
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold leading-tight">{t.eduSchool}</h4>
                    <p className="text-purple-400 text-sm font-medium mt-1">{t.eduMajor}</p>
                    <p className="text-xs text-slate-500 mt-2 font-mono">{t.eduPeriod}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 text-xs rounded-md bg-purple-500 bg-opacity-10 text-purple-400 border border-purple-500 border-opacity-10">HCMUT Alumni</span>
                      <span className="px-2.5 py-1 text-xs rounded-md bg-cyan-500 bg-opacity-10 text-cyan-400 border border-cyan-500 border-opacity-10">Computer Science Major</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section id="experience" className="py-20 border-t border-opacity-10 border-purple-500">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight glow-text mb-4">
              {t.expTitle}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative border-l border-purple-500 border-opacity-20 ml-4 md:ml-32 space-y-12">
            {(experiences[locale] as ExperienceItem[]).map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                {/* Timeline node */}
                <div className="absolute -left-[9px] top-1.5 timeline-dot w-4 h-4"></div>

                {/* Date column (Desktop) */}
                <div className="hidden md:block absolute -left-36 top-1 text-right w-28 text-sm font-mono text-slate-500">
                  {exp.period}
                </div>

                {/* Experience Detail Panel */}
                <div className="glass-panel p-6 sm:p-8 rounded-2xl">
                  {/* Heading */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-opacity-10 border-purple-500 pb-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold leading-tight">{exp.role}</h3>
                      <p className="text-purple-400 font-semibold text-sm mt-1">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end text-xs text-slate-500 font-mono">
                      <span className="md:hidden mb-1">{exp.period}</span>
                      <span>📍 {exp.location}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-secondary text-sm leading-relaxed mb-6 font-light">
                    {exp.description}
                  </p>

                  {/* Highlights Bullet points */}
                  <ul className="space-y-3 text-secondary text-sm mb-6 list-inside leading-relaxed font-light">
                    {exp.bulletPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start">
                        <span className="text-purple-400 mr-2 flex-shrink-0">✦</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Interactive project link (Vime / Demo Video) for VNPT IT */}
                  {exp.company.includes("VNPT") && (
                    <div className="mb-6 p-4 rounded-xl border border-purple-500 border-opacity-20 bg-purple-500 bg-opacity-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center space-x-3 text-left">
                        <span className="text-2xl">🎥</span>
                        <div>
                          <h4 className="text-xs font-bold font-mono text-purple-400 tracking-wider">AICAM PROJECT MEDIA</h4>
                          <p className="text-xs text-secondary">{locale === "en" ? "Watch our formal product showcase video" : "Xem video giới thiệu chính thức của nền tảng"}</p>
                        </div>
                      </div>
                      <a
                        href="https://drive.google.com/file/d/1k_W1cT4jo9WXzVz6oV2k-ufyNIvjTpGE/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-xs font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-500 transition-colors shadow-md glow-btn"
                      >
                        {t.videoLinkBtn}
                      </a>
                    </div>
                  )}

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techs.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs rounded-md bg-purple-500 bg-opacity-5 border border-purple-500 border-opacity-10 text-secondary font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>



        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 border-t border-opacity-10 border-purple-500">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight glow-text mb-4">
              {t.skillsTitle}
            </h2>
            <p className="text-secondary font-light">
              {t.skillsSubtitle}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Interactive Grid Categories */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {Object.entries(skillsData).map(([key, category]) => (
                <div key={key} className="glass-panel p-5 rounded-xl">
                  <h3 className="font-bold text-sm font-mono text-purple-400 uppercase tracking-wider mb-4 border-b border-opacity-10 border-purple-500 pb-2">
                    {locale === "en" ? category.label : category.labelVi}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, sIdx) => (
                      <button
                        key={sIdx}
                        onMouseEnter={() => setActiveSkill(skill)}
                        onClick={() => setActiveSkill(skill)}
                        className={`px-3 py-1.5 text-xs font-mono rounded-md skill-tag ${activeSkill?.name === skill.name
                          ? "bg-purple-600 text-white border-purple-600 shadow-md"
                          : "bg-purple-500 bg-opacity-5 text-secondary"
                          }`}
                      >
                        {skill.name}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Active Skill Description Card (Visual Highlight) */}
            <div className="lg:col-span-5 sticky top-24">
              <div className="glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden border border-purple-500 border-opacity-30">
                <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-cyan-500 bg-opacity-10 rounded-full filter blur-xl"></div>

                <h4 className="text-xs font-bold font-mono tracking-widest text-cyan-400 uppercase mb-2">
                  SKILL APPLICATION HIGHLIGHT
                </h4>

                {activeSkill ? (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold tracking-tight glow-text">
                      {activeSkill.name}
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed font-light">
                      {activeSkill.desc}
                    </p>
                  </div>
                ) : (
                  <p className="text-slate-500 text-sm font-light italic">
                    {locale === "en" ? "Hover on a skill tag to view detailed architectural integration." : "Rê chuột vào một kỹ năng để xem chi tiết ứng dụng tích hợp hệ thống."}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 border-t border-opacity-10 border-purple-500">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight glow-text mb-4">
              {t.contactTitle}
            </h2>
            <p className="text-secondary font-light">
              {t.contactSubtitle}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-stretch">

            {/* Contact details */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">

              <div className="glass-panel p-6 rounded-2xl flex items-center space-x-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h4 className="text-xs font-bold font-mono text-slate-500 uppercase tracking-widest">{t.contactEmail}</h4>
                  <a href="mailto:tu07122001@gmail.com" className="text-md font-semibold hover:text-purple-400 transition-colors">tu07122001@gmail.com</a>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-2xl flex items-center space-x-4">
                <div className="text-3xl">📱</div>
                <div>
                  <h4 className="text-xs font-bold font-mono text-slate-500 uppercase tracking-widest">{t.contactPhone}</h4>
                  <a href="tel:0336339385" className="text-md font-semibold hover:text-purple-400 transition-colors">0336 339 385</a>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-2xl flex items-center space-x-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h4 className="text-xs font-bold font-mono text-slate-500 uppercase tracking-widest">{t.contactLocation}</h4>
                  <span className="text-md font-semibold">Ho Chi Minh City, Vietnam</span>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-2xl flex items-center space-x-4">
                <div className="text-3xl">🔗</div>
                <div>
                  <h4 className="text-xs font-bold font-mono text-slate-500 uppercase tracking-widest">LINKEDIN</h4>
                  <a
                    href="https://www.linkedin.com/in/tu-nguyen-971325233/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md font-semibold hover:text-purple-400 transition-colors text-purple-400 block break-all"
                  >
                    linkedin.com/in/tu-nguyen-971325233/
                  </a>
                </div>
              </div>

            </div>

            {/* Glowing Message Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleContactSubmit} className="glass-panel p-6 sm:p-8 rounded-2xl space-y-6">

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold font-mono text-slate-400 uppercase tracking-wider mb-2">
                      {t.contactName}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-900 bg-opacity-50 border border-slate-700 border-opacity-50 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors font-sans text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold font-mono text-slate-400 uppercase tracking-wider mb-2">
                      {t.contactEmail}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-slate-900 bg-opacity-50 border border-slate-700 border-opacity-50 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors font-sans text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold font-mono text-slate-400 uppercase tracking-wider mb-2">
                    {t.contactPhone}
                  </label>
                  <input
                    type="text"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 bg-opacity-50 border border-slate-700 border-opacity-50 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors font-sans text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold font-mono text-slate-400 uppercase tracking-wider mb-2">
                    {t.contactMessage}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 bg-opacity-50 border border-slate-700 border-opacity-50 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors font-sans text-sm resize-none"
                  ></textarea>
                </div>

                {formStatus === "success" && (
                  <div className="p-4 rounded-lg bg-emerald-500 bg-opacity-10 border border-emerald-500 border-opacity-20 text-emerald-400 text-sm font-medium">
                    ✓ {t.contactSuccess}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full py-4 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:opacity-95 shadow-md glow-btn disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  <span>{formStatus === "sending" ? t.contactSending : t.contactSend}</span>
                </button>

              </form>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-opacity-10 border-purple-500 pt-10 mt-20 text-center text-xs text-slate-500 font-mono">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Nguyen Dang Tu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
