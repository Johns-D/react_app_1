import React from 'react';
import NavBar from './NavBar';

class DefaultState extends React.Component {
    render() {
        return(
            <div className="right defaultstate">
                <NavBar />
                <div className="frame">
                    <div className="frame_bar">
                        <div className="breadcrumbs">
                            <button className="back_btn btn"></button>
                            <div className="current">DISLIKES</div>
                        </div>
                    </div>
                    <div className="defaultstate_text">No item found</div>
                </div>
            </div>
        )
    };
};

export default DefaultState;
