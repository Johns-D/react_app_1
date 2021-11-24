import React from 'react';
import home_img from './img/girl-and-pet.png';

class Home extends React.Component {
    render() {
        return(
                <div className="right home">
                    <div className="bg_rect"></div>
                    <img src={home_img} alt="" />
                </div>
        )
    };
};

export default Home;