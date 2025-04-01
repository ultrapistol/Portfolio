import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './works.css';
import Farmecho1 from '../../assets/login.png';
import Farmecho2 from '../../assets/CadastroCliente.png';
import Farmecho3 from '../../assets/telaInicial.png';
import Farmecho4 from '../../assets/Cadastro.png';
import APIgif from '../../assets/APIgif.gif';
import FarmechoGif from '../../assets/Farmecho.gif';
import PomodoroGif from '../../assets/Pomodoro.gif';
import Quebra from '../../assets/quebra.png';

const worksData = [
  {
    title: "Farmecho",
    description: "Sistema de gerenciamento focado em agricultura urbana. CRUD em funcionamento com Microsoft SQL Server",
    image: FarmechoGif,
    technologies: "C#, .Net, MSSQL",
    buttonText: "Acesse",
    buttonLink: "https://github.com/ultrapistol/Farmecho"
  },
  {
    title: "PomodoroBeats",
    description: "Plataforma que combina a técnica Pomodoro com músicas Lo-Fi para aumentar a concentração e a produtividade",
    image: PomodoroGif,
    technologies: "Bootstrap, HTML, JS",
    buttonText: "Saiba mais",
    buttonLink: "https://ultrapistol.github.io/PomodoroBeats/LandindPage.html"
  },
  {
    title: "API Super Herói",
    description: "API para gerenciar um banco de dados de heróis, permitindo operações CRUD e consultas dinâmicas.",
    image: APIgif,
    technologies: "C#, MSSQL",
    buttonText: "Saiba mais",
    buttonLink: "https://github.com/ultrapistol/SuperHeroAPI"
  },
  {
    title: "Projeto 4",
    description: "Descrição breve do projeto 4.",
    image: "/portfolio/src/assets/projeto4.jpg",
    technologies: "Angular, SCSS, PostgreSQL",
    buttonText: "Saiba mais",
    buttonLink: "https://meusite.com/projeto4"
  }
];

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">- Projetos -</h2>
      <Swiper
        className="worksSwiper"
        modules={[Navigation, Pagination]}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 }
        }}
      >
        {worksData.map((work, index) => (
          <SwiperSlide key={index} className="workSlide">
            <div className="workCard">
              <h3 className='topo'>///</h3>
              <img src={work.image} alt={work.title} className="workImage" />
              <h3 className="workTitle">{work.title}</h3>
              <p className="workDescription">{work.description}</p>
              <p className="workTechnologies">Tech: {work.technologies}</p>
              
              {/* Botão para acessar o projeto */}
              {work.buttonText && work.buttonLink && (
                <a href={work.buttonLink} target="_blank" rel="noopener noreferrer">
                  <button className="botão">{work.buttonText}</button>
                </a>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
      <img src={Quebra} alt="Quebra de pagina" className='Quebra2'/>
      </div>
     
    </section>
  );
}

export default Works;
