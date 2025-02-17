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
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">Sobre</Link>
            <Link className="desktopMenuListItem">Projetos</Link>
            <Link className="desktopMenuListItem">Contatos</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src={contactImage} alt="" className="desktopMenuImg" />Contate-me</button>
    </nav>
  )
}

export default Navbar