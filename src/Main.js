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
import Search from './Search';
import {Routes, Route, NavLink} from "react-router-dom";

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentBreed: '',
            searchWord: ''
        }
        this.setCurrentBreed = this.setCurrentBreed.bind(this)
        this.handlerSearch = this.handlerSearch.bind(this)
    }
    setCurrentBreed(value) {
		this.setState({currentBreed:value})
	}
    handlerSearch(e){
        this.setState({searchWord: e.target.value})
        console.log(this.state.searchWord)
    }
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
                        <Route path="/voting" element={<Voting handlerSearch={this.handlerSearch} /> } />
                        <Route path="/breeds" element={<Breeds handlerSearch={this.handlerSearch} setCurrentBreed={this.setCurrentBreed} />} />
                        <Route path="/breed" element={<Breed handlerSearch={this.handlerSearch} currentBreed={this.state.currentBreed}/>} />
                        <Route path="/gallery" element={<Gallery handlerSearch={this.handlerSearch} modalOpen={this.props.modalOpen} />} />
                        <Route path="/likes" element={<Likes handlerSearch={this.handlerSearch} />} />
                        <Route path="/favourites" element={<Favourites handlerSearch={this.handlerSearch} />} />
                        <Route path="/dislikes" element={<Dislikes handlerSearch={this.handlerSearch} />} />
                        <Route path="/search" element={<Search handlerSearch={this.handlerSearch} searchWord={this.state.searchWord} />} />
                    </Routes>
                </div>
            </div>
        )
    };
};

export default Main;
