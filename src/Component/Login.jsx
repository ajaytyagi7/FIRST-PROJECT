import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const LoginSchema=Yup.object().shape({
  email:Yup.string().email('Invalid Email').required('Password Require'),
  password:Yup.string().required('Password is Require').min(8,'Password is too short'),
});



const Login = () => {
  const loginform=useFormik({
    initialValues:{
      password:"",
      email:"",
    },
    onSubmit:(values)  =>{console.log(values);},
    validationSchema:LoginSchema
  });

  return (
    <div className='container d-flex justify-content-center mt-5'>
        <div className='card p-4 w-25  bg-secondary-subtle position-absolute '>
        <h1 className='text-center'>Login</h1>
        <form onSubmit={loginform.handleSubmit}>
         
          <label htmlFor="email">Enter Email</label>
          <span className='ms-4 fs-6 text-danger'>{  loginform.errors.email}</span>
          <input type="text" className='form-control'  id="email" placeholder='Enter Your Email' onChange={loginform.handleChange} value={loginform.values.email} />
          <br />
          <label htmlFor="password">Enter Password</label>
          <span className='ms-4 fs-6 text-danger'>{  loginform.errors.email}</span>
          <input type="password"className='form-control' id="password" placeholder='Enter Password' onChange={loginform.handleChange} value={loginform.values.password} />
          <br />
          </form>
          <button className='btn btn-dark text-center'>Login</button>
          <a className='text-decoration-none text-dark' href="">Forget Password ?</a>
          <a className='text-decoration-none text-center' href="http://localhost:5173/SignIn">Sign in</a>

      </div>

    </div>
  )
}

export default Login