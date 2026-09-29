import React from 'react';
import { Download, Edit2, Trash2, X } from 'lucide-react';

interface TailwindBulkActionBarProps {
  selectedCount: number;
  onClearSelection: () => void;
}

export const TailwindBulkActionBar: React.FC<TailwindBulkActionBarProps> = ({
  selectedCount,
  onClearSelection,
}) => {
  if (selectedCount === 0) return null;

  return (
    <aside
      aria-label="Bulk actions toolbar"
      className="fixed bottom-6 left-1/2 md:left-[calc(50%+7rem)] -translate-x-1/2 z-40 transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="bg-white border border-[#eaecf0] rounded-2xl shadow-[0_20px_35px_-5px_rgba(0,0,0,0.22),0_10px_10px_-5px_rgba(0,0,0,0.06)] px-5 py-2.5 flex items-center gap-3.5 text-xs select-none">
        <span className="font-bold text-gray-900 pr-1">{selectedCount} Selected</span>
        <div className="w-px h-4 bg-gray-200"></div>
        <button
          type="button"
          className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 font-semibold px-2 py-1 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Download size={13} className="text-gray-500" />
          Export
        </button>
        <button
          type="button"
          className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900 font-semibold px-2 py-1 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Edit2 size={13} className="text-gray-500" />
          Edit Info
        </button>
        <button
          type="button"
          className="flex items-center gap-1.5 text-gray-700 hover:text-red-600 font-semibold px-2 py-1 rounded-lg hover:bg-red-50 transition-colors"
        >
          <Trash2 size={13} className="text-gray-500" />
          Delete
        </button>
        <button
          type="button"
          onClick={onClearSelection}
          className="text-gray-400 hover:text-gray-600 p-1 ml-1 transition-colors"
          title="Deselect all"
          aria-label="Clear selection"
        >
          <X size={14} />
        </button>
      </div>
    </aside>
  );
};
