import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Component/Pages/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>,
            // loader: ()=> fetch('https://top-market-server.vercel.app/all-toys/')
            // loader: ()=> fetch('https://top-market-server-thamidtuhin74.vercel.app/all-toys/')

        },
        // {
        //     path: "/login",
        //     element: <Login></Login>,
        // },
        // {
        //     path: "/register",
        //     element: <Register></Register>
        // },
        // {
        //     path: "/blog",
        //     element: <Blog></Blog>
        // },
        
        
      ]
    },
  ]);

  export default router