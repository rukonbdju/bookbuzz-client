import axios from "axios"
import { useEffect, useState } from "react"

const useBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/books')
            .then(res => setBooks(res.data))
    }, [])
    return books;
}
export default useBooks