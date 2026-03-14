import React from 'react';

export default function ChinaOct({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex-1 pb-24 bg-white dark:bg-background-dark">
      <div className="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between border-b border-slate-100 dark:border-slate-800">
        <button onClick={onBack} className="text-slate-900 dark:text-slate-100 flex size-12 shrink-0 items-center justify-start">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex flex-col items-center flex-1">
          <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">October 2026</h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">二零二六年十月</p>
        </div>
        <div className="flex w-12 items-center justify-end">
          <button className="flex items-center justify-center rounded-lg h-12 bg-transparent text-slate-900 dark:text-slate-100 p-0">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>

      <div className="px-4 py-3">
        <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-slate-200 dark:bg-slate-800 rounded-lg min-h-64 relative" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB2gE16PxWH-Y9iZNTDUaagii19anEupv80Ju7ITktQFhDdv1hezeVeax-golYHJdaMKIxW5bIoKTJ7Owa3Ycy6dW8g_decpuvB_K3KNS4nhOWby-26TfkYuaFBnbuyOJW-9C19KiUL3tG8l00ueNHBAeuXUfuvc-muV6U7MevGqVWmxV5zMqsMBle_M3nTfri8CuoMD2RxGur68dxzlAkOHSfQ9TL5XAq7uWKeapJ9rS0w-pR63QzhiMIdva4HVbQSEzak8ZMePsEq")' }}>
          <div className="flex flex-col p-6">
            <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">Featured Event</p>
            <p className="text-white tracking-tight text-2xl font-bold leading-tight">Golden Week | 十一黄金周</p>
            <p className="text-white/80 text-sm mt-1">Oct 1 - Oct 7, 2026</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 p-4 bg-white dark:bg-background-dark">
        <div className="w-full max-w-sm flex flex-col gap-1">
          <div className="flex items-center p-1 justify-between mb-2">
            <button className="text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full p-2">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <div className="text-center">
              <p className="text-slate-900 dark:text-slate-100 text-base font-bold">October | 十月</p>
            </div>
            <button className="text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full p-2">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
          
          <div className="grid grid-cols-7 mb-2">
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
              <p key={day} className="text-slate-400 text-xs font-bold flex h-10 w-full items-center justify-center">{day}</p>
            ))}
            
            <div className="h-12 w-full"></div><div className="h-12 w-full"></div><div className="h-12 w-full"></div>
            
            {[1, 2, 3, 4, 5, 6, 7].map(day => (
              <button key={day} className="h-12 w-full text-red-500 font-bold relative">
                <div className="flex flex-col size-full items-center justify-center rounded-lg bg-red-50 dark:bg-red-900/20">
                  <span className="text-sm">{day}</span>
                  <span className="text-[10px] opacity-70">{day === 1 ? '国庆' : '休'}</span>
                </div>
              </button>
            ))}
            
            <button className="h-12 w-full text-slate-900 dark:text-slate-100"><div className="flex flex-col size-full items-center justify-center">8</div></button>
            <button className="h-12 w-full text-slate-900 dark:text-slate-100"><div className="flex flex-col size-full items-center justify-center">9</div></button>
            
            {[10, 11].map(day => (
              <button key={day} className="h-12 w-full text-slate-400 font-medium">
                <div className="flex flex-col size-full items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-800">
                  <span className="text-sm">{day}</span>
                  <span className="text-[10px]">班</span>
                </div>
              </button>
            ))}
            
            {[12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map(day => (
              <button key={day} className="h-12 w-full text-slate-900 dark:text-slate-100"><div className="flex size-full items-center justify-center">{day}</div></button>
            ))}
            
            <button className="h-12 w-full text-red-500 font-bold relative">
              <div className="flex flex-col size-full items-center justify-center rounded-lg bg-primary/20">
                <span className="text-sm">25</span>
                <span className="text-[10px] opacity-70">中秋</span>
              </div>
            </button>
            
            {[26, 27, 28, 29, 30, 31].map(day => (
              <button key={day} className="h-12 w-full text-slate-900 dark:text-slate-100"><div className="flex size-full items-center justify-center">{day}</div></button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-2">
        <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight border-l-4 border-primary pl-3 mb-4">
          Public Holidays | 公共假期
        </h3>
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <div className="size-12 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-red-600 dark:text-red-400">flag</span>
            </div>
            <div className="flex-1">
              <p className="font-bold text-slate-900 dark:text-slate-100">National Day | 国庆节</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Oct 1 - Oct 7 (7-day Holiday)</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <div className="size-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">brightness_high</span>
            </div>
            <div className="flex-1">
              <p className="font-bold text-slate-900 dark:text-slate-100">Mid-Autumn Festival | 中秋节</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Oct 25 (Traditional Holiday)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-6">
        <h3 className="text-slate-900 dark:text-slate-100 text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">
          Planning Tips | 出行建议
        </h3>
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          <div className="flex-shrink-0 w-32 p-3 rounded-xl bg-primary/10 border border-primary/20">
            <span className="material-symbols-outlined text-primary mb-2">train</span>
            <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Book Tickets</p>
            <p className="text-[10px] text-slate-500">Early booking recommended</p>
          </div>
          <div className="flex-shrink-0 w-32 p-3 rounded-xl bg-primary/10 border border-primary/20">
            <span className="material-symbols-outlined text-primary mb-2">hotel</span>
            <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Stay Selection</p>
            <p className="text-[10px] text-slate-500">Beijing area peak demand</p>
          </div>
          <div className="flex-shrink-0 w-32 p-3 rounded-xl bg-primary/10 border border-primary/20">
            <span className="material-symbols-outlined text-primary mb-2">cloud</span>
            <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Weather</p>
            <p className="text-[10px] text-slate-500">Cool autumn breeze (15-22&deg;C)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
