import React from 'react';
import NavBar from './NavBar';

class Favourites extends React.Component {
    render() {
        return(
            <div className="right favourites">
                <NavBar handlerSearch={this.props.handlerSearch} />
                <div className="frame">
                    <div className="frame_bar">
                        <div className="breadcrumbs">
                            <button className="back_btn btn"></button>
                            <div className="current">FAVOURITES</div>
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
                        <div className="img_pattern_item">
                            <img src="" alt="" />
                            <div className="img_pattern_item_overlay"></div>
                            <button className="img_pattern_item_favourite_btn btn"></button>
                        </div>
                    </div>
                    <div className="voting_log">
                        <div className="voting_log_item">
                            <div className="voting_log_item_time">21:56</div>
                            <div className="voting_log_item_text">Image ID:</div>
                            <p className="voting_log_item_spacer"> </p>
                            <div className="voting_log_item_img_id">fQSunHvl8</div>
                            <p className="voting_log_item_spacer"> </p>
                            <div className="voting_log_item_action">was removed from</div>
                            <p className="voting_log_item_spacer"> </p>
                            <div className="voting_log_item_action_target">Favourites</div>
                            <div className="voting_log_item_img"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default Favourites;
