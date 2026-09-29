import React from 'react';
import type { Product } from '../../types/dashboard';

interface TailwindStatusBadgeProps {
  status: Product['status'];
}

export const TailwindStatusBadge: React.FC<TailwindStatusBadgeProps> = ({ status }) => {
  switch (status) {
    case 'published':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-medium bg-[#ecfdf3] text-[#027a48]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#12b76a]"></span> Published
        </span>
      );
    case 'inactive':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-medium bg-[#fef3f2] text-[#b42318]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f04438]"></span> Inactive
        </span>
      );
    case 'out_stock':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-medium bg-[#fffaeb] text-[#b54708]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f79009]"></span> out Stock
        </span>
      );
    case 'draft':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-medium bg-[#f2f4f7] text-[#344054]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#667085]"></span> Draft
        </span>
      );
  }
};
