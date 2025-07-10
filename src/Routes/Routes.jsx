import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

// Lazy load all components
const Main = lazy(() => import("../layout/Main"));
const Home = lazy(() => import("../pages/Home/Home/Home"));
const Menu = lazy(() => import("../pages/Menu/Menu/Menu"));
const Offer = lazy(() => import("../pages/Offer/Offer/Offer"));
const Chefs = lazy(() => import("../pages/Chefs/Chefs/Chefs"));
const Tables = lazy(() => import("../pages/Tables/Tables/Tables"));
const Categories = lazy(() => import("../pages/Categories/Categories/Categories"));
const Carts = lazy(() => import("../pages/Carts/Carts"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu /> },
      { path: "/offer", element: <Offer /> },
      { path: "/chefs", element: <Chefs /> },
      { path: "/table", element: <Tables /> },
      { path: "/order", element: <Categories /> },
      { path: "/carts", element: <Carts /> },
    ],
  },
]);
