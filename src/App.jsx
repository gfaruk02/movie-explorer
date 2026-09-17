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
        Component: Home
      },
      {
        path:"/about",
        Component: About
      },
      {
        path:"/movies",
        Component: Movies,
        loader: async({request})=>{
          const url = new URL(request.url)
          const query = url.searchParams.get("q")
          if(!query){
            const res = await fetch("https://api.tvmaze.com/shows")
          
            // console.log(url)
            if(!res.ok){
              throw new Error(" Movies data fetching problem")
            }
            return res.json();
          }
            const res = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
            if (!res.ok) {
              throw new Error("Search data fetching problem");
            }
            return res.json();
        },
        hydrateFallbackElement: <Loading/>
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
