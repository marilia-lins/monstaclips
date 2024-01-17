import Banner from 'components/Banner';
import styles from './Player.module.css'
import Title from 'components/Title';
import { useParams } from 'react-router-dom';
import ErrorPage from 'Pages/ErrorPage';
import { useEffect, useState } from 'react';

const Player = ({title}) => {

    const [videos, setVideos] = useState()
    const params = useParams()


    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/marilia-lins/monstaclips-api/videos?id=${params.id}`)
        .then(res => res.json())
        .then(data => {
            setVideos(...data)
        })
    }, [])

    if(!videos){
        return <ErrorPage />
    }

    return(
        <>
        <Banner image="header"/>
        <Title>
            Assista ao Videoclipe de {videos.title}
        </Title>
        <section className={styles.player}>
            <iframe 
            width="800" 
            height="100%" 
            src={videos.link} 
            title={videos.title}
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
            </iframe>
        </section>
        </>
    )
}

export default Player;