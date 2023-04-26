import React from 'react'
import { HiOutlineEye, HiX } from "react-icons/hi";
import dropbox from '../assets/dropbox-logo 1.png'
import Vector from '../assets/Vector (1).png'
import './FileUpload.css'
function FileUpload() {
    return (
        <div className='bg-body-secondary p-5'>
        <div className='d-flex justify-content-between '>
                    <h4>File Upload</h4>
                    <HiX />
                </div>

                <div className="row mt-5">
                    <div className="col-6 text-center mt-2">
                        <img src={dropbox} alt="dropbox" />
                        <p>upload from your dropbox</p>
                        <button type="button" className="Upload">Upload</button>
                    </div>
                    <div className="col-6 text-center mt-2">
                        <img src={Vector} alt="vector" />
                        <p>upload from your Device</p>
                        <button type="button" className="Upload">Upload</button>
                    </div>
                </div>
                <div className='mt-5 w-50 mx-auto '>
                    <button className='border-0 ml-5'>No, I Cancelled</button>
                </div>
        </div>
    )
}

export default FileUpload