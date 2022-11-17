import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'


export default function Layout({children}) {
  const navigate=useNavigate()
  const [loggedIn] = useState(true)
   useEffect(function() {
    if(!loggedIn){navigate("/")}
   },[])
  return (
    <div style={{display:"flex"}}><Sidebar/>
    {children}</div>
  )
}
