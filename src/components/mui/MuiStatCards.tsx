import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import type { StatItem } from '../../types/dashboard';

interface MuiStatCardsProps {
  stats: StatItem[];
}

export const MuiStatCards: React.FC<MuiStatCardsProps> = ({ stats }) => {
  return (
    <Grid container spacing={2}>
      {stats.map((stat) => {
        const isPositive = stat.change >= 0;
        return (
          <Grid key={stat.id} size={{ xs: 12, sm: 6, lg: 3 }}>
            <Box
              sx={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                border: '1px solid #eaecf0',
                p: 2,
                boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography sx={{ fontSize: '0.6875rem', fontWeight: 700, color: '#667085', letterSpacing: '0.05em' }}>
                  {stat.title}
                </Typography>
                <IconButton size="small" aria-label={`Options for ${stat.title}`} sx={{ color: '#d0d5dd', p: 0.25 }}>
                  <MoreVertRoundedIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </Box>
              <Typography sx={{ fontSize: '1.625rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.02em', my: 0.5 }}>
                {stat.value}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25, color: isPositive ? '#12b76a' : '#f04438', fontSize: '0.75rem', fontWeight: 600 }}>
                  {isPositive ? <ArrowUpwardRoundedIcon sx={{ fontSize: 13 }} /> : <ArrowDownwardRoundedIcon sx={{ fontSize: 13 }} />}
                  {isPositive ? `+${stat.change}%` : `${stat.change}%`}
                </Box>
                <Typography sx={{ fontSize: '0.6875rem', color: '#9ca3af' }}>{stat.timeframe}</Typography>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};
