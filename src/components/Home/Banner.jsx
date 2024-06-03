import { Link } from "react-router-dom";
import banner from "../../assets/banner.png"
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-content text-center">
                <div className=" max-w-xl">
                    <p className="mb-5 text-3xl font-bold">Welcome to</p>
                    <h1 className=" text-6xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">BOOKBUZZ</h1>
                    <p className="mb-5 text-2xl">A website for book lovers where everyone can share book and review. It is completely free to review and update book's information</p>
                    <Link to={"/login"} className="btn btn-primary">Get Started Now</Link>
                </div>
            </div>
        </div>
    )
}
export default Banner;