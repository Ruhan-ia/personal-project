import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
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
import Dashboard from './component/Dashboard/Dashboard.jsx';
import Cart from './component/Cart/Cart.jsx';
import AllUser from './component/User/AllUser.jsx';
import Profile from './component/Profile/Profile.jsx';
import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Hasbro from './component/WaysToShop/ByBrands/Hasbro.jsx';
import Mattel from './component/WaysToShop/ByBrands/Mattel.jsx';
import Tomiyama from './component/WaysToShop/ByBrands/Tomiyama.jsx';
import Age34 from './component/WaysToShop/ByAge/3-4age.jsx';
import Age57 from './component/WaysToShop/ByAge/5-7age.jsx';
import Age89 from './component/WaysToShop/ByAge/8-9age.jsx';
import Age1011 from './component/WaysToShop/ByAge/10-11age.jsx';
import Age1112 from './component/WaysToShop/ByAge/11-12age.jsx';
import Ego from './component/WaysToShop/ByBrands/Ego.jsx';
import AddItem from './component/AddItem/AddItem.jsx';
import AdminRoute from './PrivateRoute/AdminRoute.jsx';
import ManageItem from './component/ManageItem/ManageItem.jsx';
import FpT from './component/WaysToShop/ByBrands/FpT.jsx';
import ScrollUp from './component/ScrollUp/ScrollUp.jsx';
import Payment from './component/Dashboard/Payment/Payment.jsx';
import PaymentHistory from './component/Dashboard/Payment/PaymentHistory/PaymentHistory.jsx';
import AdminHome from './component/Dashboard/AdminHome.jsx';
import UserHome from './component/Dashboard/UserHome/UserHome.jsx';

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
        path:"/fp",
        element:<FpT></FpT>
      },
      {
        path:"/lego",
        element:<Ego></Ego>
      },
      {
        path:"/hasbro",
        element:<Hasbro></Hasbro>
      },
      {
        path:"/mattel",
        element:<Mattel></Mattel>
      },
      {
        path:"/tomiyama",
        element:<Tomiyama></Tomiyama>
      },
      {
        path:"/3-4",
        element:<Age34></Age34>
      },
      {
        path:"/5-7",
        element:<Age57></Age57>
      },
      {
        path:"/8-9",
        element:<Age89></Age89>
      },
      {
        path:"/10-11",
        element:<Age1011></Age1011>
      },
      {
        path:"/11-12",
        element:<Age1112></Age1112>
      },
      {
        path:"/details/:_id",
        element:<Details></Details>,
        loader:({params}) => fetch(`https://personal-project-server-mu.vercel.app/details/${params._id}`)
      }
     
    ]
  },
  {
    
      path:"/dashBoard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,

      children:[
        {path:"cart",
        element:<Cart></Cart>},
        {path:"payment",
        element:<Payment></Payment>},
        {path:"paymentHistory",
        element:<PaymentHistory></PaymentHistory>},
        {path:"userHome",
        element:<UserHome></UserHome>
        },
        {path:"adminHome",
        element:<AdminRoute>
          
          
          <AdminHome></AdminHome>
         
          </AdminRoute>},
        {path:"allUser",
        element:<AdminRoute><AllUser></AllUser></AdminRoute>},
        {path:"addItem",
        element:<AdminRoute><AddItem></AddItem></AdminRoute>},
        {path:"manageItem",
        element:<AdminRoute><ManageItem></ManageItem></AdminRoute>},
        {
          path:"profile",
          element:<Profile></Profile>
        }
        
      ]
  }
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}></RouterProvider>
    
    </QueryClientProvider>
    </AuthProvider>
    
    <ScrollUp></ScrollUp>
  </React.StrictMode>,
)
