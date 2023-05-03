import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Home/Blogs";
import UserProfile from "../pages/Home/UserProfile";
import Access from "../layout/access";
import Register from "../pages/Access/Register";
import Login from "../pages/Access/Login";
import ChefDetails from "../pages/Home/ChefDetails/ChefDetails";
import PrivateRoute from "./PrivateRoute";
import Error from "../layout/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/user-profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <ChefDetails></ChefDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b7a10-chef-recipe-hunter-server-side-iftekher-aziz.vercel.app/chefs/${params.id}`
          ),
      },
    ],
  },
  {
    path: "access",
    element: <Access></Access>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;