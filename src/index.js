import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Products from './routes/products';
import Carts from './routes/carts';
import Product from './routes/productDetails';
import Cart from './routes/cartDetails';
import LogIn from './routes/login';
import SignUp from './routes/signup.jsx';
import Sidebar from './routes/sidebar';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path: "/",
        element: <Sidebar />,
        children:[
          {
            path:"/",
            element:<Products />
          },
          {
            path:"products/",
            element: <Products />,
          },
          {
            path:"carts/",
            element: <Carts/>
          }

        ]
      },
          {
            path:"login/",
            element: <LogIn />
          },
          {
            path:"signup/",
            element: <SignUp/>
          },
          {
            path: "product/:productId",
            element: <Product />
          },
          {
            path: "cart/:cartId",
            element: <Cart/>
          },        
        ],

      },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)