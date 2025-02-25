import React, { useState, useEffect } from 'react';
import './contact.css';

import email from '../../assets/email.png';
import whatsapp from '../../assets/whatsapp.png';
import github from '../../assets/GithubLogo.png';
import linkedin from '../../assets/linkedinLogo.png';

const Contact = () => {
  const [emoji, setEmoji] = useState(':)');

  useEffect(() => {
    const interval = setInterval(() => {
      setEmoji(prev => (prev === ':)' ? ';P' : ':)'));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id='ContactPage'>
      <h1 className='ContactTitle'>- Contate-me -</h1>
      <span className='contactDesc'>Se preferir, estarei à disposição nos canais abaixo. Ou, caso deseje, envie-me uma mensagem pelo formulário:</span>
      <form className='contactForm'>
        <input type='text' className='name' placeholder='Seu nome' />
        <input type='text' className='email' placeholder='Seu Email' />
        <textarea className='msg' name='message' rows='5' placeholder='Sua mensagem'></textarea>
        <button type='submit' value='Send' className='submitBtn'>Enviar</button>
        <div className='links'>
          <img src={email} alt='email' className='emailIcon' />
          <img src={whatsapp} alt='telefone' className='whatsappIcon' />
          <img src={github} alt='github' className='githubIcon' />
          <img src={linkedin} alt='linkedin' className='linkedinIcon' />
        </div>
        <h2 className='Sorriso'>{emoji}</h2>
      </form>
    </section>
  );
};

export default Contact;