import React from 'react';
import NavBar from './NavBar';

class Search extends React.Component {
    render() {
        return(
            <div className="right search">
                <NavBar />
                <div className="frame">
                    <div className="frame_bar">
                        <div className="breadcrumbs">
                            <button className="back_btn btn"></button>
                            <div className="current">SEARCH</div>
                        </div>
                    </div>
                    <div className="search_results_text">Search results for: <span>Basenji</span></div>
                    <div className="img_pattern">
                        <div className="img_pattern_item">
                            <img src="" alt="" />
                            <div className="img_pattern_item_overlay"></div>
                            <a className="img_pattern_item_breed_link" href="#">Basenji</a>
                        </div>
                        <div className="img_pattern_item">
                            <img src="" alt="" />
                            <div className="img_pattern_item_overlay"></div>
                            <a className="img_pattern_item_breed_link" href="#">Basenji</a>
                        </div>
                        <div className="img_pattern_item">
                            <img src="" alt="" />
                            <div className="img_pattern_item_overlay"></div>
                            <a className="img_pattern_item_breed_link" href="#">Basenji</a>
                        </div>
                        <div className="img_pattern_item">
                            <img src="" alt="" />
                            <div className="img_pattern_item_overlay"></div>
                            <a className="img_pattern_item_breed_link" href="#">Basenji</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default Search;
