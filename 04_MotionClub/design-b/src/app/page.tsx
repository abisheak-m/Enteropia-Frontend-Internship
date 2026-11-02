"use client";

import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Menu, X, Dumbbell, Zap, Heart,
 Clock, MapPin, Camera, Play, Check, Flame, Users,
} from "lucide-react";

const classes = [
  { time: "06:00 AM", name: "POWER HIIT", coach: "Marcus Lee", type: "STRENGTH", level: "ADVANCED", spots: 4 },
  { time: "08:30 AM", name: "YOGA FLOW", coach: "Sofia Chen", type: "RECOVERY", level: "ALL LEVELS", spots: 8 },
  { time: "10:00 AM", name: "BOXING CLUB", coach: "Andre Wilson", type: "CARDIO", level: "INTERMEDIATE", spots: 2 },
  { time: "05:30 PM", name: "SPIN REVOLUTION", coach: "Maya Patel", type: "CARDIO", level: "ALL LEVELS", spots: 6 },
];

const trainers = [
  { name: "MARCUS LEE", role: "STRENGTH COACH", initials: "ML", color: "bg-orange-500" },
  { name: "SOFIA CHEN", role: "YOGA & MOBILITY", initials: "SC", color: "bg-violet-500" },
  { name: "ANDRE WILSON", role: "BOXING COACH", initials: "AW", color: "bg-lime-500" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [booked, setBooked] = useState<string[]>([]);
  const [plan, setPlan] = useState("UNLIMITED");
  const [joined, setJoined] = useState(false);

  const toggleBooking = (name: string) => {
    setBooked((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name]
    );
  };

  return (
    <main className="min-h-screen bg-[#10110f] text-[#f4f1e9]">
      <nav className="relative z-20 flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-12">
        <a href="#" className="flex items-center gap-2 text-xl font-black tracking-tighter">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c5f467] text-black">
            <Dumbbell size={20} />
          </span>
          MOTION<span className="text-[#c5f467]">CLUB.</span>
        </a>

        <div className="hidden items-center gap-9 text-xs font-bold tracking-[0.18em] text-white/65 md:flex">
          <a href="#classes" className="hover:text-[#c5f467]">CLASSES</a>
          <a href="#coaches" className="hover:text-[#c5f467]">COACHES</a>
          <a href="#membership" className="hover:text-[#c5f467]">MEMBERSHIP</a>
          <a href="#about" className="hover:text-[#c5f467]">ABOUT</a>
        </div>

        <a href="#membership" className="hidden rounded-full bg-[#c5f467] px-6 py-3 text-xs font-black tracking-wider text-black transition hover:bg-white md:block">
          JOIN THE CLUB <ArrowUpRight className="ml-2 inline" size={15} />
        </a>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <div className="absolute left-0 top-full flex w-full flex-col gap-5 border-b border-white/10 bg-[#10110f] p-6 text-sm font-bold md:hidden">
            <a onClick={() => setMenuOpen(false)} href="#classes">CLASSES</a>
            <a onClick={() => setMenuOpen(false)} href="#coaches">COACHES</a>
            <a onClick={() => setMenuOpen(false)} href="#membership">MEMBERSHIP</a>
          </div>
        )}
      </nav>

      <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28">
        <div className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-[#c5f467]/10 blur-[100px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#c5f467]/40 px-4 py-2 text-[10px] font-black tracking-[0.2em] text-[#c5f467]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#c5f467]" />
              YOUR CITY. YOUR ENERGY. YOUR CLUB.
            </div>
            <h1 className="text-6xl font-black leading-[0.91] tracking-[-0.07em] sm:text-7xl lg:text-[100px]">
              MOVE
              <br />
              <span className="text-[#c5f467]">WITH</span>
              <br />
              PURPOSE<span className="text-[#c5f467]">.</span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-7 text-white/55">
              More than a workout. A community built on movement, mindset and showing up for yourself.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#classes" className="rounded-full bg-[#c5f467] px-7 py-4 text-xs font-black tracking-wider text-black transition hover:scale-105">
                EXPLORE CLASSES <ArrowRight className="ml-2 inline" size={16} />
              </a>
              <a href="#about" className="rounded-full border border-white/20 px-7 py-4 text-xs font-bold tracking-wider hover:border-[#c5f467]">
                OUR PHILOSOPHY
              </a>
            </div>
            <div className="mt-14 flex gap-10 border-t border-white/10 pt-7">
              <div><p className="text-3xl font-black">25<span className="text-[#c5f467]">+</span></p><p className="mt-1 text-[10px] tracking-widest text-white/40">WEEKLY CLASSES</p></div>
              <div><p className="text-3xl font-black">12</p><p className="mt-1 text-[10px] tracking-widest text-white/40">EXPERT COACHES</p></div>
              <div><p className="text-3xl font-black">2K<span className="text-[#c5f467]">+</span></p><p className="mt-1 text-[10px] tracking-widest text-white/40">ACTIVE MEMBERS</p></div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#39412b] via-[#252a20] to-[#151713] p-5">
              <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/10 p-6">
                <div className="flex justify-between text-[10px] font-black tracking-[0.2em] text-white/50">
                  <span>EST. 2024</span><span>MOVE DIFFERENT.</span>
                </div>
                <div className="relative mx-auto flex h-64 w-64 items-center justify-center">
                  <div className="absolute h-64 w-64 rounded-full border border-[#c5f467]/30" />
                  <div className="absolute h-48 w-48 rounded-full border border-[#c5f467]/40" />
                  <div className="absolute h-32 w-32 rounded-full bg-[#c5f467] shadow-[0_0_80px_rgba(197,244,103,0.25)]" />
                  <Zap className="relative z-10 text-black" size={68} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-[#c5f467]">THE MOTION MINDSET</p>
                  <p className="mt-3 text-4xl font-black leading-none tracking-tighter">STRONGER<br />EVERY DAY.</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-5 flex items-center gap-3 rounded-2xl bg-[#c5f467] p-4 text-black shadow-xl">
              <div className="rounded-full bg-black p-3 text-[#c5f467]"><Flame size={22} /></div>
              <div><p className="text-xl font-black">LET'S GO.</p><p className="text-[9px] font-bold tracking-widest">NO ZERO DAYS</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-[#191b17] px-6 py-12 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {[
            { icon: <Dumbbell />, title: "TRAIN WITH INTENT", text: "Purposeful sessions designed to help you build real strength." },
            { icon: <Heart />, title: "RECOVER & RESET", text: "Balance intensity with mobility, recovery and mindful movement." },
            { icon: <Users />, title: "FIND YOUR PEOPLE", text: "A welcoming community that celebrates every kind of progress." },
          ].map((item) => (
            <div key={item.title} className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c5f467] text-black">{item.icon}</div>
              <div><h3 className="text-sm font-black tracking-wider">{item.title}</h3><p className="mt-2 text-sm leading-6 text-white/45">{item.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="classes" className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-black tracking-[0.25em] text-[#c5f467]">FIND YOUR SESSION</p>
              <h2 className="mt-4 text-5xl font-black tracking-[-0.06em] md:text-6xl">THE LINEUP<span className="text-[#c5f467]">.</span></h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-white/45">Choose your challenge. Book your spot. Show up for yourself.</p>
          </div>

          <div className="border-t border-white/15">
            {classes.map((item, index) => (
              <div key={item.name} className="grid gap-4 border-b border-white/15 py-7 md:grid-cols-[120px_1fr_150px_150px] md:items-center">
                <p className="text-sm font-bold text-[#c5f467]">{item.time}</p>
                <div>
                  <h3 className="text-2xl font-black tracking-tight md:text-3xl">{item.name}</h3>
                  <p className="mt-2 text-xs text-white/45">WITH {item.coach.toUpperCase()}</p>
                </div>
                <div className="flex gap-2 text-[9px] font-black tracking-widest">
                  <span className="rounded-full bg-white/10 px-3 py-2">{item.type}</span>
                  <span className="rounded-full bg-white/10 px-3 py-2">{item.level}</span>
                </div>
                <div className="flex items-center justify-between gap-3 md:justify-end">
                  <span className="text-xs text-white/45">{item.spots} SPOTS LEFT</span>
                  <button onClick={() => toggleBooking(item.name)} className={`rounded-full px-5 py-3 text-[10px] font-black tracking-wider transition ${booked.includes(item.name) ? "bg-white text-black" : "bg-[#c5f467] text-black hover:bg-white"}`}>
                    {booked.includes(item.name) ? "BOOKED ✓" : "BOOK NOW"}
                  </button>
                </div>
              </div>
            ))}
          </div>
          {booked.length > 0 && <p className="mt-5 text-sm text-[#c5f467]">Demo booking selected: {booked.join(", ")}. No real reservation has been made.</p>}
        </div>
      </section>

      <section id="coaches" className="bg-[#191b17] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between">
            <div><p className="text-xs font-black tracking-[0.25em] text-[#c5f467]">THE PEOPLE BEHIND THE PROGRESS</p><h2 className="mt-4 text-5xl font-black tracking-[-0.06em]">MEET YOUR CREW<span className="text-[#c5f467]">.</span></h2></div>
            <span className="hidden text-xs tracking-widest text-white/40 md:block">01 — 03 / COACHES</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {trainers.map((trainer, index) => (
              <div key={trainer.name} className="group rounded-3xl border border-white/10 bg-[#10110f] p-6 transition hover:-translate-y-2 hover:border-[#c5f467]/50">
                <div className={`flex aspect-[4/3] items-center justify-center rounded-2xl ${trainer.color} text-7xl font-black text-black/80`}>
                  {trainer.initials}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div><h3 className="text-lg font-black">{trainer.name}</h3><p className="mt-1 text-[10px] font-bold tracking-[0.2em] text-[#c5f467]">{trainer.role}</p></div>
                  <ArrowUpRight className="text-white/40 transition group-hover:text-[#c5f467]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="membership" className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-black tracking-[0.25em] text-[#c5f467]">YOUR NEXT CHAPTER STARTS HERE</p>
            <h2 className="mt-4 text-5xl font-black tracking-[-0.06em] md:text-6xl">PICK YOUR PACE<span className="text-[#c5f467]">.</span></h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-white/45">No pressure. No competition. Just a plan that works for you.</p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              { name: "STARTER", price: "₹999", detail: "PER MONTH", features: ["8 classes per month", "Access to group sessions", "Community events"] },
              { name: "UNLIMITED", price: "₹1,999", detail: "PER MONTH", features: ["Unlimited group classes", "Priority class booking", "Monthly fitness check-in", "Member community access"] },
              { name: "ELITE", price: "₹3,499", detail: "PER MONTH", features: ["Everything in Unlimited", "2 personal training sessions", "Nutrition guidance", "Guest pass every month"] },
            ].map((item) => (
              <div key={item.name} className={`rounded-3xl border p-8 ${item.name === "UNLIMITED" ? "border-[#c5f467] bg-[#c5f467] text-black" : "border-white/15 bg-[#191b17]"}`}>
                {item.name === "UNLIMITED" && <span className="rounded-full bg-black px-3 py-2 text-[9px] font-black tracking-widest text-[#c5f467]">MOST POPULAR</span>}
                <h3 className="mt-7 text-sm font-black tracking-[0.2em]">{item.name}</h3>
                <p className="mt-5 text-5xl font-black tracking-tighter">{item.price}</p>
                <p className={`mt-1 text-[10px] font-bold tracking-widest ${item.name === "UNLIMITED" ? "text-black/50" : "text-white/40"}`}>{item.detail}</p>
                <div className={`my-8 border-t ${item.name === "UNLIMITED" ? "border-black/20" : "border-white/10"}`} />
                <ul className="space-y-4">
                  {item.features.map((feature) => <li key={feature} className="flex items-center gap-3 text-sm"><Check size={16} />{feature}</li>)}
                </ul>
                <button onClick={() => { setPlan(item.name); setJoined(false); }} className={`mt-9 w-full rounded-full py-4 text-xs font-black tracking-widest transition ${item.name === "UNLIMITED" ? "bg-black text-[#c5f467] hover:bg-white hover:text-black" : "bg-[#c5f467] text-black hover:bg-white"}`}>
                  SELECT {item.name}
                </button>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-white/10 bg-[#191b17] p-6 text-center">
            <p className="text-xs tracking-widest text-white/50">YOUR SELECTED PLAN</p>
            <p className="mt-2 text-2xl font-black text-[#c5f467]">{plan}</p>
            <button onClick={() => setJoined(true)} className="mt-4 rounded-full bg-white px-7 py-3 text-xs font-black text-black hover:bg-[#c5f467]">CONTINUE</button>
            {joined && <p className="mt-4 text-sm text-[#c5f467]">Demo selection confirmed for {plan}. No payment has been taken.</p>}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[2rem] bg-[#c5f467] p-9 text-black md:flex-row md:items-center md:p-14">
          <div><p className="text-xs font-black tracking-[0.25em]">YOUR FIRST SESSION IS WAITING</p><h2 className="mt-4 text-4xl font-black tracking-[-0.06em] md:text-6xl">READY TO MOVE?</h2></div>
          <a href="#membership" className="rounded-full bg-black px-8 py-5 text-xs font-black tracking-widest text-white transition hover:bg-white hover:text-black">BECOME A MEMBER <ArrowRight className="ml-2 inline" size={16} /></a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <a href="#" className="text-xl font-black tracking-tighter">MOTION<span className="text-[#c5f467]">CLUB.</span></a>
          <p className="text-xs text-white/40">© 2026 MOTION CLUB. MOVE WITH PURPOSE.</p>
          <div className="flex gap-5 text-white/50"><Camera size={18} /><MapPin size={18} /><Play size={18} /></div>
        </div>
      </footer>
    </main>
  );
}