import React from 'react';
import {
  Home,
  Package,
  Users,
  FileText,
  Landmark,
  BarChart2,
  Megaphone,
  BadgePercent,
  Settings,
  ChevronDown,
  Store,
  Tag,
  ShoppingBag,
  PanelLeft,
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  hasChevron?: boolean;
}

interface TailwindSidebarProps {
  activeNav: string;
  onSelectNav: (id: string) => void;
}

export const TailwindSidebar: React.FC<TailwindSidebarProps> = ({
  activeNav,
  onSelectNav,
}) => {
  const mainNav: NavItem[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'content', label: 'Content', icon: FileText },
    { id: 'finances', label: 'Finances', icon: Landmark },
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    { id: 'marketing', label: 'Marketing', icon: Megaphone, hasChevron: true },
    { id: 'discounts', label: 'Discounts', icon: BadgePercent },
  ];

  const salesChannels = [
    { id: 'online_store', label: 'Online Store', icon: Store },
    { id: 'pos', label: 'Point of Sale', icon: Tag },
    { id: 'shop', label: 'Shop', icon: ShoppingBag },
  ];

  return (
    <aside className="w-56 bg-[#f8f9fa] border-r border-[#eaecf0] flex flex-col justify-between p-3 shrink-0 select-none">
      <div>
        {/* Brand Header */}
        <div className="flex items-center justify-between px-2 py-1 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-[#6941C6] to-[#9E77ED] flex items-center justify-center text-white shadow-xs">
              <svg
                className="w-3.5 h-3.5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-bold text-[13px] text-gray-900 tracking-tight">MA.</span>
            <ChevronDown size={13} className="text-gray-400" />
          </div>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-600 transition-colors p-0.5"
            aria-label="Toggle sidebar panel"
          >
            <PanelLeft size={14} />
          </button>
        </div>

        {/* MAIN Section */}
        <div className="mb-4">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-2.5 mb-1">
            MAIN
          </div>
          <nav className="space-y-0.5">
            {mainNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => onSelectNav(item.id)}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs transition-all ${
                    isActive
                      ? 'bg-white text-gray-900 font-semibold shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] border border-gray-100'
                      : 'text-gray-600 hover:bg-gray-100/60 font-medium'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon size={15} className={isActive ? 'text-gray-900' : 'text-gray-400'} />
                    <span>{item.label}</span>
                  </div>
                  {item.hasChevron && <ChevronDown size={13} className="text-gray-400" />}
                </button>
              );
            })}
          </nav>
        </div>

        {/* SALES CHANNELS Section */}
        <div>
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-2.5 mb-1">
            SALES CHANNELS
          </div>
          <nav className="space-y-0.5">
            {salesChannels.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => onSelectNav(item.id)}
                  className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl text-xs transition-all ${
                    isActive
                      ? 'bg-white text-gray-900 font-semibold shadow-[0_1px_3px_rgba(0,0,0,0.06)]'
                      : 'text-gray-600 hover:bg-gray-100/60 font-medium'
                  }`}
                >
                  <Icon size={15} className={isActive ? 'text-gray-900' : 'text-gray-400'} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Bottom Settings Button */}
      <div className="pt-2 border-t border-gray-200/60">
        <button
          type="button"
          className="w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl text-xs text-gray-600 hover:bg-gray-100/60 font-medium transition-all"
        >
          <Settings size={15} className="text-gray-400" />
          <span>Settings</span>
        </button>
      </div>
    </aside>
  );
};
