import { useEffect, useState } from "react"
import useBooks from "../../../hooks/useBooks"
import Book from "../Book/Book"
import axios from "axios"

const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        axios.get('https://bookbuzz-server.vercel.app/api/books')
            .then(res => setBooks(res.data))
    }, [])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>ISBN</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {/* row  */}
                        {
                            books.map(item=><Book key={item._id} book={item} setBooks={setBooks}></Book>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Books