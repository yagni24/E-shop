
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Product from './Pages/Product Pages/Product';
import Singleproduct from './Pages/Product Pages/Singleproduct';
import Signup from './Pages/LoginPage/Signup';
import Profile from './Pages/Profile/Profile';
import { LoginProvider } from './Context/LoginContext';
import { CookieProvider } from './Context/CookieContext';
import Login  from './Pages/LoginPage/Login';
import ProtectedRoute from './CustomRoutes/ProtectedRoute';
import PrivateRoute from './CustomRoutes/PrivateRoute';


function App() {

  return (
    <div className="App">
      <LoginProvider>
      <CookieProvider>
      <Routes>
        <Route path="/" element={<Product/>} />
        <Route path="/Profile" element={<ProtectedRoute>
          <Profile/>
        </ProtectedRoute>} />
        <Route path="/Signup" element={<PrivateRoute>
          <Signup/>
        </PrivateRoute>}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/Login" element={<PrivateRoute>
          <Login/>
        </PrivateRoute>}/>
        <Route path="/Singleproduct" element={<Singleproduct/>}/>
      </Routes>
      </CookieProvider>
      </LoginProvider>
      
    </div>
  );  
}

export default App;
