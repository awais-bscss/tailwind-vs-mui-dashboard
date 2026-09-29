import React from 'react';
import { Box } from '@mui/material';
import type { Product } from '../../types/dashboard';

interface MuiStatusChipProps {
  status: Product['status'];
}

export const MuiStatusChip: React.FC<MuiStatusChipProps> = ({ status }) => {
  switch (status) {
    case 'published':
      return (
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.75,
            px: 1.25,
            py: 0.4,
            borderRadius: '99px',
            backgroundColor: '#ecfdf3',
            color: '#027a48',
            fontSize: '0.75rem',
            fontWeight: 500,
          }}
        >
          <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#12b76a' }} />
          Published
        </Box>
      );
    case 'inactive':
      return (
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.75,
            px: 1.25,
            py: 0.4,
            borderRadius: '99px',
            backgroundColor: '#fef3f2',
            color: '#b42318',
            fontSize: '0.75rem',
            fontWeight: 500,
          }}
        >
          <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#f04438' }} />
          Inactive
        </Box>
      );
    case 'out_stock':
      return (
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.75,
            px: 1.25,
            py: 0.4,
            borderRadius: '99px',
            backgroundColor: '#fffaeb',
            color: '#b54708',
            fontSize: '0.75rem',
            fontWeight: 500,
          }}
        >
          <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#f79009' }} />
          out Stock
        </Box>
      );
    case 'draft':
      return (
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.75,
            px: 1.25,
            py: 0.4,
            borderRadius: '99px',
            backgroundColor: '#f2f4f7',
            color: '#344054',
            fontSize: '0.75rem',
            fontWeight: 500,
          }}
        >
          <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#667085' }} />
          Draft
        </Box>
      );
  }
};
