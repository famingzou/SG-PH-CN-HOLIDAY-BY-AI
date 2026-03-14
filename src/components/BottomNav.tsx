import React from 'react';

export default function BottomNav({ currentView, onViewChange }: { currentView: string, onViewChange: (v: 'yearly' | 'monthly') => void }) {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pb-6 pt-2 z-50">
      <div className="flex gap-2">
        <button onClick={() => onViewChange('monthly')} className={`flex flex-1 flex-col items-center justify-end gap-1 ${currentView === 'monthly' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}>
          <div className="flex h-8 items-center justify-center">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: currentView === 'monthly' ? "'FILL' 1" : "'FILL' 0" }}>calendar_month</span>
          </div>
          <p className="text-xs font-semibold leading-normal">Calendar</p>
        </button>
        <button onClick={() => onViewChange('yearly')} className={`flex flex-1 flex-col items-center justify-end gap-1 ${currentView === 'yearly' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}>
          <div className="flex h-8 items-center justify-center">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: currentView === 'yearly' ? "'FILL' 1" : "'FILL' 0" }}>public</span>
          </div>
          <p className="text-xs font-medium leading-normal">Regions</p>
        </button>
        <button className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-500 dark:text-slate-400">
          <div className="flex h-8 items-center justify-center">
            <span className="material-symbols-outlined">luggage</span>
          </div>
          <p className="text-xs font-medium leading-normal">Trips</p>
        </button>
        <button className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-500 dark:text-slate-400">
          <div className="flex h-8 items-center justify-center">
            <span className="material-symbols-outlined">person</span>
          </div>
          <p className="text-xs font-medium leading-normal">Profile</p>
        </button>
      </div>
    </div>
  );
}
