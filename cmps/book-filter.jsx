const { useState, useEffect } = React

import { bookService } from '../services/book.service.js'

export function BookFilter({ onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type, checked } = target
        value = (type === 'number') ? +value : value
        setFilterByToEdit((prevFilter) => {
            if (type === 'checkbox') {
                console.log('checked:', checked)
                return { ...prevFilter, [field]: checked }
            }
            return { ...prevFilter, [field]: value }
        })
    }

    // function setSaleFilter({target}){
    //     console.log('ev:',ev)
    // }


    return <section className="book-filter full">
        <h2>Filter our books</h2>
        <form>
            <label htmlFor="title">title:</label>
            <input type="text"
                id="title"
                name="title"
                placeholder="By title"
                value={filterByToEdit.title}
                onChange={handleChange}
            />

            <label htmlFor="authors">Authors:</label>
            <input type="text"
                id="authors"
                name="authors"
                placeholder="By authors"
                value={filterByToEdit.authors}
                onChange={handleChange}
            />

            <label htmlFor="minPrice">Min price:</label>
            <input type="number"
                id="minPrice"
                name="minPrice"
                placeholder="By min-price"
                value={filterByToEdit.minPrice}
                onChange={handleChange}
            />

            <label htmlFor="isSale">On SALE</label>
            <input type="checkbox"
                id="isSale"
                name="isSale"
                onChange={handleChange}
            />

        </form>

    </section>
}