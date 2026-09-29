import React, { useState } from 'react';
import { Download, Plus } from 'lucide-react';
import type { ProductStatusFilter, ViewMode } from '../../types/dashboard';
import { mockProducts, mockProductStats } from '../../data/dashboardData';
import { TailwindSidebar } from './TailwindSidebar';
import { TailwindHeader } from './TailwindHeader';
import { TailwindStatCards } from './TailwindStatCards';
import { TailwindProductTable } from './TailwindProductTable';
import { ViewSwitcher } from '../common/ViewSwitcher';

interface TailwindDashboardProps {
  currentView: ViewMode;
  onSelectView: (view: ViewMode) => void;
  onOpenComparison: () => void;
}

export const TailwindDashboard: React.FC<TailwindDashboardProps> = ({
  currentView,
  onSelectView,
  onOpenComparison,
}) => {
  const [activeNav, setActiveNav] = useState('products');
  const [statusFilter, setStatusFilter] = useState<ProductStatusFilter>('all');
  const [selectedSkus, setSelectedSkus] = useState<Set<string>>(
    new Set(['PROD-001', 'PROD-003', 'PROD-004'])
  );
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = mockProducts.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.id.toLowerCase().includes(searchQuery.toLowerCase());
    if (statusFilter === 'all') return matchesSearch;
    if (statusFilter === 'active') return matchesSearch && p.status === 'published';
    if (statusFilter === 'drafts') return matchesSearch && p.status === 'draft';
    if (statusFilter === 'archived') return matchesSearch && p.status === 'inactive';
    return matchesSearch;
  });

  const toggleSelect = (sku: string) => {
    setSelectedSkus((prev) => {
      const next = new Set(prev);
      if (next.has(sku)) next.delete(sku);
      else next.add(sku);
      return next;
    });
  };

  const toggleAll = () => {
    if (selectedSkus.size === filteredProducts.length) {
      setSelectedSkus(new Set());
    } else {
      setSelectedSkus(new Set(filteredProducts.map((p) => p.sku)));
    }
  };

  return (
    <div className="min-h-screen flex bg-white font-sans antialiased text-gray-800">
      {/* Sidebar Component */}
      <TailwindSidebar activeNav={activeNav} onSelectNav={setActiveNav} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-white">
        {/* Header Component */}
        <TailwindHeader />

        {/* Page Content */}
        <main className="p-6 flex-1 flex flex-col gap-5 bg-white overflow-y-auto">
          {/* Products Title & Action Buttons */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Products</h1>
              <p className="text-xs text-gray-500 mt-0.5">
                Manage inventory, pricing and availability across your store
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#d0d5dd] rounded-xl text-xs font-semibold text-gray-700 shadow-2xs hover:bg-gray-50 transition-colors"
              >
                <Download size={13} />
                Export
              </button>
              <button
                type="button"
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#635bff] hover:bg-[#5349e8] text-white rounded-xl text-xs font-semibold shadow-2xs transition-colors"
              >
                <Plus size={14} />
                Add product
              </button>
            </div>
          </div>

          {/* Stat Cards Component */}
          <TailwindStatCards stats={mockProductStats} />

          {/* Product Table Component */}
          <TailwindProductTable
            products={filteredProducts}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
            selectedSkus={selectedSkus}
            onToggleSelect={toggleSelect}
            onToggleAll={toggleAll}
            onClearSelection={() => setSelectedSkus(new Set())}
          />
        </main>
      </div>

      {/* Floating View Switcher */}
      <ViewSwitcher
        currentView={currentView}
        onSelectView={onSelectView}
        onOpenComparison={onOpenComparison}
      />
    </div>
  );
};
