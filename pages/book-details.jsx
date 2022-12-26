const { useParams, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React

import { bookUtils } from '../services/book-utils.js'
import { bookService } from '../services/book.service.js'
import { LongTxt } from '../cmps/long-text.jsx';

export function BookDetails() {
    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()
    
    useEffect(()=>{
        loadBook()
    },[])

    function loadBook(){
        bookService.get(params.bookId)
        .then(setBook)
        .catch((err) => {
            console.log('Had issues with car details', err)
            navigate('/book')
        })
    }

    function onGoBack(){
        navigate('/book')
    }

    if (!book) return <div>Loading...</div>
    return (

        <section className="book-details">
            <img src={book.thumbnail} />
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
            <button onClick={onGoBack}>Go Back</button>
        </section>
    )
}