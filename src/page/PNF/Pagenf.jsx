import React from 'react'
import './Pagenf.css';

function Pagenf() {
  return (
    <>
      <div className='container text-center' style={{height:'500px',width:'700px'}}>
        <h1 style={{fontSize:'70px'}}>404</h1>
        <div style={{marginTop:'300px'}}>
          <h2>Look Like Your Lost!</h2>
          <p>The Page your looking for is not available</p>
          <button routerLink="" className='btn btn-success'>Go To Home</button>
        </div>
      </div>
    </>
  )
}

export default Pagenf