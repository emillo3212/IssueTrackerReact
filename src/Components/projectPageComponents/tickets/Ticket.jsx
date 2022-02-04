import React,{useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaMinus } from 'react-icons/fa'
import {MdDone,MdSignalCellular1Bar,MdSignalCellular4Bar} from 'react-icons/md'
import TicketModal from './TicketModal';

const Ticket = ({ticket,onClick,DoneTicket}) => {
   
  return(<>
  <Container className='ticket' >
    <Row>
        <Col md={{span:'auto'}} className="ticketDone">
                    <div className='doneIcon' onClick={()=>DoneTicket(ticket)}>{ticket.Done ? <MdDone size={20}/> : <FaMinus size={20}/>}</div>
                        <span class="tooltipText">Done</span> 
        </Col>
        <Col onClick={()=>onClick(ticket)}>
            <Row>
            
                <Col md={1} className="ticketCreated">
                    {ticket.created}
                    <span class="tooltipText">Created</span>   
                </Col>

                <Col  md={4} className="ticketName">{ticket.name}
                    <span class="tooltipText">Name of ticket</span>
                </Col>
                
                <Col  className="ticketCreatedBy">
                    {ticket.createdBy.firstName}  {ticket.createdBy.lastName}
                    <span class="tooltipText">Created By</span>
                </Col>
                <Col className="ticketAssignTo">
                {ticket.assignTo.firstName}  {ticket.assignTo.lastName}
                    <span class="tooltipText">Assigned To</span>
                </Col>
                <Col md={1} className="ticketPriority">
                    <MdSignalCellular1Bar className='ticketPriorityIcon' size={20} color={(ticket.Priority==='High')? '#ff5f63' : (ticket.priority==='Low')?'#00ebb8': '#df9f1f'}/>
                    <span class="tooltipText">{ticket.priority} Priority</span>
                </Col>
            </Row>
        
        </Col>
    </Row>
   
  </Container>
  

   
  </>
 
    
  ) 
};

export default Ticket;
