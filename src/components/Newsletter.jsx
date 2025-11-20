import React, { useState } from 'react'

export default function Newsletter(){
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setEmail('')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="newsletter" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-red-600 to-rose-600 text-white p-10 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="uppercase text-xs tracking-wider opacity-80">The Beacon</div>
              <h3 className="text-3xl font-bold mt-1">Newsletter Archive</h3>
              <p className="mt-2 text-white/90">Sign up to receive updates on events, research, and community highlights.</p>
            </div>
            <form onSubmit={submit} className="bg-white/10 backdrop-blur rounded-2xl p-3 flex flex-col sm:flex-row gap-3">
              <input
                required
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white text-slate-900 placeholder-slate-500 focus:outline-none"
              />
              <button type="submit" className="px-5 py-3 rounded-xl bg-slate-900 text-white font-medium">
                Sign Up
              </button>
            </form>
          </div>
          {status === 'success' && <p className="mt-3 text-sm">Thanks for subscribing!</p>}
          {status === 'error' && <p className="mt-3 text-sm">Something went wrong. Please try again.</p>}
        </div>
      </div>
    </section>
  )
}
