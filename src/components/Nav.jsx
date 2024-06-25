import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>
            </nav>
        </div>
    )
}

export default Nav;