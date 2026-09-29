# Material UI (MUI) Component Architecture

> **Directory:** `src/components/mui/`  
> **Styling Engine:** Material UI v9 + Emotion CSS-in-JS runtime  
> **Runtime Overhead:** Dynamic runtime style injection via Emotion  

---

## 1. Overview

This folder contains the **Material UI (MUI) implementation** of the MA. Product Management Dashboard. It follows a component-driven styling paradigm where accessible UI primitives are styled via a centralized `ThemeProvider`, component `styleOverrides`, and strongly typed `sx` objects.

---

## 2. Component Decomposition

| Component | Responsibility | State Owned | MUI Primitives Used |
| :--- | :--- | :--- | :--- |
| **`MuiDashboard.tsx`** | Top-level layout orchestrator; wraps tree in `<ThemeProvider>` & `<CssBaseline>`; manages filtering & selection. | `activeNav`, `statusFilter`, `searchQuery`, `selectedSkus` | `ThemeProvider`, `CssBaseline`, `Box`, `Typography`, `Button` |
| **`MuiSidebar.tsx`** | Navigation drawer with brand icon, grouped `MAIN` and `SALES CHANNELS` links, and Settings. | None (receives `activeNav`) | `Box`, `Typography`, `@mui/icons-material` |
| **`MuiHeader.tsx`** | Global top bar with search input, notifications trigger, and user profile avatar. | None (receives `searchQuery`) | `Box`, `InputBase`, `IconButton`, `Avatar`, `Typography` |
| **`MuiStatCards.tsx`** | 4-column responsive KPI metric grid (Products, Revenue, Orders, Customers). | None (receives `stats`) | `Grid` container (`size={{ xs: 12, sm: 6, lg: 3 }}`), `Box`, `Typography` |
| **`MuiTableToolbar.tsx`**| Product search input, filter modal trigger, grid/list view toggles, and status filter buttons. | None (receives filter state) | `Box`, `InputBase`, `Button`, `IconButton` |
| **`MuiProductTable.tsx`**| Data table with multi-row checkbox selection, product thumbnails, price, stock, and status. | `viewType` ('grid' \| 'list') | `TableContainer`, `Table`, `TableHead`, `TableBody`, `TableRow`, `TableCell`, `Checkbox` |
| **`MuiStatusChip.tsx`** | Color-coded presentational pill badge with status dot indicator matching Tailwind styling. | Pure presentational | `Box` with inline flex styling & custom color tokens |
| **`MuiBulkActionBar.tsx`**| Fixed floating bottom toolbar that appears contextually when rows are selected. | Pure presentational | `Box` with responsive positioning (`left: { xs: '50%', md: 'calc(50% + 112px)' }`), `Button`, `IconButton` |

---

## 3. Styling Principles

### A. Centralized Theme (`theme/muiTheme.ts`)
Global tokens (palettes, typography, shapes) and default component styles are defined using `createTheme()`:
```tsx
export const muiTheme = createTheme({
  palette: {
    primary: { main: '#0270c7' },
    background: { default: '#f8fafc', paper: '#ffffff' },
  },
  typography: { fontFamily: '"Inter", sans-serif' },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 8, boxShadow: 'none' } } },
    MuiCard: { styleOverrides: { root: { borderRadius: 16 } } },
  },
});
```

### B. The `sx` Prop for Local Styles
The `sx` prop provides theme-aware styling with TypeScript autocomplete:
```tsx
<Box
  sx={{
    position: 'fixed',
    bottom: 24,
    left: { xs: '50%', md: 'calc(50% + 112px)' },
    transform: 'translateX(-50%)',
    zIndex: 40,
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 20px 35px -5px rgba(0,0,0,0.22)',
  }}
>
```

### C. Pseudo-Selectors & Responsive Breakpoints
* **Pseudo-selectors:** `&:hover`, `&.Mui-checked`, and `& input::placeholder` are cleanly nested inside `sx`.
* **Breakpoints:** Handled using MUI's object syntax (`{ xs: ..., sm: ..., md: ... }`).

---

## 4. Performance Profile

* **Production Bundle Size:** ~455 KB raw (~140 KB gzip)
* **Runtime Styling:** Managed by Emotion CSS-in-JS engine (styles calculated and injected into `<style>` tags dynamically during render)
* **Strengths:** Out-of-the-box WAI-ARIA accessible components, high developer velocity for standard back-office dashboards
