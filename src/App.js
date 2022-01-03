import {useState} from 'react'
import './App.css';
import Header from './Components/header/Header'
import Projects from './Components/project/Projects'

const App = () => {

  const [projects, setProjects] = useState([
    {
      id: 1,
      name:'project 1',
      description: 'description and that is great and this operate in many different ways',
      users: [
        {
          id: 1,
          name: 'Krystian',
          lastName: 'Krystianowski',
        },
        {
          id: 2,
          name: 'Adam',
          lastName: 'Adamowski',
        },
        {
          id: 3,
          name: 'Tomasz',
          lastName: 'Tomaszewski',
        },
        {
          id: 4,
          name: 'Wojtek',
          lastName: 'Wojtaszek',
        },
      ],
      tickets: [
        {
          id:1,
          name: 'Create login page',
        },
        {
          id:2,
          name: 'Delete this page',
        },
        {
          id:3,
          name: 'Design new home page',
        },
        {
          id:4,
          name: 'Create database',
        },
      ]
    },
    {
      id: 2,
      name:'project 1',
      description: 'description and that is great and this operate in many different ways',
      users: [
        {
          id: 1,
          name: 'Krystian',
          lastName: 'Krystianowski',
        },
        {
          id: 2,
          name: 'Adam',
          lastName: 'Adamowski',
        },
        {
          id: 3,
          name: 'Tomasz',
          lastName: 'Tomaszewski',
        },
        {
          id: 4,
          name: 'Wojtek',
          lastName: 'Wojtaszek',
        },
      ],
      tickets: [
        {
          id:1,
          name: 'Create login page',
        },
        {
          id:2,
          name: 'Delete this page',
        },
       
      ]
    },
  ])

  return (
    <div className="App">
      <Header/>
      <Projects projects={projects} />
    </div>
  );
}

export default App;
