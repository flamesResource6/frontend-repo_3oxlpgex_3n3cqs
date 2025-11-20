import React from 'react'

export default function Calendar(){
  return (
    <section id="calendar" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-slate-900">Community Calendar</h2>
          <div className="flex gap-3">
            <a href="https://calendar.google.com" target="_blank" className="px-4 py-2 rounded-full bg-slate-900 text-white">Open in Google Calendar</a>
            <a href="#" className="px-4 py-2 rounded-full bg-white ring-1 ring-slate-200">Submit an Event</a>
          </div>
        </div>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          {[
            { title:'Grief and Growth', date:'Nov 12', location:'UC Campus' },
            { title:'Faculty Field Day', date:'Dec 2', location:'Clifton Court' },
            { title:'Debating Through Movies', date:'Jan 15', location:'TBD' },
          ].map((e)=> (
            <div key={e.title} className="rounded-2xl p-5 bg-white border border-slate-200">
              <div className="text-sm text-slate-500">{e.date} • {e.location}</div>
              <div className="font-semibold text-slate-900">{e.title}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 aspect-[16/9] w-full rounded-2xl overflow-hidden ring-1 ring-black/5 bg-white">
          <iframe
            title="CTCHT Google Calendar"
            src="https://calendar.google.com/calendar/embed?src=ctcht.uc%40gmail.com"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}
