import React, { useState } from 'react';
import type { ViewMode } from './types/dashboard';
import { TailwindDashboard } from './components/tailwind/TailwindDashboard';
import { MuiDashboard } from './components/mui/MuiDashboard';
import { FrameworkSelector } from './components/common/FrameworkSelector';
import { ComparisonModal } from './components/common/ComparisonModal';

export const App: React.FC = () => {
  // Starts with 'select' mode so the user explicitly chooses between Tailwind and MUI
  const [viewMode, setViewMode] = useState<ViewMode | 'select'>('select');
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* 1. Initial Engine Selection Screen */}
      {viewMode === 'select' && (
        <FrameworkSelector
          onSelectFramework={(mode) => setViewMode(mode)}
          onOpenComparison={() => setIsComparisonOpen(true)}
        />
      )}

      {/* 2. Tailwind CSS View */}
      {viewMode === 'tailwind' && (
        <TailwindDashboard
          currentView={viewMode}
          onSelectView={setViewMode}
          onOpenComparison={() => setIsComparisonOpen(true)}
        />
      )}

      {/* 3. Material UI View */}
      {viewMode === 'mui' && (
        <MuiDashboard
          currentView={viewMode}
          onSelectView={setViewMode}
          onOpenComparison={() => setIsComparisonOpen(true)}
        />
      )}

      {/* 5-Pillar Comparison Modal */}
      <ComparisonModal
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
      />
    </div>
  );
};

export default App;
