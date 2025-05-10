import styles from "./Footer.module.css"
function Footer() {
    return (
        <div className={styles.container}>
          <footer className={styles.footer}>
            <h2 className={styles.title}>Movie App</h2>
            <p className={styles.footer__author}>Created by tutanakhmen</p>
          </footer>
        </div>
    )
}

export default Footer