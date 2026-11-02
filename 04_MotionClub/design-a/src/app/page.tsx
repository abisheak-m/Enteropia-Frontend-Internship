"use client";

import { useState } from "react";
import {
  Menu, X, ArrowUpRight, Play, Dumbbell, Heart, Clock, Flame,
  CalendarDays, Users, Star, Check, Plus, Zap, Target, Activity
} from "lucide-react";

const programs = [
  { name: "Strength & Conditioning", type: "STRENGTH", level: "All levels", time: "45 min", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=900", desc: "Build strength with expert-guided training." },
  { name: "HIIT & Cardio Burn", type: "CARDIO", level: "Intermediate", time: "30 min", image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=900", desc: "Push your limits with high-energy intervals." },
  { name: "Yoga & Mobility", type: "RECOVERY", level: "Beginner", time: "50 min", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900", desc: "Restore balance, flexibility and focus." },
];

const trainers = [
  { name: "Jordan Lee", role: "Strength Coach", image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=500", stars: "4.9" },
  { name: "Maya Chen", role: "Yoga Instructor", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500", stars: "5.0" },
  { name: "Alex Rivera", role: "HIIT Specialist", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500", stars: "4.9" },
];

const classes = [
  { day: "MON", date: "02", name: "Power Strength", trainer: "Jordan Lee", time: "07:00 AM", spots: "4 spots left", type: "STRENGTH" },
  { day: "TUE", date: "03", name: "Morning Flow Yoga", trainer: "Maya Chen", time: "08:30 AM", spots: "8 spots left", type: "YOGA" },
  { day: "WED", date: "04", name: "HIIT Burnout", trainer: "Alex Rivera", time: "06:00 PM", spots: "2 spots left", type: "HIIT" },
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState("ALL");
  const [booked, setBooked] = useState<string[]>([]);
  const [saved, setSaved] = useState<string[]>([]);
  const [notice, setNotice] = useState("");
  const [member, setMember] = useState(false);

  const visiblePrograms = programs.filter(p => filter === "ALL" || p.type === filter);

  function book(name: string) {
    setBooked(old => old.includes(name) ? old : [...old, name]);
    setNotice(`${name} added to your demo bookings.`);
  }

  return (
    <main className="mc-app">
      <div className="mc-topbar"><span>MOVE WITH PURPOSE. LIVE WITH ENERGY.</span><span>YOUR FITNESS JOURNEY STARTS HERE <b>↗</b></span></div>
      <header className="mc-header">
        <a href="#" className="mc-logo"><span>MC</span> MOTION<span className="mc-logo-light">CLUB.</span></a>
        <nav className={menu ? "mc-nav open" : "mc-nav"}>
          <a href="#programs" onClick={() => setMenu(false)}>Programs</a>
          <a href="#trainers" onClick={() => setMenu(false)}>Our trainers</a>
          <a href="#schedule" onClick={() => setMenu(false)}>Schedule</a>
          <a href="#membership" onClick={() => setMenu(false)}>Membership</a>
        </nav>
        <a className="mc-header-cta" href="#membership">JOIN THE CLUB <ArrowUpRight size={15}/></a>
        <button className="mc-menu" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
      </header>

      {notice && <div className="mc-notice"><Check size={16}/>{notice}<button onClick={() => setNotice("")}><X size={15}/></button></div>}

      <section className="mc-hero">
        <div className="mc-hero-content">
          <span className="mc-kicker"><i/> THE NEXT VERSION OF YOU STARTS NOW</span>
          <h1>STRONGER<br/>EVERY <em>DAY.</em></h1>
          <p>More than a gym. A community built around movement, progress and showing up for yourself.</p>
          <div className="mc-hero-actions"><a href="#programs" className="mc-primary">EXPLORE PROGRAMS <ArrowUpRight size={17}/></a><a href="#membership" className="mc-play"><span><Play size={15} fill="currentColor"/></span> FIND YOUR FIT</a></div>
          <div className="mc-hero-stats"><div><b>12K<span>+</span></b><small>ACTIVE MEMBERS</small></div><div><b>40<span>+</span></b><small>WEEKLY CLASSES</small></div><div><b>25</b><small>EXPERT COACHES</small></div></div>
        </div>
        <div className="mc-hero-image"><div className="mc-image-label"><span>01 / MOVE DIFFERENT</span><b>BUILT BY MOVEMENT.</b></div><div className="mc-round-stamp">MOVE<br/>BETTER<br/><span>LIVE</span><br/>BETTER</div></div>
        <div className="mc-hero-vertical">TRAIN HARD · RECOVER WELL · REPEAT</div>
      </section>

      <section className="mc-marquee"><span>STRENGTH</span> ✳ <span>COMMUNITY</span> ✳ <span>DISCIPLINE</span> ✳ <span>PROGRESS</span> ✳ <span>STRENGTH</span> ✳ <span>COMMUNITY</span></section>

      <section className="mc-programs mc-section" id="programs">
        <div className="mc-section-heading"><div><span className="mc-kicker"><i/> FIND YOUR MOVEMENT</span><h2>TRAIN YOUR<br/><em>WAY.</em></h2></div><p>Whether you're building strength, chasing a new personal best or finding your balance — there's a place for you here.</p></div>
        <div className="mc-filters">{["ALL","STRENGTH","CARDIO","RECOVERY"].map(f=><button key={f} className={filter===f?"active":""} onClick={()=>setFilter(f)}>{f}</button>)}</div>
        <div className="mc-program-grid">{visiblePrograms.map((p,i)=><article className="mc-program-card" key={p.name}><div className="mc-program-image" style={{backgroundImage:`url(${p.image})`}}><span>0{i+1}</span><button className={saved.includes(p.name)?"saved":""} onClick={()=>setSaved(old=>old.includes(p.name)?old.filter(x=>x!==p.name):[...old,p.name])}><Heart size={18} fill={saved.includes(p.name)?"currentColor":"none"}/></button></div><div className="mc-program-info"><span>{p.type}</span><h3>{p.name}</h3><p>{p.desc}</p><div><small><Clock size={14}/> {p.time}</small><small><Activity size={14}/> {p.level}</small><button onClick={()=>book(p.name)}>EXPLORE ↗</button></div></div></article>)}</div>
      </section>

      <section className="mc-feature"><div className="mc-feature-image"></div><div className="mc-feature-copy"><span className="mc-kicker"><i/> MORE THAN A WORKOUT</span><h2>FIND YOUR<br/><em>PEOPLE.</em></h2><p>Progress feels different when you're surrounded by people who push you, celebrate you and show up beside you. Find your crew at MotionClub.</p><a href="#membership" className="mc-primary">BECOME A MEMBER <ArrowUpRight size={16}/></a><div className="mc-feature-note"><b>01 — 03</b><span>COMMUNITY IS OUR SUPERPOWER</span></div></div></section>

      <section className="mc-trainers mc-section" id="trainers">
        <div className="mc-section-heading"><div><span className="mc-kicker"><i/> MEET YOUR CREW</span><h2>COACHED BY<br/><em>THE BEST.</em></h2></div><p>Real people. Real expertise. Coaches who care about your progress as much as you do.</p></div>
        <div className="mc-trainer-grid">{trainers.map(t=><article className="mc-trainer" key={t.name}><div className="mc-trainer-image" style={{backgroundImage:`url(${t.image})`}}></div><div className="mc-trainer-info"><div><h3>{t.name}</h3><p>{t.role}</p></div><span><Star size={14} fill="currentColor"/> {t.stars}</span></div></article>)}</div>
      </section>

      <section className="mc-schedule mc-section" id="schedule">
        <div className="mc-section-heading"><div><span className="mc-kicker"><i/> MAKE TIME FOR YOU</span><h2>THIS WEEK.<br/><em>YOUR MOVE.</em></h2></div><p>Pick a class, meet your coach and make the time count. Your next session is waiting.</p></div>
        <div className="mc-class-list">{classes.map(c=><article className="mc-class" key={c.name}><div className="mc-class-date"><small>{c.day}</small><b>{c.date}</b></div><div className="mc-class-name"><span>{c.type}</span><h3>{c.name}</h3><small>WITH {c.trainer.toUpperCase()}</small></div><div className="mc-class-time"><Clock size={15}/>{c.time}</div><div className="mc-class-spots">{c.spots}</div><button className={booked.includes(c.name)?"booked":""} onClick={()=>book(c.name)}>{booked.includes(c.name)?"BOOKED ✓":"BOOK CLASS ↗"}</button></article>)}</div>
      </section>

      <section className="mc-membership mc-section" id="membership">
        <div className="mc-section-heading"><div><span className="mc-kicker"><i/> YOUR NEXT CHAPTER</span><h2>COMMIT TO<br/><em>YOURSELF.</em></h2></div><p>Choose a membership that moves with your goals. No pressure — just progress.</p></div>
        <div className="mc-plan-grid">
          <article className="mc-plan"><span>01 / START HERE</span><h3>Essential</h3><p>For building a consistent routine.</p><strong>₹999<small> / month</small></strong><ul><li><Check/> Gym access</li><li><Check/> 4 group classes/month</li><li><Check/> Member community</li></ul><button onClick={()=>{setMember(true);setNotice("Essential plan selected. Demo membership only.")}}>CHOOSE ESSENTIAL ↗</button></article>
          <article className="mc-plan featured"><span>02 / MOST POPULAR</span><div className="mc-popular">MEMBER FAVOURITE</div><h3>Unlimited</h3><p>For making movement a lifestyle.</p><strong>₹1,999<small> / month</small></strong><ul><li><Check/> Unlimited gym access</li><li><Check/> Unlimited group classes</li><li><Check/> Monthly trainer session</li><li><Check/> Progress tracking</li></ul><button onClick={()=>{setMember(true);setNotice("Unlimited plan selected. Demo membership only.")}}>CHOOSE UNLIMITED ↗</button></article>
          <article className="mc-plan"><span>03 / GO ALL IN</span><h3>Performance</h3><p>For serious goals and focused coaching.</p><strong>₹3,499<small> / month</small></strong><ul><li><Check/> Everything in Unlimited</li><li><Check/> Personal coaching</li><li><Check/> Nutrition guidance</li><li><Check/> Priority class booking</li></ul><button onClick={()=>{setMember(true);setNotice("Performance plan selected. Demo membership only.")}}>CHOOSE PERFORMANCE ↗</button></article>
        </div>
      </section>

      <section className="mc-member" id="dashboard"><div><span className="mc-kicker"><i/> YOUR PROGRESS, YOUR STORY</span><h2>SHOW UP.<br/><em>LEVEL UP.</em></h2><p>Your member dashboard keeps your goals, class bookings and weekly progress in one place.</p><button className="mc-primary" onClick={()=>setNotice("Member dashboard preview: 3 sessions completed this week, 2 upcoming classes.")}>VIEW MEMBER DASHBOARD <ArrowUpRight size={16}/></button></div><div className="mc-member-card"><div className="mc-member-card-top"><span>MEMBER SNAPSHOT</span><span>MC / 2026</span></div><div className="mc-member-number">WEEK 44 <b>✳</b></div><div className="mc-progress-ring"><div><strong>75%</strong><small>WEEKLY GOAL</small></div></div><div className="mc-member-stats"><div><b>03</b><small>SESSIONS</small></div><div><b>145</b><small>ACTIVE MINS</small></div><div><b>02</b><small>UPCOMING</small></div></div><div className="mc-member-card-foot"><span>KEEP YOUR MOMENTUM.</span><span>✦ MOTIONCLUB</span></div></div></section>

      <footer className="mc-footer"><a href="#" className="mc-logo"><span>MC</span> MOTION<span className="mc-logo-light">CLUB.</span></a><p>MOVE WITH PURPOSE. LIVE WITH ENERGY.</p><span>© 2026 MOTIONCLUB · DEMO EXPERIENCE</span></footer>
    </main>
  );
}