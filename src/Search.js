import React from 'react';
import NavBar from './NavBar';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            breedFromName: []
        }
        this.searchBreedFromName = this.searchBreedFromName.bind(this)
        console.log(this.state)
    };

    componentDidMount(){
        this.searchBreedFromName();
    };

    searchBreedFromName(){
        let url = `https://api.thedogapi.com/v1/breeds/search?q=${this.props.searchWord}`   //Affenpinscher
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
            this.setState({breedFromName:response})
        })
    };

    render() {
        return(
            <div className="right search">
                {console.log(this.state)}
                <NavBar searchBreedFromName={this.searchBreedFromName} handlerSearch={this.props.handlerSearch} />
                <div className="frame">
                    <div className="frame_bar">
                        <div className="breadcrumbs">
                            <button className="back_btn btn"></button>
                            <div className="current">SEARCH</div>
                        </div>
                    </div>
                    <div className="search_results_text">Search results for: <span>{this.props.searchWord}</span></div>
                    <div className="img_pattern">
                        {this.state.breedFromName.map((breedFromName) => (
                            <div className="img_pattern_item" key={breedFromName.id}>
                                <img src={"https://cdn2.thedogapi.com/images/" + breedFromName.reference_image_id + ".jpg"} alt="" />
                                <div className="img_pattern_item_overlay"></div>
                                <span className="img_pattern_item_breed_link">{breedFromName.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    };
};

export default Search;
