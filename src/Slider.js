import React from 'react';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            currentSlide: 0,
        };
        this.slider = this.slider.bind(this);
    };

    slider(number) {
        if (number != this.state.currentSlide) {
            this.setState({currentSlide: number});
        };
    };

    render() {
        let slideStyle = {transform: 'translate(-' + this.state.currentSlide*100 + '%)' };
        let navBtns = (
            <div className="nav_btns">
                {this.props.breedImg.map((breedImgItem, index) => (
                    <button onClick={() => {this.slider(index)}} className={`nav_btn ${index == this.state.currentSlide ? "active" : "" }`} key={index}></button>
                ))}
            </div>
        );
        return(
            <div className="slider">
                <div className="view">
                    <div className="slide_list" style={slideStyle}>
                        {this.props.breedImg.map((breedImgItem) => (
                            <div className="slide" key={breedImgItem.id}>
                                <img src={breedImgItem.url} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                {navBtns}
            </div>
        )
    };
};

export default Slider;
