import styles from './Base.module.css'

const Base = ({children}) => {
    return(
        <section className={styles.base}>
            {children}
        </section>
    )
}

export default Base;