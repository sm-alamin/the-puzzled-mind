import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Error from "../pages/Error/Error";
import Blogs from "../pages/Blogs/Blogs";
import AllToy from "../pages/AllToy/AllToy";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import EditMyToy from "../pages/MyToys/EditMyToy";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/all-toys",
        element: <AllToy />,
      },
      {
        path: "/toy-details/:id",
        element: <PrivateRoute><ToyDetails /></PrivateRoute>,
      },
      {
        path: "/add-toy",
        element: <PrivateRoute><AddToy /></PrivateRoute>,
      },
      {
        path: "/my-toys",
        element: <PrivateRoute><MyToys /></PrivateRoute>,
      },
      {
        path: "/all-toys/:id",
        element: <EditMyToy />,
      },
      
    ],
  },
]);

export default router;
