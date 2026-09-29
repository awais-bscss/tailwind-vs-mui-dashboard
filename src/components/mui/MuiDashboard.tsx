import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box, Typography, Button } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { muiTheme } from '../../theme/muiTheme';
import { mockProducts, mockProductStats } from '../../data/dashboardData';
import type { ProductStatusFilter, ViewMode } from '../../types/dashboard';
import { MuiSidebar } from './MuiSidebar';
import { MuiHeader } from './MuiHeader';
import { MuiStatCards } from './MuiStatCards';
import { MuiProductTable } from './MuiProductTable';
import { ViewSwitcher } from '../common/ViewSwitcher';

interface MuiDashboardProps {
  currentView: ViewMode;
  onSelectView: (view: ViewMode) => void;
  onOpenComparison: () => void;
}

export const MuiDashboard: React.FC<MuiDashboardProps> = ({
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
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', backgroundColor: '#ffffff', fontFamily: '"Inter", sans-serif' }}>
        {/* Sidebar Component */}
        <MuiSidebar activeNav={activeNav} onSelectNav={setActiveNav} />

        {/* Main Content Area */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, backgroundColor: '#ffffff' }}>
          {/* Header Component */}
          <MuiHeader />

          {/* Main Content Body */}
          <Box component="main" sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2.5, overflowY: 'auto' }}>
            {/* Title & Top Action Buttons */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#111827', fontSize: '1.5rem', letterSpacing: '-0.02em' }}>
                  Products
                </Typography>
                <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.75rem', mt: 0.25 }}>
                  Manage inventory, pricing and availability across your store
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.25 }}>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<FileDownloadOutlinedIcon sx={{ fontSize: 15 }} />}
                  sx={{
                    color: '#344054',
                    borderColor: '#d0d5dd',
                    backgroundColor: '#fff',
                    textTransform: 'none',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    borderRadius: '10px',
                    px: 1.5,
                    boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',
                    '&:hover': { borderColor: '#d0d5dd', backgroundColor: '#f9fafb' },
                  }}
                >
                  Export
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<AddRoundedIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    backgroundColor: '#635bff',
                    color: '#fff',
                    textTransform: 'none',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    borderRadius: '10px',
                    px: 1.75,
                    boxShadow: 'none',
                    '&:hover': { backgroundColor: '#5349e8', boxShadow: 'none' },
                  }}
                >
                  Add product
                </Button>
              </Box>
            </Box>

            {/* Stat Cards Component */}
            <MuiStatCards stats={mockProductStats} />

            {/* Product Table Component */}
            <MuiProductTable
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
          </Box>
        </Box>

        {/* Floating View Switcher */}
        <ViewSwitcher
          currentView={currentView}
          onSelectView={onSelectView}
          onOpenComparison={onOpenComparison}
        />
      </Box>
    </ThemeProvider>
  );
};
