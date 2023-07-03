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
            <p>Olá! me chamo Marília. Sou estudante de desenvolvemento web, e criei essa simples aplicação no intuito de estudar React.</p>
            <p>Este site foi inicialmente upado em XX/07/2023, e criado com a utilização de React Hooks, React Router, e ContextAPI.</p>
            <p>Foi inspirado na aplicação 
            <Link className={styles.link} to="https://cinetag.vercel.app/">
                "Cine Tag" 
            </Link>
             desenvolvida por Monica Hillman, instrutora na Alura, e totalmente adaptado por mim.</p>
            <p>Clique para acessar meu <a href='https://github.com/marilia-lins'>Github</a> e meu <a href='https://www.linkedin.com/in/mar%C3%ADlia-gabriela-693a30239/'>Linkedin</a>.</p>
        </div>
    </>
  )
}

export default AboutMe;
