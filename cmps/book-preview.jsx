import { bookUtils } from '../services/book-utils.js'

export function BookPreview({book}) {

    
    return (
        <article className="car-preview">
        <h2>{book.title}</h2>
        <h3>{book.subtitle}</h3>
        <p>Author: {book.authors.join(', ')}</p>
        <img src={book.thumbnail} />
        <p>{bookUtils.getPublishedData(book.publishedDate)}</p>
        <p>Categories: {book.categories.join(', ')}</p>
        <p>{bookUtils.getReadingLvl(book.pageCount)}</p>
        <p>Language: {book.language}</p>
        <h3>Price: <span className={bookUtils.getPriceColor(book.listPrice.amount)}>{book.listPrice.amount + ' ' + book.listPrice.currencyCode}</span></h3>
    </article>
    )
}

// {book.listPrice.amount}