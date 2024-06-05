import axios from "axios";
import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/api/books')
            .then(res => setBooks(res.data))
    }, [])
    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-4/5 mx-auto my-10">
                {
                    books?.map(item => <Book key={item._id} book={item}></Book>)
                }
            </div>
        </div>
    )
}
export default Books;