import styles from './Banner.module.css'

const Banner = ({ image }) => {
    return(
        <div 
            className={styles.banner}
            style={{ backgroundImage: `url('/images/${image}.png')`}}
        >
        </div>
    )
}

export default Banner;