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
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
,
)
