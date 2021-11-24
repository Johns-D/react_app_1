import React from 'react';

class NavBar extends React.Component {
    render() {
        return(
            <div className="nav_bar">
                <input className="search_input" type="text" placeholder="Search for breeds by name" />
                <button className="search_btn"></button>
                <a className="likes_btn btn" href="#"></a>
                <a className="favourites_btn btn" href="#"></a>
                <a className="dislikes_btn btn" href="#"></a>
            </div>
        )
    };
};

export default NavBar;