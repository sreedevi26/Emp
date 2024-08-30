import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function Header() {
  return (
    <>
      <Navbar className="header">
        {/* <Container> */}
          <Navbar.Brand className='ms-5' style={{color:'white'}} href="/" >
            <i className="fa-solid fa-user me-3"></i>{' '}
            EMS Application
          </Navbar.Brand>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default Header