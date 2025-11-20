import React, { useState } from 'react'

const pillars = [
  {
    title: 'Pursuing Truth',
    body: 'Speaking truth to power; seeing society as it is.',
  },
  {
    title: 'Fostering Healing',
    body: 'Analyzing harm; interpersonal connection.',
  },
  {
    title: 'Sparking Transformation',
    body: 'Effort and submission; shifting social narratives.',
  },
]

const principles = ['Compassion', 'Humility', 'Courage', 'Collaboration', 'Grace', 'Equity', 'Evidence']

export default function About(){
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">About the Center</h2>
            <p className="mt-4 text-slate-700 leading-7">
              Formerly Truth, Racial Healing and Transformation, the Center is housed within the School of Public and International Affairs and aligns with UC’s Next Lives Here strategy.
            </p>
            <div className="mt-8 space-y-3">
              {pillars.map((p, i) => (
                <div key={p.title} className="border border-slate-200 rounded-xl overflow-hidden">
                  <button onClick={() => setOpenIndex(openIndex === i ? -1 : i)} className="w-full text-left px-5 py-4 bg-white hover:bg-slate-50 flex items-center justify-between">
                    <span className="font-semibold text-slate-900">{p.title}</span>
                    <span className="text-slate-500">{openIndex === i ? '−' : '+'}</span>
                  </button>
                  {openIndex === i && (
                    <div className="px-5 pb-5 text-slate-700">{p.body}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="text-sm font-semibold tracking-wider uppercase text-slate-500">Guiding Principles</div>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {principles.map((g) => (
                  <div key={g} className="px-4 py-3 rounded-xl bg-red-50 text-red-800 font-medium ring-1 ring-red-200 text-center">{g}</div>
                ))}
              </div>
              <div className="mt-6 bg-[url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center rounded-xl h-48 ring-1 ring-black/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
