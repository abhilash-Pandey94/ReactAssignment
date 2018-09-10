import React, { Component } from 'react';
//import Browser Router
import {BrowserRouter as Router} from 'react-router-dom';
//Import Route package to Route login page
import Route from 'react-router-dom/Route';
//import css file 
import './styles/App.css';
//import bootsrap file
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import login Page
import LogInPage from './component/Login/LogInPage';
//App component to run on default path
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact strict component={LogInPage}/>
      </Router>

    );
  }
}
//export App component
export default App;
