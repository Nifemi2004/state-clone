import React from 'react'
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/Login';

const router = createBrowserRouter([{ path: "/", element: <Home /> }, { path: '/login', element: <Login /> }]);

const Routers = () => {
  return <RouterProvider router={router} />;
}

export default Routers