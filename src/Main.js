import React from 'react';
import logo from './img/logo.svg';
import Voting from './Voting';
import Gallery from './Gallery';
import Breeds from './Breeds';
import Breed from './Breed';
import Home from './Home';
import Likes from './Likes';
import Favourites from './Favourites';
import Dislikes from './Dislikes';
import {Routes, Route, NavLink} from "react-router-dom";

class Main extends React.Component {
    render() {
        return(
            <div className="container">
                <div></div>
                <div className="left">
                    <NavLink className="logo" to="/">
                        <img src={logo} alt="" />
                    </NavLink>
                    <p className="title">Hi intern!</p>
                    <p className="desc">Welcome to MSI 2021 Front-end test</p>
                    <p className="desc_2">Lets start using The Dogs API</p>
                    <div className="links">
                        <NavLink className="links_item voting" to="/voting">
                            <div className="links_item_img_border">
                                <div className="links_item_img"></div>
                            </div>
                            <p>VOTING</p>
                        </NavLink>
                        <NavLink className="links_item breeds" to="/breeds">
                            <div className="links_item_img_border">
                                <div className="links_item_img"></div>
                            </div>
                            <p>BREEDS</p>
                        </NavLink>
                        <NavLink className="links_item gallery" to="/gallery">
                            <div className="links_item_img_border">
                                <div className="links_item_img"></div>
                            </div>
                            <p>GALLERY</p>
                        </NavLink>
                    </div>
                </div>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/voting" element={<Voting />} />
                        <Route path="/breeds" element={<Breeds />} />
                        <Route path="/breed" element={<Breed breedInfo={this.props.breedInfo} />} />
                        <Route path="/gallery" element={<Gallery modalOpen={this.props.modalOpen} />} />
                        <Route path="/likes" element={<Likes />} />
                        <Route path="/favourites" element={<Favourites />} />
                        <Route path="/dislikes" element={<Dislikes />} />
                    </Routes>
                </div>
            </div>
        )
    };
};

export default Main;
