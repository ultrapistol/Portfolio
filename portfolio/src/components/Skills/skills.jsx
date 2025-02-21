import React from 'react';
import './skills.css';
import UiDesign from '../../assets/interface.png';
import Development from '../../assets/development.png';
import Resolution from '../../assets/resolution.png';
import Quebra from '../../assets/quebra.png';
import Degrade from '../../assets/degradê.png';
import Colchetes from '../../../public/colchetes.png';



const Skills = () => {
  return (
    <section id ='skills'>
        <span className="skillTitle">- Sobre -</span>
        <span className="skillDesc">Natural de São Paulo, sempre teve um forte viés artístico e uma paixão por criar. Iniciou sua jornada no Design Gráfico, aprimorando sua percepção estética e usabilidade, mas logo percebeu o desejo de ir além do visual. Na graduação em Análise e Desenvolvimento de Sistemas, encontrou sua vocação como desenvolvedor fullstack, unindo tecnologia e design para criar soluções inovadoras.
Hoje, aplica sua experiência em C#, React, SQL, JavaScript, Python, CSS e HTML para desenvolver projetos que equilibram criatividade e desempenho, sempre em busca de evolução e novas formas de transformar ideias em realidade.</span>
        <div className="skillBars">

          <div className="skillBar">
            <img src={UiDesign} alt="UiDesign" className="skillBarImg1" />
            <div className="skillbartext">
              <h2 h2 className="skillbartextTitle">UX/UI Design</h2>
              <p>Criação com estética, grids bem ajustados e usabilidade mostram que você tem um olhar refinado para criar interfaces intuitivas e atraentes.</p>
            </div>
          </div>

          <div className="skillBar">
            <img src={Development} alt="Development" className="skillBarImg2" />
            <div className="skillbartext">
              <h2 className="skillbartextTitle">Desenvolvimento Fullstack</h2>
              <p> Experiência com C#, React, SQL, Microsoft SQL Server, JavaScript, Python, CSS e HTML.</p>
            </div>
          </div>

          <div className="skillBar">
            <img src={Resolution} alt="Resolution" className="skillBarImg3" />
            <div className="skillbartext">
              <h2 h2 className="skillbartextTitle">Resolução de Problemas e Aprendizado Contínuo</h2>
              <p>Foco em aprimorar soluções e aprender novas técnicas para otimizar o código e melhorar a experiência do usuário.</p>
            </div>
          </div>
        </div>

    </section>
  )
}

export default Skills;