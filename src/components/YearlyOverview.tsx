import React from 'react';

export default function YearlyOverview({ onMonthSelect }: { onMonthSelect: (m: number) => void }) {
  const months = [
    { num: 1, name: 'January', cn: '一月' },
    { num: 2, name: 'February', cn: '二月' },
    { num: 3, name: 'March', cn: '三月' },
    { num: 4, name: 'April', cn: '四月' },
    { num: 5, name: 'May', cn: '五月' },
    { num: 6, name: 'June', cn: '六月' },
    { num: 7, name: 'July', cn: '七月' },
    { num: 8, name: 'August', cn: '八月' },
    { num: 9, name: 'September', cn: '九月' },
    { num: 10, name: 'October', cn: '十月' },
    { num: 11, name: 'November', cn: '十一月' },
    { num: 12, name: 'December', cn: '十二月' },
  ];

  return (
    <div className="flex-1 pb-24">
      <header className="sticky top-0 z-10 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-primary/10">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <span className="material-symbols-outlined">menu</span>
        </div>
        <div className="text-center">
          <h1 className="text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100">2026 Calendar</h1>
          <p className="text-xs font-medium text-primary uppercase tracking-widest">2026年历</p>
        </div>
        <div className="flex size-10 items-center justify-end">
          <button className="flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">language</span>
          </button>
        </div>
      </header>

      <div className="relative px-4 pt-6 pb-2">
        <div className="relative overflow-hidden rounded-xl bg-slate-900 aspect-[21/9] flex items-center justify-center shadow-lg">
          <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('https://placeholder.pics/svg/300')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          <div className="relative z-10 text-center px-4">
            <div className="flex justify-center gap-4 mb-2">
              <span className="px-2 py-1 rounded bg-primary/20 backdrop-blur-md text-[10px] font-bold text-primary border border-primary/30 uppercase tracking-tighter">Singapore</span>
              <span className="px-2 py-1 rounded bg-primary/20 backdrop-blur-md text-[10px] font-bold text-primary border border-primary/30 uppercase tracking-tighter">Philippines</span>
              <span className="px-2 py-1 rounded bg-primary/20 backdrop-blur-md text-[10px] font-bold text-primary border border-primary/30 uppercase tracking-tighter">China</span>
            </div>
            <p className="text-white text-sm font-light italic">Regional Holiday Overview | 区域假期概览</p>
          </div>
        </div>
      </div>

      <div className="px-4 pt-6 pb-2">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          Yearly Overview <span className="text-slate-400 font-normal mx-2">|</span> <span className="text-primary font-medium">年度概览</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 p-4">
        {months.map((m) => (
          <div 
            key={m.num}
            onClick={() => onMonthSelect(m.num)}
            className="cursor-pointer group relative overflow-hidden rounded-lg border border-primary/10 bg-white dark:bg-slate-800/50 p-4 transition-all hover:border-primary/40 hover:shadow-md aspect-square flex flex-col justify-between"
          >
            {m.num === 1 && (
              <div className="absolute -right-2 -top-2 opacity-5 text-slate-900 dark:text-white">
                <span className="material-symbols-outlined text-6xl">explore</span>
              </div>
            )}
            <div>
              <p className="text-2xl font-black text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors">
                {m.num.toString().padStart(2, '0')}
              </p>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{m.name}</p>
            </div>
            <p className="text-sm font-medium text-primary">{m.cn}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
