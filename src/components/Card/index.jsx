import styles from './Card.module.css'
import blank from './blank.png'
import black from './black.png'
import { Link } from 'react-router-dom'
import { useFavoriteContext } from 'Contexts/Favorites'

const Card = ({ id, title, poster }) => {

    const { favorite, addFavorite } = useFavoriteContext()

    const isFavorite = favorite.some((fav) => fav.id === id)

    const icon = ! isFavorite ? blank : black

    return(
            <div className={styles.card}>
                <Link className={styles.link} to={`/${id}`}>
                    <img src={poster} alt={title} className={styles.img} />
                    <h2>{title}</h2>
                </Link>
                <img 
                    src={icon} 
                    alt="like the mv" 
                    className={styles.fave}
                    onClick={() => {
                        addFavorite({id, title, poster})
                    }}
                    />  
            </div>
    )
}

export default Card;