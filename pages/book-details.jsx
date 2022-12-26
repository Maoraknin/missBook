const { useParams, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React

import { bookUtils } from '../services/book-utils.js'
import { bookService } from '../services/book.service.js'
import { LongTxt } from '../cmps/long-text.jsx';
import { AddReview } from '../cmps/add-review.jsx';
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js';

export function BookDetails() {
    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadBook()
    }, [])


    function loadBook() {
        console.log('book:', book)
        bookService.get(params.bookId)
            .then(setBook)
            .catch((err) => {
                console.log('Had issues with car details', err)
                navigate('/book')
            })
    }

    function onGoBack() {
        navigate('/book')
    }

    function onRemoveReview(book, idx) {
        console.log('book, idx:', book, idx)
        book.reviews.splice(idx, 1)
        bookService.save(book).then(() => {
            showSuccessMsg('Book removed')
            loadBook()
        })
            .catch((err) => {
                console.log('Had issues removing', err)
                showErrorMsg('Could not remove book, try again please!')
            })
    }

    if (!book) return <div>Loading...</div>
    return (

        <section className="book-details">
            <div className="details-container">
                <img src={book.thumbnail} className="details-img"/>
                <div className="book-info-container">
                    <h2>{book.title}</h2>
                    <h3>{book.subtitle}</h3>
                    <p>Author: {book.authors.join(', ')}</p>
                    <p>{bookUtils.getPublishedData(book.publishedDate)}{book.publishedDate}</p>
                    <LongTxt text={book.description} />
                    <p>Categories: {book.categories.join(', ')}</p>
                    <p>{bookUtils.getReadingLvl(book.pageCount)} ,{book.pageCount} pages</p>
                    <p>Language: {book.language}</p>
                    <h3>Price: <span className={bookUtils.getPriceColor(book.listPrice.amount)}>{bookUtils.getPriceToDisplay(book.listPrice.amount, book.listPrice.currencyCode)}</span></h3>
                    {book.listPrice.isOnSale && <p className="green">ON SALE!</p>}
                </div>
            </div>
            <button onClick={onGoBack}>Go Back</button>
            <AddReview bookId={book.id} loadBook={loadBook} />
            {book.reviews &&
                book.reviews.map((review, idx) => {
                    return <div>
                        <div>Full Name: {review.name}</div>
                        <div>Rating: {review.rating}</div>
                        <div>Read at: {review.date}</div>
                        <button onClick={() => onRemoveReview(book, idx)}>Delete review</button>
                    </div>
                })
            }
            {!book.reviews && <div>No Reviews</div>}

        </section>
    )
}