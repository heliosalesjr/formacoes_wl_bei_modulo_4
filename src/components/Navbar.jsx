"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: "Módulo 4",           short: "Módulo 4",  href: "/" },
  { name: "Métodos Avaliativos", short: "Métodos",  href: "/metodosavaliativos" },
  { name: "Culminância",        short: "Culmin.",   href: "/culminancia" },
  { name: "Registros",          short: "Registros", href: "/registros" },
  { name: "Encerramento",       short: "Encerr.",   href: "/encerramento" },
]

export default function Navbar() {
  const [isOpen, setIsOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark]         = useState(false)
  const pathname                = usePathname()

  // Persist theme across reloads
  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark"
    setDark(saved)
    document.documentElement.classList.toggle("dark", saved)
  }, [])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false) }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-3 pointer-events-none">

      {/* Click-away backdrop (mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Pill container */}
      <div
        className={`relative w-full max-w-5xl pointer-events-auto rounded-2xl border transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-white/70 dark:bg-slate-900/75 backdrop-blur-md border-slate-200/50 dark:border-slate-700/40 shadow-lg"
            : "bg-white/95 dark:bg-slate-900/90 border-slate-200/80 dark:border-slate-700/60 shadow-sm"
        }`}
      >
        {/* Main row */}
        <div
          className={`flex items-center justify-between transition-all duration-300 ease-in-out ${
            scrolled ? "px-4 py-2" : "px-5 py-3"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={dark ? "/logo_white.png" : "/logo-blue.png"}
              alt="BEĨ Educação"
              width={110}
              height={36}
              className={`w-auto transition-all duration-300 ${scrolled ? "h-7" : "h-9"}`}
              priority
            />
          </Link>

          {/* Desktop nav — full names */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navegação principal">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-blue-700 dark:text-blue-400"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/60"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-5 rounded-full bg-blue-600 dark:bg-blue-400" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Tablet nav — short names */}
          <nav className="hidden md:flex lg:hidden items-center gap-0.5" aria-label="Navegação">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-blue-700 dark:text-blue-400"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/60"
                  }`}
                >
                  {link.short}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-blue-600 dark:bg-blue-400" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right controls: theme toggle + mobile hamburger */}
          <div className="flex items-center gap-1">

            {/* Dark mode toggle */}
            <button
              onClick={toggleDark}
              aria-label={dark ? "Modo claro" : "Modo escuro"}
              className="flex items-center justify-center w-9 h-9 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            >
              {dark ? (
                /* Sun icon */
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                /* Moon icon */
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-100 dark:border-slate-700 px-3 pt-2 pb-3 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </header>
  )
}
