import React from 'react';
import NavBar from './NavBar';

class LoadingState extends React.Component {
    render() {
        return(
            <div className="right loadingstate">
                <NavBar />
                <div className="frame">
                    <div className="frame_bar">
                        <div className="breadcrumbs">
                            <button className="back_btn btn"></button>
                            <div className="current">DISLIKES</div>
                        </div>
                    </div>
                    <div className="loading_wrapp">
                        <div className="loading_img"></div>
                    </div>
                </div>
            </div>
        )
    };
};

export default LoadingState;
