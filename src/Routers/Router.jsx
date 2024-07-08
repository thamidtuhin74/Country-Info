import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Component/Pages/Home/Home";
import AllCountries from "../Component/Pages/All-Countries/AllCountries";
import SingleRigion from "../Component/Template/SingleRigion/SingleRigion";
import SingleCountry from "../Component/Template/SingleCountry/SingleCountry";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>,
            loader: ()=> fetch('https://restcountries.com/v3.1/all')
            // loader: ()=> fetch('https://top-market-server-thamidtuhin74.vercel.app/all-toys/')

        },
        {
            path: "/all-countries",
            element: <AllCountries/>,
            loader: ()=> fetch('https://restcountries.com/v3.1/all')
        },
        {
            path: "/region/america",
            element: <SingleRigion/>,
            loader: ()=> fetch('https://restcountries.com/v3.1/region/america')
        },
        {
            path: "/region/europe",
            element: <SingleRigion/>,
            loader: ()=> fetch('https://restcountries.com/v3.1/region/europe')
        },
        {
            path: "/region/asia",
            element: <SingleRigion/>,
            loader: ()=> fetch('https://restcountries.com/v3.1/region/asia')
        },
        {
            path: "/country-details/:countryName",
            element: <SingleCountry/>,
            loader: ({params})=> fetch(`https://restcountries.com/v3.1/name/${params.countryName}?fullText=true`)
        },
        

        // {
        //     path: "/blog",
        //     element: <Blog></Blog>
        // },
        
        
      ]
    },
  ]);

  export default router