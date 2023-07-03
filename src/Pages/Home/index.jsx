import Banner from 'components/Banner';
import Card from 'components/Card';
import Title from 'components/Title';
import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'

function Home() {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/marilia-lins/monstaclips-api/videos')
    .then(res => res.json())
    .then(data => {
      setVideos(data)
    })
  }, [])

  return (
    <div>
      <Banner image="header"/>
      <Title>
        Alguns dos meus vídeo clipes preferidos do Monsta X!
      </Title>
      <section className={styles.cards}>
          {videos.map((video) => {
            return(
              <Card {...video} key={video.id} />
            )
          })}
      </section>
    </div>
  )
}

export default Home;