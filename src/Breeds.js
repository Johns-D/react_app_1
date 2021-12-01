import React from 'react';
import NavBar from './NavBar';
import {NavLink} from 'react-router-dom';

class Breeds extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            response: [],
            breeds: [],
            limit: '5',
            page: '',
            order: '', 
            breedId: '',
        };
        this.changeBreed = this.changeBreed.bind(this);
        this.changeCount = this.changeCount.bind(this);
    };

    componentDidMount() {
        this.getData();
        this.getBreeds();
    };

    getData(){
        let url = `https://api.thedogapi.com/v1/images/search?limit=${this.state.limit}&page=${this.state.page}&order=${this.state.order}&breed_ids=${this.state.breedId}`
        fetch(url,{
            method: "GET",
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            }
        })
        .then(response =>response.json())
        .then(response => {
            this.setState({response:response})
        })
    };

    getBreeds(){
        let url = `https://api.thedogapi.com/v1/breeds`
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
    };

    changeBreed(e) {
        this.setState({breedId:e.target.value});
    };

    changeCount(e) {
        this.setState({limit:e.target.value});
    };

    sortBreedsZA() {
        this.setState({breeds:this.state.breeds.reverse()});
    };

    render() {
        return(
            <div className="right breeds">
                <NavBar />
                <div className="frame">
                    <div className="frame_bar">
                        <div className="breadcrumbs">
                            <button className="back_btn btn"></button>
                            <div className="current">BREEDS</div>
                        </div>
                        <form className="breeds_form" action="">
                            <label>
                                <select onChange={this.changeBreed} name="breeds_breeds_select">
                                    <option value="">All breeds</option>
                                    {this.state.breeds.map(breed => 
                                        <option key={breed.id} value={breed.id}>{breed.name}</option>
                                    )}
                                </select>
                            </label>
                            <label>
                                <select onChange={this.changeCount} name="breeds_limit_select">
                                    <option value="5">Limit: 5</option>
                                    <option value="10">Limit: 10</option>
                                    <option value="15">Limit: 15</option>
                                    <option value="20">Limit: 20</option>
                                </select>
                            </label>
                            <button onClick={(e) => {e.preventDefault(); this.getBreeds()}} className="sorting_z_a_btn btn"></button>
                            <button onClick={(e) => {e.preventDefault(); this.sortBreedsZA()}} className="sorting_a_z_btn btn"></button>
                        </form>
                    </div>
                    <div className="img_pattern">
                        {this.state.breeds.map((breedsItem) => (
                            <div className="img_pattern_item" key={breedsItem.id}>
                                <img src={breedsItem.image.url} alt="" />
                                <div className="img_pattern_item_overlay"></div>
                                <NavLink onClick={() => {this.props.getcurrentBreed(breedsItem.name)}} className="img_pattern_item_breed_link" to="/breed">{breedsItem.name}</NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    };
};

export default Breeds;
