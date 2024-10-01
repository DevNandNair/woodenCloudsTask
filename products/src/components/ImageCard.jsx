import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const ImageCard = () => {
    const [displayImage, setDisplayImage] = useState(null);
    const [additionalImages, setAdditionalImages] = useState([]);

    const handleDisplayImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setDisplayImage(URL.createObjectURL(file));
        }
    };

    const handleAdditionalImageChange = (event) => {
        const files = Array.from(event.target.files);
        if (additionalImages.length + files.length <= 9) {
            const newImages = files.map(file => URL.createObjectURL(file));
            setAdditionalImages(prevImages => [...prevImages, ...newImages]);
        } else {
            alert("You can only add up to 9 additional images.");
        }
    };

    return (
        <Card
            sx={{
                backgroundColor: 'white',
                height: 'auto',
                width: '340px',
                borderRadius: '5px',
                margin: '9px',
                padding: '16px'
            }}
            className='product-image'
        >
            <CardContent>
                <Typography variant="h6">Add Display Image</Typography>
                <label style={{
                    display: 'block',
                    border: '2px dotted skyblue',
                    borderRadius: '8px',
                    height: '150px',
                    width: '100%',
                    textAlign: 'center',
                    lineHeight: '150px',
                    cursor: 'pointer',
                    color: displayImage ? 'transparent' : 'black',
                    backgroundImage: displayImage ? `url(${displayImage})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    {displayImage ? '' : 'Click or Drag to Add Image'}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleDisplayImageChange}
                        style={{ display: 'none' }}
                    />
                </label>

                <Typography
                    variant="body2"
                    style={{
                        margin: '8px 0',
                        color: 'lightblue', 
                        fontFamily: 'cursive' 
                    }}
                >
                    Maximum 9 additional photos
                </Typography>


                {/* Add Additional Photos Section */}
                <label style={{
                    display: 'block',
                    border: '2px solid skyblue',
                    borderRadius: '4px',
                    height: '50px',
                    width: '50px',
                    textAlign: 'center',
                    lineHeight: '50px',
                    cursor: 'pointer',
                    marginTop: '8px',
                    position: 'relative',
                    overflow: 'hidden',
                }}>
                    <AddCircleIcon style={{ color: 'skyblue', fontSize: '30px' }} />
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleAdditionalImageChange}
                        style={{ display: 'none' }}
                    />
                </label>

                <Grid container spacing={1} sx={{ marginTop: 2 }}>
                    {additionalImages.map((image, index) => (
                        <Grid item xs={4} key={index}>
                            <img src={image} alt={`Additional ${index + 1}`} style={{ width: '100%', borderRadius: '4px' }} />
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ImageCard;
