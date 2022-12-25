
import { BookPreview } from "./book-preview.jsx";

export function BookList({books, onSelectBook}) {
    console.log('books:',books)
    return (
        <section>
            <ul className="car-list">
                {
                    books.map(book => <li key={book.id}>
                        <BookPreview book={book} />
                        <div>
                            {/* <button onClick={() => onRemoveCar(car.id)}>Remove car!</button> */}
                            <button onClick={() => onSelectBook(book.id)}>Read More</button>
                        </div>
                    </li>)
                }
            </ul>
        </section>
    )
}