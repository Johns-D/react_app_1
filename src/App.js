import React from 'react';
import './App.css';
import './style.css';
import Modal from './Modal';
import Main from './Main';

class App extends React.Component {
	constructor(props) {
        super(props);
        this.state={
            modalClosed: true,
        };
        this.modalClose = this.modalClose.bind(this);
        this.modalOpen = this.modalOpen.bind(this);
    };

    getData(){
        let url = `https://api.thedogapi.com/v1/images/search?limit=${this.state.breedInfo.limit}&breed_id=${this.state.breedInfo.breeds[0].id}`
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
    };

	modalClose() {
        this.setState({modalClosed:true});
    };

	modalOpen() {
		this.setState({modalClosed:false});
	};

	render() {
		return (
			<div>
				<Main modalOpen={this.modalOpen} />
				<Modal modalClose={this.modalClose} modalClosed={this.state.modalClosed} />
			</div>
		);
	}
};

export default App;
