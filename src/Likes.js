import React from 'react';
import NavBar from './NavBar';
import LikedImg from './LikedImg';

class Likes extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            votes: [{}]
        };
    };

    componentDidMount() {
        this.getVotes();
    };

    getVotes(){
        let url = `https://api.thedogapi.com/v1/votes`
        fetch(url,{
            method: "GET",
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                "x-api-key": "b9a46af2-c82c-4c56-8df3-5d3a8b4c9b8b",
            }
        })
        .then(votes => votes.json())
        .then(votes => {
            this.setState({votes:votes})
        })
        console.log(this.state);
    };

    render() {
        let likedImg = this.state.votes.filter((img) => img.value == 1).reverse();
        return(
            <div className="right likes">
                <NavBar />
                <div className="frame">
                    <div className="frame_bar">
                        <div className="breadcrumbs">
                            <button className="back_btn btn"></button>
                            <div className="current">LIKES</div>
                        </div>
                    </div>
                    <div className="img_pattern">
                        {likedImg.map((img) => 
                            <LikedImg key={img.id} likedImgId={img.image_id} />
                        )}
                    </div>
                </div>
            </div>
        )
    };
};

export default Likes;
