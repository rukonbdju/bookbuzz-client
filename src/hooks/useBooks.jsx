import axios from "axios"
import { useEffect, useState } from "react"

const useBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        axios.get('https://bookbuzz-server.vercel.app/api/books')
            .then(res => setBooks(res.data))
    }, [])
    return books;
}
export default useBooks