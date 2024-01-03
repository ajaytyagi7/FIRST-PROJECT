import React, { useState } from 'react'
import clothesshop from './clothesshop';

const Shop=() => {
  const [productlist, setProductlist] = useState(clothesshop);

  const brand='Zencox'
  const [selbrands , setselbrands ] = useState([]);
  return (
    <div className='container '>
      <header>
        <h1 className='text-center fw-bold'>SHOP</h1>
      </header>
      <div className='col-md-9 myshop '>
        <div className='row gy-4'>
          {productlist.map((clothes) =>{
            return(<div className='col-md-3'>{clothes.brand}
            <div className='card mycard3'>
              <img className='myimg6' src={clothes.image} alt="" />
              <div className='p-3'>
                  <h5>{clothes.brand}</h5>
                  <h6>{clothes.modle}</h6>
                  <h6 className='fw-bold'>{clothes.price}</h6>
                  <button className='btn btn-dark float-end mybtn1   '>BUY</button>
              </div>
            </div>


            </div>)
          })}

        </div>
      </div>

    </div>
  )
}

export default Shop