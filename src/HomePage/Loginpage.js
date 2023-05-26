import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  IconButton  from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
export default function Loginpage(){
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const [fName,setfName] = useState("");
   
    const handleChange =(fieldName,value)=>{
      switch (fieldName){
        case 'fName':
          setfName(value);
          break;
        case 'password':
          setPassword(value);
          break;
        case 'confirmPass':
          setconfirmPass(value);
          if(password===value){
            setErrorpass('');
            return true;
          }
          else{
            setErrorpass('password does not match');
          }
          break;
      case 'email':
        setEmail(value)
        if(regex.test(value)===false){
          setError('Enter a valid email-id');
        }
        else{
          setError('');
          return true;
        }
        break;
        default: break;
      }
    }
   
    const Submit = ()=>{
     switch(""){
      case email:
        alert('enter your email');
        break;
      case fName:
        alert('enter your fName');
        break;
      case password:
        alert('enter your password');
        break;
      case confirmPass:
        alert('enter your confirmpass');
        break;
      default:
        alert('Form submitted')
     }
    }
    const [confirmError,setErrorpass] = useState("");
    const [password,setPassword] = useState("");
    
    const [confirmPass, setconfirmPass] = useState("");
    
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    
    return(
        <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
       <div style={{ display: 'grid', background:'rgba(247, 241, 225, 0.2)', width: '30%', justifyContent: 'center', alignItems: 'center', borderRadius:'5px' , boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',height:'600px',marginLeft:'auto',marginRight:'auto'}}>
      <br/>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr', gap: '5px' }}>
  <label style={{ gridColumn: '1', marginBottom: '5px',justifySelf:'center',marginRight:'170px' }}>FullName</label>
  <div style={{ gridColumn: '1', display: 'flex', justifyContent: 'center' }}>
    <TextField
      style={{ width: '250px' }}
      id="demo-helper-text-misaligned"
      // label="FullName"
      color="secondary"
      onChange={(e)=>handleChange('fName',e.target.value)}
      value={fName}
      required
    />
  </div>
</div>
     <div style={{ display: 'grid', gridTemplateColumns: '2fr', gap: '5px' }}>
  <label style={{ gridColumn: '1', marginBottom: '5px', justifySelf: 'center', marginRight: '200px' }}>Email</label>
  <div style={{ gridColumn: '1', display: 'flex', justifyContent: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <TextField
        style={{ width: '250px' }}
        onChange={(e)=>handleChange('email',e.target.value)}
        type="text"
        color="secondary"
        value={email}
      />
      {error && (
        <Alert severity="error" style={{ marginTop: '5px' }}>
          {error}
        </Alert>
      )}
    </div>
  </div>
</div>
<div style={{ display: 'grid', gridTemplateColumns: '2fr', gap: '5px' }}>
  <label style={{ gridColumn: '1', marginBottom: '5px',justifySelf:'center',marginRight:'170px' }}>Password</label>
  <div style={{ gridColumn: '1', display: 'flex', justifyContent: 'center' }}>
<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" style={{width:'245px'}} onChange={(e)=>handleChange('password',e.target.value)} required>
          {/* <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel> */}
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            color="secondary"
            endAdornment={
              <InputAdornment position="end" >
                <IconButton
                  onClick={(e)=>handleChange('password',e.target.value)}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                </IconButton>
              </InputAdornment >
            }
          />
          </FormControl >
          </div>
</div>    
<div style={{ display: 'grid', gridTemplateColumns: '2fr', gap: '5px' }}>
  <label style={{ gridColumn: '1',justifySelf:'center',marginRight:'120px' }}>Confirm-Password</label>
  <div style={{ gridColumn: '1', display: 'flex', justifyContent: 'center' }}>
<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" style={{width:'245px'}} onChange={(e)=>handleChange('confirmPass',e.target.value)} >
          {/* <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel> */}
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            color="secondary"
            endAdornment={
              <InputAdornment position="end" >
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end">
                </IconButton>
              </InputAdornment >
            }
           
          />
          {confirmError && (
        <Alert severity="error" style={{ marginTop: '5px' }}>
          {confirmError}
        </Alert>
      )}
          </FormControl >
          </div>
          </div> 
      <div style={{ display: 'grid', gridTemplateColumns: '2fr', gridTemplateRows: 'auto auto', gap: '5px' }}>
        <div style={{ gridColumn: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Button color="secondary" variant="contained"   onClick={Submit} >
        Submit
      </Button>
      </div>
      </div>
      <div style={{ gridColumn: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Typography>Already have an account? <Link to={'/Product'}>login-in</Link></Typography>
      </div>
      </div>
      </div>
        </>
    )
}