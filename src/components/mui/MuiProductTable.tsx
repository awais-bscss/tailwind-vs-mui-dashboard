import React, { useState } from 'react';
import {
  Box,
  Typography,
  Checkbox,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
} from '@mui/material';
import type { Product, ProductStatusFilter } from '../../types/dashboard';
import { MuiTableToolbar } from './MuiTableToolbar';
import { MuiStatusChip } from './MuiStatusChip';
import { MuiBulkActionBar } from './MuiBulkActionBar';

interface MuiProductTableProps {
  products: Product[];
  searchQuery: string;
  onSearchChange: (q: string) => void;
  statusFilter: ProductStatusFilter;
  onStatusFilterChange: (tab: ProductStatusFilter) => void;
  selectedSkus: Set<string>;
  onToggleSelect: (sku: string) => void;
  onToggleAll: () => void;
  onClearSelection: () => void;
}

export const MuiProductTable: React.FC<MuiProductTableProps> = ({
  products,
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  selectedSkus,
  onToggleSelect,
  onToggleAll,
  onClearSelection,
}) => {
  const [viewType, setViewType] = useState<'grid' | 'list'>('list');
  const isAllSelected = selectedSkus.size === products.length && products.length > 0;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* 1. Filter & Search Toolbar */}
      <MuiTableToolbar
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        statusFilter={statusFilter}
        onStatusFilterChange={onStatusFilterChange}
        viewType={viewType}
        onViewTypeChange={setViewType}
      />

      {/* 2. Table Container */}
      <Box
        sx={{
          position: 'relative',
          border: '1px solid #eaecf0',
          borderRadius: '16px',
          overflow: 'hidden',
          backgroundColor: '#fff',
          boxShadow: '0 1px 2px rgba(16, 24, 40, 0.05)',
        }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow
                sx={{
                  '& th': {
                    backgroundColor: '#ffffff',
                    color: '#667085',
                    fontWeight: 500,
                    fontSize: '0.6875rem',
                    py: 1.5,
                    borderBottom: '1px solid #eaecf0',
                  },
                }}
              >
                <TableCell padding="checkbox" sx={{ pl: 2, pr: 1, width: 44 }}>
                  <Checkbox
                    size="small"
                    checked={isAllSelected}
                    indeterminate={selectedSkus.size > 0 && selectedSkus.size < products.length}
                    onChange={onToggleAll}
                    sx={{ color: '#d0d5dd', '&.Mui-checked': { color: '#635bff' } }}
                  />
                </TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>ID & Create Date</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => {
                const isSelected = selectedSkus.has(product.sku);
                return (
                  <TableRow
                    key={product.sku}
                    hover
                    sx={{
                      backgroundColor: isSelected ? 'rgba(99, 91, 255, 0.03)' : 'transparent',
                      '& td': { py: 1.5, borderBottom: '1px solid #f2f4f7', fontSize: '0.75rem' },
                      '&:last-child td': { borderBottom: 'none' },
                    }}
                  >
                    <TableCell padding="checkbox" sx={{ pl: 2, pr: 1 }}>
                      <Checkbox
                        size="small"
                        checked={isSelected}
                        onChange={() => onToggleSelect(product.sku)}
                        sx={{ color: '#d0d5dd', '&.Mui-checked': { color: '#635bff' } }}
                      />
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box
                          component="img"
                          src={product.image}
                          alt={product.name}
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: '8px',
                            objectFit: 'cover',
                            border: '1px solid #eaecf0',
                          }}
                        />
                        <Box>
                          <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#111827', lineHeight: 1.3 }}>
                            {product.name}
                          </Typography>
                          <Typography sx={{ fontSize: '0.6875rem', color: '#9ca3af', lineHeight: 1.3 }}>
                            {product.category}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontSize: '0.75rem', fontWeight: 500, color: '#111827', lineHeight: 1.3 }}>
                        {product.id}
                      </Typography>
                      <Typography sx={{ fontSize: '0.6875rem', color: '#9ca3af', lineHeight: 1.3 }}>
                        {product.createdDate}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#111827', lineHeight: 1.3 }}>
                        ${product.price.toLocaleString()}.00
                      </Typography>
                      <Typography sx={{ fontSize: '0.6875rem', color: '#9ca3af', lineHeight: 1.3 }}>
                        Sell Price${product.sellPrice.toLocaleString()}.00
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontSize: '0.75rem', color: '#475569', fontWeight: 500 }}>
                        {product.stock.toLocaleString()}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <MuiStatusChip status={product.status} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        {/* 3. Floating Bulk Action Bar */}
        <MuiBulkActionBar
          selectedCount={selectedSkus.size}
          onClearSelection={onClearSelection}
        />
      </Box>
    </Box>
  );
};
