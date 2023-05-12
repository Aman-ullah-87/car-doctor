import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import ServiceDetails from "../Pages/Home/Service/ServiceDetails/ServiceDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
      {
        path:'servicesdetails/:id',
        element:<ServiceDetails/>,
        loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)

      },
    ],
  },
]);

export default router;
