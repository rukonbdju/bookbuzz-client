import { Link } from "react-router-dom"

const Book = ({ book }) => {
    console
    const { title, photo_URL, author: { name }, rating,_id } = book
    return (
        <div className="relative p-4 bg-blue-100 shadow-md border-2">
            <figure className="h-80 py-4">
                <img src={photo_URL} alt={title} className="h-full mx-auto" />
            </figure>
            <div className="">
                <h2 className="card-title">{book.title}</h2>
                <p>Author: {name}</p>
                <div>
                    <p>Rating: {rating}/5</p>
                    <div className="rating rating-md">
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked/>
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked/>
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked/>
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked/>
                    </div>
                </div>

                <div className="absolute bottom-1 right-1">
                    <Link to={`/books/${_id}`} className="btn border-2 border-blue-600">View Details</Link>
                </div>
            </div>
        </div>
    )
}
export default Book