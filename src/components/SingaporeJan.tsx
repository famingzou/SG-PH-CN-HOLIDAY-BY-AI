import React from 'react';

export default function SingaporeJan({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex-1 pb-24 bg-background-light dark:bg-background-dark">
      <div className="flex items-center bg-white dark:bg-slate-900 p-4 border-b border-slate-200 dark:border-slate-800 justify-between sticky top-0 z-10">
        <button onClick={onBack} className="text-primary flex size-10 items-center justify-center">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">January 2026</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">二零二六年一月</p>
        </div>
        <div className="flex w-10 items-center justify-end">
          <button className="text-slate-600 dark:text-slate-300">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-64 shadow-lg relative group" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBEq2ExMDRAQwRnSmlX7xzCt5NwvE6-PW-126DzJMiqlrRwVMhgqnWQG234e9wyR7U_HI4V61C1V_bsvDpPRZA0-p8kriJNK44YYgbbsZ2W6WRpv_9PxQIVrRu6kLkwN9hYBT2sUW6F7x9PGF63baENmIhP2zEFIZgdzpAV4ruLyLhvUJFT3OFiiy7DVulpg1gkvM56UX2Hlzfp9uUhFq0NvhdqnXpCwCdMPiqX8PcsDOvCQZxSyQqqWdDtxkCgZwHLElZPzN9pQ9Ow")' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          <div className="relative p-6">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Singapore</span>
            <h1 className="text-white text-3xl font-bold mt-2">Welcome to 2026</h1>
            <p className="text-white/80 text-sm">Explore the Year of the Fire Horse</p>
          </div>
        </div>
      </div>

      <div className="px-4 pb-6">
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-4">
          <div className="flex items-center justify-between mb-6">
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">chevron_left</span>
            </button>
            <div className="text-center">
              <p className="text-slate-900 dark:text-slate-100 text-base font-bold">January 2026</p>
            </div>
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">chevron_right</span>
            </button>
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
              <div key={day} className="text-slate-400 text-xs font-bold text-center py-2">{day}</div>
            ))}
            
            <div className="h-12"></div><div className="h-12"></div><div className="h-12"></div><div className="h-12"></div>
            
            <button className="relative h-12 w-full flex flex-col items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
              <span className="text-sm font-bold text-primary">1</span>
              <div className="absolute bottom-1.5 size-1 rounded-full bg-primary"></div>
            </button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">2</button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">3</button>
            
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium text-red-500">4</button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg bg-primary text-white text-sm font-bold shadow-md shadow-primary/30">5</button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">6</button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">7</button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">8</button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">9</button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">10</button>
            
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium text-red-500">11</button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">12</button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">13</button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">14</button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">15</button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">16</button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10 text-sm font-medium">17</button>
            
            <button className="relative h-12 w-full flex flex-col items-center justify-center rounded-lg border border-red-300 dark:border-red-800 bg-red-100 dark:bg-red-900/20">
              <span className="text-sm font-bold text-red-600 dark:text-red-400">18</span>
              <div className="absolute bottom-1.5 size-1 rounded-full bg-red-500"></div>
            </button>
            <button className="relative h-12 w-full flex flex-col items-center justify-center rounded-lg border border-red-300 dark:border-red-800 bg-red-100 dark:bg-red-900/20">
              <span className="text-sm font-bold text-red-600 dark:text-red-400">19</span>
              <div className="absolute bottom-1.5 size-1 rounded-full bg-red-500"></div>
            </button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">20</button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">21</button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">22</button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">23</button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">24</button>
            
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium text-red-500">25</button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">26</button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">27</button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">28</button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">29</button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">30</button>
            <button className="h-12 w-full flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium">31</button>
          </div>
        </div>
      </div>

      <div className="px-4 pb-6">
        <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight mb-4 flex items-center gap-2">
          Public Holidays / 公共假期
          <span className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded-full uppercase">Singapore</span>
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex flex-col items-center justify-center size-12 rounded-lg bg-primary/10 text-primary shrink-0">
              <span className="text-xs font-bold uppercase">Jan</span>
              <span className="text-lg font-bold">01</span>
            </div>
            <div className="flex-1">
              <h4 className="text-slate-900 dark:text-slate-100 font-bold text-sm">New Year's Day</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs">元旦</p>
            </div>
            <div className="text-slate-400">
              <span className="material-symbols-outlined">event_available</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex flex-col items-center justify-center size-12 rounded-lg bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 shrink-0">
              <span className="text-xs font-bold uppercase">Jan</span>
              <span className="text-lg font-bold">18</span>
            </div>
            <div className="flex-1">
              <h4 className="text-slate-900 dark:text-slate-100 font-bold text-sm">Chinese New Year</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs">农历新年</p>
            </div>
            <div className="text-slate-400">
              <span className="material-symbols-outlined text-red-500">celebration</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex flex-col items-center justify-center size-12 rounded-lg bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 shrink-0">
              <span className="text-xs font-bold uppercase">Jan</span>
              <span className="text-lg font-bold">19</span>
            </div>
            <div className="flex-1">
              <h4 className="text-slate-900 dark:text-slate-100 font-bold text-sm">Chinese New Year (Day 2)</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs">农历新年 (第二天)</p>
            </div>
            <div className="text-slate-400">
              <span className="material-symbols-outlined text-red-500">celebration</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
