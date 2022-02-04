import {useEffect, useState} from 'react'
import './App.css';
import Header from './Components/header/Header'
import Projects from './Components/project/Projects'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ProjectPage from './Pages/ProjectPage'
import HomePage from './Pages/HomePage';
import axios from 'axios';

const App = () => {

  const [projects, setProjects] = useState([])
  
  useEffect(()=>{
    axios.get('https://localhost:44346/api/Project')
      .then(res=>{
      var data = res.data
      setProjects([...data])
      
    })
  },[])

  return (
    <Router>
      <div className="App">
        <Header/>

        <Switch>
          <Route exact path="/">
            <HomePage projects = {projects} />
          </Route>
          <Route path={"/:id"}>
            <ProjectPage />
          </Route>
        </Switch>
      
      </div>
    </Router>
    
  );
}

export default App;
