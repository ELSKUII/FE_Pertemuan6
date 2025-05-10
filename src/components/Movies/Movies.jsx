import Movie from "../Movie/Movie"
import styles from "./Movies.module.css"

function Movies(props) {
    // Menangkap props: state movies
    const { movies, setMovies } = props;

    return(
        <div>
            <div className={styles.container}>
                <section className={styles.movies}>
                    <h2 className={styles.movies__title}>Latest Movies</h2>
                    <div className={styles.movie__container}>
                        {/**
                         * Looping movies (array)
                         * Render Component Movie dan kirim props movie
                         */}
                        {movies.map((movie) => {
                            return <Movie key={movie.id} movie={movie} />;
                        })}
                    </div>
                </section>
                {/* Form telah dipindahkan ke Home.jsx */}
            </div>
        </div>
    )
}

export default Movies