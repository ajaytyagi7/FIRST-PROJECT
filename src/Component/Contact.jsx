import React from 'react'

const Contact=() => {
  return (
    <div className='container d-flex p-4 '>
      <div className='card w-50 p-2  bg-secondary-subtle'>
        <h1 className='text-center'>Contact Us</h1>
        <form >
          <label htmlFor="name">Enter Name</label>
          <input type="text" className='form-control' placeholder='Enter Your Name' />
          <br />
          <label htmlFor="email">Enter Email</label>
          <input type="text" className='form-control' placeholder='Enter your Email' />
          <br />
          <label htmlFor="message">Enter Message</label>
          <br />
          <textarea id="message" className="form-control w-100" placeholder="Write your message here..."></textarea>
          <br />
          </form>
          <button className='btn btn-dark text-center w-100 ' >Send Meaage</button>
          <p>Contact No- 📞 1800-654-123</p>

      </div>
      <div className='mx-3 w-50'>
        <img className='contactimg' src="https://img.freepik.com/free-photo/portrait-woman-customer-service-worker_144627-37948.jpg?w=900&t=st=1704010701~exp=1704011301~hmac=9a6db07144fc486acf2c946d48e16fd4239df5fb8aed979d1cfa69590e99f6ea" alt="" />
      </div>
      
    </div>
  )
}

export default Contact