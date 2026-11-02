"use client";

import { useState } from "react";
import {
  Activity, Search, Menu, X, ArrowUpRight, CalendarDays,
  Clock, HeartPulse, Stethoscope, Brain, Eye, ShieldCheck,
  Bell, ChevronRight, Plus, UserRound, Video
} from "lucide-react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);
  const [showAppointment, setShowAppointment] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const doctors = [
    { name: "Dr. Olivia Carter", role: "Cardiologist", category: "Heart", icon: HeartPulse, time: "09:30 AM", color: "#a6e5c2", initials: "OC" },
    { name: "Dr. Ethan Brooks", role: "Neurologist", category: "Brain", icon: Brain, time: "11:00 AM", color: "#c6b5fa", initials: "EB" },
    { name: "Dr. Sophia Lee", role: "Eye Specialist", category: "Vision", icon: Eye, time: "01:30 PM", color: "#f2c18c", initials: "SL" },
  ];

  const filtered = doctors.filter(d =>
    (category === "All" || d.category === category) &&
    (d.name.toLowerCase().includes(search.toLowerCase()) || d.role.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <main className="min-h-screen bg-[#0d1218] text-[#edf3f5] flex">
      <aside className={`${mobileMenu ? "flex" : "hidden"} md:flex fixed md:sticky top-0 z-30 w-64 h-screen bg-[#151e27] border-r border-white/5 p-7 flex-col`}>
        <div className="flex items-center gap-3 text-2xl font-black tracking-tight">
          <div className="bg-[#73e0b2] text-[#10241e] p-2 rounded-xl"><Activity size={22}/></div>
          med<span className="text-[#73e0b2]">space</span>
          <button className="md:hidden ml-auto" onClick={() => setMobileMenu(false)}><X/></button>
        </div>
        <p className="text-[10px] uppercase tracking-[.2em] text-gray-500 mt-12 mb-4">Workspace</p>
        <nav className="space-y-2">
          {[
            ["Overview", Activity],
            ["Find a doctor", Stethoscope],
            ["Appointments", CalendarDays],
            ["Health records", ShieldCheck],
          ].map(([label, Icon]: any, i) => (
            <button key={label} onClick={() => {if (label === "Find a doctor") document.getElementById("doctors")?.scrollIntoView({behavior:"smooth"}); else if(label === "Appointments") setShowAppointment(true); else document.getElementById("overview")?.scrollIntoView({behavior:"smooth"}); setMobileMenu(false)}} className={`w-full flex items-center gap-3 p-3 rounded-xl text-sm text-left ${i===0 ? "bg-[#73e0b2] text-[#10241e] font-bold" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}>
              <Icon size={18}/>{label}
            </button>
          ))}
        </nav>
        <div className="mt-auto rounded-2xl bg-[#202d36] p-5">
          <div className="bg-[#73e0b2]/15 w-10 h-10 rounded-xl flex items-center justify-center text-[#73e0b2]"><HeartPulse/></div>
          <p className="font-bold mt-4">Your health matters.</p>
          <p className="text-xs text-gray-400 mt-2 leading-5">Small steps today make a healthier tomorrow.</p>
          <button onClick={() => setShowAppointment(true)} className="text-[#73e0b2] text-xs font-bold mt-4 flex items-center gap-2">Get support <ArrowUpRight size={15}/></button>
        </div>
        <div className="flex gap-3 items-center mt-7 pt-5 border-t border-white/10">
          <div className="w-10 h-10 rounded-full bg-[#344c53] flex items-center justify-center"><UserRound/></div>
          <div><p className="text-sm font-bold">Guest User</p><p className="text-xs text-gray-500">Demo account</p></div>
        </div>
      </aside>

      <div className="flex-1 min-w-0">
        <header className="h-20 px-5 md:px-10 border-b border-white/5 flex items-center justify-between sticky top-0 bg-[#0d1218]/90 backdrop-blur-xl z-20">
          <div className="flex items-center gap-3">
            <button className="md:hidden" onClick={() => setMobileMenu(true)}><Menu/></button>
            <div><p className="text-xs text-gray-500">MONDAY, YOUR HEALTH FIRST</p><p className="font-bold">Healthcare workspace</p></div>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-[#1b2730] flex items-center justify-center text-gray-400"><Bell size={18}/></button>
            <button onClick={() => setShowAppointment(true)} className="bg-[#73e0b2] text-[#10241e] rounded-xl px-4 py-3 text-xs md:text-sm font-bold flex gap-2 items-center"> <Plus size={17}/> Book appointment</button>
          </div>
        </header>

        <div id="overview" className="p-5 md:p-10 max-w-7xl mx-auto">
          <section className="grid lg:grid-cols-[1.5fr_.8fr] gap-5">
            <div className="rounded-3xl bg-gradient-to-br from-[#183c39] to-[#142a31] p-7 md:p-10 relative overflow-hidden min-h-[260px]">
              <div className="absolute -right-12 -top-16 w-72 h-72 border border-[#73e0b2]/15 rounded-full"/>
              <div className="absolute right-4 top-8 w-48 h-48 border border-[#73e0b2]/15 rounded-full"/>
              <div className="relative z-10">
                <span className="inline-flex gap-2 items-center text-xs text-[#73e0b2] uppercase tracking-widest"><Activity size={15}/> Your health dashboard</span>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-7">Healthcare,<br/>made <span className="text-[#73e0b2]">simpler.</span></h1>
                <p className="text-gray-300 text-sm mt-4 max-w-md">Discover specialists, organise appointments and take control of your wellbeing.</p>
                <button onClick={() => document.getElementById("doctors")?.scrollIntoView({behavior:"smooth"})} className="mt-6 bg-[#73e0b2] text-[#10241e] rounded-xl px-5 py-3 text-sm font-bold flex items-center gap-2">Explore specialists <ArrowUpRight size={17}/></button>
              </div>
            </div>
            <div className="rounded-3xl bg-[#151e27] border border-white/5 p-7">
              <div className="flex justify-between"><p className="text-sm text-gray-400">Health snapshot</p><Activity className="text-[#73e0b2]"/></div>
              <div className="mt-8"><p className="text-4xl font-bold">Good <span className="text-[#73e0b2]">health</span></p><p className="text-xs text-gray-500 mt-2">Your demo wellness overview</p></div>
              <div className="h-2 rounded-full bg-[#29353e] mt-6 overflow-hidden"><div className="w-4/5 h-full rounded-full bg-[#73e0b2]"/></div>
              <div className="flex justify-between mt-3 text-xs text-gray-500"><span>Wellness overview</span><span>80%</span></div>
              <p className="text-[10px] text-gray-600 mt-5">Illustrative demo indicator, not a medical assessment.</p>
            </div>
          </section>

          <section className="grid sm:grid-cols-3 gap-4 mt-6">
            {[
              ["Appointments", "02", "Upcoming visits", CalendarDays],
              ["Care specialists", "15+", "Available categories", Stethoscope],
              ["Support", "24/7", "Online assistance", Video]
            ].map(([label, value, sub, Icon]: any) => <div key={label} className="bg-[#151e27] border border-white/5 rounded-2xl p-5 flex justify-between items-center">
              <div><p className="text-xs text-gray-500">{label}</p><p className="text-3xl font-bold mt-2">{value}</p><p className="text-xs text-gray-500 mt-1">{sub}</p></div>
              <div className="bg-[#73e0b2]/10 text-[#73e0b2] p-3 rounded-xl"><Icon size={22}/></div>
            </div>)}
          </section>

          <section id="doctors" className="mt-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
              <div><p className="text-xs uppercase tracking-[.2em] text-[#73e0b2]">Find your specialist</p><h2 className="text-3xl font-bold mt-2">Meet our doctors</h2><p className="text-sm text-gray-500 mt-2">Browse care professionals by speciality.</p></div>
              <div className="flex gap-2 bg-[#151e27] border border-white/10 rounded-xl px-4 py-3 w-full md:w-64"><Search size={18} className="text-gray-500"/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search doctors..." className="bg-transparent outline-none text-sm w-full"/></div>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {["All","Heart","Brain","Vision"].map(c => <button key={c} onClick={() => setCategory(c)} className={`px-5 py-2 rounded-full text-xs font-bold transition ${category===c ? "bg-[#73e0b2] text-[#10241e]" : "bg-[#151e27] text-gray-400 border border-white/5 hover:border-[#73e0b2]"}`}>{c}</button>)}
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-5">
              {filtered.map((doctor) => {
                const Icon = doctor.icon;
                return <article key={doctor.name} className="bg-[#151e27] border border-white/5 rounded-2xl p-6 hover:border-[#73e0b2]/50 transition">
                  <div className="flex items-center justify-between"><div className="w-14 h-14 rounded-2xl flex items-center justify-center text-[#142a31] font-black text-lg" style={{background:doctor.color}}>{doctor.initials}</div><span className="text-[10px] bg-[#73e0b2]/10 text-[#73e0b2] rounded-full px-3 py-2">Available</span></div>
                  <h3 className="font-bold text-lg mt-5">{doctor.name}</h3><p className="text-sm text-gray-500 mt-1">{doctor.role}</p>
                  <div className="flex gap-2 items-center text-xs text-gray-400 mt-5"><Clock size={14} className="text-[#73e0b2]"/> Next slot: {doctor.time}</div>
                  <button onClick={() => {setSelected(doctor.name);setShowAppointment(true)}} className="mt-6 w-full border border-white/10 rounded-xl py-3 text-sm font-bold hover:bg-[#73e0b2] hover:text-[#10241e] transition flex justify-center items-center gap-2">View availability <ChevronRight size={16}/></button>
                </article>
              })}
              {filtered.length===0 && <p className="text-gray-500 col-span-3 py-8">No matching specialists found.</p>}
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-white/5 bg-[#151e27] p-7 md:p-9 flex flex-col md:flex-row justify-between gap-6 items-center">
            <div><p className="text-xs uppercase tracking-[.2em] text-[#73e0b2]">Need a hand?</p><h2 className="text-2xl font-bold mt-3">Not sure where to begin?</h2><p className="text-sm text-gray-400 mt-2">Our care team can help you explore the right service.</p></div>
            <button onClick={() => setShowAppointment(true)} className="bg-[#73e0b2] text-[#10241e] rounded-xl px-6 py-4 font-bold text-sm whitespace-nowrap">Request assistance <ArrowUpRight className="inline ml-2" size={17}/></button>
          </section>
          <footer className="text-center text-xs text-gray-600 py-10">MEDSPACE · Healthcare interface concept · Demo data only</footer>
        </div>
      </div>

      {showAppointment && <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#18232c] border border-white/10 rounded-3xl p-7 relative">
          <button onClick={() => {setShowAppointment(false);setConfirmed(false);setSelected(null)}} className="absolute right-5 top-5 text-gray-400"><X/></button>
          {confirmed ? <div className="text-center py-8"><div className="w-16 h-16 bg-[#73e0b2]/15 text-[#73e0b2] rounded-full flex items-center justify-center mx-auto"><ShieldCheck size={32}/></div><h3 className="text-2xl font-bold mt-5">Request submitted!</h3><p className="text-sm text-gray-400 mt-3">Demo only. No real appointment has been booked.</p><button onClick={() => {setShowAppointment(false);setConfirmed(false);setSelected(null)}} className="bg-[#73e0b2] text-[#10241e] rounded-xl px-7 py-3 font-bold mt-7">Close</button></div> :
          <><p className="text-xs uppercase tracking-widest text-[#73e0b2]">Appointment request</p><h3 className="text-2xl font-bold mt-3">Let's find your care.</h3>
            <form onSubmit={e => {e.preventDefault();setConfirmed(true)}} className="space-y-4 mt-6">
              <input required placeholder="Full name" className="w-full rounded-xl bg-[#0d1218] border border-white/10 p-4 outline-none focus:border-[#73e0b2]"/>
              <input required type="email" placeholder="Email address" className="w-full rounded-xl bg-[#0d1218] border border-white/10 p-4 outline-none focus:border-[#73e0b2]"/>
              <select defaultValue={selected || ""} required className="w-full rounded-xl bg-[#0d1218] border border-white/10 p-4 outline-none"><option value="" disabled>Select specialist</option>{doctors.map(d=><option key={d.name}>{d.name}</option>)}</select>
              <input required type="date" className="w-full rounded-xl bg-[#0d1218] border border-white/10 p-4 outline-none"/>
              <button className="w-full rounded-xl bg-[#73e0b2] text-[#10241e] p-4 font-bold">Submit demo request</button>
            </form><p className="text-[10px] text-gray-500 text-center mt-4">Demo interface · No actual medical booking</p></>}
        </div>
      </div>}
    </main>
  );
}