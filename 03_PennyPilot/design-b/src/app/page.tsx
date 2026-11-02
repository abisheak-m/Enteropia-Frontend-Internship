
"use client";

import { useState } from "react";
import {
  Activity, Wallet, ArrowUpRight, ArrowDownLeft, TrendingUp,
  TrendingDown, Search, Plus, X, Check, CreditCard, ChartNoAxesCombined,
  CircleDollarSign, Target, Menu, Bell, Settings, ShoppingCart
} from "lucide-react";

const initial = [
  {id:1,name:"Monthly salary",category:"Income",date:"Today",amount:50000,type:"income"},
  {id:2,name:"Apartment rent",category:"Housing",date:"Today",amount:12000,type:"expense"},
  {id:3,name:"Grocery store",category:"Food",date:"Yesterday",amount:1850,type:"expense"},
  {id:4,name:"Fuel payment",category:"Transport",date:"Yesterday",amount:1500,type:"expense"},
  {id:5,name:"Streaming subscription",category:"Entertainment",date:"28 Oct",amount:499,type:"expense"},
];

export default function HomePage() {
  const [transactions,setTransactions] = useState(initial);
  const [filter,setFilter] = useState("All");
  const [search,setSearch] = useState("");
  const [modal,setModal] = useState(false);
  const [name,setName] = useState("");
  const [amount,setAmount] = useState("");
  const [category,setCategory] = useState("Food");
  const [type,setType] = useState("expense");
  const [notice,setNotice] = useState("");
  const [menu,setMenu] = useState(false);

  const income=transactions.filter(t=>t.type==="income").reduce((a,t)=>a+t.amount,0);
  const expense=transactions.filter(t=>t.type==="expense").reduce((a,t)=>a+t.amount,0);
  const balance=income-expense;

  const filtered=transactions.filter(t=>
    (filter==="All"||t.type===filter.toLowerCase()) &&
    `${t.name} ${t.category}`.toLowerCase().includes(search.toLowerCase())
  );

  const addTransaction=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(!name.trim()||!Number(amount)||Number(amount)<=0)return;
    setTransactions([{id:Date.now(),name,category,date:"Just now",amount:Number(amount),type},...transactions]);
    setName("");setAmount("");setModal(false);
    setNotice("Transaction saved in this demo session.");
    setTimeout(()=>setNotice(""),3000);
  };

  return (
    <main className="min-h-screen bg-[#0b1110] text-[#e8f0eb]">
      <div className="max-w-[1600px] mx-auto flex min-h-screen">
        <aside className="hidden lg:flex w-64 bg-[#111b17] border-r border-white/5 p-7 flex-col">
          <div className="flex gap-3 items-center mb-14">
            <div className="bg-[#c7ff6b] text-[#101a12] rounded-lg p-3"><Activity size={23}/></div>
            <div><h1 className="font-black text-xl tracking-tight">PENNYPILOT</h1><p className="text-[9px] text-gray-500 tracking-[.25em]">FINANCE SYSTEM</p></div>
          </div>
          <p className="text-[10px] uppercase tracking-[.2em] text-gray-500 mb-4">Main menu</p>
          <nav className="space-y-2 text-sm">
            <a href="#overview" className="flex gap-3 items-center bg-[#c7ff6b]/10 text-[#c7ff6b] rounded-xl p-4"><ChartNoAxesCombined size={18}/> Dashboard</a>
            <a href="#transactions" className="flex gap-3 items-center text-gray-400 rounded-xl p-4 hover:bg-white/5"><CreditCard size={18}/> Transactions</a>
            <a href="#analytics" className="flex gap-3 items-center text-gray-400 rounded-xl p-4 hover:bg-white/5"><TrendingUp size={18}/> Analytics</a>
            <a href="#goals" className="flex gap-3 items-center text-gray-400 rounded-xl p-4 hover:bg-white/5"><Target size={18}/> Goals</a>
          </nav>
          <div className="mt-auto border border-white/10 rounded-2xl p-5">
            <CircleDollarSign className="text-[#c7ff6b]" size={25}/>
            <p className="font-bold mt-4">Financial control</p>
            <p className="text-xs text-gray-500 mt-2 leading-5">Monitor your money. Make smarter decisions.</p>
          </div>
        </aside>

        <section className="flex-1 min-w-0 p-5 md:p-9">
          <header className="flex items-center justify-between gap-4 mb-9">
            <div>
              <p className="text-xs uppercase tracking-[.2em] text-[#c7ff6b]">Personal finance / 2026</p>
              <h2 className="text-3xl md:text-4xl font-black mt-3">Money command center<span className="text-[#c7ff6b]">.</span></h2>
              <p className="text-sm text-gray-500 mt-2">Your finances, at a glance.</p>
            </div>
            <div className="flex gap-3">
              <button className="hidden sm:block bg-[#17221d] border border-white/10 rounded-xl p-3"><Bell size={19}/></button>
              <button onClick={()=>setModal(true)} className="hidden sm:flex items-center gap-2 bg-[#c7ff6b] text-[#101a12] rounded-xl px-5 py-3 font-black text-sm"><Plus size={17}/> New entry</button>
              <button onClick={()=>setMenu(!menu)} className="lg:hidden bg-[#17221d] p-3 rounded-xl"><Menu/></button>
            </div>
          </header>

          {menu&&<div className="lg:hidden bg-[#17221d] rounded-xl p-4 mb-5 flex gap-5 flex-wrap text-sm"><a href="#overview">Dashboard</a><a href="#transactions">Transactions</a><a href="#analytics">Analytics</a><a href="#goals">Goals</a></div>}
          {notice&&<div className="bg-[#c7ff6b]/10 border border-[#c7ff6b]/20 text-[#c7ff6b] rounded-xl p-3 mb-5 text-sm">{notice}</div>}

          <section id="overview" className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="xl:col-span-2 bg-[#c7ff6b] text-[#101a12] rounded-2xl p-7 relative overflow-hidden">
              <div className="absolute -right-8 -top-12 w-48 h-48 border-[25px] border-black/5 rounded-full"/>
              <p className="text-sm font-semibold opacity-70">NET AVAILABLE BALANCE</p>
              <h3 className="text-4xl md:text-5xl font-black mt-5">₹{balance.toLocaleString("en-IN")}</h3>
              <p className="text-xs opacity-60 mt-4">Calculated from demo transactions</p>
              <div className="border-t border-black/15 mt-7 pt-5 flex justify-between text-xs font-bold"><span>WALLET OVERVIEW</span><Wallet size={18}/></div>
            </div>

            <div className="bg-[#17221d] border border-white/5 rounded-2xl p-6">
              <div className="flex justify-between"><p className="text-xs tracking-wider text-gray-500">TOTAL INCOME</p><ArrowDownLeft className="text-[#c7ff6b]"/></div>
              <h3 className="text-3xl font-black mt-7">₹{income.toLocaleString("en-IN")}</h3>
              <p className="text-xs text-[#c7ff6b] mt-4">Money received</p>
            </div>

            <div className="bg-[#17221d] border border-white/5 rounded-2xl p-6">
              <div className="flex justify-between"><p className="text-xs tracking-wider text-gray-500">TOTAL SPENDING</p><ArrowUpRight className="text-orange-400"/></div>
              <h3 className="text-3xl font-black mt-7">₹{expense.toLocaleString("en-IN")}</h3>
              <p className="text-xs text-orange-400 mt-4">Money spent</p>
            </div>
          </section>

          <section className="grid xl:grid-cols-[1.4fr_1fr] gap-5 mt-6">
            <div id="analytics" className="bg-[#17221d] border border-white/5 rounded-2xl p-7">
              <div className="flex justify-between items-center"><div><h3 className="font-bold text-lg">Spending breakdown</h3><p className="text-xs text-gray-500 mt-1">Monthly budget utilization</p></div><span className="text-xs text-[#c7ff6b]">NOV 2026</span></div>
              <div className="mt-8 space-y-6">
                {[
                  ["Housing",12000,"#c7ff6b"],
                  ["Food",1850,"#77cdb5"],
                  ["Transport",1500,"#9d91ff"],
                  ["Entertainment",499,"#ffb26e"]
                ].map(([label,value,color])=>(
                  <div key={label as string}>
                    <div className="flex justify-between text-xs mb-2"><span>{label}</span><span className="text-gray-400">₹{Number(value).toLocaleString("en-IN")}</span></div>
                    <div className="h-2 rounded-full bg-[#0b1110] overflow-hidden"><div className="h-full rounded-full" style={{width:`${Number(value)/15000*100}%`,background:color as string}}/></div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-5 border-t border-white/10 flex justify-between text-xs text-gray-500"><span>Monthly spending limit</span><span>₹40,000</span></div>
            </div>

            <div id="goals" className="bg-[#17221d] border border-white/5 rounded-2xl p-7">
              <div className="flex justify-between"><h3 className="font-bold text-lg">Savings target</h3><Target className="text-[#c7ff6b]"/></div>
              <div className="mt-8 flex justify-center">
                <div className="w-44 h-44 rounded-full flex items-center justify-center" style={{background:"conic-gradient(#c7ff6b 0 65%, #29352e 65% 100%)"}}>
                  <div className="w-36 h-36 rounded-full bg-[#17221d] flex flex-col items-center justify-center"><p className="text-4xl font-black">65%</p><p className="text-xs text-gray-500">Completed</p></div>
                </div>
              </div>
              <h4 className="font-bold text-center mt-6">New laptop fund</h4>
              <p className="text-sm text-gray-500 text-center mt-2">₹32,500 / ₹50,000</p>
              <div className="bg-[#c7ff6b]/10 text-[#c7ff6b] text-center rounded-lg p-3 text-xs mt-6">Your target is within reach.</div>
            </div>
          </section>

          <section id="transactions" className="bg-[#17221d] border border-white/5 rounded-2xl p-6 md:p-7 mt-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div><h3 className="font-bold text-lg">Transaction ledger</h3><p className="text-xs text-gray-500 mt-1">Your latest financial activity</p></div>
              <div className="flex gap-2">
                <div className="flex items-center bg-[#0b1110] rounded-lg px-3"><Search size={15} className="text-gray-500"/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search entries" className="bg-transparent outline-none p-2 text-xs w-28"/></div>
                <select value={filter} onChange={e=>setFilter(e.target.value)} className="bg-[#0b1110] rounded-lg px-3 text-xs outline-none"><option>All</option><option>Income</option><option>Expense</option></select>
              </div>
            </div>
            <div className="space-y-1">
              {filtered.map(t=>(
                <div key={t.id} className="flex justify-between items-center gap-3 border-b border-white/5 py-4">
                  <div className="flex gap-3 items-center min-w-0">
                    <div className={`p-3 rounded-xl shrink-0 ${t.type==="income"?"bg-[#c7ff6b]/10 text-[#c7ff6b]":"bg-orange-400/10 text-orange-400"}`}>{t.type==="income"?<ArrowDownLeft size={19}/>:<ShoppingCart size={19}/>}</div>
                    <div className="min-w-0"><p className="text-sm font-bold truncate">{t.name}</p><p className="text-xs text-gray-500 mt-1">{t.category} · {t.date}</p></div>
                  </div>
                  <p className={`text-sm font-bold whitespace-nowrap ${t.type==="income"?"text-[#c7ff6b]":"text-gray-200"}`}>{t.type==="income"?"+":"−"}₹{t.amount.toLocaleString("en-IN")}</p>
                </div>
              ))}
              {filtered.length===0&&<p className="text-gray-500 text-sm py-5">No transactions found.</p>}
            </div>
          </section>

          <footer className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-gray-600"><span className="font-black tracking-widest">PENNYPILOT / FINANCE SYSTEM</span><span>© 2026 PennyPilot · Demo finance platform</span></footer>
        </section>
      </div>

      <button onClick={()=>setModal(true)} className="sm:hidden fixed bottom-5 right-5 bg-[#c7ff6b] text-[#101a12] p-4 rounded-full shadow-xl"><Plus/></button>

      {modal&&<div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
        <div className="bg-[#17221d] border border-white/10 rounded-2xl p-7 max-w-md w-full relative">
          <button onClick={()=>setModal(false)} className="absolute right-5 top-5"><X/></button>
          <p className="text-xs tracking-widest text-[#c7ff6b]">FINANCE / NEW ENTRY</p>
          <h3 className="text-2xl font-black mt-3">Record transaction</h3>
          <form onSubmit={addTransaction} className="space-y-4 mt-6">
            <div className="flex gap-2">{["expense","income"].map(v=><button type="button" key={v} onClick={()=>setType(v)} className={`flex-1 p-3 rounded-lg text-sm capitalize font-bold ${type===v?"bg-[#c7ff6b] text-[#101a12]":"bg-[#0b1110] text-gray-400"}`}>{v}</button>)}</div>
            <input required value={name} onChange={e=>setName(e.target.value)} placeholder="Transaction title" className="w-full bg-[#0b1110] border border-white/10 rounded-lg p-3 outline-none"/>
            <input required type="number" min="1" value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Amount in ₹" className="w-full bg-[#0b1110] border border-white/10 rounded-lg p-3 outline-none"/>
            <select value={category} onChange={e=>setCategory(e.target.value)} className="w-full bg-[#0b1110] border border-white/10 rounded-lg p-3 outline-none"><option>Food</option><option>Housing</option><option>Transport</option><option>Entertainment</option><option>Shopping</option><option>Income</option><option>Other</option></select>
            <button className="w-full bg-[#c7ff6b] text-[#101a12] rounded-lg p-4 font-black">Save transaction <Check className="inline ml-2" size={16}/></button>
          </form>
          <p className="text-[10px] text-gray-500 text-center mt-4">Demo only · No bank account or payment service connected.</p>
        </div>
      </div>}
    </main>
  );
}
