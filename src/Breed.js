import React from 'react';
import NavBar from './NavBar';
import Slider from './Slider';

class Breed extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        console.log(this.props);
        return(
            <div className="right breed">
                <NavBar />
                <div className="frame">
                    <div className="frame_bar">
                        <div className="breadcrumbs">
                            <button className="back_btn btn"></button>
                            <div className="current">BREEDS</div>
                            <div className="current_breed_id">{this.props.breedInfo.breeds[0].id}</div>
                        </div>
                    </div>
                    <div className="breed_gallery">
                        <Slider breedImg={this.props.breedInfo.breedImg} />
                    </div>
                    <div className="breed_info">
                        <p className="breed_info_name">{this.props.breedInfo.breeds[0].name}</p>
                        <p className="breed_info_bred_for">{this.props.breedInfo.breeds[0].bred_for}</p>
                        <div className="breed_info_in_wrapp_1">
                            <div className="breed_info_temperament_wrapp">
                                <p className="breed_info_temperament_title">Temperament:</p>
                                <p className="breed_info_temperament_text">{this.props.breedInfo.breeds[0].temperament}</p>
                            </div>
                            <div className="breed_info_in_wrapp_2">
                                <p className="breed_info_height">Height: <span>{this.props.breedInfo.breeds[0].height.metric}</span></p>
                                <p className="breed_info_weight">Weight: <span>{this.props.breedInfo.breeds[0].weight.metric}</span></p>
                                <p className="breed_info_life_span">Life span: <span>{this.props.breedInfo.breeds[0].life_span}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default Breed;
