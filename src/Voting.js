import React from 'react';
import NavBar from './NavBar';
import likeImg from './img/like_small.svg';
import dislikeImg from './img/dislike_small.svg';
import favouriteImg from './img/favourite_small.svg';

class Voting extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            img: {},
            imgFavId: '',
            userActionLog: [],
            favouritesLog: [],
        };
    };

    componentDidMount() {
        this.getData();
        this.getVotes();
        this.getFavourites();
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
            this.setState({
                img:img[0],
                imgFavId: '',
            })
        })
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

    addToFavourite(){
        let url = `https://api.thedogapi.com/v1/favourites`
        fetch(url,{
            method: "POST",
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                "content-type": "application/json",
                "x-api-key": "b9a46af2-c82c-4c56-8df3-5d3a8b4c9b8b",
            },
            body: JSON.stringify({
                "image_id": this.state.img.id
            })
        })
        .then(response => response.json())
        .then(response => {
            this.setState({imgFavId:response.id})
            console.log(response)
        })
    };

    deleteFavourite() {
        let url = `https://api.thedogapi.com/v1/favourites/${this.state.imgFavId}`
        fetch(url,{
            method: "DELETE",
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                "x-api-key": "b9a46af2-c82c-4c56-8df3-5d3a8b4c9b8b",
            }
        })
        .then(response => response.json())
        .then(response => {
            this.setState({imgFavId: ''})
            console.log(response)
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

    getFavourites() {
        let url = `https://api.thedogapi.com/v1/favourites`
        fetch(url,{
            method: "GET",
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                "x-api-key": "b9a46af2-c82c-4c56-8df3-5d3a8b4c9b8b",
            }
        })
        .then(favouritesLog => favouritesLog.json())
        .then(favouritesLog => {
            this.setState({favouritesLog:favouritesLog})
        })
    };

    toggleFavourite() {
        if (this.state.imgFavId) {
            this.deleteFavourite();
        } else {
            this.addToFavourite();
        };
        this.getFavourites();
    };

    render() {
        let data = this.state.userActionLog.concat(this.state.favouritesLog);
        data = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
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
                                <button onClick={() => {this.createVote(1); this.getData(); this.getVotes()}} className="voting_card_like_btn btn"></button>
                                <button onClick={() => {this.toggleFavourite()}} className="voting_card_favourite_btn btn"></button>
                                <button onClick={() => {this.createVote(0); this.getData(); this.getVotes()}} className="voting_card_dislike_btn btn"></button>
                            </div>
                        </div>
                        <div className="voting_log">
                            {data.map((userAction) => {
                                let actionTagret = 'favourites';
                                let imgSourse = favouriteImg;
                                let date = new Date(userAction.created_at);
                                let hours = date.getHours();
                                let minutes = date.getMinutes();
                                function zero(e) {
                                    if (e < 10) {
                                        return '0' + e;
                                    }
                                    return e;
                                };
                                if (userAction.value == 1) {
                                    actionTagret = 'like';
                                    imgSourse = likeImg;
                                } else if (userAction.value == 0) {
                                    actionTagret = 'dislike';
                                    imgSourse = dislikeImg;
                                };
                                return(
                                    <div className="voting_log_item" key={userAction.id}>
                                        <div className="voting_log_item_time">{zero(hours) + ':' + zero(minutes)}</div>
                                        <div className="voting_log_item_text">Image ID:</div>
                                        <p className="voting_log_item_spacer"> </p>
                                        <div className="voting_log_item_img_id">{userAction.image_id}</div>
                                        <p className="voting_log_item_spacer"> </p>
                                        <div className="voting_log_item_action">was added to</div>
                                        <p className="voting_log_item_spacer"> </p>
                                        <div className="voting_log_item_action_target">{actionTagret}</div>
                                        <img src={imgSourse} className="voting_log_item_img" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
        )
    };
};

export default Voting;