import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Badge, Switch, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './productlist.css';
import SearchBar from './SearchBar';
import data from '../item.json'; // Import JSON data
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigate = useNavigate();

  const handleAddProductClick = () => {
    navigate('/add-product');
  };

  useEffect(() => {
    if (data && data.products) {
      const formattedProducts = data.products.map((product, index) => ({
        id: index + 1,
        image: 'https://via.placeholder.com/50',
        productName: product.name,
        items: product.attributes?.attributes[0]?.quantity || 0,
        createdBy: 'Admin',
        createdDate: '2023-09-21',
        status: 'Active'
      }));
      setProductData(formattedProducts);
    }
  }, []);

  const handleStatusChange = (index) => {
    const updatedProducts = [...productData];
    updatedProducts[index].status = updatedProducts[index].status === 'Active' ? 'Inactive' : 'Active';
    setProductData(updatedProducts);
  };

  // Function to handle menu open/close
  const handleMenuClick = (event, product) => {
    setAnchorEl(event.currentTarget);
    setSelectedProduct(product);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedProduct(null);
  };

  const handleEdit = () => {
    console.log(`Edit product: ${selectedProduct.productName}`);
    handleMenuClose();
  };

  const handleView = () => {
    console.log(`View product: ${selectedProduct.productName}`);
    handleMenuClose();
  };

  return (
    <>
      <div className='productFlexDiv'>
        <h2 className="title">Product List</h2>
        
        <div className='searchbar'>
          <SearchBar />
        </div>
        <div className='addbutton'>
           <Button variant="outlined" onClick={handleAddProductClick}>
          Add Product
        </Button>
        </div>
      </div>
      
      <div className='mainBox'>
        <TableContainer component={Paper} className='tableContainer'>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">SI No</TableCell>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Product Name</TableCell>
                <TableCell align="center">No. of Items</TableCell>
                <TableCell align="center">Created By</TableCell>
                <TableCell align="center">Created Date</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productData.map((product, index) => (
                <TableRow key={product.id}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">
                    <img src={product.image} alt="Product" width="50" height="50" />
                  </TableCell>
                  <TableCell align="center">{product.productName}</TableCell>
                  <TableCell align="center">{product.items}</TableCell>
                  <TableCell align="center">{product.createdBy}</TableCell>
                  <TableCell align="center">{product.createdDate}</TableCell>
                  <TableCell align="center">
                    <Badge
                      badgeContent={product.status}
                      color={product.status === 'Active' ? 'primary' : 'secondary'}
                    />
                    <Switch
                      checked={product.status === 'Active'}
                      onChange={() => handleStatusChange(index)}
                      color="primary"
                      style={{ marginLeft: 5 }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      aria-label="more"
                      aria-controls="long-menu"
                      aria-haspopup="true"
                      onClick={(event) => handleMenuClick(event, product)}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl && selectedProduct?.id === product.id)}
                      onClose={handleMenuClose}
                      PaperProps={{
                        style: {
                          maxHeight: 48 * 4.5, 
                          width: '20ch',
                        },
                      }}
                    >
                      <MenuItem onClick={handleEdit}>Edit</MenuItem>
                      <MenuItem onClick={handleView}>View</MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default ProductList;
