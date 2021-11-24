import React from 'react';
import NavBar from './NavBar';
import voting_test_img from './img/test_img_1.png';

class Voting extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            img: {},
            userActionLog: [],
        };
    };

    componentDidMount() {
        this.getData();
    };

    getData(){
        let url = `https://api.thedogapi.com/v1/images/search`
        fetch(url,{
            method: "GET",
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            }
        })
        .then(img => img.json())
        .then(img => {
            this.setState({img:img[0]})
        })
        .then(() => this.getVotes())
    };

    createVote(value){
        let url = `https://api.thedogapi.com/v1/votes`
        fetch(url,{
            method: "POST",
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                "content-type": "application/json",
                "x-api-key": "b9a46af2-c82c-4c56-8df3-5d3a8b4c9b8b",
            },
            body: JSON.stringify({
                "image_id": this.state.img.id,
                "value": value,
            }),
        })
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
        .then(userActionLog => userActionLog.json())
        .then(userActionLog => {
            this.setState({userActionLog:userActionLog})
        })
        console.log(this.state);
    };

    render() {
        return(
                <div className="right voting">
                    <NavBar />
                    <div className="frame">
                        <div className="frame_bar">
                            <div className="breadcrumbs">
                                <button className="back_btn btn"></button>
                                <div className="current">VOTING</div>
                            </div>
                        </div>
                        <div className="voting_card">
                            <div className="voting_card_img_wrap">
                                <img src={this.state.img.url} alt="" />
                            </div>
                            <div className="voting_card_btn">
                                <button onClick={(e) => {e.preventDefault(); this.createVote(1); this.getData()}} className="voting_card_like_btn btn"></button>
                                <button className="voting_card_favourite_btn btn"></button>
                                <button onClick={(e) => {e.preventDefault(); this.createVote(0); this.getData()}} className="voting_card_dislike_btn btn"></button>
                            </div>
                            <button onClick={(e) => {e.preventDefault(); this.getVotes()}} className="btn">getVotes</button>
                        </div>
                        <div className="voting_log">
                            {this.state.userActionLog.map((userAction) => (
                                <div className="voting_log_item" key={userAction.id}>
                                    <div className="voting_log_item_time">{userAction.created_at}</div>
                                    <div className="voting_log_item_text">Image ID:</div>
                                    <p className="voting_log_item_spacer"> </p>
                                    <div className="voting_log_item_img_id">{userAction.image_id}</div>
                                    <p className="voting_log_item_spacer"> </p>
                                    <div className="voting_log_item_action">was added to</div>
                                    <p className="voting_log_item_spacer"> </p>
                                    <div className="voting_log_item_action_target">Favourites</div>
                                    <div className="voting_log_item_img_favourites voting_log_item_img"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        )
    };
};

export default Voting;