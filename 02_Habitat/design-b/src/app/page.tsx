
"use client";

import { useState } from "react";
import {
  Search, MapPin, SlidersHorizontal, Heart, BedDouble,
  Bath, Maximize, LayoutGrid, Map, X, ArrowUpRight,
  ChevronDown, Building2, KeyRound, Check, Menu
} from "lucide-react";

const listings = [
  {
    id:1, name:"Skyline Heights", area:"Whitefield, Bengaluru",
    price:"₹1.45 Cr", beds:3, baths:2, size:"1,850 sq.ft",
    type:"Apartment", tag:"Verified",
    image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"
  },
  {
    id:2, name:"Greenwood Villa", area:"Sarjapur Road, Bengaluru",
    price:"₹2.80 Cr", beds:4, baths:4, size:"2,900 sq.ft",
    type:"Villa", tag:"Premium",
    image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
  },
  {
    id:3, name:"Urban Nest", area:"HSR Layout, Bengaluru",
    price:"₹95 Lakh", beds:2, baths:2, size:"1,250 sq.ft",
    type:"Apartment", tag:"New",
    image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85"
  },
  {
    id:4, name:"The Corner House", area:"Jayanagar, Bengaluru",
    price:"₹1.95 Cr", beds:3, baths:3, size:"2,200 sq.ft",
    type:"Villa", tag:"Verified",
    image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85"
  }
];

export default function HomePage() {
  const [search,setSearch] = useState("");
  const [type,setType] = useState("All");
  const [maxPrice,setMaxPrice] = useState("Any budget");
  const [saved,setSaved] = useState<number[]>([]);
  const [selected,setSelected] = useState<number|null>(null);
  const [showFilters,setShowFilters] = useState(false);
  const [contact,setContact] = useState(false);
  const [sent,setSent] = useState(false);
  const [view,setView] = useState("Grid");
  const [mobileMenu,setMobileMenu] = useState(false);

  const filtered = listings.filter(p =>
    (type === "All" || p.type === type) &&
    (maxPrice === "Any budget" ||
      (maxPrice === "Under ₹1 Cr" && p.price === "₹95 Lakh") ||
      (maxPrice === "₹1–2 Cr" && ["₹1.45 Cr","₹1.95 Cr"].includes(p.price)) ||
      (maxPrice === "Above ₹2 Cr" && p.price === "₹2.80 Cr")) &&
    `${p.name} ${p.area}`.toLowerCase().includes(search.toLowerCase())
  );

  const closeModal = () => {
    setSelected(null);
    setContact(false);
    setSent(false);
  };

  return (
    <main className="min-h-screen bg-[#101820] text-[#edf2f3]">
      <header className="h-20 px-5 md:px-9 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-[#d2fa74] text-[#17221c] rounded-xl p-2"><Building2 size={23}/></div>
          <div>
            <p className="text-xl font-black tracking-tight">HABITAT<span className="text-[#d2fa74]">/</span></p>
            <p className="text-[9px] tracking-[.25em] text-gray-500">PROPERTY NETWORK</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-gray-400">
          <a href="#search" className="text-white">Discover</a>
          <a href="#listings">Properties</a>
          <a href="#saved">Saved homes</a>
        </nav>

        <button onClick={() => setContact(true)}
          className="hidden sm:block bg-[#d2fa74] text-[#17221c] rounded-lg px-5 py-3 text-sm font-bold">
          List your property ↗
        </button>
        <button className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)}><Menu/></button>
      </header>

      {mobileMenu && (
        <div className="md:hidden bg-[#1b2932] p-5 flex flex-col gap-5">
          <a href="#search" onClick={() => setMobileMenu(false)}>Discover</a>
          <a href="#listings" onClick={() => setMobileMenu(false)}>Properties</a>
          <a href="#saved" onClick={() => setMobileMenu(false)}>Saved homes</a>
          <button onClick={() => {setContact(true);setMobileMenu(false)}} className="bg-[#d2fa74] text-[#17221c] rounded-lg p-3">List your property</button>
        </div>
      )}

      <div className="max-w-[1500px] mx-auto p-5 md:p-9">
        <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <p className="text-xs text-[#d2fa74] tracking-[.25em] uppercase">Property discovery / 2026</p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mt-4">
              Find your next <span className="text-[#d2fa74]">space.</span>
            </h1>
            <p className="text-gray-500 mt-3">Explore homes and properties in your preferred neighbourhood.</p>
          </div>

          <div className="bg-[#1b2932] p-1 rounded-lg flex self-start">
            {["Grid","Map"].map(v => (
              <button key={v} onClick={() => setView(v)}
                className={`px-4 py-2 rounded-md text-xs flex items-center gap-2 ${view===v?"bg-[#d2fa74] text-[#17221c] font-bold":"text-gray-400"}`}>
                {v==="Grid"?<LayoutGrid size={14}/>:<Map size={14}/>} {v}
              </button>
            ))}
          </div>
        </section>

        <section id="search" className="bg-[#1b2932] border border-white/10 rounded-2xl p-4 md:p-5">
          <div className="grid md:grid-cols-[1.5fr_1fr_1fr_auto] gap-3">
            <div className="flex items-center gap-3 bg-[#101820] rounded-xl px-4 py-3">
              <Search size={18} className="text-[#d2fa74]"/>
              <input value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search location or property..."
                className="bg-transparent outline-none text-sm w-full"/>
            </div>

            <select value={type} onChange={e => setType(e.target.value)}
              className="bg-[#101820] rounded-xl px-4 py-3 text-sm outline-none">
              <option>All</option><option>Apartment</option><option>Villa</option>
            </select>

            <select value={maxPrice} onChange={e => setMaxPrice(e.target.value)}
              className="bg-[#101820] rounded-xl px-4 py-3 text-sm outline-none">
              <option>Any budget</option><option>Under ₹1 Cr</option>
              <option>₹1–2 Cr</option><option>Above ₹2 Cr</option>
            </select>

            <button onClick={() => setShowFilters(!showFilters)}
              className="bg-[#d2fa74] text-[#17221c] rounded-xl px-5 py-3 font-bold text-sm flex gap-2 items-center justify-center">
              <SlidersHorizontal size={17}/> Filters
            </button>
          </div>

          {showFilters && (
            <div className="mt-4 p-4 border-t border-white/10 flex flex-wrap gap-4 text-sm text-gray-300">
              <span className="flex gap-2 items-center"><Check size={15} className="text-[#d2fa74]"/> Verified listings</span>
              <span className="flex gap-2 items-center"><Check size={15} className="text-[#d2fa74]"/> Owner listed</span>
              <span className="flex gap-2 items-center"><Check size={15} className="text-[#d2fa74]"/> Ready to move</span>
              <button onClick={() => {setType("All");setMaxPrice("Any budget");setSearch("")}}
                className="text-[#d2fa74] underline">Reset filters</button>
            </div>
          )}
        </section>

        <section className="grid lg:grid-cols-[1fr_300px] gap-6 mt-8">
          <div id="listings">
            <div className="flex justify-between items-center mb-5">
              <div>
                <h2 className="text-xl font-bold">Available properties</h2>
                <p className="text-xs text-gray-500 mt-1">{filtered.length} matching properties · Demo listings</p>
              </div>
              <span className="text-xs text-[#d2fa74] flex items-center gap-2">Recommended <ChevronDown size={14}/></span>
            </div>

            {view === "Grid" ? (
              <div className="grid md:grid-cols-2 gap-5">
                {filtered.map(p => (
                  <article key={p.id} className="bg-[#1b2932] border border-white/5 rounded-2xl overflow-hidden hover:border-[#d2fa74]/50 transition">
                    <div className="h-56 relative overflow-hidden group">
                      <img src={p.image} alt={p.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
                      <span className="absolute top-4 left-4 bg-[#d2fa74] text-[#17221c] rounded-md px-3 py-1 text-[10px] font-bold">{p.tag}</span>
                      <button onClick={() => setSaved(old => old.includes(p.id)?old.filter(x=>x!==p.id):[...old,p.id])}
                        className="absolute right-4 top-4 bg-[#101820]/80 p-2 rounded-full">
                        <Heart size={17} fill={saved.includes(p.id)?"#d2fa74":"none"} color={saved.includes(p.id)?"#d2fa74":"white"}/>
                      </button>
                      <span className="absolute bottom-4 left-4 text-xs bg-black/50 px-3 py-2 rounded-md">{p.type}</span>
                    </div>

                    <div className="p-5">
                      <div className="flex justify-between gap-3">
                        <h3 className="font-bold text-lg">{p.name}</h3>
                        <p className="font-black text-[#d2fa74] whitespace-nowrap">{p.price}</p>
                      </div>
                      <p className="text-xs text-gray-500 flex gap-2 items-center mt-2"><MapPin size={13}/>{p.area}</p>
                      <div className="flex gap-4 border-t border-white/10 mt-5 pt-4 text-xs text-gray-400">
                        <span className="flex gap-1"><BedDouble size={14}/>{p.beds}</span>
                        <span className="flex gap-1"><Bath size={14}/>{p.baths}</span>
                        <span className="flex gap-1"><Maximize size={14}/>{p.size}</span>
                      </div>
                      <button onClick={() => setSelected(p.id)}
                        className="w-full mt-5 border border-white/10 rounded-lg py-3 text-sm font-bold hover:bg-[#d2fa74] hover:text-[#17221c] transition">
                        View property details <ArrowUpRight className="inline ml-2" size={16}/>
                      </button>
                    </div>
                  </article>
                ))}
                {filtered.length===0 && <p className="text-gray-500">No matching properties. Try changing your filters.</p>}
              </div>
            ) : (
              <div className="bg-[#1b2932] rounded-2xl border border-white/10 min-h-[550px] relative overflow-hidden p-6">
                <div className="absolute inset-0 opacity-30"
                  style={{backgroundImage:"linear-gradient(35deg, transparent 48%, #81918a 49%, #81918a 50%, transparent 51%),linear-gradient(120deg, transparent 48%, #81918a 49%, #81918a 50%, transparent 51%)",backgroundSize:"90px 90px"}}/>
                <div className="relative z-10 text-center pt-12">
                  <MapPin size={35} className="text-[#d2fa74] mx-auto"/>
                  <h3 className="text-xl font-bold mt-4">Property area map</h3>
                  <p className="text-sm text-gray-500 mt-2">Illustrative map view · Not live navigation</p>
                </div>
                {filtered.map((p,i) => (
                  <button key={p.id} onClick={() => setSelected(p.id)}
                    className="absolute z-10 bg-[#d2fa74] text-[#17221c] px-4 py-2 rounded-full font-bold text-xs shadow-lg"
                    style={{top:`${30+i*15}%`,left:`${15+(i%2)*48}%`}}>
                    {p.price}
                  </button>
                ))}
              </div>
            )}
          </div>

          <aside className="space-y-5">
            <div className="bg-[#1b2932] border border-white/5 rounded-2xl p-6">
              <p className="text-xs text-[#d2fa74] uppercase tracking-widest">Your shortlist</p>
              <div className="flex items-end gap-2 mt-4">
                <p className="text-4xl font-black">{saved.length}</p>
                <p className="text-xs text-gray-500 mb-1">saved properties</p>
              </div>
              <div id="saved" className="mt-5 space-y-3">
                {saved.length===0 ? <p className="text-xs text-gray-500">Tap the heart on a property to save it here.</p> :
                  listings.filter(p=>saved.includes(p.id)).map(p=>(
                    <div key={p.id} className="flex justify-between text-xs gap-2">
                      <span>{p.name}</span><span className="text-[#d2fa74]">{p.price}</span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="bg-[#d2fa74] text-[#17221c] rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-[#17221c]/10 flex items-center justify-center"><KeyRound size={23}/></div>
              <h3 className="text-xl font-black mt-5">Have a property to sell?</h3>
              <p className="text-xs leading-5 mt-2 opacity-70">Connect with our demo listing team to get started.</p>
              <button onClick={() => setContact(true)}
                className="mt-5 bg-[#17221c] text-white rounded-lg w-full py-3 text-sm font-bold">
                List your property <ArrowUpRight className="inline ml-2" size={15}/>
              </button>
            </div>

            <div className="bg-[#1b2932] rounded-2xl p-6 border border-white/5">
              <p className="font-bold">Need help choosing?</p>
              <p className="text-xs text-gray-500 mt-2 leading-5">Send your requirements and our demo team will help you explore options.</p>
              <button onClick={() => setContact(true)} className="text-[#d2fa74] text-xs font-bold mt-4">Contact advisor →</button>
            </div>
          </aside>
        </section>

        <footer className="border-t border-white/10 mt-16 py-8 flex flex-col md:flex-row justify-between gap-3 text-xs text-gray-500">
          <p className="font-black text-white">HABITAT / PROPERTY NETWORK</p>
          <p>© 2026 Habitat · Demo property platform</p>
        </footer>
      </div>

      {(selected!==null || contact) && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-[#1b2932] border border-white/10 rounded-2xl p-7 max-w-md w-full relative">
            <button onClick={closeModal} className="absolute right-5 top-5"><X/></button>
            {sent ? (
              <>
                <div className="text-[#d2fa74]"><Check size={35}/></div>
                <h3 className="text-2xl font-bold mt-4">Request received!</h3>
                <p className="text-sm text-gray-400 mt-3">Demo confirmation only. No real property listing or enquiry was created.</p>
              </>
            ) : (
              <>
                <p className="text-xs uppercase tracking-widest text-[#d2fa74]">Habitat / Property enquiry</p>
                <h3 className="text-2xl font-bold mt-3">
                  {selected ? listings.find(p=>p.id===selected)?.name : "List or enquire about a property"}
                </h3>
                <form onSubmit={e=>{e.preventDefault();setSent(true)}} className="space-y-4 mt-6">
                  <input required placeholder="Your name" className="w-full bg-[#101820] border border-white/10 rounded-lg p-3 outline-none"/>
                  <input required type="email" placeholder="Email address" className="w-full bg-[#101820] border border-white/10 rounded-lg p-3 outline-none"/>
                  <textarea placeholder="Your requirements" className="w-full bg-[#101820] border border-white/10 rounded-lg p-3 outline-none"/>
                  <button className="w-full bg-[#d2fa74] text-[#17221c] rounded-lg p-4 font-bold">Submit demo enquiry</button>
                </form>
                <p className="text-[10px] text-gray-500 text-center mt-4">Demo interface · No actual property transaction</p>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
