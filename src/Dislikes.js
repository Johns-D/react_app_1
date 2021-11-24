import React from 'react';
import NavBar from './NavBar';

class Dislikes extends React.Component {
    render() {
        return(
            <div className="right dislikes">
                <NavBar />
                <div className="frame">
                    <div className="frame_bar">
                        <div className="breadcrumbs">
                            <button className="back_btn btn"></button>
                            <div className="current">DISLIKES</div>
                        </div>
                    </div>
                    <div className="img_pattern">
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

export default Dislikes;
