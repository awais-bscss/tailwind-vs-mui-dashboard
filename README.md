# MA. - Product Management Dashboard

> A high-fidelity e-commerce product management dashboard built **twice**: once with **Tailwind CSS v3.4** and once with **Material UI (MUI) v9**, to demonstrate and compare two dominant frontend styling paradigms in a real-world production context.

---

## Overview

This project implements a pixel-perfect product management dashboard featuring:

- **Initial Engine Selection Portal** allowing users to explicitly choose between Tailwind CSS and Material UI upon launch
- **Sidebar Navigation** with grouped sections (Main & Sales Channels)
- **KPI Stat Cards** (Total Products, Revenue, Orders, Customers)
- **Product Table** with search, filtering, sorting, status badges, and bulk actions
- **Floating Bulk Action Bar** that appears when rows are selected (fixed position)
- **Live View Switcher** to toggle between Tailwind and MUI implementations in real-time or return to the engine selection screen
- **In-App Technical Comparison Report** evaluating both approaches across 5 engineering pillars

Both implementations share **identical data, layout, and feature parity**, with the only difference being the styling approach.

---

## Documentation Index

Detailed modular architectural documentation is available in the respective directories:

| Guide | Location | Topics Covered |
| :--- | :--- | :--- |
| **Tailwind Architecture** | [`src/components/tailwind/README.md`](./src/components/tailwind/README.md) | Utility-first decomposition, `tailwind.config.js` design tokens, 0 KB runtime JS profile |
| **Material UI Architecture** | [`src/components/mui/README.md`](./src/components/mui/README.md) | Component-driven architecture, `<ThemeProvider>`, `createTheme`, `styleOverrides`, `sx` prop rules |
| **Common Components** | [`src/components/common/README.md`](./src/components/common/README.md) | `FrameworkSelector`, `ViewSwitcher`, `ComparisonModal` contracts & state orchestration |
| **Design Tokens & Theme** | [`src/theme/README.md`](./src/theme/README.md) | Cross-mapping between CSS variables, Tailwind tokens, and MUI theme palette |

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | React 19 + TypeScript 6 |
| **Build Tool** | Vite 8 |
| **Styling (A)** | Tailwind CSS 3.4 + PostCSS + Autoprefixer |
| **Styling (B)** | Material UI 9 + Emotion CSS-in-JS |
| **Icons** | Lucide React (Tailwind) / MUI Icons (MUI) |
| **Typography** | Inter (Google Fonts) |
| **Linting** | OxLint (0 errors, 0 warnings across all 27 files) |

---

## Quick Start

### Prerequisites
- **Node.js** `v18+`
- **npm** `v9+`

### Installation & Run
```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Production build (optional)
npm run build
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
Week10/
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
├── package.json
├── README.md
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── types/
    │   └── dashboard.ts
    ├── data/
    │   └── dashboardData.ts
    ├── theme/
    │   ├── muiTheme.ts
    │   └── README.md
    └── components/
        ├── common/
        │   ├── FrameworkSelector.tsx
        │   ├── ViewSwitcher.tsx
        │   ├── ComparisonModal.tsx
        │   └── README.md
        ├── tailwind/
        │   ├── TailwindDashboard.tsx
        │   ├── TailwindSidebar.tsx
        │   ├── TailwindHeader.tsx
        │   ├── TailwindStatCards.tsx
        │   ├── TailwindTableToolbar.tsx
        │   ├── TailwindProductTable.tsx
        │   ├── TailwindStatusBadge.tsx
        │   ├── TailwindBulkActionBar.tsx
        │   └── README.md
        └── mui/
            ├── MuiDashboard.tsx
            ├── MuiSidebar.tsx
            ├── MuiHeader.tsx
            ├── MuiStatCards.tsx
            ├── MuiTableToolbar.tsx
            ├── MuiProductTable.tsx
            ├── MuiStatusChip.tsx
            ├── MuiBulkActionBar.tsx
            └── README.md
```

---

## Architecture Decisions

### Shared Data Layer
Both implementations import from the same `types/dashboard.ts` and `data/dashboardData.ts` files. This guarantees **zero data drift** between the two views and makes comparisons fair.

### Component Decomposition
Each dashboard is broken into **7-8 focused components** following the single-responsibility principle:
- **Dashboard** → Layout orchestrator (state management, filtering logic)
- **Sidebar** → Navigation (stateless, receives `activeNav` via props)
- **Header** → Top bar (search, notifications, user profile)
- **StatCards** → KPI display (receives `stats` array via props)
- **TableToolbar** → Search + filter + view controls
- **ProductTable** → Data table with selection logic
- **StatusBadge/Chip** → Status indicator (pure presentational)
- **BulkActionBar** → Contextual actions (appears/disappears based on selection count)

### Type Safety
All interfaces are defined in `types/dashboard.ts` with **zero `any` types**. Product status uses a union type (`'published' | 'inactive' | 'out_stock' | 'draft'`) ensuring compile-time safety.

---

## 5-Pillar Technical Comparison

### 1. Development Speed (DX)
| Tailwind CSS | Material UI |
| :--- | :--- |
| Fast once utility classes are mastered. Styles colocated in markup eliminate file switching. Complex primitives (modals, dropdowns) require manual wiring. | Instant scaffolding with ready-made `Table`, `Button`, `Card`, `Drawer` components. Very fast for standard admin dashboards. |
| **Best for:** Custom, bespoke product UIs | **Best for:** Standard admin dashboards & rapid MVPs |

### 2. Customization & Styling Freedom
| Tailwind CSS | Material UI |
| :--- | :--- |
| Unrestricted pixel-perfect control. Arbitrary values (`h-[312px]`), pseudo-selectors (`group-hover:`, `peer:`), and zero specificity conflicts. | Customizable via `sx` prop, `createTheme()`, and component overrides. Deep-overriding nested internal classes can require specificity management. |
| **Winner:** Tailwind CSS | |

### 3. Maintainability & Code Readability
| Tailwind CSS | Material UI |
| :--- | :--- |
| Class strings can grow long in complex trees. Requires disciplined component decomposition to stay clean. | Declarative JSX (`<Card>`, `<Typography variant="h6">`) keeps markup clean. Styling concerns centralized in theme objects or `sx` props. |
| **Winner:** MUI for JSX clarity; Tailwind for zero dead CSS | |

### 4. Design Consistency & Tokens
| Tailwind CSS | Material UI |
| :--- | :--- |
| Tokens declared in `tailwind.config.js` (`colors.brand`, `boxShadow.soft-md`). Every developer shares the same utility palette. | Enforced via `<ThemeProvider>`. Typography scales, palettes, and elevation systems are strongly typed with full TypeScript autocomplete. |
| **Winner:** Tie - both provide robust token architectures | |

### 5. Bundle Size & Performance
| Tailwind CSS | Material UI |
| :--- | :--- |
| PostCSS purges unused classes at build time. Production CSS is **~26 KB** (~5.5 KB gzipped) with **0 KB runtime JS overhead**. | Requires Emotion CSS-in-JS runtime + component JavaScript. Total production JS bundle is **~455 KB** raw (~140 KB gzip). |
| **Winner:** Tailwind CSS (Superior performance and load speed) | |

---

## Key Features

- **Initial Engine Selection Screen** - User chooses between Tailwind CSS and MUI on first visit
- **Dynamic View Switching** - Toggle between Tailwind and MUI with the floating pill (bottom-right corner) or return to the engine selector
- **Interactive Comparison Report** - In-app modal with side-by-side analysis, code snippets, and verdict matrix
- **Bulk Action Bar** - Fixed-position toolbar that appears when product rows are selected; persists during scroll; dismisses when selection is cleared
- **Status Badges** - Color-coded pills: Published (green), Inactive (red), Out Stock (amber), Draft (gray)
- **Search & Filter** - Real-time product search by name or ID with status tab filters (All, Active, Drafts, Archived)
- **Custom MUI Theme** - Full `createTheme()` configuration with palette, typography, shape, and component overrides
- **Custom Tailwind Config** - Extended design tokens for colors, shadows, border radii, and font families

---

## Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | TypeScript check + production build |
| `npm run lint` | Run OxLint static analysis (0 warnings, 0 errors) |
| `npm run preview` | Preview production build locally |

---

## License

MIT
