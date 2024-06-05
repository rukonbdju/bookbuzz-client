import FAQ from "../../components/Common/FAQ"
import Banner from "../../components/Home/Banner"
import Blogs from "../../components/Home/Blogs"
import RecentlyAddedBooks from "../../components/Home/RecentlyAddedBooks"
import TopRatedBooks from "../../components/Home/TopRatedBooks"

const HomePage = () => {
    return (
        <>
            <Banner></Banner>
            <div className="w-4/5 mx-auto my-10">
                <TopRatedBooks></TopRatedBooks>
                <RecentlyAddedBooks></RecentlyAddedBooks>
                <FAQ></FAQ>
            </div>
        </>
    )
}
export default HomePage