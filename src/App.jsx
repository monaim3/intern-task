import { useState } from 'react'
import './App.css'
import FolderSetting from './Component/FolderSetting'
import FileUpload from './Component/FileUpload'
import Share from './Component/Share'
import Delete from './Component/Delete'

function App() {


  return (
    <>
      <div className="container mt-5">
        <div className="row">
      <div className="col-6">
        
      <div>
           <FolderSetting></FolderSetting>
           <div className='mt-5'>
           <FileUpload></FileUpload>
           </div>
        </div>
      </div>
       <div className="col-6">
       <div>
          <Share></Share>
        </div>
        <div className='mt-5'>
          <Delete></Delete>
        </div>
       </div>
      </div>
        </div>
    
    </>
  )
}

export default App
