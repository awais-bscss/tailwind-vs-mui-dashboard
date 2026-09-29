import React from 'react';
import { Search, Bell } from 'lucide-react';

interface TailwindHeaderProps {
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
}

export const TailwindHeader: React.FC<TailwindHeaderProps> = ({
  searchQuery = '',
  onSearchChange,
}) => {
  return (
    <header className="h-14 border-b border-[#eaecf0] px-6 flex items-center justify-between bg-white shrink-0">
      {/* Left: Search Bar */}
      <div className="relative w-80">
        <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => onSearchChange?.(e.target.value)}
          className="w-full pl-9 pr-4 py-1.5 bg-white border border-[#eaecf0] rounded-xl text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7c3aed]"
        />
      </div>

      {/* Right: Bell, Profile */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Notifications"
          className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Bell size={17} />
        </button>

        <div className="flex items-center gap-2 pl-2">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80"
            alt="MA."
            className="w-8 h-8 rounded-full object-cover border border-gray-200"
          />
          <div className="text-left">
            <div className="text-xs font-semibold text-gray-900 leading-none">MA.</div>
            <div className="text-[10px] text-gray-400 mt-0.5 leading-none">Store owner</div>
          </div>
        </div>
      </div>
    </header>
  );
};
