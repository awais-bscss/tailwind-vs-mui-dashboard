import React from 'react';
import { Box, Typography, IconButton, InputBase, Avatar } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';

interface MuiHeaderProps {
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
}

export const MuiHeader: React.FC<MuiHeaderProps> = ({
  searchQuery = '',
  onSearchChange,
}) => {
  return (
    <Box
      component="header"
      sx={{
        height: 56,
        borderBottom: '1px solid #eaecf0',
        px: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        flexShrink: 0,
      }}
    >
      {/* Search */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          border: '1px solid #eaecf0',
          borderRadius: '10px',
          px: 1.5,
          py: 0.4,
          width: 300,
        }}
      >
        <SearchRoundedIcon sx={{ color: '#9ca3af', mr: 1, fontSize: 16 }} />
        <InputBase
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => onSearchChange?.(e.target.value)}
          sx={{
            fontSize: '0.75rem',
            color: '#111827',
            width: '100%',
            '& input::placeholder': { color: '#9ca3af', opacity: 1 },
          }}
        />
      </Box>

      {/* Right: Bell & Profile */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <IconButton size="small" aria-label="Notifications" sx={{ color: '#9ca3af' }}>
          <NotificationsNoneRoundedIcon sx={{ fontSize: 18 }} />
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pl: 1 }}>
          <Avatar
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80"
            alt="MA."
            sx={{ width: 32, height: 32 }}
          />
          <Box sx={{ lineHeight: 1 }}>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#111827' }}>
              MA.
            </Typography>
            <Typography sx={{ fontSize: '0.625rem', color: '#9ca3af', mt: 0.25 }}>
              Store owner
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
