import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ticketModal.css'

const TicketModal = ({ticket}) => {
  return <div className='justify-content-md-center ticketModal'>
      <Col  className="ticketModalContent">
        <Row>
          <div className='ticketModalName'>{ticket.Name}</div>
          <div >{ticket.Created}</div>

        </Row>
        <Row>
          <Col>
              <div className='detailsHeader'>Details</div>
              <div className='ticketModalDescription'>{ticket.Description}</div>
          </Col>
          <Col>
              <div className='createdByHeader'>Created by</div>
              <div className='ticketModalCreatedBy'>{ticket.CreatedBy}</div>

              <div className="assignedToHeader">Assigned To</div>
              <div className="ticketModalAssignedTo">{ticket.AssignedTo}</div>

              <div className="priorityHeader">Priority</div>
              <div className="ticketModalPriority">{ticket.Priority}</div>
          </Col>
        </Row>
       

       

        <button className='deleteTicketBtn'>Delete</button>
        <button className='doneTicketBtn'>Done</button>
        
      </Col>
  </div>
};

export default TicketModal;
