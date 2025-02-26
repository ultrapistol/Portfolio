import React, { useState, useEffect, useRef } from 'react';
import './contact.css';

import email from '../../assets/email.png';
import whatsapp from '../../assets/whatsapp.png';
import github from '../../assets/GithubLogo.png';
import linkedin from '../../assets/linkedinLogo.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_t7cs7g7', 'template_zoc70mh', form.current, {
        publicKey: 'cyviKg-mDz0nJ0Vtr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Email enviado!");
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


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
      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type='text' className='name' placeholder='Seu nome' name='from_name' />
        <input type='text' className='email' placeholder='Seu Email' name='from_email' />
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