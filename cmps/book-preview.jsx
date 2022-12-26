import { bookUtils } from '../services/book-utils.js'

export function BookPreview({book}) {

    
    return (
        <article className="book-preview">
        <img src={book.thumbnail} />
        <h2 className="book-preview-title">{book.title}</h2>
        <p>Author: {book.authors.join(', ')}</p>
        <p>{bookUtils.getReadingLvl(book.pageCount)}</p>
        <h3 className="book-preview-price"><span className={bookUtils.getPriceColor(book.listPrice.amount)}>{bookUtils.getPriceToDisplay(book.listPrice.amount, book.listPrice.currencyCode)}</span></h3>
    </article>
    )
}

// {book.listPrice.amount}