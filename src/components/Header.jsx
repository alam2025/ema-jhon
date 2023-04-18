import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';

const Header = () => {
      const { user , logOut,loading} = useContext(AuthContext);

      if(loading){
            return <progress className="progress w-56"></progress>
      }

      const handleSignOut=()=>{
            logOut()
            .then(result=>{
                  console.log('sign out');
            })
            .catch(error=>{

            })
      }

      return (
            <div className=' header-color text-white'>
                  <div className="navbar my-container ">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow header-color rounded-box w-52">

                                          <li><Link to='/shop'>SHop</Link></li>
                                          <li ><Link to='/orders'> Order </Link> </li>
                                          <li><Link to='/review'>Order Review</Link></li>
                                          <li><Link to='/inventory'>Manage Inventory</Link></li>
                                          <li><Link to='/login'>Login</Link></li>
                                          <li><Link to='/register'>Register</Link></li>
                                    </ul>
                              </div>
                              <Link to='/' className="btn btn-ghost normal-case text-xl font-bold">Ema-Jhon</Link>
                        </div>

                        <div className="navbar-end">
                              <div className="navbar-center hidden lg:flex">
                                    <ul className="menu menu-horizontal px-1">

                                          <li><Link to='/shop'>Shop</Link></li>
                                          <li ><Link to='/orders'> Order </Link> </li>
                                          <li><Link to='/review'>Order Review</Link></li>
                                          <li><Link to='/inventory'>Manage Inventory</Link></li>
                                          {
                                                user ? <>
                                                      <button onClick={handleSignOut}>LogOut</button>
                                                </> : <>
                                                      <li><Link to='/login'>Login</Link></li>
                                                      <li><Link to='/register'>Register</Link></li>
                                                </>
                                          }

                                         <li> <button>{user?.email}</button></li>
                                    </ul>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Header;