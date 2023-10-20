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
import Private from './Private/Private';
import Update from './Pages/Update';

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
      element:<Private><AddProduct></AddProduct></Private>
      },{
        path:'/myCart/:email',
        element:<Private><MyCart></MyCart></Private>,
        loader:()=>fetch('https://server-site-kqfkuzq5h-sumaiyas-projects.vercel.app/usersProducts')
      },{
        path:'/brands/:brandName',
        element:<AllBrandsProducts></AllBrandsProducts>,
        loader:()=>fetch('https://server-site-kqfkuzq5h-sumaiyas-projects.vercel.app/products')
        
      },{
        path:'/login',
        element:<Login></Login>
      },{
        path:'/register',
        element:<Register></Register>
      },{
        path:'/details/:id',
        element:<Private><Details></Details></Private>,
        loader:()=>fetch('https://server-site-kqfkuzq5h-sumaiyas-projects.vercel.app/products')
      },{
        path:'/update/:id',
        element:<Private><Update></Update></Private>,
        loader:({params})=>fetch(`https://server-site-kqfkuzq5h-sumaiyas-projects.vercel.app/products/${params.id}`)
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
