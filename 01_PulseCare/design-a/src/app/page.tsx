"use client";

import { useState } from "react";
import {
  Activity, ArrowRight, ArrowUpRight, CalendarDays, Check,
  Clock3, Heart, HeartPulse, Menu, ShieldCheck, Stethoscope,
  X, Phone, Sparkles
} from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const services = [
    { icon: HeartPulse, name: "Primary care", detail: "Everyday health, thoughtfully managed." },
    { icon: Stethoscope, name: "Specialist care", detail: "The right expert, at the right time." },
    { icon: Activity, name: "Diagnostics", detail: "Clear answers through better testing." },
  ];

  return (
    <main className="min-h-screen bg-[#f8f8f2] text-[#173d32]">
      <header className="px-6 md:px-14 py-6 flex items-center justify-between border-b border-[#173d32]/10">
        <a href="#" className="flex items-center gap-2 text-2xl font-black tracking-tight">
          <span className="bg-[#d6ef91] rounded-full p-2"><HeartPulse size={22}/></span>
          pulsecare<span className="text-[#91aa6b]">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm font-semibold">
          <a href="#care" className="hover:text-[#8ba65c]">Our care</a>
          <a href="#approach" className="hover:text-[#8ba65c]">Our approach</a>
          <a href="#doctors" className="hover:text-[#8ba65c]">Our doctors</a>
          <a href="#contact" className="hover:text-[#8ba65c]">Contact</a>
        </nav>
        <button onClick={() => setBookingOpen(true)} className="hidden md:flex items-center gap-2 bg-[#173d32] text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-[#285b49] transition">
          Book a visit <ArrowUpRight size={17}/>
        </button>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}><Menu/></button>
      </header>

      {menuOpen && (
        <div className="md:hidden p-6 bg-[#edf1e5] flex flex-col gap-5">
          {["Our care", "Our approach", "Our doctors", "Contact"].map(x => <a key={x} href="#care" onClick={() => setMenuOpen(false)}>{x}</a>)}
          <button onClick={() => {setBookingOpen(true); setMenuOpen(false)}} className="bg-[#173d32] text-white rounded-full p-3">Book a visit</button>
        </div>
      )}

      <section className="px-6 md:px-14 pt-16 md:pt-24 pb-20 grid md:grid-cols-[1.1fr_.9fr] gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#173d32]/20 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#a4c56d]"/> Healthcare, with heart
          </div>
          <h1 className="text-6xl md:text-8xl leading-[.98] tracking-[-.065em] font-semibold max-w-3xl">
            Feel better.<br/>Live <span className="text-[#91aa6b] italic font-serif">fuller.</span>
          </h1>
          <p className="mt-8 text-lg leading-8 text-[#557066] max-w-lg">
            A more thoughtful kind of healthcare. Expert people, personal attention and a plan that puts you first.
          </p>
          <div className="flex flex-wrap gap-4 mt-9">
            <button onClick={() => setBookingOpen(true)} className="rounded-full bg-[#173d32] text-white px-7 py-4 font-semibold flex items-center gap-3 hover:-translate-y-1 transition">
              Make an appointment <ArrowRight size={18}/>
            </button>
            <a href="#care" className="rounded-full border border-[#173d32]/25 px-7 py-4 font-semibold hover:bg-[#e9eddf] transition">Explore our care</a>
          </div>
          <div className="flex gap-8 mt-14 pt-7 border-t border-[#173d32]/15">
            <div><p className="text-3xl font-bold">15+</p><p className="text-xs text-[#668074] mt-1">Specialities</p></div>
            <div><p className="text-3xl font-bold">24/7</p><p className="text-xs text-[#668074] mt-1">Online support</p></div>
            <div><p className="text-3xl font-bold">1:1</p><p className="text-xs text-[#668074] mt-1">Personal care</p></div>
          </div>
        </div>

        <div className="relative min-h-[440px] md:min-h-[570px]">
          <div className="absolute inset-5 rounded-[48%_48%_24px_24px] bg-[#dce8c9] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,#f7f6e9_0%,#dce8c9_55%,#b7c99c_100%)]"/>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-[#66845b]/25"/>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[#66845b]/30"/>
            <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 text-[#315e49]">
              <HeartPulse size={150} strokeWidth={0.8}/>
            </div>
            <div className="absolute bottom-10 left-0 right-0 text-center">
              <p className="text-sm uppercase tracking-[.25em] text-[#55745a]">Your health, our purpose</p>
            </div>
          </div>
          <div className="absolute top-12 -left-2 md:left-0 bg-white shadow-xl rounded-2xl p-4 flex gap-3 items-center animate-float">
            <div className="bg-[#e5f2d2] p-3 rounded-xl"><ShieldCheck/></div>
            <div><p className="font-bold text-sm">Care you can trust</p><p className="text-xs text-gray-500">People-first healthcare</p></div>
          </div>
          <div className="absolute bottom-12 -right-1 bg-[#173d32] text-white rounded-2xl p-5 shadow-xl">
            <div className="flex items-center gap-2 text-[#d6ef91]"><Clock3 size={17}/><span className="text-xs uppercase tracking-widest">Here for you</span></div>
            <p className="text-xl font-bold mt-2">Every step.</p>
            <p className="text-xl font-bold">Every day.</p>
          </div>
        </div>
      </section>

      <section id="care" className="bg-[#edf0e5] px-6 md:px-14 py-20">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-5 mb-12">
          <div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#829b61]">What we offer</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-3">Care that fits <span className="italic font-serif">your life.</span></h2></div>
          <p className="text-[#668074] max-w-sm leading-7">From routine check-ups to specialist support, find the care you need without the complications.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return <article key={service.name} className="bg-[#f9f9f3] p-8 rounded-3xl hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 bg-[#dce9c8] rounded-2xl flex items-center justify-center"><Icon size={27}/></div>
              <p className="text-xs text-[#91a77a] font-bold mt-8">0{i+1} / SERVICE</p>
              <h3 className="text-2xl font-bold mt-3">{service.name}</h3>
              <p className="text-[#668074] mt-3 leading-7">{service.detail}</p>
              <button onClick={() => setBookingOpen(true)} className="mt-7 flex items-center gap-2 font-bold text-sm">Explore service <ArrowUpRight size={17}/></button>
            </article>
          })}
        </div>
      </section>

      <section id="approach" className="px-6 md:px-14 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-[#dce8c9] rounded-[32px] min-h-[350px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute w-72 h-72 border border-[#66845b]/30 rounded-full"/>
          <div className="absolute w-52 h-52 border border-[#66845b]/30 rounded-full"/>
          <Sparkles size={100} strokeWidth={0.8} className="text-[#315e49]"/>
          <span className="absolute bottom-7 left-7 text-xs uppercase tracking-[.2em]">A better healthcare experience</span>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#829b61]">The PulseCare difference</p>
          <h2 className="text-4xl md:text-5xl leading-tight font-semibold mt-4">Good health is a journey. <span className="font-serif italic text-[#91aa6b]">Let's take it together.</span></h2>
          <p className="text-[#668074] leading-8 mt-6">We bring medical expertise and a human approach together. Your concerns matter, your time matters, and your wellbeing always comes first.</p>
          <div className="space-y-4 mt-7">
            {["Personalised attention", "Experienced care professionals", "Simple and convenient appointments"].map(x => <p key={x} className="flex items-center gap-3 font-semibold"><Check size={18} className="text-[#91aa6b]"/>{x}</p>)}
          </div>
        </div>
      </section>

      <section id="doctors" className="px-6 md:px-14 py-16 bg-[#173d32] text-white">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div><p className="text-xs uppercase tracking-[.2em] text-[#d6ef91]">A team that listens</p>
            <h2 className="text-4xl md:text-5xl font-semibold mt-4">Your wellbeing deserves <span className="italic font-serif text-[#d6ef91]">the best.</span></h2>
            <p className="text-white/65 mt-5 max-w-xl leading-7">Connect with our care team and take the first step towards a healthier you.</p></div>
          <button onClick={() => setBookingOpen(true)} className="bg-[#d6ef91] text-[#173d32] rounded-full px-7 py-4 font-bold flex items-center gap-3 hover:scale-105 transition">Meet your care team <ArrowRight size={18}/></button>
        </div>
      </section>

      <footer id="contact" className="px-6 md:px-14 py-9 flex flex-col md:flex-row gap-5 justify-between text-sm">
        <p className="font-black text-xl">pulsecare<span className="text-[#91aa6b]">.</span></p>
        <p className="text-[#668074]">Thoughtful healthcare for everyday life.</p>
        <p className="flex gap-2 items-center text-[#668074]"><Phone size={15}/> Contact our care team</p>
        <p className="text-[#91aa6b]">© 2026 PulseCare · Demo website</p>
      </footer>

      {bookingOpen && <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
        <div className="bg-[#f8f8f2] text-[#173d32] rounded-3xl p-7 md:p-9 w-full max-w-md relative shadow-2xl">
          <button onClick={() => {setBookingOpen(false);setSubmitted(false)}} className="absolute right-5 top-5"><X/></button>
          {submitted ? <div className="text-center py-8"><div className="mx-auto w-16 h-16 rounded-full bg-[#dce9c8] flex items-center justify-center"><Check size={30}/></div><h3 className="text-2xl font-bold mt-5">Request received!</h3><p className="text-[#668074] mt-2">This is a demo booking confirmation. No real appointment has been created.</p><button onClick={() => {setBookingOpen(false);setSubmitted(false)}} className="mt-7 bg-[#173d32] text-white rounded-full px-7 py-3">Close</button></div> :
          <><p className="text-xs uppercase tracking-[.2em] text-[#91aa6b] font-bold">Let's get started</p><h3 className="text-3xl font-bold mt-3">Book a visit.</h3><p className="text-sm text-[#668074] mt-2 mb-6">Send us your appointment request.</p>
            <form onSubmit={e => {e.preventDefault();setSubmitted(true)}} className="space-y-4">
              <input required placeholder="Your full name" className="w-full p-4 rounded-xl border border-[#173d32]/15 bg-white outline-none focus:border-[#91aa6b]"/>
              <input required type="email" placeholder="Email address" className="w-full p-4 rounded-xl border border-[#173d32]/15 bg-white outline-none focus:border-[#91aa6b]"/>
              <select className="w-full p-4 rounded-xl border border-[#173d32]/15 bg-white"><option>Choose a service</option><option>Primary care</option><option>Specialist care</option><option>Diagnostics</option></select>
              <input required type="date" className="w-full p-4 rounded-xl border border-[#173d32]/15 bg-white"/>
              <button className="w-full bg-[#173d32] text-white p-4 rounded-full font-bold hover:bg-[#285b49]">Submit demo request <ArrowRight className="inline ml-2" size={17}/></button>
            </form><p className="text-[11px] text-[#91aa6b] mt-4 text-center">Portfolio demonstration · No real medical booking</p></>}
        </div>
      </div>}
    </main>
  );
}