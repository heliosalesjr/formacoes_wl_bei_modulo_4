"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { titleFont } from "@/lib/fonts";

export default function HeroBento({
  eyebrow,
  title,
  subtitle,
  tag,
  tagLabel = "BEĨ Educação",
  buttonText,
  buttonHref = "#content",
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="w-full px-4 pt-24 pb-4 flex justify-center">
      {/* Outer "floating box" */}
      <div
        className={`w-full max-w-5xl rounded-3xl bg-slate-100 dark:bg-[#0f172a] p-3 shadow-2xl transition-all duration-700 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Bento grid: 4 cols × 3 rows on desktop, single col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">

          {/* ── Cell 1: Title ── col 1-3, row 1-2 */}
          <div className="group relative md:col-span-3 md:row-span-2 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-7 flex flex-col justify-between min-h-[200px] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/40">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none animate-float-slow-a transition-colors duration-500 group-hover:bg-white/20" />
            <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-white/10 pointer-events-none animate-float-slow-b transition-colors duration-500 group-hover:bg-white/20" />
            {/* Soft glow blob */}
            <div className="absolute top-1/3 left-1/2 w-56 h-56 -translate-x-1/2 rounded-full bg-blue-300 blur-3xl pointer-events-none animate-glow-pulse transition-transform duration-700 group-hover:scale-125" />
            {/* Dot grid ornament */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none animate-drift-grid transition-opacity duration-500 group-hover:opacity-25"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Tag above title */}
            {tag && (
              <span className="relative z-10 inline-block text-xs font-semibold tracking-widest uppercase text-blue-200 bg-white/10 border border-white/20 rounded-full px-3 py-1 w-fit mb-3">
                {tag}
              </span>
            )}

            {/* Eyebrow */}
            {eyebrow && (
              <span className="relative z-10 block text-xs sm:text-sm font-medium uppercase tracking-widest text-blue-200/70 mb-1">
                {eyebrow}
              </span>
            )}

            {/* Title */}
            <h1
              className={`${titleFont.className} relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug drop-shadow-lg`}
            >
              {title}
            </h1>
          </div>

          {/* ── Cell 2: Social links ── col 4, row 1 */}
          <div className="md:col-span-1 md:row-span-1 rounded-2xl bg-white dark:bg-[#1e293b] p-3 flex items-center justify-center gap-5 min-h-[64px] border border-slate-200 dark:border-transparent transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-300/40 dark:hover:shadow-blue-500/20">
            <a href="https://www.instagram.com/beieducacao/" target="_blank" rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 dark:hover:text-blue-200 transition-colors duration-200">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://www.beieducacao.com.br" target="_blank" rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 dark:hover:text-blue-200 transition-colors duration-200">
              <span className="sr-only">Website</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/c/BE%C4%A8Educa%C3%A7%C3%A3o" target="_blank" rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 dark:hover:text-blue-200 transition-colors duration-200">
              <span className="sr-only">YouTube</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
              </svg>
            </a>
          </div>

          {/* ── Cell 3: Stat ── col 4, row 2 (hidden on mobile) */}
          <div className="hidden md:block relative md:col-span-1 md:row-span-1 aspect-square rounded-2xl bg-emerald-500 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-400/50">
            <div className="absolute inset-[10%]">
              <Image
                src="/ald.png"
                alt=""
                fill
                className="object-cover mix-blend-screen"
              />
            </div>
          </div>

          {/* ── Cell 4: Subtitle ── col 1-2, row 3 */}
          <div className="md:col-span-2 md:row-span-1 rounded-2xl bg-white dark:bg-[#1e293b] p-5 flex flex-col justify-center min-h-[100px] border border-slate-200 dark:border-transparent transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-300/50 dark:hover:shadow-white/10">
            {subtitle ? (
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {subtitle}
              </p>
            ) : (
              <p className="text-slate-400 dark:text-slate-500 text-sm italic">
                Formação de educadores BEĨ
              </p>
            )}
          </div>

          {/* ── Cell 5: Image ── col 3, row 3 */}
          <div className="group md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden relative min-h-[100px] bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-800 flex items-center justify-center transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/50">
            <div className="relative w-3/5 h-3/5 transition-transform duration-500 group-hover:scale-110">
              <Image
                src="/trio.png"
                alt="Trio"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* ── Cell 6: CTA ── col 4, row 3 */}
          <div className="md:col-span-1 md:row-span-1 rounded-2xl bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-white/10 p-5 flex flex-col items-center justify-center min-h-[100px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-300/50 dark:hover:shadow-white/10">
            {buttonText ? (
              <Link
                href={buttonHref}
                className="w-full text-center bg-slate-800 dark:bg-white text-white dark:text-[#0f172a] font-semibold text-sm rounded-xl px-4 py-3 hover:bg-slate-700 dark:hover:bg-slate-100 transition-colors duration-200"
              >
                {buttonText}
              </Link>
            ) : (
              <button
                onClick={() => {
                  const target = document.querySelector(buttonHref);
                  target?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-7 h-7 animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="text-xs tracking-widest uppercase">
                  Ver conteúdo
                </span>
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
