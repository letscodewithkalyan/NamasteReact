import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./src/routes/Home";
import About from "./src/routes/About";
import ContactUs from "./src/routes/ContactUs";
import Header from "./src/components/Header";
import Error from "./src/routes/Error";

const App = () =>{
return(
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
)
} 

const appRouter = createBrowserRouter([
    {   
        path: "/",
        element: <App/>,
        children: [
            {
                path:"/",
                element:<Home/>
            },
            { 
                path: "/About", 
                element: <About /> 
            },
            { 
                path: "/Contactus", 
                element: <ContactUs /> 
            },
        ],
         errorElement: <Error />,
    },
])

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<RouterProvider router={appRouter} />);

