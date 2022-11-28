import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Forgetpage from "./Components/Forgetpage";
import Resetpassword from "./Components/Resetpassword";
import Practice from "./Components/Practice";




const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App />,
  // },
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
    element: <Signup />,
  },
  {
    path: "/forgetpage",
    element: <Forgetpage />,
  },
  {
    path: "/resetpassword",
    element: <Resetpassword />,
  },
  {
    path: "/practice",
    element: <Practice />,
  }
  
]);

const App = () => {
  return (
    <div>
    <RouterProvider router={router} />    
    
    </div>
    
    
  )
}

export default App





