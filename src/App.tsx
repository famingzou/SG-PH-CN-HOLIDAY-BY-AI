import React, { useState } from 'react';
import YearlyOverview from './components/YearlyOverview';
import MonthlyView from './components/MonthlyView';
import BottomNav from './components/BottomNav';

export type Region = 'Singapore' | 'Philippines' | 'China' | 'All';

export default function App() {
  const [currentView, setCurrentView] = useState<'yearly' | 'monthly'>('yearly');
  const [selectedRegion, setSelectedRegion] = useState<Region>('All');
  const [selectedMonth, setSelectedMonth] = useState<number>(1);

  const handleMonthSelect = (month: number) => {
    setSelectedMonth(month);
    // Auto-select region based on month for demo purposes
    if (month === 1) setSelectedRegion('Singapore');
    else if (month === 5) setSelectedRegion('Philippines');
    else if (month === 10) setSelectedRegion('China');
    else setSelectedRegion('Singapore'); // Default
    
    setCurrentView('monthly');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased max-w-md mx-auto shadow-2xl overflow-x-hidden">
      {currentView === 'yearly' ? (
        <YearlyOverview onMonthSelect={handleMonthSelect} />
      ) : (
        <MonthlyView 
          region={selectedRegion} 
          month={selectedMonth} 
          onBack={() => setCurrentView('yearly')} 
        />
      )}
      <BottomNav currentView={currentView} onViewChange={setCurrentView} />
    </div>
  );
}
