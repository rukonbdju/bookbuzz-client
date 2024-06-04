import { Button } from "@headlessui/react"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import Modal from "../EditBook/Modal"

const Book = ({ book, setBooks }) => {
    let [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }
    //delete book
    const handleDeleteBook = async (id) => {
        const response = await axios.post(`https://bookbuzz-server.vercel.app/api/books/delete/${id}`)
        setBooks((prev => prev.filter(item => item._id !== id)))
        console.log(response)
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
                <Button onClick={open} className="rounded-md btn btn-xs">Edit</Button>
                <Modal close={close} isOpen={isOpen} ></Modal>
                <button onClick={() => handleDeleteBook(book._id)} className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>
    )
}
export default Book