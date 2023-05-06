import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import useTitle from '../hooks/useTitle';

const Register = () => {
      const[success, setSuccess]= useState('');
      const[error, setError]= useState('');
      const navigate= useNavigate()
      useTitle('Register')

      const {register,logOut}= useContext(AuthContext);
      const handleRegisterForm=(e)=>{
            setSuccess('')
            setError('')
            e.preventDefault();
            const form= e.target;
            const name = form.name.value
            const email= form.email.value;
            const password = form.password.value;
            register(email,password)
            .then(result=>{
                  alert('Successfully Registered. Please Login')
                  setSuccess('SuccessFully Sign Up!!!')
                  const user= result.user;
                  userName(user,name)
                  console.log(result.user);
                  logOut()
                 
                  
                  // navigate('/login')
                  
            }).catch(error=>{
                  setError(error.message)
            })

            const userName=(user,name)=>{
                  updateProfile(user,{
                        displayName:name
                  })
                  .then(()=>{})
                  .catch(error=>setError(error.message))
            }

            // userName(name)
            // .then(()=>{
            //       console.log('profile updated');
            // }).catch(error=>setError(error.message))

          

      }
      return (
            <div className="min-h-screen bg-base-200">
                  <div className="hero-content flex-col ">
                        <div className="text-center lg:text-left">
                              <h1 className="text-3xl font-bold">Register Now</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <form onSubmit={handleRegisterForm} className="card-body">
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Name</span>
                                          </label>
                                          <input type="text" placeholder="name" name="name" className="input input-bordered" required/>
                                    </div>
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Email</span>
                                          </label>
                                          <input type="email" name='email' placeholder="email" className="input input-bordered"required />
                                    </div>
                                    <div className="form-control">
                                          <label className="label">
                                                <span className="label-text">Password</span>
                                          </label>
                                          <input type="password" name='password' placeholder="password" className="input input-bordered"required />
                                          
                                    </div>
                                    {
                                          <p className=' text-red-600'>{error}</p>
                                          
                                    }
                                    {
                                          <p className=' text-green-500'>{success}</p>
                                    }
                                    <div className="form-control mt-6">
                                          <button  className="btn btn-primary">Register</button>
                                    </div>
                                    <p>Already have an Account ? Please <Link to='/login'>
                                          <button className="btn btn-link">Login</button>

                                    </Link></p>
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default Register;