import React, { useEffect, useState } from 'react'

export default function Events(){
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/events`)
        const data = await res.json()
        setEvents(data)
      } catch (e) {
        setError('Could not load events')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="events" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-3xl font-bold text-slate-900">Events & Spotlights</h2>
        </div>

        {loading ? (
          <p className="mt-6 text-slate-600">Loading events…</p>
        ) : error ? (
          <p className="mt-6 text-red-600">{error}</p>
        ) : (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((e, i) => (
              <div key={i} className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm">
                <div className="text-sm text-slate-500">{e.date} • {e.location}</div>
                <div className="mt-1 font-semibold text-slate-900">{e.title}</div>
                <p className="mt-2 text-slate-700 text-sm">{e.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
