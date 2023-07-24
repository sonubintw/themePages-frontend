import {React,useState} from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const activeLink=({isActive})=>(isActive ? "active":"link")


const Sidebaritem = ({item,isOpen}) => {
const [expandMenu, setExpandMenu] = useState(false)

  if(item.children){
    return (
      <div className={expandMenu? "sidebar-item s-parent open": "sidebar-item s-parent"}>

          <div className="sidebar-title">
            <span>
                {item.icon &&  <div className='icon'>{item.icon}</div>}
                {isOpen && <div>{item.title}</div>}
            </span>
            <MdKeyboardArrowRight size={25} className='arrow-icon' onClick={()=>setExpandMenu(!expandMenu)}/>
          </div>
      </div>
    )
  }
  else{
    return (
      <NavLink to={item.path} className={activeLink}>
         <div className='sidebar-item s-parent'>
            <div className="sidebar-title">
                <span>
                    {item.icon && <div className="icon">{item.icon}</div>}
                    {isOpen && <div>{item.title}</div>}
                </span>
              </div>
           </div>          
        </NavLink>
    )
  }

}

export default Sidebaritem