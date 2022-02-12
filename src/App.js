import {useEffect, useState} from 'react'
import './App.css';
import Header from './Components/header/Header'
import Projects from './Components/project/Projects'
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom'
import ProjectPage from './Pages/ProjectPage'
import HomePage from './Pages/HomePage';
import axios from 'axios';
import LoginPage from './Pages/LoginPage';
import Cookies from 'js-cookie';

const App = () => {
  const [projects, setProjects] = useState([]);
 
  const [currentUser,setCurrentUser] = useState({});
  const [token,setToken] =  useState("");
  const [redirect,setRedirect]= useState(false);
  const [isLoading,SetIsLoading] = useState(true);
  const [loggedin,setLoggedin]=  useState(false);

  useEffect(()=>{
    var toke = "Bearer"+" "+Cookies.get('Jwt')
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': toke
    }
    axios.get('http://192.168.0.102:8084/api/User/user',{headers:headers,withCredentials:true})
      .then(res=>{setCurrentUser(res.data);console.log(res.data)})
      .catch(error=>{
        console.log(error)
      })

      SetIsLoading(false);
  },[])


  if(isLoading){
    return "";
  }


  //<HomePage projects = {projects} />
//<LoginPage login={login} />
  return (
    <Router>
      <div className="App">
        <Header currentUser={currentUser}/>

        <Switch>
         <Route exact path="/">
          {(Object.keys(currentUser).length===0)?<LoginPage /> :<HomePage currentUser={currentUser}/>}
        </Route>
        
          <Route path={"/:id"}>
          {(Object.keys(currentUser).length!==0)?<ProjectPage currentUser={currentUser} />:<LoginPage/>}
          </Route>
        </Switch>
      
      </div>
    </Router>
    
  );
}

export default App;
