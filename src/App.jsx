import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Research from './components/Research'
import Events from './components/Events'
import Newsletter from './components/Newsletter'
import Calendar from './components/Calendar'
import Partners from './components/Partners'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header onOpenContact={() => setOpen(true)} />
      <main>
        <Hero />
        <About />
        <Research />
        <Events />
        <Newsletter />
        <Calendar />
        <Partners />
        <Team />
      </main>
      <Footer />

      {/* Simple contact modal */}
      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" onClick={() => setOpen(false)}>
          <div className="w-full max-w-lg bg-white rounded-2xl p-6 ring-1 ring-slate-200" onClick={(e)=>e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Connect</h3>
              <button onClick={() => setOpen(false)} className="text-slate-500">✕</button>
            </div>
            <ContactForm />
          </div>
        </div>
      )}
    </div>
  )
}

function ContactForm(){
  const [form, setForm] = useState({ first_name:'', last_name:'', email:'', message:'' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try{
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if(!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm({ first_name:'', last_name:'', email:'', message:'' })
    } catch(err){
      setStatus('error')
    }
  }

  return (
    <form onSubmit={submit} className="mt-4 space-y-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <input value={form.first_name} onChange={(e)=>setForm({...form, first_name:e.target.value})} placeholder="First Name" className="px-4 py-3 rounded-xl ring-1 ring-slate-200" required />
        <input value={form.last_name} onChange={(e)=>setForm({...form, last_name:e.target.value})} placeholder="Last Name" className="px-4 py-3 rounded-xl ring-1 ring-slate-200" required />
      </div>
      <input type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} placeholder="Email" className="w-full px-4 py-3 rounded-xl ring-1 ring-slate-200" required />
      <textarea value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} placeholder="Message" className="w-full px-4 py-3 rounded-xl ring-1 ring-slate-200 h-28" required />
      <button type="submit" className="px-5 py-3 rounded-xl bg-slate-900 text-white">Send</button>
      {status === 'success' && <p className="text-sm text-green-700">Thanks! We received your message.</p>}
      {status === 'error' && <p className="text-sm text-red-700">Something went wrong. Please try again.</p>}
    </form>
  )
}

export default App
