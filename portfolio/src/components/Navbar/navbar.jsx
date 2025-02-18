import React from 'react'
import './navbar.css';
import logo from '../../assets/Logo.png';
import contactImage from '../../assets/contact.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className='logo' />
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">HOME</Link>
            <Link className="desktopMenuListItem">SOBRE</Link>
            <Link className="desktopMenuListItem">PROJETOS</Link>
            <Link className="desktopMenuListItem">CONTATOS</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src={contactImage} alt="" className="desktopMenuImg" />Contate-me</button>
    </nav>
  )
}

export default Navbar