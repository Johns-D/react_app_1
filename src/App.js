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
			currentBreed: '',
			breedInfo: {
				currentBreed: '',
				limit: 5,
				breeds: [{
					height: {
						metric: '',
					},
					weight: {
						metric: '',
					},
					id: 0,
					name: '',
					bred_for: '',
					life_span: '',
					temperament: '',
				}],
				breedImg: [],
			}
        };
        this.modalClose = this.modalClose.bind(this);
        this.modalOpen = this.modalOpen.bind(this);
    };

	componentDidMount() {
        this.getBreeds();
    };

	getcurrentBreed(value) {
		this.setState({currentBreed:value})
	}

    getBreeds(){
        let url = `https://api.thedogapi.com/v1/breeds/search?q=${this.state.currentBreed}`
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
        .then(breeds => this.getData())
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
				<Main breedInfo={this.breedInfo} modalOpen={this.modalOpen} />
				<Modal modalClose={this.modalClose} modalClosed={this.state.modalClosed} />
			</div>
		);
	}
};

export default App;
