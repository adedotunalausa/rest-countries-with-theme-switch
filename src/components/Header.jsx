import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <nav>
            <Link className="link" to="/">
                <h1>Where in the world?</h1>
            </Link>
            <div className="theme-button">
                <input id="dark-theme" onClick={props.addTheme} className="theme-input" type="checkbox" />
                <label htmlFor="dark-theme" className="theme-label">
                    {props.mode === "dark-theme" ? <i class="fas fa-sun"></i> : <i class="fas fa-moon"></i>}
                    {props.mode === "dark-theme" ? "Light Mode" : "Dark Mode"}
                </label>
            </div>
        </nav>
    )
}

export default Header;