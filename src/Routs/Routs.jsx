import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToy from "../Pages/AddToy/AddToy";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UpdateToy from "../Pages/MyToys/UpdateToy";
import Details from "../Pages/Details/Details";
import PrivateRout from "./PrivateRout";
import AddGalleryPhoto from "../Pages/Home/Gallery/AddGalleryPhoto";
import AddReview from "../Pages/Home/CustomerReview/AddReview";









const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
        {
            path:'/',
            element:<Home></Home>
        },{
            path:'/alltoys',
            element: <AllToys></AllToys>
        },
        {
            path: '/mytoys',
            element:<PrivateRout><MyToys></MyToys></PrivateRout>

        },
        {
            path: '/addtoy',
            element: <PrivateRout><AddToy></AddToy></PrivateRout>
        },
        {
            path: '/add-gallery-photo',
            element: <AddGalleryPhoto></AddGalleryPhoto>
        },
        {
            path: '/add-review',
            element: <AddReview></AddReview>
        },
        {
            path: "/blog",
            element:<Blog></Blog>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path:'/update-toy/:id',
          element: <PrivateRout><UpdateToy></UpdateToy></PrivateRout>,
          loader: ({params})=>fetch(`https://toy-wala-server.vercel.app/toy-car/${params.id}`)
        },
        {
          path: '/car-details/:id',
          element:<PrivateRout><Details></Details></PrivateRout>,
          loader:({params})=>fetch(`https://toy-wala-server.vercel.app/toy-car/${params.id}`)
        }
    ]
  },
]);

export default router;