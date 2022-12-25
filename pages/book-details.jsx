import { bookUtils } from '../services/book-utils.js'

export function BookDetails({ book, onGoBack }) {

    return (
        <section className="-details">
        <h2>{book.title}</h2>
        <h3>{book.subtitle}</h3>
        <p>Author: {book.authors.join(', ')}</p>
        <img src={book.thumbnail} />
        <p>{bookUtils.getPublishedData(book.publishedDate)}</p>
        <p>Published At: {book.publishedDate}</p>
        <p>{book.description}</p>
        <p>Categories: {book.categories.join(', ')}</p>
        <p>{bookUtils.getReadingLvl(book.pageCount)} ,{book.pageCount} pages</p>
        <p>Language: {book.language}</p>
        <h3>Price: <span className={bookUtils.getPriceColor(book.listPrice.amount)}>{book.listPrice.amount + ' ' + book.listPrice.currencyCode}</span></h3>
        {book.listPrice.isOnSale && <p className="green">ON SALE!</p>} 
         <button onClick={onGoBack}>Go Back</button>
    </section>
    )
}