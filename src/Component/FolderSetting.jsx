import React from 'react'
import { HiOutlineEye, HiX } from "react-icons/hi";
import './FolderSetting.css'
function FolderSetting() {
    return (
        <>
            <div className='bg-body-secondary p-5'>
                <div className='d-flex justify-content-between '>
                    <h4>Folder Setting</h4>
                    <HiX />
                </div>
                <h6 className='mt-4'>Visible</h6>
                <form action="" className='mt-2'>
                    <select class="form-select form-select-md" aria-label=".form-select-sm example">
                        <option value="1">All</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                    <div className='mt-2'>
                        <h6 className='mt-4'>Password File</h6>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label class="form-check-label" for="inlineRadio1">No</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" checked />
                            <label class="form-check-label" for="inlineRadio2">Yes</label>
                        </div>
                    </div>

                    <div>

                        <p>
                           <h6 className='mt-2'>Password:</h6>
                           <div className='pass'>
                           <input className='w-100' type="password"
                                name="password" id="password" />
                           </div>
                          <div className='passicon'>
                          <HiOutlineEye />
                          </div>
                        </p>
                    </div>

                </form>

                <div className='w-50 mx-auto mt-2'>
                <button type="button" className="btn btn-light">Cancel</button>
                <button type="button" className="saveBtn">Save</button>

                </div>
            </div>
        </>
    )
}

export default FolderSetting