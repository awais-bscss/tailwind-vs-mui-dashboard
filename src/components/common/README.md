# Common Components Architecture

> **Directory:** `src/components/common/`  
> **Role:** Shared controls, framework selection portal, and evaluation reporting  

---

## 1. Overview

This folder contains components that are **shared across both Tailwind and Material UI views**. They orchestrate framework switching, initial user engine selection, and the technical comparison analysis.

---

## 2. Component Inventory

| Component | Responsibility | Props / Callbacks |
| :--- | :--- | :--- |
| **`FrameworkSelector.tsx`** | Clean, centered initial landing portal where the user chooses between Tailwind CSS and Material UI to launch the dashboard. | `onSelectFramework: (mode: ViewMode) => void`<br>`onOpenComparison: () => void` |
| **`ViewSwitcher.tsx`** | Fixed floating pill in the bottom-right corner that allows instant framework toggling, return to the selection portal, or opening the report. | `currentView: ViewMode`<br>`onSelectView: (view: ViewMode) => void`<br>`onOpenComparison: () => void`<br>`onBackToSelect?: () => void` |
| **`ComparisonModal.tsx`** | Modal dialog evaluating both approaches across 5 engineering pillars (Development Speed, Customization, Maintainability, Consistency, Scalability). | `isOpen: boolean`<br>`onClose: () => void` |

---

## 3. Comparison Modal Structure

[`ComparisonModal.tsx`](./ComparisonModal.tsx) provides an interactive in-app evaluation divided into 3 tabs:

1. **5-Pillar Comparison Matrix:** Detailed side-by-side analysis of:
   * *1. Development Speed (DX)*
   * *2. Customization and Styling Freedom*
   * *3. Maintainability and Code Readability*
   * *4. Design Consistency and Tokens*
   * *5. Bundle Size and Scalability*
2. **Code Comparison:** Side-by-side dark code blocks displaying the exact same `StatCard` component implemented in Tailwind vs Material UI.
3. **Engineering Verdict:** Key takeaways and guideline checklist on when enterprise teams should choose Tailwind CSS vs Material UI.
