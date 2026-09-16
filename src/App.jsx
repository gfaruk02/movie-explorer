import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './App.css'

function Router() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="font-bold text-2xl">Hello World</div>,
  },
]);

  return (
    <>
     <RouterProvider router={router} />,
    </>
  )
}

export default Router
