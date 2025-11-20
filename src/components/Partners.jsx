import React from 'react'

export default function Partners(){
  const national = ['AAC&U TRHT Campus Centers', 'Healing Cities Network']
  const local = ['All-In Cincinnati', 'Joining Forces for Children', 'UC College of Arts & Sciences']
  return (
    <section id="partners" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Partners</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <div className="text-sm text-slate-500">National Partners</div>
            <div className="mt-3 grid grid-cols-1 gap-3">
              {national.map((n)=> (
                <div key={n} className="px-4 py-3 rounded-xl ring-1 ring-slate-200">{n}</div>
              ))}
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <div className="text-sm text-slate-500">Local Partners</div>
            <div className="mt-3 grid grid-cols-1 gap-3">
              {local.map((n)=> (
                <div key={n} className="px-4 py-3 rounded-xl ring-1 ring-slate-200">{n}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
