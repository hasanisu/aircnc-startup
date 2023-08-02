import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/Shared/ErrorPage'
import Home from '../Pages/Home'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Login/Signup'
import Main from '../Layout/Main'
import ComingSoon from '../Pages/Shared/ComingSoon'
import Details from '../Pages/Details'
import SearchResult from '../Pages/SearchResult'
import Checkout from '../Pages/Checkout'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../Layout/DashboardLayout'
import Welcome from '../Pages/Dashboard/Welcome'
import MyBookings from '../Pages/Dashboard/MyBookings'
import BecomeAhost from '../Pages/Dashboard/BecomeAhost'
import AllUsers from '../Pages/Dashboard/AllUsers'
import AllBookings from '../Pages/Dashboard/AllBookings'
import AddHome from '../Pages/Dashboard/AddHome'
import AllHome from '../Pages/AllHome'
import ManageHomes from '../Pages/Dashboard/ManageHomes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/coming-soon',
        element: <ComingSoon />,
      },
      {
        path: '/service-details/:id',
        element: <Details />,
        loader: ({params}) => fetch(`http://localhost:7000/homes/${params.id}`)
      },
      {
        path: '/search-result',
        element: <SearchResult />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/all-home',
        element: <AllHome />,
      },
      
    ],
  },
  {
    
      path:'/dashboard',
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children:[
        {
          path:'',
          element: <Welcome></Welcome>
        },
        {
          path: 'my-bookings',
          element: <PrivateRoute><MyBookings/></PrivateRoute>
        },
        {
          path: 'become-host',
          element: <PrivateRoute><BecomeAhost/></PrivateRoute>
        },
        {
          path: 'all-users',
          element: <PrivateRoute><AllUsers/></PrivateRoute>
        },
        {
          path: 'all-bookings',
          element: <PrivateRoute><AllBookings/></PrivateRoute>
        },
        {
          path: 'add-home',
          element: <PrivateRoute><AddHome/></PrivateRoute>
        },
        {
          path: 'manage-homes',
          element: <PrivateRoute><ManageHomes/></PrivateRoute>
        },
      ]
      
  }
])

export default router
