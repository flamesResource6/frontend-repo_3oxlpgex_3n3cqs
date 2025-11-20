import React, { useState } from 'react'
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer(){
  return (
    <footer id="connect" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-semibold uppercase text-xs text-white/80">CTCHT Center</div>
            <div className="text-sm text-white/60">University of Cincinnati</div>
            <p className="mt-4 text-white/70 text-sm max-w-sm">Contact us to collaborate or learn more about programs connecting the university and the Cincinnati community.</p>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">Contact</div>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4"/> ctcht.uc@gmail.com</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4"/> 2800 Clifton Ave</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4"/> (000) 000-0000</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">Follow</div>
            <div className="flex gap-3 text-white/80">
              <a href="#" className="p-2 rounded-lg bg-white/10"><Instagram className="w-4 h-4"/></a>
              <a href="#" className="p-2 rounded-lg bg-white/10"><Facebook className="w-4 h-4"/></a>
              <a href="#" className="p-2 rounded-lg bg-white/10"><Twitter className="w-4 h-4"/></a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-sm text-white/60 flex flex-wrap items-center gap-4 justify-between">
          <div>© {new Date().getFullYear()} CTCHT Center. All rights reserved.</div>
          <nav className="flex gap-4">
            {['Home','About','Research','Events','Newsletters','Calendar','Partners','Team'].map((n)=> (
              <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-white">{n}</a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
