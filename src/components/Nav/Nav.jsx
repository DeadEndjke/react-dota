import a from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className={a.nav}>
      {" "}
      <nav>
        <ul>
          <li>
            <NavLink to="/">start</NavLink>
          </li>
          <li>
            <NavLink to="/heroes">heroes</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
