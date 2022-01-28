import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './userModal.css'

const UsersModal = (userslist) => {
  return (
  <div className='UsersMoal'>
    <Row className='justify-content-center'>
      <Col md={{span:8}} >
        <Row>
          <div className='usersModalHeader'>Add users to project</div>
        </Row>
        <Row>
          <div className='usersModalSearch'>
            <input className='usersModalSearchInput bg-dark text-white form-control' type="text" name="name" placeholder='search...'/>
          </div>
        </Row>
        <Row>
          <div className='userFromList'>Tomasz Karolak</div>
        </Row>
        <Row>
          <div className='userFromList'>Tomasz Karolak</div>
        </Row>
        <Row>
          <div className='userFromList'>Tomasz Karolak</div>
        </Row>
        <Row>
          <div className='userFromList'>Tomasz Karolak</div>
        </Row>
      </Col>
    </Row>

  </div>)
};

export default UsersModal;
