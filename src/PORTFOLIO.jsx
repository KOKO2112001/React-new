import React from 'react'

export default function PORTFOLIO() {
  return <>
  <div className='container py-5 tex-center'>
    <div className='row'>
      <div className='col-md-12 d-flex justify-content-around align-content-center'>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Picture 1
</button>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Picture 2
</button>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Picture 3
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img src="C:\Users\LEGION\Desktop\Route\React1\my-app\src\imgs" alt="" srcset="" />
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
  </>
}
