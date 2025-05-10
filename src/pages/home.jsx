import Footer from "../components/Footer/Footer"
import Form from "../components/Form/Form"
import Hero from "../components/Hero/Hero"
import Movies from "../components/Movies/Movies"
import Navbar from "../components/Navbar/Navbar"
import Counter from "../components/Counter/Counter"

function Main() {
    return (
        <main>
            <Hero />
            <Movies />
            {/* State Demo Component */}
            <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ color: '#3e51b5', marginBottom: '1rem' }}>State Demo</h2>
                <Counter />
            </div>
            <Form />
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