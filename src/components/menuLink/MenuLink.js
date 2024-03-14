// import React, { useContext } from 'react'
import "./menuLink.scss"


const MenuLink = ({ icon, text, }) => {
  
    return (
        <div className='menuLink'>
            {icon } 
            <span className='menuLinkText'>{text}</span>
            {/* <span className='menuLinkTextName'>{text === "LogOut"  && `(${currentUser.displayName})`}</span> */}

        </div>
    )
}

export default MenuLink