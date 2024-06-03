import Banner from "../../components/Home/Banner"
import Blogs from "../../components/Home/Blogs"
import RecentlyAddedBooks from "../../components/Home/RecentlyAddedBooks"
import RecentlyViewedBooks from "../../components/Home/RecentlyViewedBooks"
import TopRatedBooks from "../../components/Home/TopRatedBooks"

const HomePage = () => {
    return (
        <>
            <Banner></Banner>
            <TopRatedBooks></TopRatedBooks>
            <RecentlyAddedBooks></RecentlyAddedBooks>
            <Blogs></Blogs>
            <RecentlyViewedBooks></RecentlyViewedBooks>
        </>
    )
}
export default HomePage