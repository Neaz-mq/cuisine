import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Offer from "../pages/Offer/Offer/Offer";
import Chefs from "../pages/Chefs/Chefs/Chefs";
import Tables from "../pages/Tables/Tables/Tables";
import Categories from "../pages/Categories/Categories/Categories";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },

        {
            path: "/menu",
            element: <Menu></Menu>
        },

        {
            path: "/offer",
            element: <Offer></Offer>
        },

         {
            path: "/chefs",
            element: <Chefs></Chefs>
        }, 

        {
            path: "/table",
            element: <Tables></Tables>
        }, 

          {
            path: "/signature-food",
            element: <Categories></Categories>
        }, 


      ]
    },
  ]);
  