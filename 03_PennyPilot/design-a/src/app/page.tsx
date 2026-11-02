
"use client";

import { useState } from "react";
import {
  Wallet, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownLeft,
  Plus, Search, Bell, Home, CreditCard, PieChart, Settings,
  ShoppingBag, Coffee, Car, Heart, X, Check, Menu, Target
} from "lucide-react";

const initialTransactions = [
  { id:1, name:"Salary credited", category:"Income", date:"Today, 9:30 AM", amount:50000, type:"income" },
  { id:2, name:"Grocery shopping", category:"Food", date:"Today, 11:20 AM", amount:1850, type:"expense" },
  { id:3, name:"Monthly rent", category:"Housing", date:"Yesterday", amount:12000, type:"expense" },
  { id:4, name:"Internet bill", category:"Utilities", date:"Yesterday", amount:999, type:"expense" },
  { id:5, name:"Coffee shop", category:"Food", date:"28 Oct 2026", amount:250, type:"expense" },
];

export default function HomePage() {
  const [transactions,setTransactions] = useState(initialTransactions);
  const [filter,setFilter] = useState("All");
  const [search,setSearch] = useState("");
  const [modal,setModal] = useState(false);
  const [menu,setMenu] = useState(false);
  const [name,setName] = useState("");
  const [amount,setAmount] = useState("");
  const [category,setCategory] = useState("Food");
  const [type,setType] = useState("expense");
  const [message,setMessage] = useState("");

  const income = transactions.filter(t=>t.type==="income").reduce((a,t)=>a+t.amount,0);
  const expenses = transactions.filter(t=>t.type==="expense").reduce((a,t)=>a+t.amount,0);
  const balance = income-expenses;

  const filtered = transactions.filter(t=>
    (filter==="All" || t.type===filter.toLowerCase()) &&
    `${t.name} ${t.category}`.toLowerCase().includes(search.toLowerCase())
  );

  const addTransaction = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = Number(amount);
    if(!name.trim() || !value || value<=0) return;
    setTransactions([{id:Date.now(),name,category,date:"Just now",amount:value,type},...transactions]);
    setName("");
    setAmount("");
    setModal(false);
    setMessage("Transaction added successfully.");
    setTimeout(()=>setMessage(""),3000);
  };

  return (
    <main className="min-h-screen bg-[#f7f8fc] text-[#202438]">
      <div className="max-w-[1500px] mx-auto min-h-screen flex">
        <aside className="hidden lg:flex w-64 bg-white border-r border-gray-100 p-7 flex-col">
          <div className="flex items-center gap-3 mb-12">
            <div className="bg-[#6558df] text-white p-3 rounded-xl"><Wallet size={23}/></div>
            <span className="font-black text-xl tracking-tight">PennyPilot</span>
          </div>

          <p className="text-[10px] uppercase tracking-[.2em] text-gray-400 mb-4">Workspace</p>
          <nav className="space-y-2">
            <a href="#overview" className="flex gap-3 items-center bg-[#f0efff] text-[#6558df] rounded-xl px-4 py-3 font-bold text-sm"><Home size={18}/> Overview</a>
            <a href="#transactions" className="flex gap-3 items-center text-gray-500 hover:bg-gray-50 rounded-xl px-4 py-3 text-sm"><CreditCard size={18}/> Transactions</a>
            <a href="#budgets" className="flex gap-3 items-center text-gray-500 hover:bg-gray-50 rounded-xl px-4 py-3 text-sm"><PieChart size={18}/> Budgets</a>
            <a href="#goals" className="flex gap-3 items-center text-gray-500 hover:bg-gray-50 rounded-xl px-4 py-3 text-sm"><Target size={18}/> Savings goals</a>
          </nav>

          <div className="mt-auto bg-[#f4f2ff] rounded-2xl p-5">
            <div className="bg-white p-2 rounded-lg w-fit text-[#6558df]"><Target size={20}/></div>
            <h3 className="font-bold mt-4">Save more every month</h3>
            <p className="text-xs text-gray-500 mt-2 leading-5">Small steps today make a stronger financial future.</p>
            <a href="#goals" className="text-[#6558df] text-xs font-bold mt-4 inline-block">Explore goals →</a>
          </div>
        </aside>

        <section className="flex-1 min-w-0 p-5 md:p-9">
          <header className="flex justify-between items-center mb-9">
            <div>
              <p className="text-xs text-gray-400">MONDAY, 02 NOVEMBER 2026</p>
              <h1 className="text-2xl md:text-3xl font-black mt-2">Good afternoon! 👋</h1>
              <p className="text-sm text-gray-400 mt-1">Here's your financial overview.</p>
            </div>
            <div className="flex gap-3 items-center">
              <button className="bg-white p-3 rounded-xl border border-gray-100 relative"><Bell size={19}/><span className="absolute top-2 right-2 w-2 h-2 bg-red-400 rounded-full"/></button>
              <button onClick={()=>setModal(true)} className="bg-[#6558df] text-white px-5 py-3 rounded-xl font-bold text-sm hidden sm:flex items-center gap-2"><Plus size={17}/> Add transaction</button>
              <button onClick={()=>setMenu(!menu)} className="lg:hidden bg-white p-3 rounded-xl"><Menu/></button>
            </div>
          </header>

          {menu && <div className="lg:hidden bg-white rounded-xl p-4 mb-5 flex flex-wrap gap-4 text-sm"><a href="#overview">Overview</a><a href="#transactions">Transactions</a><a href="#budgets">Budgets</a><a href="#goals">Goals</a></div>}

          {message && <div className="bg-green-100 text-green-700 rounded-xl p-3 mb-5 text-sm">{message}</div>}

          <div id="overview" className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            <div className="bg-[#6558df] text-white rounded-3xl p-7 sm:col-span-2 xl:col-span-1">
              <p className="text-sm text-white/70">Total available balance</p>
              <h2 className="text-4xl font-black mt-4">₹{balance.toLocaleString("en-IN")}</h2>
              <div className="flex items-center gap-2 mt-5 text-sm text-white/80"><Wallet size={17}/> Your demo wallet balance</div>
              <div className="mt-8 pt-5 border-t border-white/20 flex justify-between text-xs"><span>Account overview</span><ArrowUpRight size={17}/></div>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-gray-100">
              <div className="flex justify-between"><span className="text-sm text-gray-500">Total income</span><div className="bg-green-50 text-green-600 p-2 rounded-xl"><TrendingUp size={19}/></div></div>
              <h2 className="text-3xl font-black mt-5">₹{income.toLocaleString("en-IN")}</h2>
              <p className="text-xs text-green-600 mt-4">↑ Money received</p>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-gray-100">
              <div className="flex justify-between"><span className="text-sm text-gray-500">Total expenses</span><div className="bg-orange-50 text-orange-500 p-2 rounded-xl"><TrendingDown size={19}/></div></div>
              <h2 className="text-3xl font-black mt-5">₹{expenses.toLocaleString("en-IN")}</h2>
              <p className="text-xs text-orange-500 mt-4">↓ Money spent</p>
            </div>
          </div>

          <div className="grid xl:grid-cols-[1.5fr_1fr] gap-5 mt-7">
            <section id="budgets" className="bg-white rounded-3xl border border-gray-100 p-7">
              <div className="flex justify-between items-center">
                <div><h2 className="font-black text-lg">Monthly budget</h2><p className="text-xs text-gray-400 mt-1">Your spending progress</p></div>
                <span className="bg-[#f0efff] text-[#6558df] rounded-lg px-3 py-2 text-xs font-bold">November</span>
              </div>

              <div className="mt-8 flex items-end justify-between">
                <div><p className="text-xs text-gray-400">Spent so far</p><p className="text-3xl font-black mt-2">₹{expenses.toLocaleString("en-IN")}</p></div>
                <p className="text-sm text-gray-400">of ₹40,000</p>
              </div>
              <div className="h-3 bg-gray-100 rounded-full mt-5 overflow-hidden"><div className="h-full bg-[#6558df] rounded-full" style={{width:`${Math.min(expenses/40000*100,100)}%`}}/></div>
              <p className="text-xs text-gray-400 mt-3">{Math.max(0,40000-expenses).toLocaleString("en-IN")} budget remaining</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                {[["Food","₹2,100","#ffb36b"],["Housing","₹12,000","#8c83ef"],["Utilities","₹999","#5fc6b0"]].map(([label,value,color])=>(
                  <div key={label} className="bg-[#f8f8fc] p-4 rounded-xl">
                    <div className="w-2 h-2 rounded-full" style={{background:color}}/>
                    <p className="text-xs text-gray-400 mt-3">{label}</p>
                    <p className="font-bold mt-1">{value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="goals" className="bg-white rounded-3xl border border-gray-100 p-7">
              <div className="flex justify-between items-center"><h2 className="font-black text-lg">Savings goal</h2><Target className="text-[#6558df]"/></div>
              <div className="mt-7 flex justify-center"><div className="w-40 h-40 rounded-full border-[12px] border-[#eeecff] border-t-[#6558df] border-r-[#6558df] flex flex-col items-center justify-center"><p className="text-3xl font-black">65%</p><p className="text-xs text-gray-400">completed</p></div></div>
              <h3 className="font-bold text-center mt-6">New laptop fund</h3>
              <p className="text-sm text-gray-400 text-center mt-2">₹32,500 of ₹50,000</p>
              <div className="bg-[#f4f2ff] text-[#6558df] text-center rounded-xl p-3 text-xs font-bold mt-6">Keep going! You're doing great.</div>
            </section>
          </div>

          <section id="transactions" className="bg-white rounded-3xl border border-gray-100 p-6 md:p-7 mt-7">
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
              <div><h2 className="font-black text-lg">Recent transactions</h2><p className="text-xs text-gray-400 mt-1">Track your latest money activity</p></div>
              <div className="flex gap-2">
                <div className="flex items-center bg-[#f8f8fc] rounded-lg px-3"><Search size={15} className="text-gray-400"/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search" className="bg-transparent outline-none w-24 p-2 text-xs"/></div>
                <select value={filter} onChange={e=>setFilter(e.target.value)} className="bg-[#f8f8fc] rounded-lg px-3 text-xs outline-none"><option>All</option><option>Income</option><option>Expense</option></select>
              </div>
            </div>

            <div className="space-y-1">
              {filtered.map(t=>(
                <div key={t.id} className="flex items-center justify-between gap-3 py-4 border-b border-gray-50">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-3 rounded-xl shrink-0 ${t.type==="income"?"bg-green-50 text-green-600":"bg-orange-50 text-orange-500"}`}>{t.type==="income"?<ArrowDownLeft size={19}/>:<ShoppingBag size={19}/>}</div>
                    <div className="min-w-0"><p className="font-bold text-sm truncate">{t.name}</p><p className="text-xs text-gray-400 mt-1">{t.category} · {t.date}</p></div>
                  </div>
                  <p className={`font-bold text-sm whitespace-nowrap ${t.type==="income"?"text-green-600":"text-[#202438]"}`}>{t.type==="income"?"+":"−"}₹{t.amount.toLocaleString("en-IN")}</p>
                </div>
              ))}
              {filtered.length===0 && <p className="text-gray-400 text-sm py-6">No transactions found.</p>}
            </div>
          </section>

          <button onClick={()=>setModal(true)} className="sm:hidden fixed bottom-5 right-5 bg-[#6558df] text-white rounded-full p-4 shadow-xl"><Plus/></button>
        </section>
      </div>

      {modal && <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
        <div className="bg-white text-[#202438] rounded-3xl p-7 max-w-md w-full relative">
          <button onClick={()=>setModal(false)} className="absolute right-5 top-5"><X/></button>
          <h2 className="text-2xl font-black">Add transaction</h2>
          <p className="text-xs text-gray-400 mt-2">Update your demo wallet activity.</p>
          <form onSubmit={addTransaction} className="space-y-4 mt-6">
            <div className="flex gap-2">{["expense","income"].map(v=><button type="button" key={v} onClick={()=>setType(v)} className={`flex-1 p-3 rounded-xl capitalize text-sm font-bold ${type===v?"bg-[#6558df] text-white":"bg-gray-100"}`}>{v}</button>)}</div>
            <input required value={name} onChange={e=>setName(e.target.value)} placeholder="Transaction name" className="w-full border border-gray-200 rounded-xl p-3 outline-none"/>
            <input required type="number" min="1" value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Amount in ₹" className="w-full border border-gray-200 rounded-xl p-3 outline-none"/>
            <select value={category} onChange={e=>setCategory(e.target.value)} className="w-full border border-gray-200 rounded-xl p-3 outline-none"><option>Food</option><option>Housing</option><option>Utilities</option><option>Transport</option><option>Shopping</option><option>Income</option><option>Other</option></select>
            <button className="w-full bg-[#6558df] text-white p-4 rounded-xl font-bold">Save transaction <Check className="inline ml-2" size={16}/></button>
          </form>
          <p className="text-[10px] text-gray-400 text-center mt-4">Demo only · No bank account is connected.</p>
        </div>
      </div>}
    </main>
  );
}
