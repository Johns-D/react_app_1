import React from 'react';
import NavBar from './NavBar';
import Slider from './Slider';

class Breed extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            currentBreed: 'Affenpinscher',
            limit: 5,
            breeds: [{
                height: {
                    metric: '',
                },
                weight: {
                    metric: '',
                },
                id: 0,
                name: '',
                bred_for: '',
                life_span: '',
                temperament: '',
            }],
            breedImg: [],
        };
    };

    componentDidMount() {
        this.getBreeds();
    };

    getBreeds(){
        let url = `https://api.thedogapi.com/v1/breeds/search?q=${this.state.currentBreed}`
        fetch(url,{
            method: "GET",
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                "x-api-key": "b9a46af2-c82c-4c56-8df3-5d3a8b4c9b8b",
            }
        })
        .then(breeds =>breeds.json())
        .then(breeds => {
            this.setState({breeds:breeds})
        })
        .then(breeds => this.getData())
        .then(breeds => console.log(this.state))
    };

    getData(){
        let url = `https://api.thedogapi.com/v1/images/search?limit=${this.state.limit}&breed_id=${this.state.breeds[0].id}`
        fetch(url,{
            method: "GET",
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            }
        })
        .then(breedImg =>breedImg.json())
        .then(breedImg => {
            this.setState({breedImg:breedImg})
        })
        console.log(this.state.breeds[0].id);
    };
    
    render() {
        return(
            <div className="right breed">
                <NavBar />
                <div className="frame">
                    <div className="frame_bar">
                        <div className="breadcrumbs">
                            <button className="back_btn btn"></button>
                            <div className="current">BREEDS</div>
                            <div className="current_breed_id">{this.state.breeds[0].id}</div>
                        </div>
                    </div>
                    <div className="breed_gallery">
                        <Slider breedImg={this.state.breedImg} />
                    </div>
                    <div className="breed_info">
                        <p className="breed_info_name">{this.state.breeds[0].name}</p>
                        <p className="breed_info_bred_for">{this.state.breeds[0].bred_for}</p>
                        <div className="breed_info_in_wrapp_1">
                            <div className="breed_info_temperament_wrapp">
                                <p className="breed_info_temperament_title">Temperament:</p>
                                <p className="breed_info_temperament_text">{this.state.breeds[0].temperament}</p>
                            </div>
                            <div className="breed_info_in_wrapp_2">
                                <p className="breed_info_height">Height: <span>{this.state.breeds[0].height.metric}</span></p>
                                <p className="breed_info_weight">Weight: <span>{this.state.breeds[0].weight.metric}</span></p>
                                <p className="breed_info_life_span">Life span: <span>{this.state.breeds[0].life_span}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default Breed;
