import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './users.css'

const user = ({user}) => {
  return (
    <Row className='AP-user p-2 m-2'> 
        <Col>
        {user.firstName} {user.lastName}
        </Col>
        <Col >
          {user.email}
        </Col>
        <Col md={{span:1,offset:1}}>
        {user.role} 
        </Col>
        
    </Row>
  )
}

export default user