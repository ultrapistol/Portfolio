import React, { useState } from 'react';  // Corrigido: importando useState
import './navbar.css';
import logo from '../../assets/Logo.png';
import contactImage from '../../assets/contact.png';
import { Link } from 'react-scroll';
import hamburger from '../../assets/Hamburger.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); // Definição do estado showMenu

  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className='logo' />
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">HOME</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-1} duration={500} className="desktopMenuListItem">SOBRE</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">PROJETOS</Link>
            <Link activeClass='active' to='ContactPage' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">CONTATO</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src={contactImage} alt="" className="desktopMenuImg" />
        </button>

        <img src={hamburger} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
        <div className="NavMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>HOME</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-1} duration={500} className="listItem" onClick={() => setShowMenu(false)}>SOBRE</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>PROJETOS</Link>
            <Link activeClass='active' to='ContactPage' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>CONTATO</Link>
        </div>
    </nav>
  );
}

export default Navbar;