import React from 'react';
import test_img_3 from './img/test_img_3.jpg';
import success from './img/success.svg';
import error from './img/error.svg';
import Dropzone from 'react-dropzone';

class Modal extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        let modalOverlayStyle;
        if (this.props.modalClosed == true) {
            modalOverlayStyle = {display: 'none'}
        } else {
            modalOverlayStyle = {display: 'block'}
        };
        return(
            <div onClick={(e) => {if (e.target == document.querySelector('.modal_overlay') || e.target == document.querySelector('.modal_overlay .container')) {this.props.modalClose()}}} className="modal_overlay" style={modalOverlayStyle}>
                <div className="container">
                    <div></div>
                    <div className="modal_wrapp">

                        <div className="modal">
                            <button onClick={this.props.modalClose} className="modal_close"></button>
                            <p className="modal_title">Upload a .jpg or .png Dog Image</p>
                            <p className="modal_subtitle">Any uploads must comply with the <a href="https://www.thedogapi.com/privacy">upload guidelines</a> or face deletion.</p>
                            <div className="modal_img_up_wrapp">
                                <div className="modal_img_up_placeholder"></div>
                                <p className="modal_img_up_text"><span>Drag here</span> your file or <span>Click here</span> to upload</p>
                            </div>
                            <p className="modal_nfs">No file selected</p>
                        </div>

                        {/* <div className="modal">
                            <button onClick={this.modalClose} className="modal_close"></button>
                            <p className="modal_title">Upload a .jpg or .png Dog Image</p>
                            <p className="modal_subtitle">Any uploads must comply with the <a href="https://www.thedogapi.com/privacy">upload guidelines</a> or face deletion.</p>
                            <div className="modal_img_up_wrapp">
                                <div className="modal_img_up_img">
                                    <img src={test_img_3} />
                                </div>
                            </div>
                            <p className="modal_up_file_name">Image File Name: <span>dog-puppy-on-garden--1586966191.jpg</span></p>
                            
                            <button className="modal_up_btn">UPLOAD PHOTO</button>

                            <button className="modal_up_btn_active"><i></i>UPLOADING</button>

                        </div> */}

                        {/* <div className="modal">
                            <button onClick={this.modalClose} className="modal_close"></button>
                            <p className="modal_title">Upload a .jpg or .png Dog Image</p>
                            <p className="modal_subtitle">Any uploads must comply with the <a href="https://www.thedogapi.com/privacy">upload guidelines</a> or face deletion.</p>
                            <div className="modal_img_up_wrapp">
                                <div className="modal_img_up_placeholder"></div>
                                <p className="modal_img_up_text"><span>Drag here</span> your file or <span>Click here</span> to upload</p>
                            </div>
                            <p className="modal_nfs">No file selected</p>
                            <div className="modal_up_status">
                                <img src={success} />
                                <p className="modal_up_status_text">Thanks for the Upload - Dog found!</p>
                            </div>
                        </div> */}

                        {/* <div className="modal">
                            <button onClick={this.modalClose} className="modal_close"></button>
                            <p className="modal_title">Upload a .jpg or .png Dog Image</p>
                            <p className="modal_subtitle">Any uploads must comply with the <a href="https://www.thedogapi.com/privacy">upload guidelines</a> or face deletion.</p>
                            <div className="modal_img_up_wrapp_error">
                                <div className="modal_img_up_img">
                                    <img src={test_img_3} />
                                </div>
                            </div>
                            <p className="modal_up_file_name">Image File Name: <span>dog-puppy-on-garden--1586966191.jpg</span></p>
                            <div className="modal_up_status">
                                <img src={error} />
                                <p className="modal_up_status_text">No Dog found - try a different one</p>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        )
    };
};

export default Modal;
