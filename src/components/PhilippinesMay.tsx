import React from 'react';

export default function PhilippinesMay({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex-1 pb-24 bg-background-light dark:bg-background-dark">
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-b-3xl shadow-lg">
        <img alt="Beautiful beach in El Nido, Philippines" className="absolute inset-0 w-full h-full object-cover z-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy6pse9X4564aTQcDmMBi9HsgCSTzRbgjm5KwmJ7wKy84HC0CRG6gPZ0xP7qrmSkbQPDHCdQFk5BJQ25w-jaqsuhkor3x9lz0CxW7pKcjF0rK2AA9NikbDuefKqbrbQ9bXQu5OBthiq8fZ7hV7GxmpFYgJNYZfUliLgZojW0KnBrgwq1WzXcTsMKYMcI84zpcyyGointGkfe1RMn80uB9fKRmmSiuif1oiqaEbkQ6N1XHHAIVhZPEjrYYVTkTwDXFOJORlBoEInmzB" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10"></div>
        <button onClick={onBack} className="absolute top-4 left-4 z-30 text-white p-2 bg-black/20 rounded-full backdrop-blur-sm">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-end pb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-primary font-medium tracking-wider uppercase text-sm md:text-base mb-1">Philippines / 菲律宾</h2>
              <h1 className="text-white text-5xl md:text-7xl font-bold mb-2">2026</h1>
            </div>
            <div className="text-right">
              <h2 className="text-white text-3xl md:text-5xl font-semibold">May / 5月</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        <div className="flex items-center justify-between mb-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm">
          <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-300">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">May 2026 <span className="text-slate-500 dark:text-slate-400 text-base font-normal ml-2">5月</span></h3>
          </div>
          <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-300">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md overflow-hidden border border-slate-200 dark:border-slate-700">
          <div className="grid grid-cols-7 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
            <div className="py-3 text-center border-r border-slate-200 dark:border-slate-700 text-red-500 font-medium">
              <div className="text-sm">Sun</div>
              <div className="text-[10px] text-red-400 mt-0.5">日</div>
            </div>
            <div className="py-3 text-center border-r border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">
              <div className="text-sm">Mon</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">一</div>
            </div>
            <div className="py-3 text-center border-r border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">
              <div className="text-sm">Tue</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">二</div>
            </div>
            <div className="py-3 text-center border-r border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">
              <div className="text-sm">Wed</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">三</div>
            </div>
            <div className="py-3 text-center border-r border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">
              <div className="text-sm">Thu</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">四</div>
            </div>
            <div className="py-3 text-center border-r border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">
              <div className="text-sm">Fri</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">五</div>
            </div>
            <div className="py-3 text-center text-slate-700 dark:text-slate-300 font-medium">
              <div className="text-sm">Sat</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">六</div>
            </div>
          </div>

          <div className="grid grid-cols-7 auto-rows-[minmax(80px,auto)] bg-slate-200 dark:bg-slate-700 gap-px">
            {/* Empty slots */}
            {[...Array(5)].map((_, i) => <div key={`empty-${i}`} className="bg-slate-50 dark:bg-slate-800/80 p-2 opacity-50"></div>)}
            
            {/* Day 1 */}
            <div className="bg-primary/10 dark:bg-primary/20 p-2 flex flex-col relative group transition-colors hover:bg-primary/20 dark:hover:bg-primary/30 cursor-pointer">
              <div className="flex justify-between items-start">
                <span className="text-lg font-semibold text-primary">1</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">十五</span>
              </div>
              <div className="mt-auto pt-1">
                <div className="text-[10px] font-medium text-primary bg-primary/10 px-1 py-0.5 rounded truncate">Labor Day</div>
                <div className="text-[8px] text-primary mt-0.5 truncate">劳动节</div>
              </div>
            </div>
            
            {/* Day 2 */}
            <div className="bg-white dark:bg-slate-800 p-2 flex flex-col group transition-colors hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer">
              <div className="flex justify-between items-start">
                <span className="text-lg font-medium text-slate-700 dark:text-slate-300">2</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">十六</span>
              </div>
            </div>

            {/* Days 3-31 */}
            {[...Array(29)].map((_, i) => {
              const day = i + 3;
              const isSunday = (day + 5) % 7 === 0;
              const lunar = ['十七', '十八', '十九', '二十', '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十', '初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十', '十一', '十二', '十三', '十四', '十五'][i];
              
              return (
                <div key={day} className="bg-white dark:bg-slate-800 p-2 flex flex-col group transition-colors hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer">
                  <div className="flex justify-between items-start">
                    <span className={`text-lg font-medium ${isSunday ? 'text-red-500' : 'text-slate-700 dark:text-slate-300'}`}>{day}</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">{lunar}</span>
                  </div>
                </div>
              );
            })}
            
            {/* Empty slots end */}
            {[...Array(6)].map((_, i) => <div key={`empty-end-${i}`} className="bg-slate-50 dark:bg-slate-800/80 p-2 opacity-50"></div>)}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4">
          <div className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center">
              <span className="material-symbols-outlined text-primary mr-2">info</span>
              Holidays & Observances / 节假日
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">May 1 - Labor Day</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">5月1日 - 劳动节</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-1.5 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Note: Independence Day is in June (June 12)</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">注：独立日为6月12日</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-primary/5 dark:bg-primary/10 p-5 rounded-xl border border-primary/20 dark:border-primary/30 flex items-center justify-center">
            <div className="text-center">
              <span className="material-symbols-outlined text-3xl text-primary/60 mb-2">flight_takeoff</span>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xs mx-auto">Plan your perfect getaway to the beautiful islands of the Philippines.</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">计划去美丽的菲律宾群岛度假吧。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
