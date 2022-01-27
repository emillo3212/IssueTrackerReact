import {useState} from 'react';
import Ticket from './Ticket';
import moment from 'moment'
import './ticket.css'

const Tickets = ({tickets,onClick}) => {
    
  return <div className="tickets">
      <div className="ticketHeader">Tickets</div>
      {tickets.map((ticket)=>(
          <Ticket key={ticket.id} ticket={ticket} onClick ={onClick} />
      )
      )}
  </div>;
};

export default Tickets;
