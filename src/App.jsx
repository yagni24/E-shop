
import './App.css';
import React from 'react';
// import Product from './HomePage/Product';
// import Singleproduct from './HomePage/Singleproduct';
import {  Routes, Route} from 'react-router-dom';
import Loginpage from './HomePage/Loginpage';
import Product from './HomePage/Product';


function App() {
  return (
    <div className="App">
   {/* <Routes>
      <Route path='/' element={<Product/>}/>  
      <Route path="/Singleproduct/:id" element={<Singleproduct/>}/>
    </Routes> */}
    
    <Routes>
      <Route path="/" element={<Loginpage/>}/>
      <Route path="/Product" element={<Product/>}></Route>
    </Routes>
     
    </div>
  );
}

export default App;
