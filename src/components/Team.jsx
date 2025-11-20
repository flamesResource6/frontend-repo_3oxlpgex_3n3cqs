import React from 'react'

const people = [
  { name: 'Dr. Lauren Forbes', role: 'Director', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80&auto=format&fit=crop' },
  { name: 'Student Researchers', role: 'Research Team', img: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=600&q=80&auto=format&fit=crop' },
  { name: 'IT Specialist', role: 'Technology', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&q=80&auto=format&fit=crop' },
]

export default function Team(){
  return (
    <section id="team" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Team & Leadership</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((p) => (
            <div key={p.name} className="rounded-2xl bg-white border border-slate-200 overflow-hidden">
              <div className="aspect-[4/3] bg-cover bg-center" style={{backgroundImage:`url(${p.img})`}} />
              <div className="p-4">
                <div className="font-semibold text-slate-900">{p.name}</div>
                <div className="text-sm text-slate-600">{p.role}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
          <div className="font-semibold text-slate-900">Advisory Committee</div>
          <p className="text-sm text-slate-700 mt-2">Coming soon.</p>
        </div>
      </div>
    </section>
  )
}
