import { NavLink } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleMouseOut = () => {
        setSearchValue('');
        setSearchOpen(false);
    };

    return (
        <div>
            <nav className="nav">
                <ul className="left-nav">
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
                <ul className="right-nav">
                    <li className="search-container">
                        <div className="box">
                            <form name="search">
                                <input
                                    type="text"
                                    className={`input search-input ${searchOpen ? 'open' : ''}`}
                                    name="txt"
                                    value={searchValue}
                                    onChange={handleSearchChange}
                                    onMouseOut={handleMouseOut}
                                    autoFocus={searchOpen}
                                />
                            </form>
                            <i className="fas fa-search search-icon" onClick={toggleSearch}></i>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;