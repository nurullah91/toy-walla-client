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
            element:<MyToys></MyToys>

        },
        {
            path: '/addtoy',
            element: <AddToy></AddToy>
        },
        {
            path: "/blog",
            element:<Blog></Blog>
        }
    ]
  },
]);

export default router;