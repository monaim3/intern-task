import React from 'react'
import { HiOutlineEye, HiX } from "react-icons/hi";
import Deletes from '../assets/Recycle.png'
import './Delete.css'
function Delete() {
  return (
    <div>
   <div className='bg-body-secondary p-4'>
        <div className='d-flex justify-content-between '>
                    <h4></h4>
                    <HiX />
                </div>
                <div className='deletearea'>
                    <img src={Deletes} className='delets' alt="recylebin" />
                    <h3 className='mt-4'>Do you want to this Folder?</h3>
                    <p className='mt-4 '>This Folder Will have 15 files.Once your delete the folder 15<br></br> files will not show forever.There is no undo option</p>
                </div>
                <div className='w-75 mx-auto mt-4 d-flex gap-5 cancel'>
                <button type="button" className="btn btn-light">No I Cancelled</button>
                <button type="button" className="dltbtn">Delete</button>
                </div>
</div>
    </div>
  )
}

export default Delete