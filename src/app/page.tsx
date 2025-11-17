'use client'

import React, { useRef, useEffect, useState } from 'react'
import { ArrowRight, CheckCircle, FileText, BarChart3, Shield, Zap, Sun, Moon } from 'lucide-react'
import { Logo } from './logo'

// Scroll reveal component
function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${className} transform transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {children}
    </div>
  )
}

// Dark mode toggle component
function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light'
    setIsDark(theme === 'dark')
  }, [])

  const handleToggle = () => {
    const newDark = !isDark
    setIsDark(newDark)
    localStorage.setItem('theme', newDark ? 'dark' : 'light')
    if (newDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
      ) : (
        <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
      )}
    </button>
  )
}

export default function LearnMorePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-8 flex h-16 items-center justify-between">
          <a href="https://www.thevani.co" className="flex items-center gap-2 font-bold text-xl text-blue-600 dark:text-blue-400 hover:opacity-80 transition">
            <Logo className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            THEVANI
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#what-is" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
              What is THEVANI
            </a>
            <a href="#layers" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
              How It Works
            </a>
            <a href="#who-we-serve" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
              Who We Serve
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="mailto:admin@thevani.co?subject=Contact%20-%20THEVANI"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-blue-50 dark:from-slate-900 to-white dark:to-slate-950">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
              THEVANI — Building India's <span className="text-blue-600 dark:text-blue-400">Credit Intelligence Layer</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Smarter verification. Clearer risk. Faster financing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#what-is"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 dark:bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow-sm hover:shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:admin@thevani.co?subject=Contact%20-%20THEVANI"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 dark:border-gray-600 px-6 py-3 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is THEVANI */}
      <section id="what-is" className="py-16 sm:py-24 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-8">
          <Reveal className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">What is THEVANI?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              THEVANI is a <strong>Credit Intelligence Infrastructure company</strong>. We help MSMEs get verified faster and gain access to funding. We help NBFCs reduce underwriting time, improve risk visibility, and stay compliant.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Three Layers */}
      <section id="layers" className="py-16 sm:py-24 bg-gray-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">The Three Layers of THEVANI</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Reveal>
                <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-blue-500/10 transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">T-IIL — Verification Layer</h3>
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    <li>✓ GST validation</li>
                    <li>✓ Buyer verification</li>
                    <li>✓ Cashflow stability checks</li>
                    <li>✓ Funding Readiness Score (0–100)</li>
                  </ul>
                </div>
              </Reveal>

              <Reveal>
                <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-blue-500/10 transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">DRCE — Risk Intelligence Layer</h3>
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    <li>✓ Repayment Confidence Index</li>
                    <li>✓ Cashflow trend analysis</li>
                    <li>✓ Early-warning alerts</li>
                  </ul>
                </div>
              </Reveal>

              <Reveal>
                <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-blue-500/10 transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">TCE — Compliance Layer</h3>
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    <li>✓ KYC/KYB checks</li>
                    <li>✓ Exposure & turnover safety ratios</li>
                    <li>✓ Compliance Pass/Fail report</li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section id="who-we-serve" className="py-16 sm:py-24 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Who We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Reveal>
              <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">For MSMEs</h3>
                <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Get invoices verified instantly</div>
                      <div className="text-sm">No delays, no hassle</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Improve your creditworthiness</div>
                      <div className="text-sm">Build trust with lenders</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <BarChart3 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Faster, trusted financing</div>
                      <div className="text-sm">Access capital when you need it</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Zero paperwork</div>
                      <div className="text-sm">Digital-first process</div>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">For NBFCs & Lenders</h3>
                <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Automated invoice validation</div>
                      <div className="text-sm">GST + OCR verification in seconds</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <BarChart3 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Funding Readiness Score</div>
                      <div className="text-sm">Clear risk assessment (0-100)</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Repayment Confidence Index</div>
                      <div className="text-sm">Data-driven lending decisions</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Compliance-ready workflows</div>
                      <div className="text-sm">Stay audit-ready and compliant</div>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How It Works Flow */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">How THEVANI Works</h2>
          <div className="overflow-x-auto">
            <div className="flex items-center gap-4 justify-between min-w-[900px] pb-4">
              <Reveal className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900 dark:text-white">Upload Invoice</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">PDF or image</div>
                </div>
              </Reveal>

              <div className="text-gray-300 dark:text-gray-600">→</div>

              <Reveal className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900 dark:text-white">Verification</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">GST, buyer, OCR</div>
                </div>
              </Reveal>

              <div className="text-gray-300 dark:text-gray-600">→</div>

              <Reveal className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900 dark:text-white">Score & Insights</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Readiness + confidence</div>
                </div>
              </Reveal>

              <div className="text-gray-300 dark:text-gray-600">→</div>

              <Reveal className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900 dark:text-white">Compliance</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">KYC + safety ratios</div>
                </div>
              </Reveal>

              <div className="text-gray-300 dark:text-gray-600">→</div>

              <Reveal className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900 dark:text-white">Funding</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Fast capital access</div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 sm:py-24 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Value Proposition</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Reveal>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1 text-gray-900 dark:text-white">Reduces underwriting time</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Faster decisions with automated checks and verifications</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex gap-4">
                <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1 text-gray-900 dark:text-white">Improves transparency</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Clear scores and detailed reports for all stakeholders</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex gap-4">
                <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1 text-gray-900 dark:text-white">Reduces default risk</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Early-warning alerts and confidence indexes protect lenders</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex gap-4">
                <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold mb-1 text-gray-900 dark:text-white">Faster, reliable MSME financing</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Plug-in credit intelligence layer for the entire ecosystem</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-blue-50 dark:bg-slate-950 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Ready to explore how THEVANI can support your growth?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Join MSMEs and NBFCs transforming India's lending landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:admin@thevani.co?subject=Contact%20-%20THEVANI"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 dark:bg-blue-500 px-8 py-3 text-sm font-medium text-white shadow-sm hover:shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:admin@thevani.co?subject=Support%20-%20THEVANI"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 dark:border-gray-600 px-8 py-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-900 dark:text-white"
              >
                Get Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-12 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center">
            <div className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-2">THEVANI</div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">Building India's Credit Intelligence Layer</p>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Email:{' '}
              <a href="mailto:admin@thevani.co" className="text-blue-600 dark:text-blue-400 hover:underline">
                admin@thevani.co
              </a>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} THEVANI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
