import React from 'react';
import { Box, Button, IconButton, InputBase } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import type { ProductStatusFilter } from '../../types/dashboard';

interface MuiTableToolbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  statusFilter: ProductStatusFilter;
  onStatusFilterChange: (tab: ProductStatusFilter) => void;
  viewType: 'grid' | 'list';
  onViewTypeChange: (type: 'grid' | 'list') => void;
}

export const MuiTableToolbar: React.FC<MuiTableToolbarProps> = ({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  viewType,
  onViewTypeChange,
}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
      {/* Search Bar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#fff',
          border: '1px solid #eaecf0',
          borderRadius: '10px',
          px: 1.5,
          py: 0.4,
          width: 320,
        }}
      >
        <SearchRoundedIcon sx={{ color: '#9ca3af', mr: 1, fontSize: 15 }} />
        <InputBase
          placeholder="Search by product name or ID"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          sx={{
            fontSize: '0.75rem',
            color: '#111827',
            width: '100%',
            '& input::placeholder': { color: '#9ca3af', opacity: 1 },
          }}
        />
      </Box>

      {/* Right Controls */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
        <Button
          size="small"
          startIcon={<FilterListRoundedIcon sx={{ fontSize: 14 }} />}
          sx={{
            color: '#344054',
            border: '1px solid #eaecf0',
            backgroundColor: '#fff',
            textTransform: 'none',
            fontSize: '0.75rem',
            fontWeight: 500,
            borderRadius: '10px',
            px: 1.25,
            '&:hover': { backgroundColor: '#f9fafb' },
          }}
        >
          Filter
        </Button>

        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <IconButton
            size="small"
            onClick={() => onViewTypeChange('grid')}
            aria-label="Grid view"
            sx={{
              border: '1px solid #eaecf0',
              borderRadius: '10px',
              color: viewType === 'grid' ? '#111827' : '#9ca3af',
              backgroundColor: viewType === 'grid' ? '#f3f4f6' : '#fff',
              p: 0.75,
            }}
          >
            <GridViewRoundedIcon sx={{ fontSize: 15 }} />
          </IconButton>
          <IconButton
            size="small"
            onClick={() => onViewTypeChange('list')}
            aria-label="List view"
            sx={{
              border: '1px solid #eaecf0',
              borderRadius: '10px',
              color: viewType === 'list' ? '#111827' : '#9ca3af',
              backgroundColor: viewType === 'list' ? '#f3f4f6' : '#fff',
              p: 0.75,
            }}
          >
            <ViewListRoundedIcon sx={{ fontSize: 15 }} />
          </IconButton>
        </Box>

        {/* Status Tabs */}
        <Box sx={{ display: 'flex', backgroundColor: '#f9fafb', p: 0.35, borderRadius: '10px', border: '1px solid #eaecf0' }}>
          {(['all', 'active', 'drafts', 'archived'] as ProductStatusFilter[]).map((tab) => (
            <Box
              key={tab}
              component="button"
              onClick={() => onStatusFilterChange(tab)}
              sx={{
                px: 1.25,
                py: 0.4,
                fontSize: '0.75rem',
                fontWeight: statusFilter === tab ? 600 : 500,
                textTransform: 'capitalize',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '8px',
                backgroundColor: statusFilter === tab ? '#ffffff' : 'transparent',
                color: statusFilter === tab ? '#111827' : '#6b7280',
                boxShadow: statusFilter === tab ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
                transition: 'all 0.15s',
                '&:hover': { color: '#111827' },
              }}
            >
              {tab === 'all' ? 'All' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
