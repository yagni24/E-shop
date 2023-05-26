import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { CardActionArea, CardActions } from '@mui/material';
import styles from './card.module.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link} from 'react-router-dom';
import Data from './Data';
import Navbar from './Navbar';



const Product = () => {
  return (
    <>
      <Navbar />
      {Data.map((element) => (
        <div className={`${styles.card} ${styles.cardstyle}`} key={element.id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <Link to={`/SingleProduct`}>
                <CardMedia component="img" height="250px" image={element.img} />
              </Link>
              <CardContent>
                <Link to={`/SingleProduct/${element.id}`}  className={styles.link}>
                  {element.name}
                </Link>
                <Typography className={styles.typo} variant="subtitle1">
                  {element.comp}
                </Typography>
                <Typography variant="h6" className={styles.typo}>
                  {element.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <GradeRoundedIcon />
              <GradeRoundedIcon />
              <GradeRoundedIcon />
              <GradeRoundedIcon />
              <GradeRoundedIcon />
              <div className={styles.Ficon}>
                <ShoppingCartOutlinedIcon />
                <FavoriteBorderRoundedIcon />
              </div>
            </CardActions>
          </Card>
        </div>
      ))}
    </>
  );
};

export default Product;
