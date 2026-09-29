# Design Tokens & Theme Architecture

> **Directory:** `src/theme/`  
> **Role:** Centralized Design Tokens & Material UI Theme Configuration  

---

## 1. Overview

To guarantee visual parity and evaluate both styling paradigms fairly, a unified **Design Token System** is established and mapped across three layers:
1. **Global CSS Variables** in [`index.css`](../index.css)
2. **Tailwind Extended Theme** in [`tailwind.config.js`](../../tailwind.config.js)
3. **MUI Custom Theme Object** in [`muiTheme.ts`](./muiTheme.ts)

---

## 2. Design Token Cross-Mapping

| Token Concept | CSS Variable (`index.css`) | Tailwind Token (`tailwind.config.js`) | MUI Theme Token (`muiTheme.ts`) | Value |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Brand** | `--color-primary` | `brand-600` | `palette.primary.main` | `#0270c7` |
| **Primary Hover** | `--color-primary-hover` | `brand-700` | `palette.primary.dark` | `#0359a1` |
| **Surface Background** | `--color-surface-bg` | `surface-light` | `palette.background.default` | `#f8fafc` |
| **Card Surface** | `--color-card-bg` | `surface-card` | `palette.background.paper` | `#ffffff` |
| **Border Divider** | `--color-border` | `border-[#eaecf0]` | `palette.divider` | `#e2e8f0` / `#eaecf0` |
| **Text Primary** | `--color-text-main` | `gray-900` | `palette.text.primary` | `#0f172a` / `#111827` |
| **Text Muted** | `--color-text-muted` | `gray-400` / `gray-500` | `palette.text.secondary` | `#64748b` / `#9ca3af` |
| **Success Color** | N/A | `success` | `palette.success.main` | `#10b981` |
| **Warning Color** | N/A | `warning` | `palette.warning.main` | `#f59e0b` |
| **Danger Color** | N/A | `danger` | `palette.error.main` | `#ef4444` |
| **Border Radius** | N/A | `rounded-xl` (`12px`) | `shape.borderRadius: 12` | `12px` |
| **Typography** | `font-family` | `font-sans` | `typography.fontFamily` | `'Inter', sans-serif` |

---

## 3. MUI Component Overrides Strategy

Inside [`muiTheme.ts`](./muiTheme.ts), `styleOverrides` are applied to enforce design system consistency without polluting components with redundant `sx` styles:

* **`MuiButton`**: Removes heavy Material elevation shadows; enforces flat `8px` rounded corners.
* **`MuiCard`**: Sets `16px` border radius, subtle borders (`#f1f5f9`), and soft shadows.
* **`MuiTableCell`**: Establishes lightweight cell borders, header cell background (`#f8fafc`), uppercase styling, and letter spacing.
* **`MuiChip`**: Configures compact font size (`0.75rem`), `6px` border radius, and bold weights.
