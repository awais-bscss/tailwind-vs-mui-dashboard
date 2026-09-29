import React from 'react';
import { Search, Filter, LayoutGrid, List } from 'lucide-react';
import type { ProductStatusFilter } from '../../types/dashboard';

interface TailwindTableToolbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  statusFilter: ProductStatusFilter;
  onStatusFilterChange: (tab: ProductStatusFilter) => void;
  viewType: 'grid' | 'list';
  onViewTypeChange: (type: 'grid' | 'list') => void;
}

export const TailwindTableToolbar: React.FC<TailwindTableToolbarProps> = ({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  viewType,
  onViewTypeChange,
}) => {
  return (
    <div className="flex items-center justify-between gap-4">
      {/* Search Input */}
      <div className="relative w-80">
        <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search by product name or ID"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-9 pr-4 py-1.5 bg-white border border-[#eaecf0] rounded-xl text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#7c3aed]"
        />
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2.5">
        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#eaecf0] rounded-xl text-xs text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Filter size={13} className="text-gray-500" />
          Filter
        </button>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => onViewTypeChange('grid')}
            aria-label="Grid view"
            className={`p-1.5 rounded-xl border border-[#eaecf0] transition-colors ${
              viewType === 'grid' ? 'bg-gray-100 text-gray-800' : 'text-gray-400 hover:bg-gray-50'
            }`}
          >
            <LayoutGrid size={15} />
          </button>
          <button
            type="button"
            onClick={() => onViewTypeChange('list')}
            aria-label="List view"
            className={`p-1.5 rounded-xl border border-[#eaecf0] transition-colors ${
              viewType === 'list' ? 'bg-gray-100 text-gray-800' : 'text-gray-400 hover:bg-gray-50'
            }`}
          >
            <List size={15} />
          </button>
        </div>

        {/* Status Pills */}
        <div className="flex items-center bg-[#f9fafb] p-0.5 rounded-xl border border-[#eaecf0] text-xs font-medium">
          {(['all', 'active', 'drafts', 'archived'] as ProductStatusFilter[]).map((tab) => (
            <button
              type="button"
              key={tab}
              onClick={() => onStatusFilterChange(tab)}
              className={`px-3 py-1 rounded-lg capitalize text-xs transition-all ${
                statusFilter === tab
                  ? 'bg-white text-gray-900 font-semibold shadow-2xs'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {tab === 'all' ? 'All' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
