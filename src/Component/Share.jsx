import React from 'react'
import dropbox from '../assets/dropbox-logo 1.png'
import gmail from '../assets/gmail 1.png'
import drive from '../assets/dropbox-logo 2.png'
import { HiOutlineEye, HiX } from "react-icons/hi";
function Share() {
  return (
    <div>
        <div className='bg-body-secondary p-5'>
        <div className='d-flex justify-content-between '>
                    <h4>Share</h4>
                    <HiX />
                </div>
        <div className="row mt-5">
            <div className="col-4">
                        <img src={dropbox} alt="dropbox" />
                        <p  className=''>dropbox</p>
            </div>
            <div className="col-4">
                        <img className='w-50' src={gmail} alt="gmail" />
                        <p className='ml-5'>Gmail</p>
            </div>
            <div className="col-4">
                        <img src={drive} alt="drive" />
                        <p className=''>Google Drive</p>
            </div>
        </div>
        
        <div className='w-50 mx-auto mt-2'>
                <button type="button" className="btn btn-light">Cancel</button>
                <button type="button" className="saveBtn">Save</button>
                </div>
</div>
    </div>
  )
}

export default Share