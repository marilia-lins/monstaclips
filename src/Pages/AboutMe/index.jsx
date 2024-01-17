import Banner from 'components/Banner';
import styles from './AboutMe.module.css'
import React from 'react'
import Title from 'components/Title';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <>
        <Banner image='header'/>
        <Title>
            Sobre Mim:
        </Title>
        <div className={styles.text}>
            <p>Olá! me chamo Marília Lins e criei essa aplicação no intuito de estudar React.</p>
            <p>Site criado com React.jsx, React Hooks, React Router, ContextAPI e api do <a href="https://my-json-server.typicode.com/marilia-lins/monstaclips-api">my-json-server.</a> </p>
            <p>Foi inspirado na aplicação 
            <Link className={styles.link} to="https://cinetag.vercel.app/">
                "Cine Tag" 
            </Link>
             desenvolvida por Monica Hillman, instrutora na Alura, e adaptado por mim.</p>
            <p>Clique para acessar o repositório no <a href='https://github.com/marilia-lins/monstaclips'>Github</a> e para visualizar meu perfil no <a href='https://www.linkedin.com/in/marilia-gabriela-lins/'>Linkedin</a>.</p>
        </div>
    </>
  )
}

export default AboutMe;
