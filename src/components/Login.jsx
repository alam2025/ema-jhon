import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';

const Login = () => {
      const [success, setSuccess] = useState('');
      const [error, setError] = useState('');
      const [fold, setFold] = useState(true)
      const navigate = useNavigate()
      const location = useLocation()

      const { logIn, googleSignIn } = useContext(AuthContext)
      // console.log(user);



      const from = location.state?.from?.pathname || '/'


      const handleFFormLogin = (e) => {
            setError('')
            setSuccess('')
            e.preventDefault()
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            logIn(email, password)
                  .then(result => {
                        setSuccess('SuccessFully login!!!')
                        console.log(result.user);
                        form.reset();
                        navigate(from, { replace: true })

                  }).catch(error => {
                        setError(error.message)
                  })


      }

      const handleGoogleLogin = () => {
            googleSignIn()
                  .then(() => { })
                  .catch(error => setError(error.message))

      }

      const handlePass = (e) => {
            e.preventDefault()

            setFold(!fold)
      }
      return (
            <>
                  <div className="min-h-screen bg-base-200">
                        <div className="hero-content flex-col ">
                              <div className="text-center lg:text-left">
                                    <h1 className="text-3xl font-bold">Login now!</h1>

                              </div>
                              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <form onSubmit={handleFFormLogin} className="card-body">
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                          </div>

                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>

                                                <input type={fold === true ? "password" : 'text'} name='password' placeholder="password" className="input input-bordered" />
                                                <button className=' text-start' onClick={handlePass}>{fold === true ? 'Show' : 'Hide'}</button>


                                          </div>
                                          {
                                                <p className=' text-red-600'>{error}</p>

                                          }
                                          {
                                                <p className=' text-green-500'>{success}</p>
                                          }
                                          <div className="form-control mt-6">
                                                <button className="btn btn-primary">Login</button>
                                          </div>



                                    </form>
                                    <div className='flex justify-center items-center gap-8'>
                                          <button onClick={handleGoogleLogin} title=' google login'><img className=' w-[120px]' src='https://tse3.mm.bing.net/th?id=OIP.TqcnDevHeoB21zEWeNC8AwHaE8&pid=Api&P=0' alt="Google" /></button>
                                          <button title='gitHub login'><img className='w-[120px]' src="https://tse3.mm.bing.net/th?id=OIP.qdiXe0vKmri2QBmj_IM-dQHaBl&pid=Api&P=0" alt="GitHub" /></button>

                                    </div>
                                    <p className=' px-8 pb-10 '>New to Ema-Jhon!!! Please <Link to='/register'>
                                          <button className="btn btn-link">Register</button>
                                    </Link>
                                    </p>
                              </div>
                        </div>
                  </div>
            </>
      );
};

export default Login;