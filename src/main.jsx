import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Main'
import Errorpage from './components/Errorpage'
import Order from './components/Order'
import Order_review from './components/Order-review'
import Manage_inventory from './components/Manage_inventory'
import Login from './components/Login'
import Register from './components/Register'
import Home from './Home'
import Shop from './components/Shop'
import AuthProvider from './components/AuthProvider/AuthProvider'
import PrivateRoute from './components/routes/PrivateRoute'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Errorpage />,
    loader: () => fetch('/products.json'),
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'shop',
        element: <Shop />,

      },
      {
        path: 'orders',
        element: <PrivateRoute><Order /></PrivateRoute>
      },
      {
        path: 'review',
        element: <PrivateRoute><Order_review /></PrivateRoute>
      },
      {
        path: 'inventory',
        element: <PrivateRoute><Manage_inventory /></PrivateRoute>
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>

)
