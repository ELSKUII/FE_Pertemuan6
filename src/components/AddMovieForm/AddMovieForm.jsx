import { useState } from "react";
import { nanoid } from "nanoid";
import styles from "./AddMovieForm.module.css";
// Import Component Alert
import Alert from "../Alert/Alert";

function AddMovieForm(props) {
    // Destructuring props
    const { movies, setMovies } = props;

    // Membuat state title
    const [title, setTitle] = useState("");

    // Membuat state date
    const [date, setDate] = useState("");
    
    // Membuat state poster (untuk link gambar)
    const [poster, setPoster] = useState("");
    
    // Membuat state type (untuk tipe film)
    const [type, setType] = useState("");
    
    // Membuat state: isTitleError, isDateError, isPosterError, isTypeError
    const [isTitleError, setIsTitleError] = useState(false);
    const [isDateError, setIsDateError] = useState(false);
    const [isPosterError, setIsPosterError] = useState(false);
    const [isTypeError, setIsTypeError] = useState(false);

    /**
     * Membuat fungsi handleTitle
     * Dijalankan ketika nilai input berubah
     */
    function handleTitle(e) {
        /**
         * Jalankan fungsi setTitle.
         * Set title nilai baru: input saat ini.
         */
        setTitle(e.target.value);
    }

    /**
     * Membuat fungsi handleDate
     * Dijalankan ketika nilai input berubah
     */
    function handleDate(e) {
        /**
         * Jalankan fungsi setDate.
         * Set date nilai baru: input saat ini.
         */
        setDate(e.target.value);
    }
    
    /**
     * Membuat fungsi handlePoster
     * Dijalankan ketika nilai input berubah
     */
    function handlePoster(e) {
        /**
         * Jalankan fungsi setPoster.
         * Set poster nilai baru: input saat ini.
         */
        setPoster(e.target.value);
    }
    
    /**
     * Membuat fungsi handleType
     * Dijalankan ketika nilai select berubah
     */
    function handleType(e) {
        /**
         * Jalankan fungsi setType.
         * Set type nilai baru: select saat ini.
         */
        setType(e.target.value);
    }

    /**
     * Membuat fungsi handleSubmit
     * Mencegah perilaku default form.
     * Mencegah form direfresh ketika disubmit.
     */
    function handleSubmit(e) {
        e.preventDefault();

        // Reset semua error state
        setIsTitleError(false);
        setIsDateError(false);
        setIsPosterError(false);
        setIsTypeError(false);

        // Jika title kosong, set isTitleError menjadi true
        if (title === "") {
            setIsTitleError(true);
            return;
        }
        
        // Jika date kosong, set isDateError menjadi true
        if (date === "") {
            setIsDateError(true);
            return;
        }
        
        // Jika poster kosong, set isPosterError menjadi true
        if (poster === "") {
            setIsPosterError(true);
            return;
        }
        
        // Jika type kosong, set isTypeError menjadi true
        if (type === "") {
            setIsTypeError(true);
            return;
        }
        
        // Jika semua validasi lolos, push movie
        const movie = {
            id: nanoid(),
            title: title,
            year: date,
            type: type,
            poster: poster,
        };

        setMovies([...movies, movie]);
        
        // Clear form fields after submission
        setTitle("");
        setDate("");
        setPoster("");
        setType("");
    }

    return (
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img className={styles.form__img} src="https://picsum.photos/600/400" alt="" />
                </div>

                <div className={styles.form__right}>
                    <h2 className={styles.form__title}>Add Movie</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.form__group}>
                            <label htmlFor="title" className={styles.form__label}>Title</label>
                            <input 
                                id="title" 
                                className={styles.form__input} 
                                type="text" 
                                name="title"
                                // Memberikan value input: title
                                value={title}
                                // Memberikan event onChange
                                onChange={handleTitle}
                            />
                            {/* Menambahkan Conditional Operator
                            * Jika isTitleError true maka render Alert component
                            * Jika isTitleError false maka render empty string
                            */}
                            {isTitleError && <Alert>Title Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="date" className={styles.form__label}>Year</label>
                            <input 
                                id="date"
                                className={styles.form__input} 
                                type="text" 
                                name="date"
                                // Memberikan value input: date
                                value={date}
                                // Memberikan event onChange
                                onChange={handleDate}
                            />
                            {/* Menambahkan Conditional Operator
                            * Jika isDateError true maka render Alert component
                            * Jika isDateError false maka render empty string
                            */}
                            {isDateError && <Alert>Date Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="poster" className={styles.form__label}>Poster Image URL</label>
                            <input 
                                id="poster"
                                className={styles.form__input} 
                                type="text" 
                                name="poster"
                                placeholder="https://example.com/image.jpg"
                                // Memberikan value input: poster
                                value={poster}
                                // Memberikan event onChange
                                onChange={handlePoster}
                            />
                            {/* Menambahkan Conditional Operator untuk error poster */}
                            {isPosterError && <Alert>Poster URL Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="type" className={styles.form__label}>Type</label>
                            <select
                                id="type"
                                className={styles.form__input} 
                                name="type"
                                // Memberikan value select: type
                                value={type}
                                // Memberikan event onChange
                                onChange={handleType}
                            >
                                <option value="">Pilih Type Film</option>
                                <option value="Action">Action</option>
                                <option value="Drama">Drama</option>
                                <option value="Horror">Horror</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Animation">Animation</option>
                            </select>
                            {/* Menambahkan Conditional Operator untuk error type */}
                            {isTypeError && <Alert>Type Film Wajib Dipilih</Alert>}
                        </div>
                        <button className={styles.form__button}>Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default AddMovieForm;
