import React from 'react'

const SignIn= () => {
 
  return (
    <div className='container d-flex justify-content-center mt-5'>
      <div className='card p-4 w-50  bg-secondary-subtle position-absolute '>
        <h1 className='text-center'>Create Account</h1>
        <form >
          <label htmlFor="name">Enter Name</label>
          <input type="text" className='form-control' placeholder='Enter Your Name' />
          <br />
          <label htmlFor="email">Enter Email</label>
          <input type="text" className='form-control' placeholder='Enter Your Email' />
          <br />
          <label htmlFor="Password">Enter Password</label>
          <input type="password"className='form-control' placeholder='Enter Password' />
          <br />
          <label htmlFor="confirm password">Confirm Password</label>
          <input type="password" className='form-control' placeholder='Confirm Password' />
          </form>
          <br />
          <button className='btn btn-dark text-center'>Sign in</button>

      </div>

    </div>
  )
}

export default SignIn