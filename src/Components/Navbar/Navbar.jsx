import React, { useRef, useState } from 'react'
import './Navbar.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {

  const [menu, setmenu] = useState("home")
  const menuRef = useRef()

  const openMenu = () => {
    menuRef.current.style.right = "0"
  } 

  const closeMenu = () => {
    menuRef.current.style.right = "-350px"
  }
  


  return (
    <div className='Navbar'>
      <div className="title">
        <h1>Elxan</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setmenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} /> : <></>}</li>
        <li><AnchorLink className='anchor-link' href='#about'><p onClick={() => setmenu("about")}>About Me</p></AnchorLink>{menu === "about" ? <img src={underline} /> : <></>}</li>
        <li><AnchorLink className='anchor-link'  href='#services'><p onClick={() => setmenu("services")}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} /> : <></>}</li>
        <li><AnchorLink className='anchor-link'  href='#work'><p onClick={() => setmenu("work")}>Porfolio</p></AnchorLink>{menu === "work" ? <img src={underline} /> : <></>}</li>
        <li><AnchorLink className='anchor-link'  href='#contact'><p onClick={() => setmenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} /> : <></>}</li>
      </ul>
      <button className="nav-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me </AnchorLink></button>
    </div>

  )
}

export default Navbar