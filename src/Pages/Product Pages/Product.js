import React, { useContext, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { CardActionArea, CardActions } from '@mui/material';
import styles from './card.module.css';
import pagestyle from './pagination.module.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from 'react-router-dom';
import React1 from '../img/React1.jpg';
import Navbarsep from '../Navbar/Navbar';
import CircularProgress from '@mui/material/CircularProgress';
import { CookieContext } from '../../Context/CookieContext';
import Carousel from '../Product Pages/Carousel';
import { LoginContext } from '../../Context/LoginContext';
import { getDocs, collection } from "firebase/firestore";
import { db, auth } from '../../config/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Redux/actions/productAction'
import {paginationAction} from '../../Redux/reducers/PaginationReducer'
function Product() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { contextemail, setConEmail, authUser, setauthUser } = useContext(LoginContext);
  const productData = useSelector((state) => state.product.data);
  const loadingStatus = useSelector((state) => state.product.loading);
  const productperpage = useSelector((state) => state.pagination.productperpage);
  const currentPage = useSelector((state) => state.pagination.currentPage);

  useEffect(() => {
    dispatch(fetchData())
  }, []);

  const totalPages = Math.ceil(productData.length / productperpage);
  const pages = [...Array(totalPages + 1).keys()].slice(1);
  const indexOfLastPage = currentPage * productperpage;
  const indexOfFirstPage = indexOfLastPage - productperpage;
  const visibleProduct = productData.slice(indexOfFirstPage, indexOfLastPage);

const navigatePrev = ()=>{
  if(currentPage !== 1){
    console.log('clicked prev')
    dispatch(paginationAction.onNavigatePrev())
   
  }
}
const navigateNext = ()=>{
  if(currentPage !== totalPages){
    dispatch(paginationAction.onNavigateNext())
  }
}
  useEffect(() => {
    async function getData() {
      const docRef = collection(db, "usersInfo");
      const docSnap = await getDocs(docRef);
      docSnap.forEach((doc) => {
        doc.data()
      });
    }
    getData()
  }, [])

  auth.onAuthStateChanged(user => {
    if (user) {
      setConEmail(user.email);
      console.log(contextemail);
      setauthUser(true);
      console.log(user)
    }
    else {
      console.log(user);
      setauthUser(false);
    }
  })

  return (
    <>
      <Navbarsep />
      <Carousel />

      {
        loadingStatus ?
          <CircularProgress color='secondary' /> : null}
      {visibleProduct.map((element) => (
        <div className={`${styles.card} ${styles.cardstyle}`} key={element.id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <Link to={'/SingleProduct'}>
                <CardMedia component="img" height="250px" image={React1} />
              </Link>
              <CardContent>
                <a onClick={() => {
                  if (authUser === true) {
                    navigate('/SingleProduct');
                  }
                  else {
                    navigate('/Signup');
                  }
                }} className={styles.linkHover}>Click to open</a>
                <Typography className={styles.typo} variant="subtitle1">
                  {element.body}
                </Typography>
                <Typography variant="h6" className={styles.typo}>
                  {element.userId}
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
      <p >
        <button className={`${pagestyle.button}`} onClick={navigatePrev()}>Prev</button>
        {pages.map((p) => (
          <span className={`${pagestyle.button}`} key={p}>{p}</span>
        ))}
         <button className={`${pagestyle.button}`} onClick={navigateNext()}>Next</button>
      </p>
     
    </>
  );
}

export default Product;

