import React from 'react';
import {NavLink} from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return(
            <div className="nav_bar">
                <input className="search_input" type="text" placeholder="Search for breeds by name" />
                <button className="search_btn"></button>
                <NavLink className="likes_btn btn" to="/likes"></NavLink>
                <NavLink className="favourites_btn btn" to="/favourites"></NavLink>
                <NavLink className="dislikes_btn btn" to="/dislikes"></NavLink>
            </div>
        )
    };
};

export default NavBar;