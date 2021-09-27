import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-color">
                <div className="container-fluid">
                    <a href className="navbar-brand">Phone Set Site</a>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;