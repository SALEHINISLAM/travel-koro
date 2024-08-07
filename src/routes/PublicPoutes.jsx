import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import CarouselDetails from "../components/Carosel/CarouselDetails";
import CustomSearch from "../components/CustomSearch/CustomSearch";
import Login from "../pages/Login/Login";
import LogOut from "../pages/LogOut/LogOut";
import Destination from "../pages/Destination/Destination";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router=createBrowserRouter([
    {
        errorElement:<ErrorPage/>
    },
    {
        path:'/',
        element: <Home/>,
        loader:()=>fetch('/traveldata.json'),
    },
    {
        path:'/place/:id',
        element:<PrivateRoutes><CarouselDetails/></PrivateRoutes>,
        loader:()=>fetch('/traveldata.json'),
    },
    {
        path:'/test',
        element:<CustomSearch/>
    },
    {
        path:'/login',
        element:<Login/>,
    },
    {
        path:'/logout',
        element:<LogOut/>,
    },
    {
        path:'/destination',
        element:<Destination/>,
    },
    {
        path:'/blog',
        element:<Blog/>,
    },
    {
        path:'/contact',
        element:<Contact/>,
    },
    {
        path:'/register',
        element:<Register/>
    }
])

export default router;