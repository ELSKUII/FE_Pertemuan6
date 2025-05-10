import styles from "./Movie.module.css"
import { useState } from "react"

function Movie(props) {
    // Melakukan destructing props
    const { movie } = props;
    const [showDetail, setShowDetail] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    
    /**
     * Create function (event handler) to responding event.
     * Use preventDefault to prevent default behaviour.
     */
    function handleDetailClick(e) {
        // Mencegah perilaku default dari event
        e.preventDefault();
        
        // Toggle state untuk menampilkan/menyembunyikan detail
        setShowDetail(!showDetail);
        
        // Log event untuk pembelajaran
        console.log("Detail button clicked for: " + movie.title);
    }
    
    function handleFavoriteClick(e) {
        e.preventDefault();
        setIsFavorite(!isFavorite);
        console.log(movie.title + (isFavorite ? " removed from" : " added to") + " favorites");
    }

    return (
        <div className={styles.movie}>
            <img 
                className={styles.movie__image} 
                src={movie.poster} 
                alt={movie.title} 
                onClick={() => alert("Poster for " + movie.title)}
            />
            <h3 className={styles.movie__title}>{movie.title}</h3>
            <p className={styles.movie__date}>{movie.year}</p>
            <p className={styles.movie__type}>{movie.type}</p>
            
            <div className={styles.movie__button_container}>
                <a href="#" onClick={handleDetailClick} className={styles.movie__button}>
                    Lihat Detail
                </a>
                
                <button 
                    onClick={handleFavoriteClick} 
                    className={`${styles.movie__button} ${isFavorite ? styles.favorite : ''}`}
                >
                    {isFavorite ? '★ Favorit' : '☆ Favorit'}
                </button>
            </div>
            
            {showDetail && (
                <div className={styles.movie__detail}>
                    <p>ID: {movie.id}</p>
                    <p>Title: {movie.title}</p>
                    <p>Year: {movie.year}</p>
                    <p>Category: {movie.type}</p>
                </div>
            )}
        </div>
    );
}

export default Movie;