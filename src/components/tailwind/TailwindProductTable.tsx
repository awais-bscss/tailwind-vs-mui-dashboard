import React, { useState } from 'react';
import type { Product, ProductStatusFilter } from '../../types/dashboard';
import { TailwindTableToolbar } from './TailwindTableToolbar';
import { TailwindStatusBadge } from './TailwindStatusBadge';
import { TailwindBulkActionBar } from './TailwindBulkActionBar';

interface TailwindProductTableProps {
  products: Product[];
  searchQuery: string;
  onSearchChange: (q: string) => void;
  statusFilter: ProductStatusFilter;
  onStatusFilterChange: (tab: ProductStatusFilter) => void;
  selectedSkus: Set<string>;
  onToggleSelect: (sku: string) => void;
  onToggleAll: () => void;
  onClearSelection: () => void;
}

export const TailwindProductTable: React.FC<TailwindProductTableProps> = ({
  products,
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  selectedSkus,
  onToggleSelect,
  onToggleAll,
  onClearSelection,
}) => {
  const [viewType, setViewType] = useState<'grid' | 'list'>('list');
  const isAllSelected = selectedSkus.size === products.length && products.length > 0;

  return (
    <div className="flex flex-col gap-4">
      {/* 1. Filter Toolbar */}
      <TailwindTableToolbar
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        statusFilter={statusFilter}
        onStatusFilterChange={onStatusFilterChange}
        viewType={viewType}
        onViewTypeChange={setViewType}
      />

      {/* 2. Table Container */}
      <div className="relative border border-[#eaecf0] rounded-2xl overflow-hidden shadow-2xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#eaecf0] bg-white text-[11px] font-medium text-gray-500">
              <th className="py-3 px-4 w-10">
                <input
                  type="checkbox"
                  aria-label="Select all products"
                  checked={isAllSelected}
                  onChange={onToggleAll}
                  className="w-4 h-4 rounded border-gray-300 accent-[#635bff] cursor-pointer"
                />
              </th>
              <th className="py-3 px-4">Product Name</th>
              <th className="py-3 px-4">ID & Create Date</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Stock</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f2f4f7] bg-white text-xs">
            {products.map((product) => {
              const isSelected = selectedSkus.has(product.sku);
              return (
                <tr
                  key={product.sku}
                  className={`hover:bg-[#fcfcfd] transition-colors ${
                    isSelected ? 'bg-purple-50/20' : ''
                  }`}
                >
                  <td className="py-3 px-4">
                    <input
                      type="checkbox"
                      aria-label={`Select ${product.name}`}
                      checked={isSelected}
                      onChange={() => onToggleSelect(product.sku)}
                      className="w-4 h-4 rounded border-gray-300 accent-[#635bff] cursor-pointer"
                    />
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-9 h-9 rounded-lg object-cover bg-gray-50 border border-gray-200/80"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{product.name}</div>
                        <div className="text-[11px] text-gray-400 mt-0.5">{product.category}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{product.id}</div>
                    <div className="text-[11px] text-gray-400 mt-0.5">{product.createdDate}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-semibold text-gray-900">
                      ${product.price.toLocaleString()}.00
                    </div>
                    <div className="text-[11px] text-gray-400 mt-0.5">
                      Sell Price${product.sellPrice.toLocaleString()}.00
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-700 font-medium">
                    {product.stock.toLocaleString()}
                  </td>
                  <td className="py-3 px-4">
                    <TailwindStatusBadge status={product.status} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* 3. Floating Bulk Action Bar */}
        <TailwindBulkActionBar
          selectedCount={selectedSkus.size}
          onClearSelection={onClearSelection}
        />
      </div>
    </div>
  );
};
