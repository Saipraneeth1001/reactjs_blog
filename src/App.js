import React, {Component} from 'react';
import { BrowserRouter ,Switch, Route } from 'react-router-dom';
import Navbar from './Components/Layouts/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import ProjectDetails from './Components/Projects/ProjectDetails';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import CreateProject from './Components/Projects/CreateProject';
import About from './Components/Auth/About';
import weather from './Components/weather';

  class App extends Component {
    render(){
      return (
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path = "/" component={Dashboard} />
              <Route path = "/project/:id" component={ ProjectDetails } />
              <Route path = "/signin" component={SignIn} />
              <Route path ="/signup" component={SignUp} />
              <Route path="/create" component={CreateProject} />
              <Route path = "/about" component = {About}/>
              <Route path = "/weather" component = {weather} />
            </Switch>
          </div>
        </BrowserRouter>
        
      );
    }
 
}

export default App;
