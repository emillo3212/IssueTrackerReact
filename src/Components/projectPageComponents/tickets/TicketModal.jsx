import React from 'react';
import './ticketModal.css'

const TicketModal = ({ticket}) => {
  return <div className='ticketModal'>
      <div className="ticketModalContent">

        <div className='ticketModalName'>{ticket.Name}</div>
        <div style={{fontSize:12,textAlign:'center'}}>{ticket.Created}</div>

        <div className='detailsHeader'>Details</div>
        <div className='ticketModalDescription'>{ticket.Description}</div>

        <div className='createdByHeader'>Created by</div>
        <div className='ticketModalCreatedBy'>{ticket.CreatedBy}</div>

        <div className="assignedToHeader">Assigned To</div>
        <div className="ticketModalAssignedTo">{ticket.AssignedTo}</div>

        <div className="priorityHeader">Priority</div>
        <div className="ticketModalPriority">{ticket.Priority}</div>

        <button className='deleteTicketBtn'>Delete</button>
        <button className='doneTicketBtn'>Done</button>
        
      </div>
  </div>
};

export default TicketModal;
