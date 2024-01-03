import React from 'react'
import './App.css'

import { BrowserRouter, Routes, Route, Link,NavLink } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Shop from './Component/Shop'
import Contact from './Component/Contact'
import SignIn from './Component/SignIn'
import Login from './Component/Login'
import  Aboutus from './Aboutus'
import Search from './Component/Search'
import Cart from './Component/Cart'
import Women from './Component/Women'
import Mens from './Component/Mens'





const App=() => {
 return (
    <div>
     <BrowserRouter>
       {/* <Link to="/">Home</Link> */}
          {/* <Link to="/Login">Login</Link> */}
          {/* <Link to="/Sign_up">Sign up</Link> */}
          {/* <Link to="/contact">Contact</Link> */}


      <Navbar/>

      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Shop' element={<Shop />}></Route>
      <Route path='/Contact' element={<Contact />}></Route>
      <Route path='/SignIn' element={<SignIn />}></Route>
      <Route path='/Login' element={<Login />}></Route>
      <Route path='/Aboutus' element={<Aboutus />}></Route>
      <Route path='/Search' element={<Search />}></Route>
      <Route path='/Cart' element={<Cart/>}></Route>
      <Route path='/Women' element={<Women/>}></Route>
      <Route path='/Mens' element={<Mens/>}></Route>

      
      </Routes>
     </BrowserRouter>
        
    </div>
  )
}

export default App
