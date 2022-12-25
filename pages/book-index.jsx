const { useState, useEffect } = React

import { bookService } from '../services/book.service.js';
import { BookFilter } from '../cmps/book-filter.jsx';
import { BookDetails } from './book-details.jsx';
import { BookList } from '../cmps/book-list.jsx';

export function BookIndex() {

    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy).then(setBooks)
    }

    function onSetFilter(filterByFromFilter) {
        setFilterBy(filterByFromFilter)
    }

    function onSelectBook(bookId) {
        bookService.get(bookId).then(setSelectedBook)
    }

    return (
        <section className="car-index ">
            {!selectedBook && <div>
                <h2>Books Index</h2>
                <BookFilter onSetFilter={onSetFilter} />
                <BookList books={books} onSelectBook={onSelectBook} />
            </div>}


            {selectedBook && <BookDetails
                book={selectedBook}
                onGoBack={() => setSelectedBook(null)}
            />}
        </section>
    )
}