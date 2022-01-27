import {useState} from 'react'
import './App.css';
import Header from './Components/header/Header'
import Projects from './Components/project/Projects'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ProjectPage from './Pages/ProjectPage'

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
      name:'project 2',
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
    <Router>
      <div className="App">
        <Header/>

        <Switch>
          <Route exact path="/">
            <Projects projects={projects} />
          </Route>
          <Route path={"/:name"}>
            <ProjectPage />
          </Route>
        </Switch>
      
      </div>
    </Router>
    
  );
}

export default App;
