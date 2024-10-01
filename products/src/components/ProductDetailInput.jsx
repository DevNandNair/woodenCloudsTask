import React, { useState } from 'react';
import './productdetail.css';
import { Card, CardContent, Typography, Checkbox, TextField, Grid, Select, MenuItem, Switch, ListItemText, Button } from '@mui/material';
import ImageCard from './ImageCard';
import { useNavigate } from 'react-router-dom';

const ProductDetailInput = () => {
    const [hasAttributes, setHasAttributes] = useState(false);
    const navigate = useNavigate()


    const addedSuccessfuly=()=>{
        navigate('/product-added-message')
    }

    // State to manage selected attributes
    const [selectedSizes, setSelectedSizes] = useState([]);

    // Function to handle switch change
    const handleSwitchChange = (event) => {
        setHasAttributes(event.target.checked);



    };
    // List of options
    const sizeOptions = [
        'Extra Small',
        'Small',
        'Medium',
        'Large'
    ];

    // Handle change for the Select component
    const handleSizeChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedSizes(
            typeof value === 'string' ? value.split(',') : value
        );
    };
    return (
        <div className="card-container">
            <div className='product-details-flexdiv'>
                <Card className="product-card">
                    <CardContent>
                        <Typography variant="h5" component="div" className="card-title">
                            Product Details
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className="card-description">
                            Products / Add Products
                        </Typography>

                        <Card className="inner-detail-card">
                            <CardContent>
                                <Card className="blue-box">
                                    <CardContent>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Checkbox />
                                            <Typography variant="body1" className="bold-text">
                                                Copy input to all details
                                            </Typography>
                                        </div>
                                        <Typography variant="body2" className="small-paragraph">
                                            If you want to change any particular attribute of any product, you can do it by selecting the specific product.
                                        </Typography>
                                    </CardContent>
                                </Card>

                                <div style={{ marginTop: '20px' }}>
                                    <Grid container spacing={2}>
                                        {/* Product Name Field */}
                                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body1">Product Name:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                placeholder="Enter title"
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Grid>

                                        {/* Related Product Name Field */}
                                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body1">Related Product Name:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                placeholder="Enter title"
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Grid>

                                        {/* Product Type Field */}
                                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body1">Product Type:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Select fullWidth size="small" defaultValue="">
                                                <MenuItem value="">Select Product Type</MenuItem>
                                                <MenuItem value="normal">Normal Products</MenuItem>
                                                <MenuItem value="enquiry">Enquiry Products</MenuItem>
                                            </Select>
                                        </Grid>

                                        {/* Product Description Field */}
                                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body1">Product Description:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                placeholder="Enter description"
                                                multiline
                                                rows={4}
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Grid>

                                        {/* Product Specification Field */}
                                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body1">Product Specification:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                placeholder="Enter specifications"
                                                multiline
                                                rows={4}
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Grid>

                                        {/* Brand Field */}
                                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body1">Brand:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Select fullWidth size="small" defaultValue="">
                                                <MenuItem value="">Select Brand</MenuItem>
                                                <MenuItem value="adidas">Adidas</MenuItem>
                                                <MenuItem value="nike">Nike</MenuItem>
                                                <MenuItem value="puma">Puma</MenuItem>
                                                <MenuItem value="reebok">Reebok</MenuItem>
                                                <MenuItem value="other">Other</MenuItem>
                                            </Select>
                                        </Grid>

                                        {/* General Heading with Horizontal Line */}
                                        <Grid item xs={12}>
                                            <Typography variant="body1" className="section-header">
                                                General  <hr className="section-divider" />
                                            </Typography>
                                        </Grid>

                                        {/* Product SKU Field */}
                                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body1">Product SKU:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                placeholder="Enter product code"
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Grid>

                                        {/* Warranty Field */}
                                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body1">Warranty:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Select fullWidth size="small" defaultValue="">
                                                <MenuItem value="">Select Years</MenuItem>
                                                <MenuItem value="1">1 Year</MenuItem>
                                                <MenuItem value="2">2 Years</MenuItem>
                                                <MenuItem value="3">3 Years</MenuItem>
                                                <MenuItem value="4">4 Years</MenuItem>
                                                <MenuItem value="5">5 Years</MenuItem>
                                            </Select>
                                        </Grid>

                                        {/* Return In Field */}
                                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body1">Return In:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Select fullWidth size="small" defaultValue="">
                                                <MenuItem value="">Select Days</MenuItem>
                                                <MenuItem value="7">7 Days</MenuItem>
                                                <MenuItem value="14">14 Days</MenuItem>
                                                <MenuItem value="30">30 Days</MenuItem>
                                            </Select>
                                        </Grid>

                                        {/* Actual Price Field */}
                                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body1">Actual Price:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                placeholder="₹"
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Grid>

                                        {/* Display Price Field */}
                                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body1">Display Price:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                placeholder="₹"
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Grid>

                                        {/* Referral Amount Field */}
                                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body1">Referral Amount:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                placeholder="₹"
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Grid>

                                        {/* Cashback Amount Field */}
                                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body1">Cashback Amount:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                placeholder="₹"
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Grid>

                                        {/* HSN Code Field */}
                                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body1">HSN Code:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                placeholder="Enter code"
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Grid>

                                        {/* GST Field */}
                                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body1">GST:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                placeholder="Required"
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Grid>

                                        {/* Shipping Heading with Horizontal Line */}
                                        <Grid item xs={12}>
                                            <Typography variant="body1" className="section-header">
                                                Shipping  <hr className="section-divider" />
                                            </Typography>
                                        </Grid>

                                        {/* Shipping Method Field */}
                                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body1">Shipping Method:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Select fullWidth size="small" defaultValue="">
                                                <MenuItem value="">Select Method</MenuItem>
                                                <MenuItem value="standard">Standard</MenuItem>
                                                <MenuItem value="express">Express</MenuItem>
                                                <MenuItem value="same-day">Same Day</MenuItem>
                                            </Select>
                                        </Grid>

                                        {/* Shipping Cost Field */}
                                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body1">Shipping Cost:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                placeholder="₹"
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Grid>

                                        {/* Shipping Duration Field */}
                                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body1">Shipping Duration:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Select fullWidth size="small" defaultValue="">
                                                <MenuItem value="">Select Duration</MenuItem>
                                                <MenuItem value="1-3 days">1-3 Days</MenuItem>
                                                <MenuItem value="3-5 days">3-5 Days</MenuItem>
                                                <MenuItem value="5-7 days">5-7 Days</MenuItem>
                                            </Select>
                                        </Grid>

                                        {/* Shipping Restrictions Field */}
                                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body1">Shipping Restrictions:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                placeholder="Enter restrictions"
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Grid>

                                        {/* Weight Field */}
                                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body1">Weight:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Select fullWidth size="small" defaultValue="">
                                                <MenuItem value="">Select Weight</MenuItem>
                                                <MenuItem value="0-1kg">0-1 kg</MenuItem>
                                                <MenuItem value="1-5kg">1-5 kg</MenuItem>
                                                <MenuItem value="5-10kg">5-10 kg</MenuItem>
                                            </Select>
                                        </Grid>

                                        {/* Length Field */}
                                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body1">Length:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                placeholder="Enter length"
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Grid>

                                        {/* Width Field */}
                                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body1">Width:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                placeholder="Enter width"
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Grid>

                                        {/* Height Field */}
                                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="body1">Height:</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField
                                                fullWidth
                                                placeholder="Enter height"
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Grid>

                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="body1" className="section-header">
                                            <span className='product-add-quantity-header'>  <h4>Product Quantity</h4> <Switch
                                                checked={hasAttributes}
                                                onChange={handleSwitchChange}
                                                sx={{ marginTop: "10px" }}
                                            /><p style={{ color: "GrayText", fontFamily: "cursive", marginLeft: "5px" }}>Has Attributes</p></span> <hr className="section-divider" />
                                        </Typography>
                                    </Grid>
                                    {hasAttributes && (
                                        <>
                                            <Grid item xs={12}>
                                                <Grid container alignItems="center">
                                                    <Grid item xs={4}>
                                                        <Typography variant="body1">Display Name:</Typography>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <TextField
                                                            fullWidth
                                                            placeholder="Enter title"
                                                            variant="outlined"
                                                            size="small"
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <br /> <br />

                                            <Grid container spacing={2}>
                                                <Grid item xs={12}>
                                                    <Grid container alignItems="center">
                                                        <Grid item xs={4}>
                                                            <Typography variant="body1">Select Attributes:</Typography>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <Select
                                                                multiple
                                                                value={selectedSizes}
                                                                onChange={handleSizeChange}
                                                                displayEmpty
                                                                fullWidth
                                                                variant="outlined"
                                                                size="small"
                                                                renderValue={(selected) => {
                                                                    return selected.length === 0 ? 'Select sizes' : selected.join(', ');
                                                                }}
                                                            >
                                                                {sizeOptions.map((size) => (
                                                                    <MenuItem key={size} value={size}>
                                                                        <Checkbox checked={selectedSizes.indexOf(size) > -1} />
                                                                        <ListItemText primary={size} />
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <br /><br />
                                            <Grid item xs={12}>
                                                <Typography variant="body1">Values:</Typography>
                                                {selectedSizes.map((size) => (
                                                    <Grid container alignItems="center" key={size}>
                                                        <Grid item xs={3}>
                                                            <div style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                height: '40px',
                                                                border: '1px solid #ccc',
                                                                borderRadius: '4px',
                                                                backgroundColor: '#f5f5f5'
                                                            }}>
                                                                {size}
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={3}>
                                                            <TextField
                                                                fullWidth
                                                                placeholder="QTY"
                                                                variant="outlined"
                                                                size="small"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={3}>
                                                            <TextField
                                                                fullWidth
                                                                placeholder="SKU"
                                                                variant="outlined"
                                                                size="small"
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </>
                                    )}


                                </div>
                                <br /><br />
                                {!hasAttributes && (
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center">
                                            <Grid item xs={4}>
                                                <Typography variant="body1">Quantity:</Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <TextField
                                                    fullWidth
                                                    placeholder="Enter the quantity"
                                                    variant="outlined"
                                                    size="small"
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )}


                            </CardContent>
                        </Card>
                    </CardContent>
                </Card>


                <div className='product-image-section'>
                    <ImageCard />
                </div>




            </div>
            <Card
                sx={{
                    width: '100%',
                    borderRadius: '8px',
                    margin: '16px 0',
                    padding: '16px',
                    boxShadow: 2,
                }}
            >
             
                <Grid container spacing={2} sx={{ padding: '16px', justifyContent: 'flex-end' }}>
                    <Grid item>
                        <Button variant="outlined" color="inherit" sx={{ marginRight: '8px' }}>
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={addedSuccessfuly} variant="contained" color="primary" size="large">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Card>

        </div>
    );
};

export default ProductDetailInput;
