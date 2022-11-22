import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    const cssClass = ({ isActive }) => isActive ? "nav__item nav__item--active" : "nav__item";

    return (
        <>
            <h1>React Router</h1>

            <nav className="nav">
                <NavLink to="/home" className={cssClass}>
                    Home
                </NavLink>
                <NavLink to="/about" className={cssClass}>
                    About
                </NavLink>
                <NavLink to="/posts" className={cssClass}>
                    Posts
                </NavLink>
            </nav>

            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;