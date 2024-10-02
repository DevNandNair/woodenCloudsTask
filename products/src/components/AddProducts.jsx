import React from 'react';
import { Card, CardContent, Typography, MenuItem, Select, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import './addproduct.css';

// Yup validation schema
const validationSchema = Yup.object().shape({
  category1: Yup.string().required('Category 1 is required'),
  category2: Yup.string().required('Category 2 is required'),
  category3: Yup.string().required('Category 3 is required'),
  category4: Yup.string().required('Category 4 is required'),
});

const AddProducts = () => {
  const navigate = useNavigate();

  return (
    <div className="addProductsContainer">
      <div className="headingBlock">
        <p className="heading">Add Products</p>
        <p className="sub_text">Products / Add Products</p>
        <br />
      </div>

      <Card variant="outlined" className="addProductCard">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Categories
          </Typography>

          {/* Formik Form */}
          <Formik
            initialValues={{
              category1: '',
              category2: '',
              category3: '',
              category4: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log('Form Data:', values);
              navigate('/product-details');
            }}
          >
            {({ values, handleChange, handleBlur, errors, touched }) => (
              <Form>
                <Grid container spacing={2}>
                  {/* Category 1 */}
                  <Grid item xs={12}>
                    <Typography variant="body1" className="categoryTitle">
                      Category 1
                    </Typography>
                    <Select
                      fullWidth
                      variant="outlined"
                      name="category1"
                      value={values.category1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      displayEmpty
                      error={touched.category1 && Boolean(errors.category1)}
                    >
                      <MenuItem value="">
                        <em>Select Category</em>
                      </MenuItem>
                      <MenuItem value="subcategory1">Subcategory 1</MenuItem>
                      <MenuItem value="subcategory2">Subcategory 2</MenuItem>
                      <MenuItem value="subcategory3">Subcategory 3</MenuItem>
                    </Select>
                    {touched.category1 && errors.category1 && (
                      <Typography variant="body2" color="error">
                        {errors.category1}
                      </Typography>
                    )}
                  </Grid>

                  {/* Category 2 */}
                  <Grid item xs={12}>
                    <Typography variant="body1" className="categoryTitle">
                      Category 2
                    </Typography>
                    <Select
                      fullWidth
                      variant="outlined"
                      name="category2"
                      value={values.category2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      displayEmpty
                      error={touched.category2 && Boolean(errors.category2)}
                    >
                      <MenuItem value="">
                        <em>Select Category</em>
                      </MenuItem>
                      <MenuItem value="subcategory1">Subcategory 1</MenuItem>
                      <MenuItem value="subcategory2">Subcategory 2</MenuItem>
                      <MenuItem value="subcategory3">Subcategory 3</MenuItem>
                    </Select>
                    {touched.category2 && errors.category2 && (
                      <Typography variant="body2" color="error">
                        {errors.category2}
                      </Typography>
                    )}
                  </Grid>

                  {/* Category 3 */}
                  <Grid item xs={12}>
                    <Typography variant="body1" className="categoryTitle">
                      Category 3
                    </Typography>
                    <Select
                      fullWidth
                      variant="outlined"
                      name="category3"
                      value={values.category3}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      displayEmpty
                      error={touched.category3 && Boolean(errors.category3)}
                    >
                      <MenuItem value="">
                        <em>Select Category</em>
                      </MenuItem>
                      <MenuItem value="subcategory1">Subcategory 1</MenuItem>
                      <MenuItem value="subcategory2">Subcategory 2</MenuItem>
                      <MenuItem value="subcategory3">Subcategory 3</MenuItem>
                    </Select>
                    {touched.category3 && errors.category3 && (
                      <Typography variant="body2" color="error">
                        {errors.category3}
                      </Typography>
                    )}
                  </Grid>

                  {/* Category 4 */}
                  <Grid item xs={12}>
                    <Typography variant="body1" className="categoryTitle">
                      Category 4
                    </Typography>
                    <Select
                      fullWidth
                      variant="outlined"
                      name="category4"
                      value={values.category4}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      displayEmpty
                      error={touched.category4 && Boolean(errors.category4)}
                    >
                      <MenuItem value="">
                        <em>Select Category</em>
                      </MenuItem>
                      <MenuItem value="subcategory1">Subcategory 1</MenuItem>
                      <MenuItem value="subcategory2">Subcategory 2</MenuItem>
                      <MenuItem value="subcategory3">Subcategory 3</MenuItem>
                    </Select>
                    {touched.category4 && errors.category4 && (
                      <Typography variant="body2" color="error">
                        {errors.category4}
                      </Typography>
                    )}
                  </Grid>
                </Grid>

                <div className="buttonContainer">
                  <Button
                    variant="outlined"
                    className="cancelButton"
                    style={{ marginRight: '16px' }}
                    onClick={() => navigate('/products')}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="nextButton"
                  >
                    Next
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProducts;
