import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const SingleBook = () => {
    const params = useParams()
    const [book, setBook] = useState({})
    console.log(params)
    useEffect(() => {
        axios.get(`http://localhost:3000/api/books/${params.id}`).then(res => setBook(res.data))
    }, [params.id])
    return (
        <div className=" w-4/5 mx-auto">
            <div className=" bg-base-100 grid grid-cols-1 gap-4 md:grid-cols-5 my-10 p-5  rounded-md">

                <figure className="h-80 col-span-2 mx-auto">
                    <img src={book?.photo_URL} className="h-full" alt="Album" />
                </figure>
                <div className="col-span-3">
                    <h2 className="text-3xl">{book?.title}</h2>
                    <p>Author: {book?.author?.name}</p>
                    <p>ISBN: {book?.ISBN}</p>
                    <p>Rating: {book.rating}/5</p>
                    <div className="rating rating-md">
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                    </div>
                    <p>Pages: {book?.pages}</p>
                    <p>Language: {book?.language}</p>
                </div>
            </div>
            <section className="bg-base-100 rounded-md my-10 p-5">
                <h2 className="text-3xl">Summary</h2>
                <div className="divider"></div> 
                <p>{book?.summary}</p>
            </section>

            <section className="bg-base-100 rounded-md my-10 p-5">
                <h2 className="text-3xl">Review</h2>
                <div className="divider"></div> 
                <p>{book?.summary}</p>
            </section>
        </div>
    )
}
export default SingleBook