import Banner from 'components/Banner';
import styles from './Favorites.module.css'
import Title from 'components/Title';
import { useFavoriteContext } from 'Contexts/Favorites';
import Card from 'components/Card';

const Favorites = () => {

    const { favorite } = useFavoriteContext()

    return(
        <>
            { favorite === null ? (
                <>
                    <Banner image='header' />
                    <Title>
                        Clipes Favoritados!
                    </Title>
                    <section className={styles.fave}>
                        {favorite.map((fav) => {
                            return <Card {...fav} key={fav.id} />
                        })}
                    </section>
                </>
            ) : (
                <>
                    <Banner image='header' />
                    <Title>
                        Clipes Favoritados!
                    </Title>
                    <section className={styles.fave}>
                        <h4>Nenhum clipe favoritado ainda</h4>
                    </section>
                </>
            )}
        </>
    )
}

export default Favorites;