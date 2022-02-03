import {useState} from 'react';
import Ticket from './Ticket';
import moment from 'moment'
import './ticket.css'

const Tickets = ({tickets,onClick,DoneTicket}) => {
    
  return <div className="tickets">
      <div className="ticketHeader">Tickets</div>
      {tickets.map((ticket)=>(
          <Ticket ticket={ticket} onClick ={onClick} DoneTicket={DoneTicket} />
      )
      )}
  </div>;
};

export default Tickets;
