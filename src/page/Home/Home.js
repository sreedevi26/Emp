import React from 'react'
import './Home.css';
import { Row,Col,Form,Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Hometable from '../../Component/HomeTable/Hometable';

function Home() {
  const navigate = useNavigate()

  const adduser =()=>{
    navigate('/register')
  }
  return (
    <>
      <div className='container mt-5'>
      <div className='First_div'>
        <div className='main_div'>
            <div className='search_Add d-flex justify-content-between'>
              <div className='search col-lg-4'>
                <Form className='d-flex'>
                  <Form.Control type='text' placeholder='Search' className='me-2'/>
                  <Button>Search</Button>
                </Form>
              </div>
              <div className='add_btn'>
                <Button onClick={adduser} variant='success'><i className="fa-solid fa-user-plus"></i>Add</Button>
              </div>
            </div>        
        </div>
      </div>

      <div className='second_div'>
        <Hometable/>
      </div>
      </div>
    </>
  )
}

export default Home