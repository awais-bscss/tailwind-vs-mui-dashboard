# Tailwind CSS Component Architecture

> **Directory:** `src/components/tailwind/`  
> **Styling Engine:** Tailwind CSS v3.4 + PostCSS + Autoprefixer  
> **Runtime Overhead:** 0 KB JavaScript  

---

## 1. Overview

This folder contains the **Tailwind CSS implementation** of the MA. Product Management Dashboard. It follows a utility-first styling paradigm where layout, typography, elevation, and interactions are composed directly within JSX className strings.

---

## 2. Component Decomposition

| Component | Responsibility | State Owned | Design Patterns Used |
| :--- | :--- | :--- | :--- |
| **`TailwindDashboard.tsx`** | Top-level layout orchestrator; manages active view state, search queries, status filter, and selected rows. | `activeNav`, `statusFilter`, `searchQuery`, `selectedSkus` | Controlled container pattern, prop drilling |
| **`TailwindSidebar.tsx`** | Navigation drawer with brand icon, grouped `MAIN` and `SALES CHANNELS` links, and Settings. | None (receives `activeNav`) | Active state highlighting (`bg-white shadow-xs`), icon colocation |
| **`TailwindHeader.tsx`** | Global top bar with search input, notifications trigger, and user profile avatar. | None (receives `searchQuery`) | Flexbox alignment, accessible focus rings |
| **`TailwindStatCards.tsx`** | 4-column responsive KPI metric grid (Products, Revenue, Orders, Customers). | None (receives `stats`) | CSS Grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`), dynamic positive/negative indicators |
| **`TailwindTableToolbar.tsx`**| Product search input, filter modal trigger, grid/list view toggles, and status filter pills. | None (receives filter state) | Segmented pill control, flexbox gap composition |
| **`TailwindProductTable.tsx`**| Data table with multi-row checkbox selection, product thumbnails, price, stock, and status. | `viewType` ('grid' \| 'list') | Checkbox indeterminate states, row hover pseudo-classes |
| **`TailwindStatusBadge.tsx`**| Color-coded presentational pill badge with status dot indicator. | Pure presentational | Switch statement mapping (`published`, `inactive`, `out_stock`, `draft`) |
| **`TailwindBulkActionBar.tsx`**| Fixed floating bottom toolbar that appears contextually when rows are selected. | Pure presentational | Fixed positioning (`fixed bottom-6 left-1/2`), subtle entrance animation |

---

## 3. Styling Principles

### A. Utility-First Composition
Instead of writing separate `.css` files, classes are colocated with markup:
```tsx
<div className="bg-white rounded-2xl border border-[#eaecf0] p-4 shadow-2xs">
  <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
    {stat.title}
  </span>
</div>
```

### B. Extended Design Tokens (`tailwind.config.js`)
* **Color Palette:** Custom `brand-50` through `brand-950`
* **Custom Shadows:** `soft-sm`, `soft-md`, `soft-lg`, `soft-xl`
* **Border Radii:** Extended `xl` (`0.75rem`), `2xl` (`1rem`)
* **Typography:** `Inter` font stack via Google Fonts

### C. Zero Specificity Wars
Because all utilities have single-class specificity (`0-1-0`), there are no cascading override conflicts or `!important` hacks.

---

## 4. Performance Profile

* **Production CSS Size:** ~26.08 KB (~5.51 KB gzip)
* **Runtime JS Footprint:** **0 KB** (no CSS-in-JS runtime parsed or executed by browser)
* **Purging:** PostCSS purges all unused Tailwind classes during `vite build`
