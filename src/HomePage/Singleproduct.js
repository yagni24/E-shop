import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Grid, Typography } from '@mui/material';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import Button from '@mui/material/Button';
import styles from './Details.module.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

export default function SingleProduct(props) {
  const params = useParams()
  const productId = params.id
  const [size, setSize] = useState('');

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const addItem = () => {
    toast.success('Item is added');
  };
  const itemData = [
    {
      img:
        'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBjbG90aGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80',
      featured: true,
    },
    {
      img:
        'https://media.istockphoto.com/id/526019537/photo/hangers-with-clothes.jpg?s=170667a&w=0&k=20&c=vBcPbpO8mI-sVcWZZ3WDhwrPefwrBO0MyvhKY3edkyA=',
    },
    {
      img:
        'https://media.istockphoto.com/id/496233136/photo/pastel-color-female-clothes-in-a-row-on-open-hanger.jpg?s=170667a&w=0&k=20&c=ihvAR4l5iBJ9WjhYxrgqRJIhveYQ72Ml2yn5BnVNdq8=',
    },
  ];

  return (
    <Grid container spacing={2}>
      {/* Image List */}
      <Grid item xs={6}>
        <ImageList
          sx={{
            width: '70%',
            height: '100%',
          }}
          rowHeight={'30%'}
          cols={2}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.featured ? 2 : 1} rows={1}>
              <img src={item.img} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>

      {/* Text */}
      <Grid item xs={6}>
        <Typography className={styles.title} variant="h5">
          Product Details
        </Typography>
        <Grid>
          <Typography className={styles.text} inline variant="body1" align="left">
           product {productId}
          </Typography>
        </Grid>

        <div className={styles.button}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<AddShoppingCartRoundedIcon />}
            onClick={addItem}
          >
            AddToCart
          </Button>
          <ToastContainer autoClose={3000} hideProgressBar={false} position="bottom-right" />
        </div>
        <div className={styles.formcontrol}>
          <FormControl sx={{ width: '300px' }}>
            <InputLabel id="demo-simple-select-label">Select Size</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              value={size}
              id="demo-simple-select"
              label="select size"
              onChange={handleSizeChange}
            >
              <MenuItem value="XS">XS</MenuItem>
              <MenuItem value="S">S</MenuItem>
              <MenuItem value="M">M</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Grid>
    </Grid>
  );
}
