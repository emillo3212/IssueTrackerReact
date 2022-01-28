import React,{useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaMinus } from 'react-icons/fa'
import {MdDone,MdSignalCellular1Bar,MdSignalCellular4Bar} from 'react-icons/md'
import TicketModal from './TicketModal';

const Ticket = ({ticket,onClick}) => {
   
  return(<>
    
    <Container className='ticket' onClick={()=>onClick(ticket)}>
        <Row>
            <Col md={1} className="ticketDone">
                {ticket.Done ? <MdDone size={20}/> : <FaMinus size={20}/>}
                <span class="tooltipText">Done</span> 
            </Col>

            <Col md={1} className="ticketCreated">
                {ticket.Created}
                <span class="tooltipText">Created</span>   
            </Col>

            <Col  md={3} className="ticketName">{ticket.Name}
                <span class="tooltipText">Name of ticket</span>
            </Col>
            
            <Col  className="ticketCreatedBy">
                {ticket.CreatedBy}
                <span class="tooltipText">Created By</span>
            </Col>
            <Col className="ticketAssignTo">
                {ticket.AssignedTo}
                <span class="tooltipText">Assigned To</span>
            </Col>
            <Col className="ticketPriority">
                <span>{ticket.Priority} </span>
                <MdSignalCellular1Bar className='ticketPriorityIcon' size={20} color='#00ebb8'/>
                <span class="tooltipText">Priority</span>
            </Col>
        </Row>
    
    </Container>

   
  </>
 
    
  ) 
};

export default Ticket;
