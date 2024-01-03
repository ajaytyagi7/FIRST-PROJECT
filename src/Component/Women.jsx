import React, { useState } from 'react'
import womendata from './womendata'

const Women= () => {

  const [productlist, setProductlist] = useState(womendata)
  const brand='Zencox'
  const [selbrands, setselbrands] = useState([]);
  return (
    <div className='container'>
      <header>
      <h1>Shop</h1>
      </header>
      <div className='col-md-9'>
        <div className='row gy-4'>
          {productlist.map((clotheswomen)  =>{
            return(<div className='col-md-3'>{clotheswomen.brand}
            <div className='card'>
              <img src={clotheswomen.image} alt="" />
              <div>
                <h5>{clotheswomen.brand}</h5>
                <h6>{clotheswomen.modle}</h6>
                <h6>{clotheswomen.price}</h6>
                <button className='btn btn-dark float-end mx-3'>Buy </button>
              </div>

            </div>

            </div>)
          })}

        </div>

      </div>

    </div>
  )
}

export default clotheswomen