import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Layout/Root';
import Home from './Pages/Home';
import AddProduct from './Pages/AddProduct';
import MyCart from './Pages/MyCart';
import AllBrandsProducts from './Pages/AllBrandsProducts';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './Providers/AuthProvider';
import Details from './Pages/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/data.json')
      },{
      path:'/addProduct',
      element:<AddProduct></AddProduct>
      },{
        path:'/myCart',
        element:<MyCart></MyCart>
      },{
        path:'/brands/:brandName',
        element:<AllBrandsProducts></AllBrandsProducts>,
        loader:()=>fetch('http://localhost:5000/products')
        
      },{
        path:'/login',
        element:<Login></Login>
      },{
        path:'/register',
        element:<Register></Register>
      },{
        path:'/details/:id',
        element:<Details></Details>,
        loader:()=>fetch('http://localhost:5000/products')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider> <RouterProvider router={router} /></AuthProvider>
</React.StrictMode>
,
)
