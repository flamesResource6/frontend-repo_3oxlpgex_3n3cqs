import React from 'react'
import { Menu, Mail, Calendar, Users, Phone } from 'lucide-react'

export default function Header({ onOpenContact }) {
  const nav = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#research', label: 'Research' },
    { href: '#events', label: 'Events' },
    { href: '#spotlights', label: 'Spotlights & Updates' },
    { href: '#newsletter', label: 'Newsletters' },
    { href: '#calendar', label: 'Calendar' },
    { href: '#partners', label: 'Partners' },
    { href: '#team', label: 'Team' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-red-600 text-white grid place-items-center font-bold tracking-tight">CT</div>
          <div className="leading-tight">
            <div className="font-semibold text-slate-900 uppercase text-xs">CTCHT Center</div>
            <div className="text-[10px] text-slate-600">University of Cincinnati</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a key={n.label} href={n.href} className="text-sm text-slate-700 hover:text-slate-900 transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-medium shadow hover:shadow-md hover:translate-y-[-1px] transition-all"
          >
            <Mail className="w-4 h-4" /> Connect
          </button>
          <button className="md:hidden p-2 rounded-full hover:bg-black/5">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
