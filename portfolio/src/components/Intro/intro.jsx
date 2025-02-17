import React from 'react';
import './intro.css';
import {Link} from 'react-scroll';
import bgProfile from '../../assets/bgProfile.png';
import LinkedinLogo from '../../assets/linkedinLogo.png';
import GithubLogo from '../../assets/GithubLogo.png';
import CurriculumLogo from '../../assets/CurriculumLogo.png';
import CurriculumPDF from '../../assets/CurriculumVitae.pdf';


const Intro = () => {
  
  function abrirArquivo(){
    window.open(CurriculumPDF, '_blank');
  
  
  }
  
  return (
    <section id="intro">
      <div className="introContent">
          <span className='Hello'>Olá, eu sou</span>
          <br />
          <span className='introName'>Matheus Brito.</span>
          <span className='JobIntro'>Desenvolvedor Fullstack</span>
          <p className="introPara">Movido pela criatividade e pelo desejo de inovação, desenvolvo sistemas eficientes e 
interfaces atrativas, unindo tecnologia e design para proporcionar experiências intuitivas e
funcionais. Com um olhar estratégico e foco em usabilidade, busco constantemente aprimorar
minhas soluções, garantindo eficiência e alto desempenho.</p>
          
      </div>
      <img src={bgProfile} alt="Profile" className="bgProfile" />

      <div className='divButton'>

        <a href="https://www.linkedin.com/in/matheuscbritodev/" target='_blank'>
          <button className='btnLinkedin'>
              <img className='btnLinkedinImg' src={LinkedinLogo} alt="linkedin" />
          </button>
        </a>
        <a href="https://github.com/ultrapistol" target='_blank' className='btnGithub'> 
          <button className='btnGithub'>
            <img className='btnGithubImg' src={GithubLogo} alt="github" />
          </button>
        </a>
        
  
        <button className='btnCurriculum' onClick={abrirArquivo}><img className='btnCurriculumImg' src={CurriculumLogo} alt="curriculum" /></button>

      </div>

    </section>
  )
}

export default Intro;