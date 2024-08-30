import React from 'react';
import { Card, Dropdown, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Hometable() {
    return (
        <>
            <div className="container mt-5">
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <Table className="align-items-center" >
                                <thead className="thead-dark">
                                    <tr className="table-dark">
                                        <th>Id</th>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                        <th>Status</th>
                                        <th>Profile</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Sreedevi</td>
                                        <td>sreedevi@gmail.com</td>
                                        <td>F</td>
                                        <td>
                                            <Dropdown>
                                                <Dropdown.Toggle id="dropdown-basic">
                                                    Active
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item >Active</Dropdown.Item>
                                                    <Dropdown.Item>InActive</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                        <td>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" width={'30px'} height={'30px'} alt="" />
                                        </td>
                                        <td>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='light' id="dropdown-basic1">
                                                    <i className="fa-solid fa-ellipsis-vertical fs-5"></i>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item >
                                                        <Link className='text-decoration-none' to={'/profile    '}>
                                                            <i className="fa-solid fa-eye text-success me-1"></i>
                                                            <span >View</span>
                                                        </Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item >
                                                        <Link className='text-decoration-none' to={'/edit/1'}>
                                                            <i className="fa-solid fa-pen text-dark me-2"> </i>
                                                            <span className='text-dark'>Edit</span>
                                                        </Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <Link className='text-decoration-none'>
                                                            <i className='fa-solid fa-trash text-danger me-2'></i>
                                                            <span className='text-danger'>Delete</span>
                                                        </Link>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </div>
                </Row>
            </div>
        </>
    );
}

export default Hometable;
