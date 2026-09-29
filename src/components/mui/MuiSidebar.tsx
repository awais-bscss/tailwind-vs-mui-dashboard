import React from 'react';
import { Box, Typography } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import ViewSidebarOutlinedIcon from '@mui/icons-material/ViewSidebarOutlined';

interface MuiNavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  hasChevron?: boolean;
}

interface MuiSidebarProps {
  activeNav: string;
  onSelectNav: (id: string) => void;
}

export const MuiSidebar: React.FC<MuiSidebarProps> = ({
  activeNav,
  onSelectNav,
}) => {
  const mainNavItems: MuiNavItem[] = [
    { id: 'home', label: 'Home', icon: <HomeRoundedIcon sx={{ fontSize: 17 }} /> },
    { id: 'orders', label: 'Orders', icon: <ShoppingBagOutlinedIcon sx={{ fontSize: 17 }} /> },
    { id: 'products', label: 'Products', icon: <Inventory2OutlinedIcon sx={{ fontSize: 17 }} /> },
    { id: 'customers', label: 'Customers', icon: <PeopleAltOutlinedIcon sx={{ fontSize: 17 }} /> },
    { id: 'content', label: 'Content', icon: <ArticleOutlinedIcon sx={{ fontSize: 17 }} /> },
    { id: 'finances', label: 'Finances', icon: <AccountBalanceOutlinedIcon sx={{ fontSize: 17 }} /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChartRoundedIcon sx={{ fontSize: 17 }} /> },
    { id: 'marketing', label: 'Marketing', icon: <CampaignOutlinedIcon sx={{ fontSize: 17 }} />, hasChevron: true },
    { id: 'discounts', label: 'Discounts', icon: <LocalOfferOutlinedIcon sx={{ fontSize: 17 }} /> },
  ];

  const salesChannels = [
    { id: 'online_store', label: 'Online Store', icon: <StoreOutlinedIcon sx={{ fontSize: 17 }} /> },
    { id: 'pos', label: 'Point of Sale', icon: <LoyaltyOutlinedIcon sx={{ fontSize: 17 }} /> },
    { id: 'shop', label: 'Shop', icon: <ShoppingBagOutlinedIcon sx={{ fontSize: 17 }} /> },
  ];

  return (
    <Box
      component="aside"
      sx={{
        width: 224,
        backgroundColor: '#f8f9fa',
        borderRight: '1px solid #eaecf0',
        p: 1.5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexShrink: 0,
        userSelect: 'none',
      }}
    >
      <Box>
        {/* Brand Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 1, py: 0.5, mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: '6px',
                background: 'linear-gradient(135deg, #6941C6 0%, #9E77ED 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 800,
                fontSize: '0.625rem',
              }}
            >
              MA
            </Box>
            <Typography sx={{ fontWeight: 700, fontSize: '0.8125rem', color: '#111827' }}>
              MA.
            </Typography>
            <KeyboardArrowDownRoundedIcon sx={{ fontSize: 14, color: '#9ca3af' }} />
          </Box>
          <ViewSidebarOutlinedIcon sx={{ fontSize: 15, color: '#9ca3af' }} />
        </Box>

        {/* MAIN */}
        <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', px: 1, mb: 0.5 }}>
          MAIN
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25, mb: 2 }}>
          {mainNavItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <Box
                key={item.id}
                component="button"
                onClick={() => onSelectNav(item.id)}
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  px: 1.25,
                  py: 0.75,
                  borderRadius: '10px',
                  border: isActive ? '1px solid #f1f5f9' : 'none',
                  cursor: 'pointer',
                  backgroundColor: isActive ? '#ffffff' : 'transparent',
                  color: isActive ? '#111827' : '#4b5563',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '0.75rem',
                  boxShadow: isActive ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
                  transition: 'all 0.15s',
                  '&:hover': { backgroundColor: isActive ? '#ffffff' : 'rgba(243, 244, 246, 0.7)' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                  <Box sx={{ color: isActive ? '#111827' : '#9ca3af', display: 'flex' }}>
                    {item.icon}
                  </Box>
                  <Typography sx={{ fontSize: '0.75rem', fontWeight: 'inherit', color: 'inherit' }}>
                    {item.label}
                  </Typography>
                </Box>
                {item.hasChevron && <KeyboardArrowDownRoundedIcon sx={{ fontSize: 13, color: '#9ca3af' }} />}
              </Box>
            );
          })}
        </Box>

        {/* SALES CHANNELS */}
        <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', px: 1, mb: 0.5 }}>
          SALES CHANNELS
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
          {salesChannels.map((item) => (
            <Box
              key={item.id}
              component="button"
              onClick={() => onSelectNav(item.id)}
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 1.25,
                px: 1.25,
                py: 0.75,
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: 'transparent',
                color: '#4b5563',
                fontWeight: 500,
                fontSize: '0.75rem',
                transition: 'all 0.15s',
                '&:hover': { backgroundColor: 'rgba(243, 244, 246, 0.7)' },
              }}
            >
              <Box sx={{ color: '#9ca3af', display: 'flex' }}>
                {item.icon}
              </Box>
              <Typography sx={{ fontSize: '0.75rem', color: '#4b5563' }}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Bottom Settings */}
      <Box sx={{ pt: 1, borderTop: '1px solid rgba(229, 231, 235, 0.7)' }}>
        <Box
          component="button"
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: 1.25,
            px: 1.25,
            py: 0.75,
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            color: '#4b5563',
            fontSize: '0.75rem',
            '&:hover': { backgroundColor: 'rgba(243, 244, 246, 0.7)' },
          }}
        >
          <SettingsOutlinedIcon sx={{ fontSize: 17, color: '#9ca3af' }} />
          <Typography sx={{ fontSize: '0.75rem', color: '#4b5563' }}>Settings</Typography>
        </Box>
      </Box>
    </Box>
  );
};
