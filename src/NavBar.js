import React from 'react';
import {NavLink} from "react-router-dom";

class NavBar extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="nav_bar">
                <input onChange={this.props.handlerSearch} className="search_input" type="text" placeholder="Search for breeds by name" />
                <NavLink onClick={this.props.searchBreedFromName} className="search_btn" to='/search' ></NavLink>
                <NavLink className="likes_btn btn" to="/likes"></NavLink>
                <NavLink className="favourites_btn btn" to="/favourites"></NavLink>
                <NavLink className="dislikes_btn btn" to="/dislikes"></NavLink>
            </div>
        )
    };
};

export default NavBar;