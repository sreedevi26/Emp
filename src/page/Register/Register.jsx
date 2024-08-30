import React from 'react'
import './Register.css';
import { Button, Card, Form, Row } from 'react-bootstrap';
import Select from 'react-select';

function Register() {
  const options = [
    {value:'Active',label:'Active'},
    {value:'InActive',label:'InActive'}
  ]
  return (
    <>
      <div className='container mt-5'>
        <h3 className='mt-3 text-center'>Register Your Details</h3>
        <Card className='shadow mt-3 p-3'>
          <div className='d-flex justify-content-center align-items-center' >
            <img className='border p-1 rounded-circle' src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" width={'40px'} height={'40px'} alt="" />
          </div>
          <Form className='mt-5'>
            <Row>
              <Form.Group className='mb-3 col-lg-6 ' controlId='formfname'>
                <Form.Label>First Name</Form.Label>
                <Form.Control type='text' name='fname' placeholder='First Name'></Form.Control>
              </Form.Group>
              <Form.Group className='mb-3 col-lg-6' controlId='formlsname'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type='text' name='lsname' placeholder='Last Name'></Form.Control>
              </Form.Group>
              <Form.Group className='mb-3 col-lg-6' controlId='formemail'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='text' name='email' placeholder='Email Address'></Form.Control>
              </Form.Group>
              <Form.Group className='mb-3 col-lg-6' controlId='formmobile'>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type='number' name='mobile' placeholder='Mobile Number'></Form.Control>
              </Form.Group>

              <Form.Group className='mb-3 col-lg-6' controlId='formgender'>
                <Form.Label>Select Gender</Form.Label>
              <Form.Check 
                type={"radio"}
                label={"Male"}
                name='gender' 
                value={'male'}
              />
              <Form.Check
                type={"radio"}
                label={"Female"}
                name='gender' 
                value={'female'}
              />
              </Form.Group>
              <Form.Group className='mb-3 col-lg-6' controlId='formmobile'>
                <Form.Label>Select Your Status</Form.Label>
                <Select options={options}></Select>
              </Form.Group>
              <Form.Group className='mb-3 col-lg-6' controlId='formfile'>
                <Form.Label>Chooise Your File</Form.Label>
                <Form.Control type='file' name='user_profile'></Form.Control>
              </Form.Group>    
              <Form.Group className='mb-3 col-lg-6' controlId='formloc'>
                <Form.Label>Enter Employee Location</Form.Label>
                <Form.Control></Form.Control>
              </Form.Group> 
              <Button variant='primary' className='mt-3'>Submit</Button>         
            </Row>
          </Form>
        </Card>
      </div>
    </>
  )
}

export default Register