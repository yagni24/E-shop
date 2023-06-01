
import './App.css';
import React from 'react';
// import Product from './HomePage/Product';
// import Singleproduct from './HomePage/Singleproduct';
import {  Routes, Route} from 'react-router-dom';
import Loginpage from './HomePage/Loginpage';
import Product from './HomePage/Product';
import Singleproduct from './HomePage/Singleproduct';

function App() {
  return (
    <div className="App">
   
    
    <Routes>
      <Route path="/" element={<Loginpage/>}/>
      <Route path="/Product" element={<Product/>}></Route>
      <Route path="/Singleproduct/:id" element={<Singleproduct/>}/>
    </Routes>
     
    </div>
  );
}

export default App;
