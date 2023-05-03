import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Recipes from "../pages/Home/Recipes";
import Blogs from "../pages/Home/Blogs";
import UserProfile from "../pages/Home/UserProfile";
import Access from "../layout/access";
import Register from "../pages/Access/Register";
import Login from "../pages/Access/Login";
import Login2 from "../pages/Access/Login2";
import Register2 from "../pages/Access/Register2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/recipes',
        element: <Recipes></Recipes>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs> 
      },
      {
        path: '/user-profile',
        element: <UserProfile></UserProfile> 
      },
      // {
      //   path: 'chef/:id',
      //   element: ,
      //   loader: {params} => fetch(`/${param.id}`)
      // }
    ]
  },
  {
    path: 'access',
    element: <Access></Access>,
    children: [
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'login2',
        element: <Login2></Login2>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'register2',
        element: <Register2></Register2>
      }
    ]
  }
]);

export default router;