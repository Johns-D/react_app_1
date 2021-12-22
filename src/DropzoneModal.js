import React, {useCallback, useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import successImg from './img/success.svg';
import errorImg from './img/error.svg';

function DropzoneModal() {
    const [files, setFiles] = useState([]);
    const [uploadStatus, setUploadStatus] = useState('unset');
    const onDrop = acceptedFiles => {
        setUploadStatus('unset')
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
    };

    const imgUpload = () => {
        setUploadStatus('loading')
        const formData = new FormData();
        formData.append('file', files[0]);
        let url = `https://api.thedogapi.com/v1/images/upload`
        fetch(url,{
            method: "POST",
            headers:{
                // "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                "x-api-key": "b9a46af2-c82c-4c56-8df3-5d3a8b4c9b8b",
            },
            body: formData
        })
        .then(respons => respons.json())
        .then(respons => {
            if(respons.message == "Classifcation failed: correct animal not found.") {
                setUploadStatus('notFound')
            } else {
                setUploadStatus('success')
                setFiles([])
            }
            console.log(respons, uploadStatus)
        })
    };

    const thumbs = files.map(file => (
        <img
            src={file.preview}
            key={file.name}
        />
    ));

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    let fileInfo = (<p className="modal_nfs">No file selected</p>);
    let btn = (<button onClick={imgUpload} className="modal_up_btn">UPLOAD PHOTO</button>);
    let modalClassError = '';

    if (files.length) {
        fileInfo = (
            <>
                <p className="modal_up_file_name">Image File Name: <span>{files[0].name}</span></p>
            </>
        )
    };

    if (uploadStatus == 'loading'){
        btn = (<button className="modal_up_btn_active"><i></i>UPLOADING</button>)
    } else if (uploadStatus == 'success') {
        btn = (
            <div className="modal_up_status">
                <img src={successImg} />
                <p className="modal_up_status_text">Thanks for the Upload - Dog found!</p>
            </div>
        )
    } else if (uploadStatus == 'notFound') {
        btn = (
            <div className="modal_up_status">
                <img src={errorImg} />
                <p className="modal_up_status_text">No Dog found - try a different one</p>
            </div>
        )
        modalClassError = 'modal_img_up_wrapp_error'
    };

    return (
        <>
            <div className={`modal_img_up_wrapp ${modalClassError}`} {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
            }
            <div className="modal_img_up_img">
                    {thumbs}
                </div>
            </div>
            {fileInfo}
            {btn}
        </>
    )
};

export default DropzoneModal;