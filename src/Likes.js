import React from 'react';
import NavBar from './NavBar';

class Likes extends React.Component {
    render() {
        return(
            <div className="right likes">
                <NavBar />
                <div className="frame">
                    <div className="frame_bar">
                        <div className="breadcrumbs">
                            <button className="back_btn btn"></button>
                            <div className="current">LIKES</div>
                        </div>
                    </div>
                    <div className="img_pattern">
                        <div className="img_pattern_item">
                            <img src="" alt="" />
                            <div className="img_pattern_item_overlay"></div>
                            <button className="img_pattern_item_favourite_btn btn"></button>
                        </div>
                        <div className="img_pattern_item">
                            <img src="" alt="" />
                            <div className="img_pattern_item_overlay"></div>
                            <button className="img_pattern_item_favourite_btn btn"></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default Likes;
