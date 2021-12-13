import React from 'react';
import NavBar from './NavBar';
import Slider from './Slider';

class Breed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breedInfo: {
                bred_for: "",
                breed_group: "",
                height: {
                  imperial: "",
                  metric: ""
                },
                id: '',
                life_span: "",
                name: "",
                reference_image_id: "",
                temperament: "",
                weight: {
                  imperial: "",
                  metric: ""
                }
              },
              breedImg : [],
        }
        this.getCurrentBreed = this.getCurrentBreed.bind(this)
    }
    componentDidMount(){
        this.getCurrentBreed()
    }
    getCurrentBreed(){
        let url = `https://api.thedogapi.com/v1/breeds/search?q=${this.props.currentBreed}`
        fetch(url,{
            method: "GET",
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                "x-api-key": "b9a46af2-c82c-4c56-8df3-5d3a8b4c9b8b",
            }
        })
        .then(response =>response.json())
        .then(response => {
            this.setState({breedInfo:response[0]})
        })
        .then(response => {
            this.getBreedImg()
        })
    }
    getBreedImg(){
        let url = `https://api.thedogapi.com/v1/images/search?limit=6&breed_id=${this.state.breedInfo.id}`
        console.log(this.state.breedInfo)
        console.log(url)
        fetch(url,{
            method: "GET",
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                "x-api-key": "b9a46af2-c82c-4c56-8df3-5d3a8b4c9b8b",
            }
        })
        .then(response =>response.json())
        .then(response => {
            this.setState({breedImg:response})
        })
    }
    render() {
        console.log(this.state)
        return(
            <div className="right breed">
                <NavBar />
                <div className="frame">
                    <div className="frame_bar">
                        <div className="breadcrumbs">
                            <button className="back_btn btn"></button>
                            <div className="current">BREEDS</div>
                            <div className="current_breed_id">{this.state.breedInfo.id}</div>
                        </div>
                    </div>
                    <div className="breed_gallery">
                        <Slider breedImg={this.state.breedImg} />
                    </div>
                    <div className="breed_info">
                        <p className="breed_info_name">{this.state.breedInfo.name}</p>
                        <p className="breed_info_bred_for">{this.state.breedInfo.bread_for}</p>
                        <div className="breed_info_in_wrapp_1">
                            <div className="breed_info_temperament_wrapp">
                                <p className="breed_info_temperament_title">Temperament:</p>
                                <p className="breed_info_temperament_text">{this.state.breedInfo.temperament}</p>
                            </div>
                            <div className="breed_info_in_wrapp_2">
                                <p className="breed_info_height">Height: <span>{this.state.breedInfo.height.metric}</span></p>
                                <p className="breed_info_weight">Weight: <span>{this.state.breedInfo.weight.metric}</span></p>
                                <p className="breed_info_life_span">Life span: <span>{this.state.breedInfo.life_span}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default Breed;
