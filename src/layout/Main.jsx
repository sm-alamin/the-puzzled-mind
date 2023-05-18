import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import { Footer } from "flowbite-react";
import Header from "../pages/Shared/Header/Header";


const Main = () => {
    return (
        <div>
            <Header />
            <NavigationBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;