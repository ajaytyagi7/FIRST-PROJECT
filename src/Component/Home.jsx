import React, { useRef, useState } from 'react'
import clothesdata from './clothesdata';
import { redirect } from 'react-router-dom';

const  Home = () => {
  const [productlist, setProductlist] = useState(clothesdata);
  const brand=['Zencox'];
  const [selbrands, setSelbrands] = useState([]);
  return (

    
    <div className='container'>
      <header>
        <div className='container '>
          <div className=' myheader  d-flex'>
            <div>
           <h2 className='fw-bold '>Zencox</h2>
           </div>
           <div  className='mt-2'  >
            <a  className='text-decoration-none text-dark px-4'  href="http://localhost:5173/">Home</a>
            <a className='text-decoration-none text-dark px-4' href="http://localhost:5173/Shop">Shop</a>
            <a  className='text-decoration-none text-dark px-4'  href="http://localhost:5173/Contact">Contact</a>
            <a  className='text-decoration-none text-dark px-4'   href="http://localhost:5173/Aboutus">About</a>
            <a className='text-dark search' href="http://localhost:5173/Search"><i class="fa-solid fa-magnifying-glass"></i></a>
            <a className='text-dark mx-4 text-decoration-none' href="http://localhost:5173/Cart">🛒 Cart</a>
            <a className='text-dark mx-4 text-decoration-none' href="http://localhost:5173/Login">Login</a>
            <a href="http://localhost:5173/SignIn"><button className='btn btn-dark mx-4'>Create Account</button></a>
            
            </div>
            
           

          </div>
           
        </div>
      </header>


      <div className='card mycard mt-3'>

      <img className='myimg' src="https://img.freepik.com/free-photo/clothing-rack-with-floral-hawaiian-shirts-hangers-hat_23-2149366018.jpg?w=996&t=st=1703873203~exp=1703873803~hmac=8537900e366c893045afa732661c1bba4359fb5ffc638d53cecd6075b27b3c02" alt="Your image" />
          <div className='overlays'>
            <a href="http://localhost:5173/Shop"><button className='btn btn-dark mybtn fw-bold'>Shop Now </button></a>

          </div>
          <div className='overlays1'>
          <h3>Mens Collection 2024</h3>
         </div>
         <div className='overlays2'>
            <h1>
              New Arrivals
            </h1>
          </div>
      </div>
        
        
        <div className=''>
        <div className='d-flex  mx-2 '>
          <div className='p-1'>
            <a href="http://localhost:5173/Mens"><img className='myimg4 ' src='https://images.pexels.com/photos/19547434/pexels-photo-19547434/free-photo-of-man-posing-in-studio-in-colorful-modern-clothing.jpeg?auto=compress&cs=tinysrgb&w=600'></img></a>
            <a href="http://localhost:5173/Mens"><h1 className='men text-dark'>Men</h1></a>
          </div>
          <div className='p-1'>
          <a href="http://localhost:5173/Women"><img className='myimg5' src='https://images.pexels.com/photos/7910049/pexels-photo-7910049.jpeg?auto=compress&cs=tinysrgb&w=600'></img></a>
           <a href="http://localhost:5173/Women"> <h1 className='women text-dark'>Women</h1></a>
          </div>
        </div>
        </div>

        <div className='col-md -9'>
          <div className='row gy-4'>
            {productlist.map((clothes) => {
              return(<div className='col-md-4'>{clothes.brand}
              <div className='card mycard2 '>
                <img className='myimg3' src={clothes.image} alt="" />
                <div className='p-3'>
                  <h4>{clothes.brand}</h4>
                  <h6>{ clothes.modle}</h6>
                  <h5>{clothes.price}</h5>
                  <div className='d-flex float-end'>
                  <button className='btn btn-dark    '>BUY</button>
                  <button className='btn btn-dark mx-3'>Add to cart</button>
                  </div>
                </div>

              </div>

              </div>)
            })};

          </div>
          
        </div>
        <div>
          <img className='myimg w-100' src="https://img.freepik.com/free-photo/clothing-rack-with-hawaiian-shirts-with-floral-print-hangers-hat_23-2149366076.jpg?w=996&t=st=1704092533~exp=1704093133~hmac=724a720635674e8c79688a80e38e792251e44e26e41ac52de12827553b0c961d" alt="" />
        </div>
     
     <footer>
      <div className='card bg-dark mt-4 '>
        <h2 className='text-light mx-4'>Zencox</h2>
        
        <div className='d-flex p-3'>
        <div className='d-flex card bg-dark p-2'>
          <h4 className='text-light'>Customer Service</h4>
          <a className='text-light text-decoration-none' href="">Contact us</a>
          <a className='text-light text-decoration-none'  href="">Track Order</a>
          <a className='text-light text-decoration-none' href="">Return Order</a>
          <a className='text-light text-decoration-none' href="">Cancle Order</a>
        </div>
        <div className='card bg-dark mx-4 p-2'>
          <h4 className='text-light'>Company</h4>
          <a className='text-light text-decoration-none' href="">About Us</a>
          <a className='text-light text-decoration-none' href="">Term and Condition</a>
          <a className='text-light text-decoration-none' href="">Privacy and Policy</a>
          <a className='text-light text-decoration-none' href="">Blog</a>
        </div>
        <div className='card bg-dark p-2 '>
          <h4 className='text-light'>Connect with Us</h4>
          <a className='text-light text-decoration-none' href=""><i class="fa-brands fa-facebook"></i>5.7k Likes this </a>
          
          <a className='text-light text-decoration-none' href=""><i class="fa-brands fa-instagram"></i>5k fowller</a>
          
          <a className='text-light text-decoration-none' href=""><i class="fa-brands fa-twitter"></i> Twitter</a>
          <a className='text-light text-decoration-none' href=""><i class="fa-brands fa-snapchat"></i>Snapchat</a>
         
          </div>
          </div>

      </div>
     </footer>
    </div>
  );
};

export default Home
           
          
          