import React from 'react'
import './Profile.css';
import { Card, Row } from 'react-bootstrap';

function Profile() {
  return (
    <>
      <div className='container'>
        <Card className='shadow col-lg-6 mx-auto mt-5'>
          <Card.Body>
            <Row>
              <div className='col'>
                <div className='p-3 d-flex justify-content-center align-items-center' >
                  <img className='border rounded-circle p-2' src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" width={'90px'} height={'90px'} alt="" />
                </div>
                </div >
            </Row>
            <div className='text-center mt-3'>
              <h3>Sreedevi</h3>
              <h6><i className="fa-solid fa-envelope me-1 text-primary"></i>:- <span className='ms-1'>sreedevi@gmail.com</span></h6>
              <h6><i className="fa-solid fa-mobile-screen-button text-success me-1"></i>:- <span className='ms-1'>9874563210</span> </h6>
              <h6><i className="fa-solid fa-venus-mars text-info me-1"></i>:- <span className='ms-1'>Female</span></h6>
              <h6><i className="fa-solid fa-signal me-1"></i>:- <span className='ms-1'>Active</span></h6>
              <h6><i class="fa-solid fa-location-dot text-danger me-1"></i>:- <span>Ekm</span></h6>
            </div>
          </Card.Body>
        </Card>
      </div>    
    </>
  )
}

export default Profile