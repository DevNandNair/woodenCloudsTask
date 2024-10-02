import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function ProductAddedMessage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ height: '100vh', textAlign: 'center', bgcolor: '#f5f5f5' }}
    >
      <CheckCircleOutline color="success" sx={{ fontSize: 80, mb: 2 }} />
      <Typography variant="h4" sx={{ mb: 1 }}>
        Product Successfully Added!
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 3, width: '60%' }}>
        The product has been added to your inventory. You can continue to add more products or view your product list.
      </Typography>
      <Link to="/">
        <Button
          variant="contained"
          color="primary"
          sx={{ px: 5, py: 1.5 }}
        >
          Continue
        </Button>
      </Link>
    </Box>
  );
}

export default ProductAddedMessage;
