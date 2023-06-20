import React, { useState, useRef, useEffect,useContext } from "react";
import styles from './navbar.module.css';
import { Drawer, Box, Typography, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { useNavigate } from "react-router-dom";
import { CookieContext } from "../../Context/CookieContext";
import { LoginContext } from "../../Context/LoginContext";
import Button from '@mui/material/Button';
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// import { ContentCutOutlined } from "@mui/icons-material";
const firebaseConfig = {
  apiKey: "AIzaSyB6FcNIg2pxYE3oiGwq1eH6HqtyLBETfwk",
  authDomain: "react-authentication-357fb.firebaseapp.com",
  projectId: "react-authentication-357fb",
  storageBucket: "react-authentication-357fb.appspot.com",
  messagingSenderId: "614800259347",
  appId: "1:614800259347:web:6e4115092cd38939a082e6",
  measurementId: "G-K0F53TKBPF"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
function Navbarsep() {
  const {setUsers } = useContext(LoginContext);
  const [menopen, MensetOpen] = useState(false);
  const [womenopen, WomensetOpen] = useState(false);
  const [kidopen, kidsetOpen] = useState(false);
  const [shoesopen, shoessetOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const refOne = useRef(null);
  const { cookie, setCookie, removeCookie } = useContext(CookieContext);
  useEffect(() => {
    document.addEventListener("click", handleClicOutside, true);
  })
  const handleClicOutside = (e) => {
    if (!refOne.current?.contains(e.target)) {
      MensetOpen(false) || WomensetOpen(false) || kidsetOpen(false) || shoessetOpen()
    }
    else {
      MensetOpen(!menopen) || WomensetOpen(!womenopen) || kidsetOpen(!kidopen) || shoessetOpen(!shoesopen)
    }
  }
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
    .then(()=>{
      console.log('user signed out')
      setUsers(false);
    })
    .catch((err)=>{
      console.log(err.message)
    } )
}
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>

        <Toolbar variant="dense" style={{ display: "flex", flexDirection: "center", alignItems: "center", position: "fixed" }}>

        </Toolbar>
        <div style={{ position: 'absolute', display: 'flex', justifyContent: 'center', right: '0', left: '0', paddingTop: '20px', paddingRight: '70px' }}>
          <Typography style={{ paddingRight: '50px' }}>Home</Typography>
          <Typography style={{ paddingRight: '50px' }}>Catogery</Typography>
          <Typography style={{ paddingRight: '50px' }}>About</Typography>
          <div className={styles.contact} style={{ border: '1px solid black', paddingRight: '5px', paddingLeft: '5px', borderRadius: '10px', fontFamily: "Trirong" }}>
            <Typography style={{ marginLeft: 'auto', marginRight: 'auto' }}>Contact us</Typography>
          </div>
         
        </div>
        <div style={{ position: 'relative' }}>
        <div>
          <Button variant="contained" color="secondary" style={{ position:'absolute',right:'120px',top:'10px'}} onClick={handleSignOut}>Log-Out</Button>
          </div>
          <IconButton sr={{ mr: 1 }} style={{ right: '0', position: 'absolute', top: '10px', right: '50px' }} onClick={() => navigate('/Profile')
          }>
            <AccountCircleOutlinedIcon />
          </IconButton>
          <IconButton sr={{ mr: 1 }} style={{ right: '0', position: 'absolute', top: '10px', right: '0' }}>
            <LocalMallOutlinedIcon />
          </IconButton>
          
        </div>
      </Box>

    </div>
  )
}

export default Navbarsep;
