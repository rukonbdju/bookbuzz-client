
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

const Book = ({ book, setBooks }) => {
    const [loading,setLoading]=useState(false)

    //delete book
    const handleDeleteBook = async (id) => {
        setLoading(true)
        const response = await axios.post(`http://localhost:3000/api/books/delete/${id}`)
        const { acknowledged } = response
        if(acknowledged){
            setBooks((prev => prev.filter(item => item._id !== id)))
        }
        setLoading(true)
    }

    return (
        <tr className="border-blue-500">
            <td>
                <p>{book?.ISBN}</p>
            </td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={book?.photo_URL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{book?.title}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={book?.author?.photo_URL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{book?.author?.name}</div>
                    </div>
                </div>
            </td>
            <th>
                <Link to={`/books/${book?._id}`} className="btn btn-ghost btn-xs">Details</Link>

                <Link to={`${book?._id}`} className="rounded-md btn btn-xs">Edit</Link>

                <button onClick={() => handleDeleteBook(book._id)} className="btn btn-ghost btn-xs">Delete {loading&&<span className="loading loading-spinner loading-md"></span>}</button>
            </th>
        </tr>
    )
}
export default Book