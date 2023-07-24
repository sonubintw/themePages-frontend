import React from 'react'
import "./footer.scss"

const Footer = ({themeData}) => {
  const{primaryColor}=themeData

  return (
    <div className='--pad header' style={{background:primaryColor}}>
    <div className="--flex-between">
        <h3>
            <span className='--fw-bold' >
            <p style={{color:"white"}}>All Rights are LEFT &copy;2023</p>
            </span>
           
        </h3>
    </div>
</div>
  )
}

export default Footer