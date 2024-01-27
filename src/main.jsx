import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import Main from './Main/Main.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Login from './component/Login/Login.jsx';
import SignUp from './component/SignUp/SignUp.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import About from './component/About/About.jsx';
import Details from './component/ToyCards/Details/Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {path:"/",
      element:<Home></Home>},
      {
          path:"/login",
          element:<Login></Login>
      },
      {
        path:"/signUp",
        element:<SignUp></SignUp>
      },
      {
        path:"/about",
        element:<PrivateRoute><About></About></PrivateRoute>
      },
      {
        path:"/details/:_id",
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:5000/details/${params._id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>

    </AuthProvider>
  </React.StrictMode>,
)
