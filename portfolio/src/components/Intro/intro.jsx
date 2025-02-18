import React from 'react';
import './intro.css';
import {Link} from 'react-scroll';
import bgProfile from '../../assets/bgProfile.png';
import LinkedinLogo from '../../assets/linkedinLogo.png';
import GithubLogo from '../../assets/GithubLogo.png';
import CurriculumLogo from '../../assets/CurriculumLogo.png';
import CurriculumPDF from '../../assets/CurriculumVitae.pdf';
import foguete from '../../assets/foguete.png';
import { delay, motion } from "framer-motion";

const buttonVariants = {
  hidden: {opacity: 0, y:20 },
  visible: (i) => ({
    opacity: 1,
    y:0,
    transition: {delay: i * 0.3, duration: 0.8, ease: "easeOut"}
  })
 
}
const textVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.25, duration: 0.8, ease: "easeOut" } // Ajuste o delay conforme necessário
  }
}

const Intro = () => {
  
  function abrirArquivo(){
    window.open(CurriculumPDF, '_blank');
  
  
  }
  
  return (
    <section id="intro">
      <div className="introContent">
      <motion.span 
          className='Hello' 
          initial="hidden" 
          animate="visible"
          variants={textVariants}
        >
          Olá, eu sou
        </motion.span>
        <br />
        <motion.span 
          className='introName' 
          initial="hidden" 
          animate="visible"
          variants={textVariants}
        >
          Matheus Brito.
        </motion.span>
        <motion.span 
          className='JobIntro' 
          initial="hidden" 
          animate="visible"
          variants={textVariants}
        >
          Desenvolvedor Fullstack
        </motion.span>

          <p className="introPara">Movido pela criatividade e pelo desejo de inovação, desenvolvo sistemas eficientes e 
interfaces atrativas, unindo tecnologia e <br />design para proporcionar experiências intuitivas e
funcionais. Com um olhar estratégico e foco em usabilidade, busco constantemente <br />aprimorar
minhas soluções, garantindo eficiência e alto desempenho.</p>
          
      </div>
      <img src={bgProfile} alt="Profile" className="bgProfile" />

      {/* Foguete animado */}
      <motion.img 
        src={foguete} 
        alt="Foguete animado" 
        className='foguete'
        initial={{ x: "8vw" }}
        animate={{ x: "78vw" }}
        transition={{ duration: 3, ease: [0.65, 0, 0.35, 1] }} /* Exagero no easeInOut */
      />

        <motion.div 
          className="rastro"
          initial={{ width: 0, opacity: 1 }} 
          animate={{ width: "70vw", opacity: 0 }} 
          transition={{ duration: 3.5, ease: [0.65, -0.08, 0.3, 1] }}
        />

      <img src={bgProfile} alt="Profile" className="bgProfile" />

      <div className='divButton'>

        {/* Botão LinkedIn */}
        <motion.a 
          href="https://www.linkedin.com/in/matheuscbritodev/" 
          target="_blank"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={buttonVariants}
        >
          <button className='btnLinkedin'>
              <img className='btnLinkedinImg' src={LinkedinLogo} alt="linkedin" />
          </button>
        </motion.a>

        {/* Botão GitHub */}
        <motion.a 
          href="https://github.com/ultrapistol" 
          target="_blank"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={buttonVariants}
        >
          <button className='btnGithub'>
            <img className='btnGithubImg' src={GithubLogo} alt="github" />
          </button>
        </motion.a>

        {/* Botão Currículo */}
        <motion.button 
          className='btnCurriculum' 
          onClick={abrirArquivo}
          initial="hidden"
          animate="visible"
          custom={2}
          variants={buttonVariants}
        >
          <img className='btnCurriculumImg' src={CurriculumLogo} alt="curriculum" />
        </motion.button>

      </div>

    </section>
  )
}

export default Intro;