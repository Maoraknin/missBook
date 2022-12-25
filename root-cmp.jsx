const { useState } = React

import { Home } from './pages/home.jsx'
import { About } from './pages/about.jsx'
import { BookIndex } from './pages/book-index.jsx'

export function App() {

    const [page, setPage] = useState('home')
    console.log('page is', page)

    return <section className="app">
        <header className="app-header">
            <h1>My Books App</h1>
            <nav className="app-nav">
                <a href="#" onClick={() => setPage('home')}>Home</a> |
                <a href="#" onClick={() => setPage('about')}>About</a> |
                <a href="#" onClick={() => setPage('book')}>Books</a>
            </nav>
        </header>
        <main>
            {page === 'home' && <Home />}
            {page === 'about' && <About />}
            {page === 'book' && <BookIndex />}
        </main>
    </section>
}