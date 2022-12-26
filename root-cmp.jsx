const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { Home } from './pages/home.jsx'
import { About } from './pages/about.jsx'
import { BookIndex } from './pages/book-index.jsx'
import { AppHeader } from "./cmps/app-header.jsx"
import { UserMsg } from "./cmps/user-msg.jsx"
import { BookDetails } from './pages/book-details.jsx'
import { AddBook } from './pages/add-book.jsx'

export function App() {



    return <Router>
        <section className="app">
            <AppHeader />

            <main>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<About />} path="/about" />

                    <Route element={<BookIndex />} path="/book" />
                    <Route element={<BookDetails />} path="/book/:bookId" />
                    <Route element={<AddBook />} path="/book/add" />

                </Routes>
            </main>

            <UserMsg />


        </section>

    </Router>

    return <section className="app">
        <main>
            {page === 'home' && <Home />}
            {page === 'about' && <About />}
            {page === 'book' && <BookIndex />}
        </main>
    </section>
}