import { Outlet } from "react-router-dom";
import Footer from "../../components/Common/Footer";
import Navbar from "../../components/Common/Navbar/Navbar";

const RootLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}
export default RootLayout;