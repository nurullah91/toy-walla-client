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
          element: <UpdateToy></UpdateToy>,
          loader: ({params})=>fetch(`http://localhost:5000/toy-car/${params.id}`)
        }
    ]
  },
]);

export default router;