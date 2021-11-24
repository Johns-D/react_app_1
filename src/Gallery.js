import React from 'react';
import NavBar from './NavBar';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            response: [],
            breeds: [],
            limit: '5',
            page: '',
            order: '',
            mimeType: '', 
            breedId: '',
        };
        this.changeOrder = this.changeOrder.bind(this);
        this.changeCount = this.changeCount.bind(this);
        this.changeType = this.changeType.bind(this);
        this.changeBreed = this.changeBreed.bind(this);
    };

    componentDidMount() {
        this.getData();
        this.getBreeds();
    };

    getData(){
        let url = `https://api.thedogapi.com/v1/images/search?limit=${this.state.limit}&page=${this.state.page}&order=${this.state.order}&mime_types=${this.state.mimeType}&breed_ids=${this.state.breedId}`
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
        let url = `https://api.thedogapi.com/v1/breeds?attach_breed=0`
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

    changeOrder(e) {
        this.setState({order:e.target.value})
    };

    changeCount(e) {
        this.setState({limit:e.target.value})
    };

    changeType(e) {
        this.setState({mimeType:e.target.value})
    };

    changeBreed(e) {
        this.setState({breedId:e.target.value})
    };

    render() {
        return(
            <div className="right gallery">
                <NavBar />
                <div className="frame">
                    <div className="frame_bar">
                        <div className="breadcrumbs">
                            <button className="back_btn btn"></button>
                            <div className="current">GALLERY</div>
                        </div>
                        <button className="upload_btn btn"><i></i>UPLOAD</button>
                    </div>
                    <form className="gallery_form" action="">
                        <label className="order_label">
                            ORDER
                            <select onChange={this.changeOrder} name="gallery_order_select">
                                <option value="random">Random</option>
                                <option value="desc">Desc</option>
                                <option value="asc">Asc</option>
                            </select>
                        </label>
                        <label className="type_label">
                            TYPE
                            <select onChange={this.changeType} name="gallery_type_select">
                                <option value="">All</option>
                                <option value="jpg,png">Static</option>
                                <option value="gif">Animated</option>
                            </select>
                        </label>
                        <label className="breed_label">
                            BREED
                            <select onChange={this.changeBreed} name="gallery_breed_select">
                                <option value="">None</option>
                                {this.state.breeds.map(breed => 
                                    <option key={breed.id} value={breed.id}>{breed.name}</option>
                                )}
                            </select>
                        </label>
                        <label className="limit_label">
                            LIMIT
                            <select onChange={this.changeCount} name="gallery_limit_select">
                                <option value="5">5 items per page</option>
                                <option value="10">10 items per page</option>
                                <option value="15">15 items per page</option>
                                <option value="20">20 items per page</option>
                            </select>
                        </label>
                        <button onClick={(e) => {e.preventDefault(); this.getData()}} className="load_new_items_btn btn"></button>
                    </form>
                    <div className="img_pattern">
                        {this.state.response.map((dogItem) => (
                            <div className="img_pattern_item">
                                <img src={dogItem.url} alt="" />
                                <div className="img_pattern_item_overlay"></div>
                                <button className="img_pattern_item_favourite_btn btn"></button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    };
};

export default Gallery;
