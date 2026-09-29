import React from 'react';
import {
  Package,
  DollarSign,
  ShoppingCart,
  Users,
  MoreVertical,
  ArrowUp,
  ArrowDown,
} from 'lucide-react';
import type { StatItem } from '../../types/dashboard';

interface TailwindStatCardsProps {
  stats: StatItem[];
}

export const TailwindStatCards: React.FC<TailwindStatCardsProps> = ({ stats }) => {
  const getIcon = (type: StatItem['iconType']) => {
    switch (type) {
      case 'box':
        return <Package size={14} className="text-gray-400" />;
      case 'dollar':
        return <DollarSign size={14} className="text-gray-400" />;
      case 'cart':
        return <ShoppingCart size={14} className="text-gray-400" />;
      case 'users':
        return <Users size={14} className="text-gray-400" />;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const isPositive = stat.change >= 0;
        return (
          <div
            key={stat.id}
            className="bg-white rounded-2xl border border-[#eaecf0] p-4 shadow-2xs"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                {getIcon(stat.iconType)}
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                  {stat.title}
                </span>
              </div>
              <button
                type="button"
                aria-label={`Options for ${stat.title}`}
                className="text-gray-300 hover:text-gray-600 transition-colors"
              >
                <MoreVertical size={14} />
              </button>
            </div>
            <div className="text-2xl font-bold text-gray-900 tracking-tight my-1.5">
              {stat.value}
            </div>
            <div className="flex items-center justify-between text-xs mt-2">
              <span
                className={`font-semibold flex items-center gap-0.5 ${
                  isPositive ? 'text-[#12b76a]' : 'text-[#f04438]'
                }`}
              >
                {isPositive ? <ArrowUp size={11} /> : <ArrowDown size={11} />}
                {isPositive ? `+${stat.change}%` : `${stat.change}%`}
              </span>
              <span className="text-gray-400 text-[11px]">{stat.timeframe}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
