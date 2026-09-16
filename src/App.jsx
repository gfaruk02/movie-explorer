import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './App.css'
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import About from "./pages/About";
import Error from "./components/Error";
import Loading from "./components/Loading";
import NotFound from "./components/NotFound";

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
      },
      {
        path:"/about",
        Component: About
      },
      {
        path:"/movies",
        Component: Movies
      },
      {
        path:"*",
        Component: NotFound
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
