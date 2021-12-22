import React from 'react';

class DislikedImg extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            imgFromId: {}
        }
    };

    componentDidMount() {
        this.getDislikedImg();
    };

    getDislikedImg(){
        let url = `https://api.thedogapi.com/v1/images/${this.props.dislikedImg}`
        fetch(url,{
            method: "GET",
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                "x-api-key": "b9a46af2-c82c-4c56-8df3-5d3a8b4c9b8b",
            }
        })
        .then(imgFromId => imgFromId.json())
        .then(imgFromId => {
            this.setState({imgFromId:imgFromId})
        })
        console.log(this.state);
    };

    render() {
        return(
            <div className="img_pattern_item">
                <img src={this.state.imgFromId.url} alt="" />
                <div className="img_pattern_item_overlay"></div>
                <button className="img_pattern_item_favourite_btn btn"></button>
            </div>
        )
    };

};

export default DislikedImg;