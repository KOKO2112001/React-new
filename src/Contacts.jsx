import React from 'react'

export default function Contacts() {
  return <>
  <div className='container py-5 tex-center'>
    <div className='row'>
      <div className='col-md-6 mx-auto'>
      <form className=' my-3 w-100'>
  <div className="mb-3">
    <input type='text' placeholder='userName' className="form-control col-1" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <input type='text' placeholder='userAge' className="form-control col-1" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <input type='email' placeholder='userEmail' className="form-control col-1" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <input type='password' placeholder='userPassword' className="form-control col-1" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  
  <button type="submit" className="btn btn-success">Send Me</button>
</form>
      </div>
    </div>
  </div>
  </>
}
