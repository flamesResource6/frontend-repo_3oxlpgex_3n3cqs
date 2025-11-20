import React from 'react'
import { Download } from 'lucide-react'

export default function Research(){
  return (
    <section id="research" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-slate-900">Research & Outputs</h2>
            <p className="mt-3 text-slate-700">Our academic and community-facing work focuses on healing, justice, and collaboration.</p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            <article className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
              <div className="text-sm text-slate-500">Featured Report</div>
              <h3 className="mt-1 font-semibold text-slate-900">Healing City Cincinnati Report</h3>
              <button className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800">
                <Download className="w-4 h-4" /> Download
              </button>
              <div className="mt-4 h-28 rounded-xl bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center ring-1 ring-black/5" />
            </article>

            <article className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
              <div className="text-sm text-slate-500">Student Work</div>
              <h3 className="mt-1 font-semibold text-slate-900">Student Policy Briefs</h3>
              <p className="mt-2 text-slate-700 text-sm">A collection of actionable policy analyses from UC students.</p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm sm:col-span-2">
              <div className="text-sm text-slate-500">Community Projects</div>
              <h3 className="mt-1 font-semibold text-slate-900">Recipes of Healing, Hope, and Resistance</h3>
              <p className="mt-2 text-slate-700 text-sm">A community-sourced cookbook project capturing stories and nourishment.</p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {Array.from({length:3}).map((_,i) => (
                  <div key={i} className="h-24 rounded-lg bg-[url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center ring-1 ring-black/5" />
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
