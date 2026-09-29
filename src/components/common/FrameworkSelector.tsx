import React from 'react';
import { Zap, Layers, ArrowRight, BarChart3 } from 'lucide-react';
import type { ViewMode } from '../../types/dashboard';

interface FrameworkSelectorProps {
  onSelectFramework: (mode: ViewMode) => void;
  onOpenComparison: () => void;
}

export const FrameworkSelector: React.FC<FrameworkSelectorProps> = ({
  onSelectFramework,
  onOpenComparison,
}) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 antialiased selection:bg-indigo-500 selection:text-white">
      <div className="max-w-3xl w-full flex flex-col items-center text-center">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Select Frontend Engine
        </h1>
        <p className="mt-2 text-sm text-slate-400 max-w-md">
          Choose a styling framework to launch the MA. Product Management Dashboard:
        </p>

        {/* Simplified Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full mt-8">
          {/* Card 1: Tailwind CSS */}
          <button
            type="button"
            onClick={() => onSelectFramework('tailwind')}
            className="group p-6 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-200 text-left flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-0.5 cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Zap size={22} />
              </div>
              <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                Tailwind CSS
              </h2>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Utility-first styling with static compilation and zero runtime JS.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
              <span>Launch Tailwind</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* Card 2: Material UI */}
          <button
            type="button"
            onClick={() => onSelectFramework('mui')}
            className="group p-6 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all duration-200 text-left flex flex-col justify-between hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-0.5 cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Layers size={22} />
              </div>
              <h2 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                Material UI (MUI)
              </h2>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Component-driven architecture with ThemeProvider and styled system.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
              <span>Launch Material UI</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        {/* Discrete Comparison Report Link */}
        <button
          type="button"
          onClick={onOpenComparison}
          className="mt-8 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all"
        >
          <BarChart3 size={14} className="text-slate-400" />
          <span>View 5-Pillar Comparison Report</span>
        </button>
      </div>
    </div>
  );
};
