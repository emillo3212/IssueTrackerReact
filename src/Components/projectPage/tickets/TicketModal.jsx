import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ticketModal.css'


const TicketModal = ({ticket,doneTicket,DeleteTicket}) => {
  console.log(ticket)
  return <div className='justify-content-md-center ticketModal'>
      <Col  className="ticketModalContent">
        <Row>
          <div className='ticketModalName'>{ticket.name}</div>
          <div >{ticket.created}</div>

        </Row>
        <Row>
          <Col>
              <div className='detailsHeader'>Details</div>
              <div className='ticketModalDescription'>{ticket.description}</div>
          </Col>
          <Col>
              <div className='createdByHeader'>Created by</div>
              <div className='ticketModalCreatedBy'>{ticket.createdBy.firstName} {ticket.createdBy.lastName}</div>

              <div className="assignedToHeader">Assigned To</div>
              <div className="ticketModalAssignedTo">{ticket.assignTo.firstName} {ticket.assignTo.lastName}</div>

              <div className="priorityHeader">Priority</div>
              <div className="ticketModalPriority">{ticket.priority}</div>
          </Col>
        </Row>
       

       

        <button className='deleteTicketBtn' onClick={()=>DeleteTicket(ticket)}>Delete</button>
        <button className='doneTicketBtn' onClick={()=>doneTicket(ticket)}>Done</button>
        
      </Col>
  </div>
};

export default TicketModal;
