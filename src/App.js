import React, { Children } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import StartFrame from './StartFrame'
import About from './About'
import Contacts from './Contacts'
import PORTFOLIO from './PORTFOLIO'
import Notfound from './Notfound'

let routes=createBrowserRouter([
  {path:'',element:<Layout/> , children:[
    {index:true,element:<StartFrame/>},
    {path:'about',element:<About/>},
    {path:'portfolio',element:<PORTFOLIO/>},
    {path:'contacts',element:<Contacts/>},
    {path:'*',element:<Notfound/>},
  ]}
])

export default function App() {
  return <RouterProvider router={routes}></RouterProvider>
}
