import React from 'react';
import logo from './img/logo.svg';

class Left extends React.Component {
    render() {
        return(
                <div className="left">
                    <a className="logo" href="home.html">
                        <img src={logo} alt="" />
                    </a>
                    <p className="title">Hi intern!</p>
                    <p className="desc">Welcome to MSI 2021 Front-end test</p>
                    <p className="desc_2">Lets start using The Dogs API</p>
                    <div className="links">
                        <a className="links_item voting" href="voting.html">
                            <div className="links_item_img_border">
                                <div className="links_item_img"></div>
                            </div>
                            <p>VOTING</p>
                        </a>
                        <a className="links_item breeds" href="breeds.html">
                            <div className="links_item_img_border">
                                <div className="links_item_img"></div>
                            </div>
                            <p>BREEDS</p>
                        </a>
                        <a className="links_item gallery" href="gallery.html">
                            <div className="links_item_img_border">
                                <div className="links_item_img"></div>
                            </div>
                            <p>GALLERY</p>
                        </a>
                    </div>
                </div>
        )
    };
};

export default Left;