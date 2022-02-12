import {useState} from 'react';
import Ticket from './Ticket';
import moment from 'moment'
import './ticket.css'
import {Col, Container, Row} from 'react-bootstrap'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const Tickets = ({tickets,onClick,DoneTicket}) =>{
    const [all,setAll] = useState(true);
    const [done,setDone]= useState(false);
    const [toDo,setToDo]= useState(false);

    function All(){
      setAll(true);
      setDone(false);
      setToDo(false);
    }
    function Done(){
      setAll(false);
      setDone(false);
      setToDo(true);
    }
    function ToDo(){
      setAll(false);
      setDone(true);
      setToDo(false);
    }

  return <div className="tickets">
  
    <Row className="ticketHeader">
      <Col className='TicketsTittle'>
        Tickets
      </Col>

      <Row className='ticketsFilter'>
        <Col>
          <div onClick={()=>Done()} className='doneFilter'>Done</div>
          <div onClick={()=>ToDo()} className='doneFilter'>ToDo</div>
          <div onClick={()=>All()} className='doneFilter'>All</div>
        </Col>        
      </Row>  
    </Row>
    <SimpleBar className='ticketsContainer'>
      {tickets.filter(ticket=>{
        if(done){
          return ticket.done===false;
        }else if(toDo){
          return ticket.done===true;
        }else if(all){
          return ticket;
        }
      }).map((ticket)=>(
          <Ticket ticket={ticket} onClick ={onClick} DoneTicket={DoneTicket} />
      ))}

    </SimpleBar>
    
</div>;
};

export default Tickets;
