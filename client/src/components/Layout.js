import React from 'react'
import Sidebar from './Sidebar'

export default function Layout({children}) {
  return (
    <div style={{display:"flex"}}><Sidebar/>
    {children}</div>
  )
}
