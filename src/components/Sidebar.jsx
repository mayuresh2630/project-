import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaRegChartBar,
    FaThList,
    FaCheckCircle,
    FaAward
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
       
        {
            path:"/Dataentry",
            name:"Dataentry",
            icon:<FaRegChartBar/>
        },
        {
            path:"/Training",
            name:"Training/Certification",
            icon:<FaAward/>
        },
        {
            path:"/Validation",
            name:"Validation",
            icon:<FaCheckCircle/>
        },
        {
            path:"/View",
            name:"View",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "252px" : "80px"}} className="sidebar">
               <div className="top_section">
                   
                   <div style={{marginLeft: isOpen ? "194px" : "12px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;