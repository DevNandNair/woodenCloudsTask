import React from 'react';
import { Card, CardContent, Typography, MenuItem, Select, Button, Grid } from '@mui/material';
import './addproduct.css';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {

    const navigate = useNavigate()


  return (
    <div className="addProductsContainer">
      <div className="headingBlock">
        <p className="heading">Add Products</p>
        <p className="sub_text">Products/add products</p>
        <br />
      </div>

      <Card variant="outlined" className="addProductCard">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Categories
          </Typography>

          <Grid container spacing={2}>
            {/* Category 1 */}
            <Grid item xs={12}>
              <Typography variant="body1" className="categoryTitle">
                Category 1
              </Typography>
              <Select fullWidth variant="outlined" displayEmpty>
                <MenuItem value="">
                  <em>Select Category</em>
                </MenuItem>
                <MenuItem value="subcategory1">Subcategory 1</MenuItem>
                <MenuItem value="subcategory2">Subcategory 2</MenuItem>
                <MenuItem value="subcategory3">Subcategory 3</MenuItem>
              </Select>
            </Grid>

            {/* Category 2 */}
            <Grid item xs={12}>
              <Typography variant="body1" className="categoryTitle">
                Category 2
              </Typography>
              <Select fullWidth variant="outlined" displayEmpty>
                <MenuItem value="">
                  <em>Select Category</em>
                </MenuItem>
                <MenuItem value="subcategory1">Subcategory 1</MenuItem>
                <MenuItem value="subcategory2">Subcategory 2</MenuItem>
                <MenuItem value="subcategory3">Subcategory 3</MenuItem>
              </Select>
            </Grid>

            {/* Category 3 */}
            <Grid item xs={12}>
              <Typography variant="body1" className="categoryTitle">
                Category 3
              </Typography>
              <Select fullWidth variant="outlined" displayEmpty>
                <MenuItem value="">
                  <em>Select Category</em>
                </MenuItem>
                <MenuItem value="subcategory1">Subcategory 1</MenuItem>
                <MenuItem value="subcategory2">Subcategory 2</MenuItem>
                <MenuItem value="subcategory3">Subcategory 3</MenuItem>
              </Select>
            </Grid>

            {/* Category 4 */}
            <Grid item xs={12}>
              <Typography variant="body1" className="categoryTitle">
                Category 4
              </Typography>
              <Select fullWidth variant="outlined" displayEmpty>
                <MenuItem value="">
                  <em>Select Category</em>
                </MenuItem>
                <MenuItem value="subcategory1">Subcategory 1</MenuItem>
                <MenuItem value="subcategory2">Subcategory 2</MenuItem>
                <MenuItem value="subcategory3">Subcategory 3</MenuItem>
              </Select>
            </Grid>
          </Grid>

          <div className="buttonContainer">
            <Button variant="outlined" className="cancelButton" style={{ marginRight: '16px' }}>
              Cancel
            </Button>
            <Button onClick={()=>{navigate('/product-details')}} variant="contained" color="primary" className="nextButton">
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProducts;
