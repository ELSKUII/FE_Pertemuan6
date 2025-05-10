import styles from "./Hero.module.css"

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Spiderman</h2>
                    <h3 className={styles.hero__genre}>Genre: Thriller, Drama, Romance</h3>
                    <p className={styles.hero__desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quo rerum, exercitationem eligendi odio dolorem ipsa. Eum ab non debitis.</p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__img} src="https://picsum.photos/600/400" alt="" />
                </div>
            </section>
        </div>

    )
}

export default Hero