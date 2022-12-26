
import { StarRating } from '../cmps/star-rating.jsx';
import { bookService } from '../services/book.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js';

export function AddReview({ bookId, loadBook }) {

    function onReviewBook(ev) {
        ev.preventDefault()
        const { target } = ev
        // let rating = 0
        // target.star.map(star => {
        //     console.log('star:',star)
        // })
        // console.log('target.star:',target.star)
        const name = target.fullname.value
        const rating = target.rating.value
        const date = target.readAt.value
        const bookReview = { name: name, rating: rating, date: date }
        bookService.addReview(bookId, bookReview).then(() => {
            // console.log('book:',book)
            // navigate('/book')
            showSuccessMsg('Book review added')
            loadBook()
        }).catch((err) => {
            console.log('Had issues adding review', err)
            showErrorMsg('Could not add book review, try again please!')
        })
    }


    return (
        <section>
            <h2>Enter Review!</h2>
            <form onSubmit={onReviewBook}>
                <div>
                    <label htmlFor="fullname">Full name : </label>
                    <input type="text"
                        name="fullname"
                        id="fullname"
                        placeholder="Enter fullname..."
                    />
                </div>
                {/* {<div className="stars">
                    <input id="star-5" type="radio" name="star" />
                    <label htmlFor="star-5"></label>
                    <input id="star-4" type="radio" name="star" />
                    <label htmlFor="star-4"></label>
                    <input id="star-3" type="radio" name="star" />
                    <label htmlFor="star-3"></label>
                    <input id="star-2" type="radio" name="star" />
                    <label htmlFor="star-2"></label>
                    <input id="star-1" type="radio" name="star" />
                    <label htmlFor="star-1"></label>
                </div>} */}
                {/* <StarRating /> */}
                <div>
                    <label htmlFor="rating">Rating : </label>
                    <input type="range"
                        name="rating"
                        id="rating"
                        min="1"
                        max="5"
                    />
                </div>
                <div>
                    <label htmlFor="readAt">Read at : </label>
                    <input type="date"
                        name="readAt"
                        id="readAt"
                        placeholder="Enter reading date..."
                    />
                </div>

                <button>Add Review</button>
            </form>
        </section>
    )
}