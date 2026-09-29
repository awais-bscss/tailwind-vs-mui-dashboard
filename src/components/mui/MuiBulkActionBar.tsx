import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface MuiBulkActionBarProps {
  selectedCount: number;
  onClearSelection: () => void;
}

export const MuiBulkActionBar: React.FC<MuiBulkActionBarProps> = ({
  selectedCount,
  onClearSelection,
}) => {
  if (selectedCount === 0) return null;

  return (
    <Box
      component="aside"
      aria-label="Bulk actions toolbar"
      sx={{
        position: 'fixed',
        bottom: 24,
        left: { xs: '50%', md: 'calc(50% + 112px)' },
        transform: 'translateX(-50%)',
        zIndex: 40,
        transition: 'all 0.3s ease',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#ffffff',
          border: '1px solid #eaecf0',
          borderRadius: '16px',
          boxShadow: '0 20px 35px -5px rgba(0,0,0,0.22), 0 10px 10px -5px rgba(0,0,0,0.06)',
          px: 2.5,
          py: 1.25,
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          userSelect: 'none',
        }}
      >
        <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#111827', pr: 0.5 }}>
          {selectedCount} Selected
        </Typography>
        <Box sx={{ width: '1px', height: 16, backgroundColor: '#e5e7eb' }} />
        <Button
          size="small"
          startIcon={<FileDownloadOutlinedIcon sx={{ fontSize: 13, color: '#6b7280' }} />}
          sx={{
            color: '#374151',
            textTransform: 'none',
            fontSize: '0.75rem',
            fontWeight: 600,
            borderRadius: '8px',
            px: 1,
            py: 0.5,
            '&:hover': { backgroundColor: '#f3f4f6' },
          }}
        >
          Export
        </Button>
        <Button
          size="small"
          startIcon={<EditOutlinedIcon sx={{ fontSize: 13, color: '#6b7280' }} />}
          sx={{
            color: '#374151',
            textTransform: 'none',
            fontSize: '0.75rem',
            fontWeight: 600,
            borderRadius: '8px',
            px: 1,
            py: 0.5,
            '&:hover': { backgroundColor: '#f3f4f6' },
          }}
        >
          Edit Info
        </Button>
        <Button
          size="small"
          startIcon={<DeleteOutlineRoundedIcon sx={{ fontSize: 13, color: '#6b7280' }} />}
          sx={{
            color: '#374151',
            textTransform: 'none',
            fontSize: '0.75rem',
            fontWeight: 600,
            borderRadius: '8px',
            px: 1,
            py: 0.5,
            '&:hover': { backgroundColor: '#fef2f2', color: '#dc2626' },
          }}
        >
          Delete
        </Button>
        <IconButton
          size="small"
          aria-label="Clear selection"
          onClick={onClearSelection}
          sx={{ color: '#9ca3af', '&:hover': { color: '#4b5563' }, p: 0.5, ml: 0.5 }}
        >
          <CloseRoundedIcon sx={{ fontSize: 15 }} />
        </IconButton>
      </Box>
    </Box>
  );
};
