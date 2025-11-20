import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(220,38,38,0.15),transparent_60%),radial-gradient(800px_400px_at_10%_-10%,rgba(0,0,0,0.08),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="py-12">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-700/80 font-semibold bg-red-50 rounded-full px-3 py-1 ring-1 ring-red-200">
              Truth • Healing • Transformation
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Truth. Healing. Transformation.
            </h1>
            <p className="mt-4 text-lg leading-7 text-slate-700 max-w-xl">
              Engaging students, faculty, and community partners to heal, collaborate, and transform the greater Cincinnati area.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#about" className="px-5 py-3 rounded-full bg-slate-900 text-white font-medium shadow hover:shadow-lg hover:translate-y-[-1px] transition">Learn More</a>
              <a href="#research" className="px-5 py-3 rounded-full bg-white text-slate-900 font-medium ring-1 ring-slate-200 hover:bg-slate-50">Explore Our Work</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-[url('https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
          </div>
        </div>
      </div>
    </section>
  )
}
