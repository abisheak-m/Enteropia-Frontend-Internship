
"use client";

import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, MapPin, BedDouble, Bath,
  Maximize, Heart, X, Check, Menu
} from "lucide-react";

const properties = [
  {
    id: 1, name: "The Willow Residence",
    location: "Whitefield, Bengaluru", price: "₹1.85 Cr",
    beds: 3, baths: 3, area: "2,100 sq.ft", type: "Villa",
    tag: "Featured",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85"
  },
  {
    id: 2, name: "The Quiet Courtyard",
    location: "Indiranagar, Bengaluru", price: "₹1.25 Cr",
    beds: 2, baths: 2, area: "1,450 sq.ft", type: "Apartment",
    tag: "New listing",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=85"
  },
  {
    id: 3, name: "The Palm House",
    location: "Sarjapur, Bengaluru", price: "₹2.40 Cr",
    beds: 4, baths: 4, area: "2,800 sq.ft", type: "Villa",
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=85"
  }
];

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [saved, setSaved] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const filtered = properties.filter(p =>
    (type === "All" || p.type === type) &&
    `${p.name} ${p.location}`.toLowerCase().includes(search.toLowerCase())
  );

  const closeModal = () => {
    setSelected(null);
    setContactOpen(false);
    setSent(false);
  };

  return (
    <main className="min-h-screen bg-[#f3f0e8] text-[#292d25]">
      <header className="px-6 md:px-16 py-7 flex items-center justify-between border-b border-[#292d25]/15">
        <a href="#" className="text-3xl font-serif font-bold tracking-tight">
          habitat<span className="text-[#a07851]">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-9 text-sm font-medium">
          <a href="#properties" className="hover:text-[#a07851]">Properties</a>
          <a href="#philosophy" className="hover:text-[#a07851]">Our philosophy</a>
          <a href="#contact" className="hover:text-[#a07851]">Contact</a>
        </nav>

        <button onClick={() => setContactOpen(true)}
          className="hidden md:block bg-[#292d25] text-white rounded-full px-6 py-3 text-sm hover:bg-[#a07851] transition">
          Speak to an advisor ↗
        </button>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu />
        </button>
      </header>

      {menuOpen && (
        <div className="md:hidden p-6 bg-[#e5e0d4] flex flex-col gap-5">
          <a href="#properties" onClick={() => setMenuOpen(false)}>Properties</a>
          <a href="#philosophy" onClick={() => setMenuOpen(false)}>Our philosophy</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <button onClick={() => {setContactOpen(true);setMenuOpen(false)}} className="bg-[#292d25] text-white p-3 rounded-full">Speak to an advisor</button>
        </div>
      )}

      <section className="px-6 md:px-16 py-20 md:py-28">
        <div className="max-w-4xl animate-fade-up">
          <p className="uppercase tracking-[.24em] text-xs text-[#9a7858] font-bold">
            A considered way of living
          </p>

          <h1 className="font-serif text-6xl md:text-8xl leading-[1.02] tracking-tight mt-7">
            Find a place<br />to <span className="italic text-[#9a7858]">belong.</span>
          </h1>

          <p className="text-[#74766b] leading-8 max-w-lg mt-8 text-lg">
            Thoughtfully selected homes for people who believe that where you live shapes how you live.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-[1.5fr_1fr] gap-5">
          <div className="relative min-h-[380px] md:min-h-[500px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=90"
              alt="Luxury modern residential architecture"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"/>
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-xs uppercase tracking-[.2em]">The art of living well</p>
              <p className="font-serif text-4xl mt-2">Spaces with a story.</p>
            </div>
          </div>

          <div className="bg-[#e5e0d4] p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="uppercase tracking-[.2em] text-xs text-[#9a7858]">Find your next address</p>
              <h2 className="font-serif text-3xl mt-5">A home that feels like you.</h2>
              <p className="text-sm text-[#74766b] leading-7 mt-4">
                Explore a curated collection of residences, each selected for its character and location.
              </p>
            </div>

            <div className="space-y-4 mt-10">
              <div className="flex items-center gap-3 border-b border-[#292d25]/20 pb-3">
                <MapPin size={18}/>
                <input value={search} onChange={e => setSearch(e.target.value)}
                  placeholder="City, neighbourhood or property"
                  className="bg-transparent outline-none w-full text-sm"/>
              </div>

              <div className="flex gap-3">
                <select value={type} onChange={e => setType(e.target.value)}
                  className="bg-transparent border border-[#292d25]/20 rounded-full px-4 py-3 text-sm flex-1">
                  <option>All</option>
                  <option>Villa</option>
                  <option>Apartment</option>
                </select>
                <a href="#properties"
                  className="bg-[#292d25] text-white rounded-full px-6 py-3 flex items-center gap-2 text-sm">
                  Explore <ArrowRight size={16}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="properties" className="px-6 md:px-16 py-20 bg-[#e9e5da]">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-5 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[.2em] text-[#9a7858]">The collection</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">
              Homes worth <span className="italic">coming home to.</span>
            </h2>
          </div>
          <p className="text-sm text-[#74766b] max-w-xs">
            A selection of distinctive homes in sought-after neighbourhoods.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {filtered.map(p => (
            <article key={p.id} className="group">
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img src={p.image} alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"/>
                <span className="absolute top-5 left-5 bg-[#f3f0e8] px-3 py-2 text-[10px] uppercase tracking-widest">
                  {p.tag}
                </span>
                <button onClick={() => setSaved(old => old.includes(p.id) ? old.filter(x => x !== p.id) : [...old,p.id])}
                  className="absolute top-4 right-4 bg-[#f3f0e8] p-2 rounded-full">
                  <Heart size={17} fill={saved.includes(p.id) ? "#9a7858" : "none"}/>
                </button>
              </div>

              <div className="pt-5">
                <div className="flex justify-between gap-3">
                  <h3 className="font-serif text-2xl">{p.name}</h3>
                  <p className="font-bold whitespace-nowrap">{p.price}</p>
                </div>
                <p className="text-sm text-[#74766b] flex items-center gap-2 mt-2">
                  <MapPin size={14}/>{p.location}
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-[#74766b] border-t border-[#292d25]/15 mt-5 pt-4">
                  <span className="flex gap-1"><BedDouble size={15}/>{p.beds} beds</span>
                  <span className="flex gap-1"><Bath size={15}/>{p.baths} baths</span>
                  <span className="flex gap-1"><Maximize size={15}/>{p.area}</span>
                </div>
                <button onClick={() => setSelected(p.id)}
                  className="mt-5 text-sm font-bold flex items-center gap-2 group-hover:text-[#9a7858]">
                  Discover this home <ArrowUpRight size={16}/>
                </button>
              </div>
            </article>
          ))}
          {filtered.length === 0 && <p>No properties match your search.</p>}
        </div>
      </section>

      <section id="philosophy" className="px-6 md:px-16 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs uppercase tracking-[.2em] text-[#9a7858]">Our philosophy</p>
          <h2 className="font-serif text-5xl md:text-6xl leading-tight mt-5">
            Not just a house. <span className="italic text-[#9a7858]">Your place.</span>
          </h2>
        </div>
        <div>
          <p className="text-[#74766b] leading-8">
            We believe a home is more than walls and a postcode. It is where everyday moments become memories. Habitat brings people and thoughtfully chosen properties together.
          </p>
          <button onClick={() => setContactOpen(true)}
            className="mt-7 border-b border-[#292d25] pb-2 font-bold flex gap-3 items-center">
            Talk to our team <ArrowRight size={17}/>
          </button>
        </div>
      </section>

      <footer id="contact" className="bg-[#292d25] text-white px-6 md:px-16 py-12 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <p className="font-serif text-3xl">habitat.</p>
          <p className="text-white/50 text-sm mt-3">Find a place to belong.</p>
        </div>
        <p className="text-white/60 text-sm self-end">© 2026 Habitat · Real estate concept demo</p>
      </footer>

      {(selected !== null || contactOpen) && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-[#f3f0e8] text-[#292d25] rounded-2xl p-8 max-w-md w-full relative">
            <button onClick={closeModal} className="absolute right-5 top-5"><X/></button>
            {sent ? (
              <div className="py-5">
                <Check size={35}/>
                <h3 className="font-serif text-3xl mt-4">Thank you.</h3>
                <p className="text-sm text-[#74766b] mt-3">Your demo enquiry has been received. No real property enquiry was sent.</p>
              </div>
            ) : (
              <>
                <p className="text-xs uppercase tracking-widest text-[#9a7858]">Habitat / Enquiry</p>
                <h3 className="font-serif text-3xl mt-3">
                  {selected ? properties.find(p => p.id === selected)?.name : "Let's find your place."}
                </h3>
                <form onSubmit={e => {e.preventDefault();setSent(true)}} className="space-y-4 mt-7">
                  <input required placeholder="Your name" className="w-full p-3 bg-white border border-[#292d25]/15 rounded-lg outline-none"/>
                  <input required type="email" placeholder="Email address" className="w-full p-3 bg-white border border-[#292d25]/15 rounded-lg outline-none"/>
                  <textarea required placeholder="Tell us what you're looking for" className="w-full p-3 bg-white border border-[#292d25]/15 rounded-lg outline-none"/>
                  <button className="w-full bg-[#292d25] text-white rounded-full p-4">
                    Send demo enquiry <ArrowRight className="inline ml-2" size={16}/>
                  </button>
                </form>
                <p className="text-[11px] text-[#9a7858] mt-4 text-center">Demo only · No real property transaction</p>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
