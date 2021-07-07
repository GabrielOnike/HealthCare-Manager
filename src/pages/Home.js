import React from 'react';
//import App from './App.tsx';
import SideBar from '../bars/sideBar';
// import MiniDrawer from '../bars/sideBar'; //Test later as a standalone part of the sidebar component 
//import Footer from '../bars/footer.js';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
// import Routes from '../routes';
import PatientStats from '../components/stats/patientStats';
import RevenueStats from '../components/stats/revenueStats';
import SocialStats from '../components/stats/socialStats';
import UpcomingAppointments from '../components/stats/upcomingAppointments';
// import Appointments from '././appointments/index';
// import Patients from '././patient/index';
// import Pharmacy from '././pharmacy/index';
import { createStyles, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { Container, Grid, Theme } from '@material-ui/core';
    
//const theme = Theme; 
//@ts-ignore
//const useStyles = makeStyles((theme: Theme) =>
const useStyles = makeStyles((theme) =>
        createStyles({
            content: {
                flexGrow: 1,
                flexDirection: "column",
                padding: theme.spacing(8),
                // height: 800,
                minHeight: '100vh',
                background: 'rgba(241, 229, 229, 0.4)',
                borderRadius: '15px',
                backdropFilter: 'blur(3px)',

            },
        }),
    );



function Home() {
 
          const classes  = useStyles();
          return (
            <div style={{background: "radial-gradient(circle, rgba(169,169,169,1) 3%, rgba(255,235,205,1) 53%, rgba(160,147,129,1) 100%)" }}>
            <div className={classes.content}>
              <p style={{paddingLeft: 20, }}>
                Welcome to your Dashboard.
              </p>
            <Container maxWidth={false}>
              <Grid container spacing={3}>

                <Grid item lg={4} sm={6} xl={3} xs={12} >
                    <PatientStats/>
                </Grid>

                <Grid item lg={4} sm={6} xl={3} xs={12} >
                    <RevenueStats/>
                </Grid>

                <Grid item lg={4} sm={6} xl={3} xs={12} >
                     <SocialStats/>
                </Grid>  

                <Grid item lg={8} sm={12} xl={9} xs={12}>
                      <UpcomingAppointments/>
                </Grid>

              </Grid>
            </Container>

            </div>
           </div>
          );
        }
      

//export{};
export default Home; 