import { Link } from "react-router-dom"
import useBooks from "../../hooks/useBooks"
import Book from "../Books/Book"

const TopRatedBooks = () => {
    const books = useBooks()
    return (
        <div className="w-4/5 mx-auto">
            <h1 className="text-3xl">Top rated books</h1>
            <div className="divider"></div>
            <div className="grid grid-cols-3 gap-4">
                {
                    books.slice(0, 3).map(item => <Book key={item._id} book={item}></Book>)
                }
            </div>
            <div className="flex item-center justify-center">
                <Link to={"/books"} className="btn text-2xl my-2 text-center">See more</Link>
            </div>
        </div>
    )
}
export default TopRatedBooks