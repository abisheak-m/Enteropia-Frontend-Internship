"use client";

import { useState } from "react";
import {
  ArrowRight, CalendarDays, MapPin, Ticket, Search, Music,
  Palette, Utensils, Mic2, Camera, X, Menu, Sparkles,
} from "lucide-react";

const events = [
  { id: 1, category: "MUSIC", title: "Neon Nights Festival", date: "NOV 14, 2026", location: "Bengaluru Palace Grounds", price: "₹1,499", tag: "TRENDING", theme: "music", emoji: "🎸", color: "from-fuchsia-600 to-purple-950" },
  { id: 2, category: "ART", title: "The Art House Weekend", date: "NOV 18, 2026", location: "Indiranagar, Bengaluru", price: "₹499", tag: "CREATIVE PICK", theme: "art", emoji: "🎨", color: "from-orange-500 to-rose-900" },
  { id: 3, category: "FOOD", title: "Bangalore Food Carnival", date: "NOV 21, 2026", location: "Jayamahal Palace", price: "₹799", tag: "POPULAR", theme: "food", emoji: "🍜", color: "from-amber-500 to-red-900" },
  { id: 4, category: "COMEDY", title: "Laugh Out Loud Live", date: "NOV 25, 2026", location: "Church Street, Bengaluru", price: "₹599", tag: "LIMITED SEATS", theme: "comedy", emoji: "🎤", color: "from-cyan-600 to-blue-950" },
  { id: 5, category: "MUSIC", title: "Indie Sound Sessions", date: "NOV 28, 2026", location: "Koramangala, Bengaluru", price: "₹899", tag: "NEW", theme: "music", emoji: "🎧", color: "from-violet-600 to-indigo-950" },
  { id: 6, category: "ART", title: "Sunday Makers Market", date: "DEC 02, 2026", location: "Jayanagar, Bengaluru", price: "₹299", tag: "COMMUNITY", theme: "art", emoji: "🧶", color: "from-emerald-600 to-teal-950" },
];

const categories = [
  { name: "ALL EVENTS", icon: Sparkles },
  { name: "MUSIC", icon: Music },
  { name: "ART", icon: Palette },
  { name: "FOOD", icon: Utensils },
  { name: "COMEDY", icon: Mic2 },
];

export default function Home() {
  const [category, setCategory] = useState("ALL EVENTS");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<number | null>(null);
  const [booked, setBooked] = useState<number[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredEvents = events.filter((event) => {
    const matchesCategory = category === "ALL EVENTS" || event.category === category;
    const matchesSearch = `${event.title} ${event.location} ${event.category}`
      .toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activeEvent = events.find((event) => event.id === selected);

  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#201b2d]">
      <nav className="sticky top-0 z-30 border-b border-[#201b2d]/10 bg-[#fffaf2]/95 px-5 py-4 backdrop-blur md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-2xl font-black tracking-tighter">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff5b4d] text-white">
              <Ticket size={22} />
            </span>
            gatherly<span className="text-[#ff5b4d]">.</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-bold md:flex">
            <a href="#discover" className="hover:text-[#ff5b4d]">Discover</a>
            <a href="#categories" className="hover:text-[#ff5b4d]">Categories</a>
            <a href="#about" className="hover:text-[#ff5b4d]">About us</a>
          </div>
          <a href="#discover" className="hidden rounded-full bg-[#201b2d] px-6 py-3 text-xs font-black text-white transition hover:bg-[#ff5b4d] md:block">
            FIND YOUR EVENT <ArrowRight className="ml-2 inline" size={15} />
          </a>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="flex flex-col gap-4 px-2 pb-3 pt-5 text-sm font-bold md:hidden">
            <a onClick={() => setMenuOpen(false)} href="#discover">Discover</a>
            <a onClick={() => setMenuOpen(false)} href="#categories">Categories</a>
            <a onClick={() => setMenuOpen(false)} href="#about">About us</a>
          </div>
        )}
      </nav>

      <section className="relative overflow-hidden px-5 pb-20 pt-16 md:px-12 md:pb-28 md:pt-24">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#ffd76a]/30 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-[#ffaaa0]/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#ff5b4d]/30 bg-white px-4 py-2 text-[10px] font-black tracking-[0.18em] text-[#ff5b4d]">
              <Sparkles size={14} /> GOOD TIMES START HERE
            </div>
            <h1 className="text-6xl font-black leading-[0.95] tracking-[-0.07em] sm:text-7xl md:text-8xl">
              FIND YOUR
              <br />
              <span className="relative inline-block text-[#ff5b4d]">
                NEXT
                <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 220 18" fill="none">
                  <path d="M3 12C55 1 156 1 216 10" stroke="#ffcf58" strokeWidth="7" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              SOMETHING.
            </h1>
            <p className="mt-8 max-w-md text-base leading-7 text-[#201b2d]/60">
              Discover the concerts, pop-ups, workshops and unforgettable experiences happening around you.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#discover" className="rounded-full bg-[#ff5b4d] px-7 py-4 text-xs font-black text-white shadow-lg shadow-[#ff5b4d]/20 transition hover:-translate-y-1">
                EXPLORE EVENTS <ArrowRight className="ml-2 inline" size={16} />
              </a>
              <a href="#categories" className="rounded-full border border-[#201b2d]/20 bg-white px-7 py-4 text-xs font-black hover:border-[#ff5b4d]">
                BROWSE CATEGORIES
              </a>
            </div>
            <div className="mt-12 flex items-center gap-5">
              <div className="flex -space-x-3">
                {["🎸", "🎨", "🎤", "🍕"].map((emoji) => (
                  <div key={emoji} className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#fffaf2] bg-[#ffe4c8] text-lg">{emoji}</div>
                ))}
              </div>
              <p className="text-xs font-bold text-[#201b2d]/60"><span className="text-[#201b2d]">2,000+</span> experiences to explore</p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="rotate-[-4deg] rounded-[2rem] bg-[#ffcf58] p-4 shadow-2xl shadow-orange-900/10">
              <div className="overflow-hidden rounded-[1.5rem] bg-[#201b2d] p-7 text-white">
                <div className="flex items-center justify-between text-[10px] font-black tracking-[0.2em] text-white/60">
                  <span>GATHERLY PRESENTS</span><span>001 / 026</span>
                </div>
                <div className="my-10 text-center">
                  <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-[#ff5b4d] via-fuchsia-500 to-violet-700 text-7xl shadow-xl">🎶</div>
                  <p className="mt-8 text-xs font-black tracking-[0.3em] text-[#ffcf58]">LIVE. LOUD. TOGETHER.</p>
                  <h2 className="mt-3 text-5xl font-black leading-none tracking-tighter">NEON<br />NIGHTS</h2>
                  <p className="mt-4 text-xs tracking-widest text-white/60">14 NOV · BENGALURU</p>
                </div>
                <div className="flex items-center justify-between border-t border-dashed border-white/25 pt-5">
                  <div><p className="text-[9px] tracking-widest text-white/50">STARTING AT</p><p className="mt-1 text-2xl font-black">₹1,499</p></div>
                  <span className="rounded-full bg-[#ffcf58] px-5 py-3 text-[10px] font-black text-[#201b2d]">GET TICKETS ↗</span>
                </div>
              </div>
            </div>
            <div className="absolute -right-2 top-8 rotate-12 rounded-full bg-[#ff5b4d] px-5 py-4 text-center text-white shadow-lg md:-right-7">
              <p className="text-[9px] font-black tracking-widest">MAKE</p><p className="text-lg font-black">MEMORIES!</p>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white p-4 shadow-xl">
              <p className="text-[9px] font-black tracking-widest text-[#ff5b4d]">THIS WEEKEND</p>
              <p className="mt-1 text-sm font-black">Something exciting?</p>
              <p className="mt-1 text-xs text-[#201b2d]/50">We've got you covered.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="border-y border-[#201b2d]/10 bg-white px-5 py-8 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div><p className="text-xs font-black tracking-widest text-[#ff5b4d]">EXPLORE YOUR INTERESTS</p><h2 className="mt-1 text-2xl font-black tracking-tight">What's your vibe?</h2></div>
          <div className="flex flex-wrap gap-2">
            {categories.map(({ name, icon: Icon }) => (
              <button key={name} onClick={() => setCategory(name)} className={`flex items-center gap-2 rounded-full px-5 py-3 text-[10px] font-black tracking-wider transition ${category === name ? "bg-[#201b2d] text-white" : "bg-[#fff5e9] text-[#201b2d] hover:bg-[#ffcf58]"}`}>
                <Icon size={14} /> {name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="discover" className="px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black tracking-[0.2em] text-[#ff5b4d]">HANDPICKED FOR YOU</p>
              <h2 className="mt-3 text-5xl font-black tracking-[-0.06em]">UPCOMING EVENTS<span className="text-[#ff5b4d]">.</span></h2>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[#201b2d]/15 bg-white px-5 py-3">
              <Search size={17} className="text-[#ff5b4d]" />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search events or places..." className="w-full bg-transparent text-sm outline-none md:w-56" />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <article key={event.id} className="group overflow-hidden rounded-[1.5rem] border border-[#201b2d]/10 bg-white transition hover:-translate-y-2 hover:shadow-xl">
                <div className={`relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br ${event.color}`}>
                  <div className="absolute -right-10 -top-12 h-48 w-48 rounded-full border border-white/20" />
                  <div className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full border border-white/20" />
                  <span className="relative text-8xl drop-shadow-xl transition duration-500 group-hover:scale-125">{event.emoji}</span>
                  <span className="absolute left-5 top-5 rounded-full bg-white px-3 py-2 text-[9px] font-black tracking-widest text-[#201b2d]">{event.tag}</span>
                  <span className="absolute bottom-5 right-5 rounded-full bg-black/25 px-3 py-2 text-[9px] font-black tracking-widest text-white">{event.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-[#ff5b4d]"><CalendarDays size={14} /> {event.date}</div>
                  <h3 className="mt-3 text-2xl font-black tracking-tight">{event.title}</h3>
                  <p className="mt-3 flex items-center gap-2 text-xs text-[#201b2d]/50"><MapPin size={14} /> {event.location}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-[#201b2d]/10 pt-5">
                    <div><p className="text-[9px] font-bold tracking-widest text-[#201b2d]/40">STARTING FROM</p><p className="mt-1 text-xl font-black">{event.price}</p></div>
                    <button onClick={() => setSelected(event.id)} className="rounded-full bg-[#201b2d] px-5 py-3 text-[10px] font-black tracking-wider text-white transition hover:bg-[#ff5b4d]">VIEW EVENT <ArrowRight className="ml-1 inline" size={13} /></button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {filteredEvents.length === 0 && <p className="py-16 text-center font-bold text-[#201b2d]/50">No events found. Try another search or category.</p>}
        </div>
      </section>

      <section id="about" className="bg-[#ffcf58] px-5 py-16 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div><p className="text-xs font-black tracking-[0.2em]">HAVE AN EVENT TO SHARE?</p><h2 className="mt-3 text-4xl font-black tracking-[-0.06em] md:text-5xl">MAKE IT A GATHERLY MOMENT.</h2><p className="mt-3 text-sm text-[#201b2d]/65">Bring your community together. Let people discover what you create.</p></div>
          <button onClick={() => alert("Demo only: event organiser registration would be connected here.")} className="shrink-0 rounded-full bg-[#201b2d] px-8 py-4 text-xs font-black tracking-widest text-white hover:bg-[#ff5b4d]">LIST YOUR EVENT <ArrowRight className="ml-2 inline" size={15} /></button>
        </div>
      </section>

      <footer className="bg-[#201b2d] px-5 py-12 text-white md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div><a href="#" className="text-3xl font-black tracking-tighter">gatherly<span className="text-[#ff5b4d]">.</span></a><p className="mt-2 text-xs text-white/45">Find your next something.</p></div>
          <div className="flex flex-wrap gap-6 text-xs font-bold text-white/65"><a href="#discover" className="hover:text-[#ffcf58]">Discover</a><a href="#categories" className="hover:text-[#ffcf58]">Categories</a><a href="#about" className="hover:text-[#ffcf58]">List an event</a></div>
          <p className="text-xs text-white/40">© 2026 Gatherly. All rights reserved.</p>
        </div>
      </footer>

      {activeEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setSelected(null)}>
          <div className="w-full max-w-md rounded-3xl bg-[#fffaf2] p-7 text-[#201b2d] shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between">
              <div><p className="text-xs font-black tracking-widest text-[#ff5b4d]">EVENT DETAILS</p><h3 className="mt-2 text-3xl font-black">{activeEvent.title}</h3></div>
              <button onClick={() => setSelected(null)} aria-label="Close"><X /></button>
            </div>
            <div className={`my-6 flex h-36 items-center justify-center rounded-2xl bg-gradient-to-br ${activeEvent.color} text-7xl`}>{activeEvent.emoji}</div>
            <p className="flex items-center gap-2 text-sm"><CalendarDays size={16} /> {activeEvent.date}</p>
            <p className="mt-3 flex items-center gap-2 text-sm"><MapPin size={16} /> {activeEvent.location}</p>
            <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-5"><span className="text-xs font-bold text-black/50">TICKET PRICE FROM</span><span className="text-2xl font-black">{activeEvent.price}</span></div>
            <button onClick={() => { setBooked((current) => current.includes(activeEvent.id) ? current : [...current, activeEvent.id]); setSelected(null); }} className="mt-6 w-full rounded-full bg-[#ff5b4d] py-4 text-xs font-black tracking-widest text-white hover:bg-[#201b2d]">
              {booked.includes(activeEvent.id) ? "TICKET SELECTED ✓" : "SELECT TICKET"}
            </button>
            <p className="mt-3 text-center text-[10px] text-black/40">Demo only — no real ticket or payment is processed.</p>
          </div>
        </div>
      )}
    </main>
  );
}