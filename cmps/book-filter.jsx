const { useState, useEffect } = React

import { bookService } from '../services/book.service.js'

export function BookFilter({ onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setFilterByToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }


    return <section className="car-filter">
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

            <label htmlFor="minPrice">Min price:</label>
            <input type="number"
                id="minPrice"
                name="minPrice"
                placeholder="By min-price"
                value={filterByToEdit.minPrice}
                onChange={handleChange}
            />

        </form>

    </section>
}