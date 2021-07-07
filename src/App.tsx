import React from 'react';
import { HashRouter, Link, Route, Switch, Redirect, useLocation, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
//import logo from './logo-hms.gif';  -- see login component

//image/resources import below  ---  moved to login component
//import allhealth from './res/images/360-health.jpeg';
//import tele from './res/images/telehealth.png';
//import digi from './res/images/digihealth.png';

//component imports below
import Routes from './routes';
import Login from './components/login';
import Home from './pages/Home.js';
import Sidebar from './bars/sideBar';
//other dependency imports below
import { connect } from 'react-redux'; // redux import
//css and render imports below
import './App.css';
import { render } from '@testing-library/react';

{
  {/*
const Home = () =>{
  return(
    <Home/>
  )
}
*/}
}

//consider using the below instead of <any, any> ... as in 
//<Props & RouteProps, HashRouter, State>
class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: "john",
      navigate: false,
    };
  }
  


  render() {
    // const routing = () => useRoutes(routes);
//    const pathname = window.location.pathname;
    // console.log(pathname);
    
    return (
      <HashRouter>
        {/* <Switch>   
            <Route path="/" component={Login}> <Login /> </Route>    
            <Route path="/Home" component={Home}> <Home /> </Route>           
          </Switch> */}
          {/* i either use the switch statement above(*"/" has to come first ) or the routes comp below */}
          {/* while using this switch, remeber to uncomment the Home const while commmenting the Home import   */}
        <Routes/>
      </HashRouter>
    )
  }
}

export default App;


