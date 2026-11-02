"use client";

import { useState } from "react";
import {
  ArrowUpRight, ArrowRight, Search, CalendarDays, MapPin,
  Menu, X, Ticket, Music2, Palette, Mic2, Utensils,
  ChevronRight, Play, Bookmark, Check,
} from "lucide-react";

const events = [
  { id: 1, day: "14", month: "NOV", category: "LIVE MUSIC", title: "After Hours: The Sound Experience", venue: "The Warehouse, Bengaluru", price: "₹1,800", time: "7:00 PM", label: "FEATURED", symbol: "♫", color: "bg-[#283d72]" },
  { id: 2, day: "16", month: "NOV", category: "ART & CULTURE", title: "Beyond The Canvas", venue: "Gallery 12, Bengaluru", price: "₹650", time: "11:00 AM", label: "EXHIBITION", symbol: "✳", color: "bg-[#67433e]" },
  { id: 3, day: "19", month: "NOV", category: "FOOD & DRINK", title: "The Sunday Table", venue: "Olive Courtyard, Bengaluru", price: "₹950", time: "12:30 PM", label: "TASTING", symbol: "✦", color: "bg-[#52604a]" },
  { id: 4, day: "22", month: "NOV", category: "COMEDY", title: "No Filter Comedy Night", venue: "The Laughing Room, Bengaluru", price: "₹499", time: "8:00 PM", label: "LIVE SHOW", symbol: "☺", color: "bg-[#795b36]" },
  { id: 5, day: "27", month: "NOV", category: "LIVE MUSIC", title: "Indie Frequencies", venue: "Skyline Arena, Bengaluru", price: "₹1,200", time: "6:30 PM", label: "LIVE", symbol: "♫", color: "bg-[#51416e]" },
  { id: 6, day: "03", month: "DEC", category: "ART & CULTURE", title: "Designers After Dark", venue: "The Studio, Bengaluru", price: "₹750", time: "5:00 PM", label: "POP-UP", symbol: "✳", color: "bg-[#385e65]" },
];

const categories = [
  { name: "ALL", icon: Ticket },
  { name: "LIVE MUSIC", icon: Music2 },
  { name: "ART & CULTURE", icon: Palette },
  { name: "FOOD & DRINK", icon: Utensils },
  { name: "COMEDY", icon: Mic2 },
];

export default function Home() {
  const [category, setCategory] = useState("ALL");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<number | null>(null);
  const [saved, setSaved] = useState<number[]>([]);
  const [booked, setBooked] = useState<number[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const filtered = events.filter((event) => {
    const matchesCategory = category === "ALL" || event.category === category;
    const matchesSearch = `${event.title} ${event.venue} ${event.category}`.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activeEvent = events.find((event) => event.id === selected);

  return (
    <main className="min-h-screen bg-[#101114] text-[#f4f3ef]">
      <nav className="sticky top-0 z-30 border-b border-white/10 bg-[#101114]/95 px-5 py-5 backdrop-blur-xl md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#" className="flex items-center gap-3 text-xl font-black tracking-[0.12em]">
            <span className="flex h-9 w-9 items-center justify-center bg-[#a7f36a] text-black"><Ticket size={19} /></span>
            GATHERLY<span className="text-[#a7f36a]">®</span>
          </a>
          <div className="hidden items-center gap-9 text-[10px] font-bold tracking-[0.2em] text-white/60 md:flex">
            <a href="#events" className="hover:text-[#a7f36a]">EXPLORE</a>
            <a href="#categories" className="hover:text-[#a7f36a]">CATEGORIES</a>
            <a href="#about" className="hover:text-[#a7f36a]">OUR STORY</a>
          </div>
          <a href="#events" className="hidden border border-[#a7f36a] px-5 py-3 text-[10px] font-black tracking-widest text-[#a7f36a] transition hover:bg-[#a7f36a] hover:text-black md:block">
            FIND YOUR EVENT <ArrowUpRight className="ml-2 inline" size={14} />
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="flex flex-col gap-5 pt-6 text-xs font-bold tracking-widest md:hidden">
            <a onClick={() => setMenuOpen(false)} href="#events">EXPLORE</a>
            <a onClick={() => setMenuOpen(false)} href="#categories">CATEGORIES</a>
            <a onClick={() => setMenuOpen(false)} href="#about">OUR STORY</a>
          </div>
        )}
      </nav>

      <section className="relative overflow-hidden border-b border-white/10 px-5 py-20 md:px-12 md:py-28">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_center,rgba(167,243,106,0.09),transparent_65%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-[#a7f36a]">
              <span className="h-px w-9 bg-[#a7f36a]" /> THE CITY IS YOURS
            </p>
            <h1 className="mt-8 text-6xl font-black leading-[0.94] tracking-[-0.07em] sm:text-7xl md:text-[92px]">
              BE
              <br />
              <span className="text-[#a7f36a]">THERE.</span>
              <br />
              FEEL IT.
            </h1>
            <p className="mt-8 max-w-md text-sm leading-7 text-white/50">
              Culture, connection and experiences worth leaving home for. Find the events that make your city come alive.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#events" className="bg-[#a7f36a] px-7 py-4 text-[10px] font-black tracking-widest text-black transition hover:bg-white">
                DISCOVER EVENTS <ArrowRight className="ml-3 inline" size={15} />
              </a>
              <a href="#about" className="border border-white/20 px-7 py-4 text-[10px] font-black tracking-widest text-white hover:border-[#a7f36a]">
                WHY GATHERLY
              </a>
            </div>
            <div className="mt-16 flex gap-12 border-t border-white/10 pt-7">
              <div><p className="text-3xl font-black">120<span className="text-[#a7f36a]">+</span></p><p className="mt-2 text-[9px] tracking-[0.2em] text-white/40">CURATED EVENTS</p></div>
              <div><p className="text-3xl font-black">18K<span className="text-[#a7f36a]">+</span></p><p className="mt-2 text-[9px] tracking-[0.2em] text-white/40">EXPLORERS</p></div>
              <div><p className="text-3xl font-black">01</p><p className="mt-2 text-[9px] tracking-[0.2em] text-white/40">VIBRANT CITY</p></div>
            </div>
          </div>

          <div className="relative">
            <div className="relative min-h-[430px] overflow-hidden border border-white/10 bg-[#1b2430] p-7 md:min-h-[520px]">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 25% 25%, #a7f36a 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
              <div className="relative flex items-center justify-between text-[9px] font-bold tracking-[0.25em] text-white/50"><span>GATHERLY SELECTS</span><span>NO. 001</span></div>
              <div className="relative flex h-[360px] flex-col items-center justify-center text-center">
                <div className="absolute h-64 w-64 rounded-full border border-[#a7f36a]/30" />
                <div className="absolute h-48 w-48 rounded-full border border-[#a7f36a]/40" />
                <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-[#a7f36a] text-7xl text-black shadow-[0_0_90px_rgba(167,243,106,0.25)]">♫</div>
                <p className="mt-9 text-[10px] font-black tracking-[0.3em] text-[#a7f36a]">14 NOVEMBER · BENGALURU</p>
                <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] md:text-5xl">AFTER HOURS</h2>
                <p className="mt-3 text-xs tracking-[0.2em] text-white/50">THE SOUND EXPERIENCE</p>
              </div>
              <div className="relative flex items-center justify-between border-t border-white/15 pt-5">
                <div><p className="text-[9px] tracking-widest text-white/40">TICKETS FROM</p><p className="mt-1 text-xl font-black">₹1,800</p></div>
                <a href="#events" className="flex items-center gap-2 text-[10px] font-black tracking-widest text-[#a7f36a]">EXPLORE <ArrowUpRight size={16} /></a>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden border border-[#a7f36a] bg-[#101114] px-5 py-4 md:block">
              <p className="text-[9px] tracking-widest text-white/40">YOUR NEXT STORY</p><p className="mt-1 text-sm font-black text-[#a7f36a]">STARTS HERE.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="border-b border-white/10 px-5 py-10 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-[10px] font-black tracking-[0.25em] text-white/40">BROWSE BY INTEREST</p>
            <span className="text-[9px] tracking-widest text-[#a7f36a]">BENGALURU, INDIA ↗</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(({ name, icon: Icon }) => (
              <button key={name} onClick={() => setCategory(name)} className={`flex items-center gap-2 border px-5 py-3 text-[9px] font-black tracking-widest transition ${category === name ? "border-[#a7f36a] bg-[#a7f36a] text-black" : "border-white/15 text-white/60 hover:border-white hover:text-white"}`}>
                <Icon size={14} /> {name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="px-5 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-black tracking-[0.25em] text-[#a7f36a]">THE CITY, CURATED</p>
              <h2 className="mt-4 text-5xl font-black tracking-[-0.06em] md:text-6xl">WHAT'S ON<span className="text-[#a7f36a]">.</span></h2>
              <p className="mt-3 text-sm text-white/45">Experiences worth putting on your calendar.</p>
            </div>
            <div className="flex items-center gap-3 border-b border-white/30 pb-3">
              <Search size={17} className="text-[#a7f36a]" />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search events..." className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35 md:w-56" />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {filtered.map((event) => (
              <article key={event.id} className="group grid overflow-hidden border border-white/10 bg-[#17191e] transition hover:border-[#a7f36a]/60 sm:grid-cols-[125px_1fr]">
                <div className={`relative flex min-h-[160px] flex-col items-center justify-center ${event.color} p-5`}>
                  <span className="text-[9px] font-black tracking-[0.3em] text-white/60">{event.month}</span>
                  <span className="text-6xl font-black tracking-tighter text-white">{event.day}</span>
                  <span className="mt-2 text-[9px] font-bold tracking-widest text-white/60">{event.time}</span>
                  <span className="absolute bottom-3 right-3 text-2xl text-white/30">{event.symbol}</span>
                </div>
                <div className="flex flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[9px] font-black tracking-[0.2em] text-[#a7f36a]">{event.category}</span>
                      <button onClick={() => setSaved((current) => current.includes(event.id) ? current.filter((id) => id !== event.id) : [...current, event.id])} aria-label="Save event" className={saved.includes(event.id) ? "text-[#a7f36a]" : "text-white/40 hover:text-[#a7f36a]"}><Bookmark size={17} fill={saved.includes(event.id) ? "currentColor" : "none"} /></button>
                    </div>
                    <h3 className="mt-3 text-xl font-black leading-tight tracking-tight sm:text-2xl">{event.title}</h3>
                    <p className="mt-3 flex items-center gap-2 text-xs text-white/45"><MapPin size={13} /> {event.venue}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                    <div><p className="text-[8px] tracking-widest text-white/40">FROM</p><p className="mt-1 text-lg font-black">{event.price}</p></div>
                    <button onClick={() => setSelected(event.id)} className="flex items-center gap-2 border border-[#a7f36a] px-4 py-3 text-[9px] font-black tracking-widest text-[#a7f36a] transition hover:bg-[#a7f36a] hover:text-black">VIEW EVENT <ChevronRight size={14} /></button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && <p className="py-16 text-center text-sm text-white/50">No matching events. Try a different search.</p>}
          <p className="mt-8 text-center text-[9px] tracking-widest text-white/35">SHOWING {filtered.length} CURATED EXPERIENCES · DEMO LISTINGS</p>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-[#17191e] px-5 py-20 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-[10px] font-black tracking-[0.25em] text-[#a7f36a]">MORE THAN AN EVENT LISTING</p>
            <h2 className="mt-5 text-5xl font-black leading-none tracking-[-0.06em]">MAKE ROOM<br />FOR <span className="text-[#a7f36a]">LIFE.</span></h2>
          </div>
          <div>
            <p className="max-w-lg text-sm leading-7 text-white/55">We believe the best memories happen when people come together. Gatherly brings the city's music, art, food and culture into one place, so you can spend less time searching and more time experiencing.</p>
            <button onClick={() => alert("Demo only: event organiser registration would be available here.")} className="mt-7 flex items-center gap-3 border-b border-[#a7f36a] pb-3 text-[10px] font-black tracking-widest text-[#a7f36a]">ARE YOU AN ORGANISER? <ArrowUpRight size={16} /></button>
          </div>
        </div>
      </section>

      <footer className="px-5 py-10 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <a href="#" className="text-xl font-black tracking-[0.12em]">GATHERLY<span className="text-[#a7f36a]">®</span></a>
          <p className="text-[9px] tracking-widest text-white/35">© 2026 GATHERLY · EXPERIENCES THAT STAY WITH YOU.</p>
          <a href="#events" className="flex items-center gap-2 text-[10px] font-black tracking-widest text-[#a7f36a]">BACK TO TOP <ArrowUpRight size={14} /></a>
        </div>
      </footer>

      {activeEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={() => setSelected(null)}>
          <div className="w-full max-w-md border border-white/15 bg-[#17191e] p-7 text-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between">
              <div><p className="text-[9px] font-black tracking-[0.25em] text-[#a7f36a]">GATHERLY EVENT DETAILS</p><h3 className="mt-3 text-3xl font-black">{activeEvent.title}</h3></div>
              <button onClick={() => setSelected(null)} aria-label="Close"><X /></button>
            </div>
            <div className={`my-6 flex h-32 items-center justify-center ${activeEvent.color} text-6xl`}>{activeEvent.symbol}</div>
            <p className="flex items-center gap-3 text-sm text-white/65"><CalendarDays size={16} className="text-[#a7f36a]" /> {activeEvent.day} {activeEvent.month} 2026 · {activeEvent.time}</p>
            <p className="mt-4 flex items-center gap-3 text-sm text-white/65"><MapPin size={16} className="text-[#a7f36a]" /> {activeEvent.venue}</p>
            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5"><span className="text-[9px] tracking-widest text-white/40">TICKET PRICE FROM</span><span className="text-2xl font-black">{activeEvent.price}</span></div>
            <button onClick={() => { setBooked((current) => current.includes(activeEvent.id) ? current : [...current, activeEvent.id]); setSelected(null); }} className="mt-6 w-full bg-[#a7f36a] py-4 text-[10px] font-black tracking-widest text-black transition hover:bg-white">
              {booked.includes(activeEvent.id) ? "TICKET SELECTED ✓" : "SELECT TICKET"} <ArrowRight className="ml-2 inline" size={15} />
            </button>
            {booked.includes(activeEvent.id) && <p className="mt-3 text-center text-xs text-[#a7f36a]">This event is already in your demo selections.</p>}
            <p className="mt-3 text-center text-[9px] text-white/35">Demo only — no real ticket or payment is processed.</p>
          </div>
        </div>
      )}
    </main>
  );
}