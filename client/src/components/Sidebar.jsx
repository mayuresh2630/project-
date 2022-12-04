import React, { useState } from 'react';
import "./Sidebar.css";
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
            path:"/Dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
       
        {
            path:"/Dashboard/Dataentry",
            name:"Dataentry",
            icon:<FaRegChartBar/>
        },
        {
            path:"/Dashboard/Training",
            name:"Training/Certification",
            icon:<FaAward/>
        },
        {
            path:"/Dashboard/Validation",
            name:"Validation",
            icon:<FaCheckCircle/>
        },
        {
            path:"/Dashboard/View",
            name:"View",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="">
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
                           <div style={{display: isOpen ? "block" : "none", textDecoration:"none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           {/* <main></main> */}
        </div>
    );
};

export default Sidebar;