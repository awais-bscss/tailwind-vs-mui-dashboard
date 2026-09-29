import React from 'react';
import type { ViewMode } from '../../types/dashboard';

interface ViewSwitcherProps {
  currentView: ViewMode;
  onSelectView: (view: ViewMode) => void;
  onOpenComparison: () => void;
}

export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({
  currentView,
  onSelectView,
  onOpenComparison,
}) => {
  const isTailwind = currentView === 'tailwind';

  return (
    <aside
      aria-label="View Mode Switcher"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-slate-900/95 backdrop-blur-md p-1.5 rounded-xl border border-slate-700/90 shadow-2xl text-xs select-none"
    >
      <div className="flex bg-slate-800/90 p-0.5 rounded-lg text-xs font-semibold border border-slate-700/60">
        <button
          type="button"
          onClick={() => onSelectView('tailwind')}
          className={`px-3 py-1 rounded-md text-[11px] transition-all font-semibold ${
            isTailwind
              ? 'bg-cyan-500 text-slate-950 shadow-sm'
              : 'text-slate-400 hover:text-slate-100'
          }`}
        >
          Tailwind
        </button>
        <button
          type="button"
          onClick={() => onSelectView('mui')}
          className={`px-3 py-1 rounded-md text-[11px] transition-all font-semibold ${
            !isTailwind
              ? 'bg-[#7c3aed] text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-100'
          }`}
        >
          MUI
        </button>
      </div>

      <button
        type="button"
        onClick={onOpenComparison}
        className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/80 hover:text-white transition-colors"
      >
        Report
      </button>
    </aside>
  );
};
