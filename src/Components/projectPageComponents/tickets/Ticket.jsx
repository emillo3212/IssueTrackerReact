import React,{useState} from 'react';
import { FaMinus } from 'react-icons/fa'
import {MdDone,MdSignalCellular1Bar,MdSignalCellular4Bar} from 'react-icons/md'
import TicketModal from './TicketModal';

const Ticket = ({ticket,onClick}) => {
   
  return(<>
    
    <div className='ticket' onClick={()=>onClick(ticket)}>
        
        <div className="ticketDone">
        {ticket.Done ? <MdDone size={20}/> : <FaMinus size={20}/>}
            <span class="tooltipText">Done</span>    
        </div>

        <div className="ticketCreated">
            {ticket.Created}
            <span class="tooltipText">Created</span>   
        </div>

        <div className="ticketName">{ticket.Name}
            <span class="tooltipText">Name of ticket</span>
        </div>
        
        <div className="ticketCreatedBy">
            {ticket.CreatedBy}
            <span class="tooltipText">Created By</span>
        </div>
        <div className="ticketAssignTo">
            {ticket.AssignedTo}
            <span class="tooltipText">Assigned To</span>
        </div>
        <div className="ticketPriority">
            <span style={{marginRight:10}}>{ticket.Priority} </span>
            
            <span class="tooltipText">Priority</span>
        </div>
        <div className="ticketPriorityIcon">
            <MdSignalCellular1Bar size={20} color='#00ebb8'/>
            <span class="tooltipText">Priority</span>
        </div>
       
    </div>

   
  </>
 
    
  ) 
};

export default Ticket;
