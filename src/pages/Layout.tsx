import { Outlet } from "react-router-dom";
import Navigation from "../components/public/Navigation";

const Layout = () => {
    return (
        <div>
            <div className="Layout">
                <Navigation />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;