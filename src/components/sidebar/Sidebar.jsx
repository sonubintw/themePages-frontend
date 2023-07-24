import {React,useState} from 'react'
import "./sidebar.scss"

import {HiMenuAlt3} from "react-icons/hi"
import menu from './SidebarDataicons'//this is JSON file that containts sidebar details with icon 
import Sidebaritem from './Sidebaritem'

//props from App.js
const Sidebar = ({children}) => {

    const [isOpen, setIsOpen] = useState(true)
    const toggle=()=>{
        setIsOpen(!isOpen)
    }


  return (
    <div className='layout'>
        <div className="sidebar" style={{width:isOpen?"230px":"60px"}}>
            
            <div className="top_section">
                <div className='bars' style={{marginLeft:isOpen ? "150px":"0px"}}>
                <HiMenuAlt3 size={40} onClick={toggle}/>
                </div>
            </div>
        
        {menu.map((item,i)=>{
            return  <Sidebaritem key={i} item={item} isOpen={isOpen}/>
        })}
       
        </div>
        <main style={{paddingLeft: isOpen ? "230px" :"60px",transition:"all .5s"}}>{children}</main>
    </div>
  )
}

export default Sidebar