import {useEffect, useState} from 'react'
import './App.css';
import Header from './Components/header/Header'
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom'
import ProjectPage from './Pages/ProjectPage'
import HomePage from './Pages/HomePage';
import axios from 'axios';
import LoginPage from './Pages/LoginPage';
import Cookies  from 'js-cookie';
import AdminPanel from './Pages/AdminPanel';


const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentUser,setCurrentUser] = useState({});
  const [userRole,setUserRole] = useState("")
  const [token,setToken] =  useState("");
  const [redirect,setRedirect]= useState(false);
  const [isLoading,SetIsLoading] = useState(true);
  const [loggedin,setLoggedin]=  useState(false);
   var Url = "https://webapi20220214131752.azurewebsites.net";
   //var Url="https://localhost:44346";

  useEffect(()=>{
    var toke = "Bearer"+" "+Cookies.get('Jwt');
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': toke
    }

    axios.get(Url+'/api/User/user',{headers:headers,withCredentials:true})
      .then(res=>{setCurrentUser(res.data);setUserRole(res.data.role.name)})
      .catch(error=>{
        console.log(error)
      })
  },[])


  return (
    <Router>
      <div className="App">
        <Header currentUser={currentUser}/>

        <Switch>
          <Route exact path="/">
            {(Object.keys(currentUser).length===0)?<LoginPage /> :<HomePage currentUser={currentUser}/>}
          </Route>
        
          <Route exact path={"/project/:id"}>
            {(Object.keys(currentUser).length!==0)?<ProjectPage currentUser={currentUser} />:<LoginPage/>}
          </Route>

          <Route path={"/admin"}>
            <AdminPanel userRole={userRole}/>
          </Route>
        </Switch>
      
      </div>
    </Router>
    
  );
}

export default App;
