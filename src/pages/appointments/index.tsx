import React, { Component } from 'react'
// import Sidebar from '../../bars/sideBar';
// import MiniDrawer from '../../bars/sideBar'; // using this fn before the content still failed to flex the content that hides behind the drawer
import { createStyles, makeStyles, useTheme, Theme, MuiThemeProvider } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core';
// import { withStyles } from '@material-ui/styles';
// import PropTypes from 'prop-types';



// const Minidrawer = (props: any) => MiniDrawer();
// const drawerWidth = 140;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // root: {
    //   display: 'flex',
    // },
    // toolbar: {
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'flex-end',
    //   padding: theme.spacing(0, 1),
    //   // necessary for content to be below app bar
    //   ...theme.mixins.toolbar,
    // },
    content: {
      // display: 'align',
      // position: 'relative',
      flexGrow: 1,
      padding: theme.spacing(8 ),
      // ...theme.mixins.toolbar,
      //  minWidth: 100,
      //  zIndex: theme.zIndex.drawer - 1,
    },
  }),
); 


// type AppointmentsState = {
//   drawerOpen: true,
// }

//below is the ts version of the component
// export default function Appointments({ drawerOpen }: AppointmentsState)
export default function Appointments() {
        const classes  = useStyles();

        return (
            // <div className={classes.root} >
            <main className={classes.content} > 
              {/* style={contentStyle}  */}
              
            {/* <div className={classes.toolbar} >  */}
           
        
            <div id="mainview"> 
            <div>
            
                <p> Hi from Appointmetns ! olore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultric </p>
             
            </div>
            </div>
               

            {/* </div> */}
            </main>
            // </div>
        )
    }


// //@ts-ignore
// Appointments.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };


// BELOW is a failed sasmple implementation for adjusting drawer compoennt 
// In hindsight, this may have been better in the Routes or App files
//
// export default function Appointments() {
//   const classes  = useStyles();
  // const theme  = useTheme();
  // const theme = ((theme: Theme)  => useTheme());  - ts theme call sample

  // const contentStyle = { transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };
  // const Minidrawer = ( props: any) => MiniDrawer();
  // if (drawerOpen) {
  //   // @ts-ignore
  //   contentStyle.marginLeft = 256;
  // }
  // return ()
  // ...