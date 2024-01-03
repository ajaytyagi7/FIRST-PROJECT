import React from 'react'

function Search() {
  return (
    <div className='container p-5  '>
        <div className=' myinput w-50 d-flex p-4 '>
            <div className=''>
            <input type="text" className='form-control ' placeholder='Search clothes.....' />
            </div>
            <div>
            <button className='btn btn-dark mx-2'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Search