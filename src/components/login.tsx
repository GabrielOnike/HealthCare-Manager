import React from 'react';
import './login.css';
import { Form, Button, Jumbotron } from 'react-bootstrap';

import Home from '../pages/Home';
//import Patients from '../pages/patient/index';

import { HashRouter, Link, Route, Switch, Redirect, useHistory, withRouter } from "react-router-dom";
import Routes from '../routes'; // this mport sometimes causes errors, be weary

import { render } from '@testing-library/react';
//import Jumbotron from 'react-bootstrap/Jumbotron';

import logo from '../logo-hms.gif';
//image/resources import below
import allhealth from '../res/images/360-health.jpeg';
import tele from '../res/images/telehealth.png';
import digi from '../res/images/digihealth.png';


//nterface LoginState {
//    user: any
// }

// im adding this to import users state from App.tsx 
// const user: string[] = this.props.user ;


class Login extends React.Component<any, any>{
  /* constructor(props: any) {
    super(props);
    this.state = {
      user: null,
      password: null,
    };
 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goToHome = this.goToHome.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
*/
     constructor(props: any) {
        super(props);
        this.state = {
          user: "john",
          navigate: false,
        }
      }

/* // The HandleSubmit fucntion will be used for authetication later 
   // TO DO !
  handleSubmit(e: any) {
    this.setState({ user: e.target.value });

    return (
      <Home/>
    );
  }
  */

  goToHome = () => {
    // event-prevent has issues working with typescript. reconfirm before re-use
    // e.preventDefault(); 

    console.log("on your way home");
    this.setState({ navigate: true });
    
    //consider the removal of this return statement because it didnt come in handy for routing
    // im leaving this tho so reader can see other options for rerouting
    return ( 
     //   <Route>
      //    <Route to="/" push={true}> <Home/>  </Route> 
     //   </Route>
     
     // this.props.history.push('/Home')     // checkout 
/*
      <Route>
       render() {
      <Redirect to={{ pathname:"/Home" }} /> }
      </Route>
*/
/*
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </HashRouter>  */
      null
    )

    //cosnider impletenting hook like componentDidUpdate that can also handle login redirect

  };




  render() {
    // const [user, password] = setState('');
    // const navigate = () => this.state.navigate;
    
    // You have to outline the state condition within this render in order to get redirect to work
    // also take note that file path here syncs with whats in the Routes file
    if (this.state.navigate === true ) { return  <Redirect to='/Home'  />  }

    return (
      <div className="App column" >
        
      { /* <header className="App-header" style={{ maxHeight:"100% !important"}}> */}
          <div>
            <div className='left'>
              <Jumbotron>
              <div>
                <div className="jumbotron content">
                  <h1>
                    HEALTHCARE MANAGER
                  </h1>
                </div>
                {/* <div className='Entry-background'>
                    <img src="https://www.ngonike.dev/portrait_gabriel.jpg" width="65%" height="400px"    />
                   </div> */}
                <ul className="services-bar" >
                  <li id="services-bar">
                    <img src={allhealth} />
                    <h4>360 Healthcare Management</h4>
                  </li>
                  <li id="services-bar">
                    <img src={tele} />
                    <h4>TeleHealth and modern healthcare</h4>
                  </li>
                  <li id="services-bar">
                    <img src={digi} />
                    <h4> Omnipresent data  </h4>
                  </li>
                </ul>
                <div className="services-footer" >
                  <h6>Copyright 2021. TransCo Healthcare</h6>
                </div>
              </div>
              </Jumbotron>
            </div>


            <div className='right' style={{ width: '500', height: '1000' }}>
              <div className='app-logo' style={{ background: 'darkgrey' }}  >
                <img src={logo} className="" alt="logo" height="350" width="250" />
              </div>
              <div>
                <h2>
                  LOGIN
                  </h2>
                <div>
                  <div>
                    <Form className="pt-3">
                      {/*<label htmlFor="name" >Username </label>*/}

                      <Form.Group className="d-flex search-field" >
                        <Form.Control type="text" className="box h-auto" id="name" name="user" placeholder="username" /><br />
                        {/*<label htmlFor="name">Password </label>*/}
                      </Form.Group><br />

                      <Form.Group>
                        <Form.Control type="password" className="box h-auto" id="id_001" name="password" placeholder="password" /><br /><br />
                      </Form.Group>

                      <div className="mt-3">
                        <Button className="btn btn-block btn-primary btn-lg font-weight-bold auth-form-btn" type="button" onClick={this.goToHome} value="SIGN IN"> SIGN IN  </Button>
                      </div>

                      { /*{this.state.user && <button>Logout</button>} */}
                    </Form>

                  </div>
                </div>
              </div>
            </div>
          </div>
          
          { /* </header> */}

      </div>



    );
  }
}

// export with withRouter to get the component to work e.g export default withRouter(yourComponent);
export default withRouter(Login);
