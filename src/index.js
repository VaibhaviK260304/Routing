//react-router-dom use krke routing (using library r-r-d)

import ReactDOM from "react-dom/client"
import Home from "./views/Home/home"
import About from "./views/About/about"
import Contact from "./views/Contact/contact"

import{
    createBrowserRouter,            //is a function
    RouterProvider
}from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById("root"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contact",
        element: <Contact/>
    }

])
    root.render(<RouterProvider router={router}/>)
