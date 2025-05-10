import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import Movies from "../components/Movies/Movies"
import Navbar from "../components/Navbar/Navbar"
import Counter from "../components/Counter/Counter"
import AddMovieForm from "../components/AddMovieForm/AddMovieForm"
import { useState } from "react"
import data from "../utils/constant/data.js"

function Main() {
    /**
     * Mengangkat state movies: lifting state.
     * Dari Component Movies ke Component Home.
     * Agar bisa digunakan oleh Component yang lain.
     */
    const [movies, setMovies] = useState(data);
    
    return (
        <main>
            <Hero />
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
                {/* Mengirim props: state movies */}
                <Movies movies={movies} setMovies={setMovies} />
            </div>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
                <AddMovieForm movies={movies} setMovies={setMovies} />
            </div>
            <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ color: '#3e51b5', marginBottom: '1rem' }}>State Demo</h2>
                <Counter />
            </div>
        </main>
    )
}

function Home() {
    return (
        <div>
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}

export default Home