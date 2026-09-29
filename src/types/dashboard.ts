export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  image: string;
  createdDate: string;
  price: number;
  sellPrice: number;
  stock: number;
  status: 'published' | 'inactive' | 'out_stock' | 'draft';
}

export interface StatItem {
  id: string;
  title: string;
  value: string;
  change: number;
  timeframe: string;
  iconType: 'box' | 'dollar' | 'cart' | 'users';
}

export type ViewMode = 'tailwind' | 'mui';
export type ProductStatusFilter = 'all' | 'active' | 'drafts' | 'archived';
