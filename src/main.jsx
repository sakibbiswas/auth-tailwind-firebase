import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import Authproviders from './Providers/Authproviders';
import Order from './component/Order';
import PrivateRoutes from './Routs/PrivateRoutes';
import Profile from './component/Profile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/profile",
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
      {
        path: "/order",
        element: <PrivateRoutes><Order></Order></PrivateRoutes>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authproviders>

      <RouterProvider router={router} />
    </Authproviders>
  </React.StrictMode>,
)
