import styles from './ErrorPage.module.css'
import wony from './hyungwon.gif'

const ErrorPage = () => {
    return(
        <section className={styles.error}>
            <h2>Algo deu errado!</h2>
            <img src={wony} alt="confused hyungwon" />
            <p>A página que você procura não existe.</p>
        </section>
    )
}

export default ErrorPage;