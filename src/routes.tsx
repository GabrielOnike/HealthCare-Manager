import React, { FunctionComponent, Component, Suspense, lazy } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Login from './components/login';

import Appointments from './pages/appointments/index';
import Patients from './pages/patient/index';
import Pharmacy from './pages/pharmacy/index';
import User from './pages/users/index';
import Consult from './pages/chat/index';
import Accounts from './pages/accounts/index';
import Settings from './pages/settings/index';

import Sidebar from './bars/sideBar';

import { makeStyles } from '@material-ui/core/styles';


//tried the below to lazy load appointments but i get a suspense error... i've commented it out
//instead ive decided to use the import fro Appointments above- conside the const below later 
//const Appointments = lazy(() => import('./pages/appointments/index'));

//using useStyles here and callin it in DefaultConatiner was specifially implemented to solve  
//issue of the drawer covering the page contents
const useStyles = makeStyles ({
  container : {
    display: 'flex',
  }
})

// const classes = useStyles();

 function DefaultContainer() {
  const classes = useStyles();
    return(
    <div>
    <div className={classes.container} >
       <header >
        <nav>
        <Sidebar />
        </nav>
      </header>
        <Route exact path="/Home" component={ Home } />
  
        <Route path="/Appointments" component={ Appointments } />
        <Route path="/Patients" component={ Patients } />
        <Route path="/Pharmacy" component={ Pharmacy } />
        <Route path="/Users" component={ User } />
        <Route path="/Chat" component={ Consult } />
        <Route path="/Accounts" component={ Accounts } />
        <Route path="/Settings" component={ Settings } />
    </div>
    </div>
    )
 }

 const LoginContainer = () => (
        <div className="container">
        <Route path="/" component={Login} />
        </div>
  )

export default function Routes() {
    // render() {
        // const pathname = window.location.pathname; deprectaed after file restructure
        return (
            <HashRouter>
                <Switch>
              
                <Route exact path="/" component={LoginContainer}/>
                <Route component={DefaultContainer}/>
                
              </Switch>
            </HashRouter> 
        )
    // }
}

//INITIAL ROUTES COMPONENT - had to retsurtcure to DefaultContainer and LoginCOntainer
// in order to get SIdeBar to display on only certain routes... see initial below 
//also, see link in ReadMe for tutorial link
//
// export default class Routes extends Component {
//     render() {
//         // const pathname = window.location.pathname; deprectaed after file restructure
//         return (
//             <HashRouter>
//                 <Switch>
              
//                     <Route exact path="/Home" component={ Home } />
  
//                     <Route path="/Appointments" component={ Appointments } />
//                     <Route path="/Patients" component={ Patients } />
//                     <Route path="/Pharmacy" component={ Pharmacy } />
//                     <Route path="/pages/user/index" component={ User } />
//                     <Route path="/pages/chat/index" component={ Consult } />
//                     <Route path="/pages/register/index" component={ Register } />
//                     <Route path="/pages/settings/index" component={ Settings } />

//                   {/* remember! empty/main path "/" ought to come last to avoid page screen freeze or pages not showing up */}
//                     <Route path="/" component={ Login }  /> 
//               </Switch>
//             </HashRouter> 
//         )
//     }
// }

// The below uses features on beta reactrouterdom v6 hence a switch bak to more stable ways
// uses api call features like Outlet and Navigate in the v6 and in app.tsx for easier routing
// consider in future updates/release
// export const routes = [
//     {
//         path: 'app',
//         element: <Home />,
//         children: [
//           { path: 'patient', element: <Patients /> },
//           { path: 'appointments', element: <Appointments /> },
//           { path: 'pharmacy', element: <Pharmacy /> },
//           { path: 'user', element: <User /> },
//           { path: 'consult', element: <Consult /> },
//           { path: 'register', element: <Register /> },
//           { path: 'settings', element: <Settings /> },
//         ]
//       }

// ];

