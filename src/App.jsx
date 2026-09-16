import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './App.css'
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Error from "./components/Error";
import Loading from "./components/Loading";

function Router() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <Error/>,
    children:[
      {
        index:true,
        Component: Home,
        hydrateFallbackElement: <Loading/>
      }
      
    ]
  },
]);

  return (
    <>
     <RouterProvider router={router} />,
    </>
  )
}

export default Router
