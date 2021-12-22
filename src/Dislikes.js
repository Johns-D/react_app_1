import React from 'react';
import NavBar from './NavBar';
import DislikedImg from './DislikedImg';

class Dislikes extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            votes: [{}]
        };
        this.getVotes = this.getVotes.bind(this);
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
        let dislikedImg = this.state.votes.filter((img) => img.value == 0).reverse();
        return(
            <div className="right dislikes">
                <NavBar handlerSearch={this.props.handlerSearch} />
                <div className="frame">
                    <div className="frame_bar">
                        <div className="breadcrumbs">
                            <button className="back_btn btn"></button>
                            <div className="current">DISLIKES</div>
                        </div>
                    </div>
                    <div className="img_pattern">
                        {dislikedImg.map((img) => 
                            <DislikedImg key={img.id} dislikedImg={img.image_id} />
                        )}
                    </div>
                </div>
            </div>
        )
    };
};

export default Dislikes;
