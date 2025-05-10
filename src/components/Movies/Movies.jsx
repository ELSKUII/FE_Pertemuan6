import Movie from "../Movie/Movie"
import styles from "./Movies.module.css"
import data from "../../utils/constant/data.js"
import { useState } from "react";
import { nanoid } from "nanoid";

function Movies() {
    // Membuat state movies
    const [movies, setMovies] = useState(data);

    function handleClick() {
        // Menggunakan nanoid
        const movie = {
            id: nanoid(),
            title: "Jigsaw Spiral",
            year: 2021,
            type: "Movie",
            poster: "https://picsum.photos/300/400",
        };

        /**
         * Update state movies: setMovies
         * Melakukan teknik spread untuk copy dan merge array
         */
        setMovies([...movies, movie]);
        
        // Log untuk melihat state setelah diperbarui
        console.log("Film baru telah ditambahkan:", movie);
        console.log("Daftar film sekarang:", movies);
    }

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
                <div className={styles.add_button_container}>
                    {/* Element button diberikan event click: onClick */}
                    <button onClick={handleClick}>Add Movie</button>
                </div>
            </div>
        </div>
    )
}

export default Movies