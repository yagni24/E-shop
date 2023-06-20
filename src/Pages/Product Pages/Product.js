import React, { useContext, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { CardActionArea, CardActions } from '@mui/material';
import styles from './card.module.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import React1 from '../img/React1.jpg';
import Navbarsep from '../Navbar/Navbar';
import { CookieContext } from '../../Context/CookieContext';
import Carousel from '../Product Pages/Carousel';
import { LoginContext } from '../../Context/LoginContext';
import { getDocs, collection } from "firebase/firestore";
import { db, auth } from '../../config/firebase'
// import axios from 'axios';

// const usePagination = (data, itemsPerPage) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   const totalPages = Math.ceil(data.length / itemsPerPage);

//   const nextPage = () => {
//     setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
//   };

//   const prevPage = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//   };

//   const goToPage = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

// return {
//   currentPage,
//   currentItems,
//   totalPages,
//   nextPage,
//   prevPage,
//   goToPage,
// };

function Product() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const cookie = useContext(CookieContext);
  const { contextemail, setConEmail, authUser, setauthUser } = useContext(LoginContext);
  const getProductData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
    const data = await response.json();
    setUsers((prev) => [...prev, ...data]);
  };
  const debounce = (callback, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };
  const handleInfiniteScroll = useCallback(
    debounce(() => {
      try {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight) {
          setPage((prev) => prev + 1);
        }
      } catch (error) {
        console.log(error);
      }
    }),
    []
  );

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
      const data = await response.json();
      if (isMounted) {
        setUsers((prev) => [...prev, ...data]);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [handleInfiniteScroll]);

  useEffect(() => {
    async function getData() {
      const docRef = collection(db, "usersInfo");
      const docSnap = await getDocs(docRef);
      console.log('doc', docSnap)
      docSnap.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.data());
      });
    }
    getData()

  }, [])
  // console.log(document.cookie.match(/userToken=([^;]+)/));
  // const toCheckUser = document.cookie.match(/userToken=([^;]+)/);

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
  // const { currentPage, currentItems, totalPages, nextPage, prevPage, goToPage } = usePagination(users, itemsPerPage);
  return (
    <>
      <Navbarsep />
      <Carousel />
      {users.map((element) => (
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
    </>
  );
}

export default Product;

