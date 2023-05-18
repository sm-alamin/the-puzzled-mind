import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import Header from "../pages/Shared/Header/Header";
import PageFooter from "../pages/Shared/PageFooter/PageFooter";



const Main = () => {
    return (
        <div>
            <Header />
            <NavigationBar />
            <Outlet />
            <PageFooter />
        </div>
    );
};

export default Main;