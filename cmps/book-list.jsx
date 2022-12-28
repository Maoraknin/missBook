const { Link } = ReactRouterDOM

import { BookPreview } from "./book-preview.jsx";

export function BookList({books, onRemoveBook}) {
    return (
        <section>
            <ul className="book-list">
                {
                    books.map(book => <li key={book.id}>
                        <BookPreview book={book} />
                        <div>
                            <button onClick={() => onRemoveBook(book.id)}>Remove</button>
                            {/* <button onClick={() => onSelectBook(book.id)}>Read More</button> */}
                            <Link to={`/book/${book.id}`}>Read More</Link>
                        </div>
                    </li>)
                }
            </ul>
        </section>
    )
}