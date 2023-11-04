import { NavLink } from "react-router-dom";
import "../public/navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink to="/" className="nav-active">
            Home
          </NavLink>
          <NavLink to="/service" className="nav-active">
            Services
          </NavLink>
          <NavLink to="/contact" className="nav-active">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
