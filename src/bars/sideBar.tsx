import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import { Link as Mlink, Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText, } from '@material-ui/core';
import { ListItemProps } from '@material-ui/core/ListItem'; //imported to get ListItem redirect to work - see ReadME for link tutorial
import { Link } from 'react-router-dom';
//import MailIcon from '@material-ui/icons/Mail';  -- this is a sample of how i imported one by one before seeing the light as below
import { Menu as MenuIcon, Mail as MailIcon, MoveToInbox as InboxIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon  } from '@material-ui/icons';
//import { red } from '@material-ui/core/colors';
//import { white } from 'material-ui/styles/colors';
import { LocalPharmacy as LocalPharmacyIcon, LocalHospital as LocalHospitalIcon, Event as EventIcon, People as PeopleIcon, Settings as SettingIcon, Forum as ForumIcon, NoteAdd as NoteAddIcon } from '@material-ui/icons';

import Routes from '../routes';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
 import Appointments from '../pages/appointments/index';
 import Patients from '../pages/patient/index';
 import Pharmacy from '../pages/pharmacy/index';
 import Settings from '../pages/settings/index';
 import Users from '../pages/users/index';
 import Chat from '../pages/chat/index';
 import Accounts from '../pages/accounts/index';

const drawerWidth = 240;

const items = [
  {
    id: 0,
    href: '/pages/patient/index',
    icon: <LocalHospitalIcon/>,
    page: `#Patients`,
    title: 'Patients',
    active: false,
  },
  {
    id: 1,
    href: <Redirect to='/Appointments' />,
    icon: <EventIcon/>,
    page: `#Appointments`,
    title: 'Appointments',
    active: false,
  },
  {
    id: 2,
    href: '/Pharmacy',
    icon: <LocalPharmacyIcon/>,
    page: `#Pharmacy`,
    title: 'Pharmacy',
    active: false,
  },
  {
    id: 3,
    href: '/app/account',
    icon: <PeopleIcon/>,
    page: `#Users`,
    title: 'User',
    active: false,
  },
  {
    id: 4,
    href: '/login',
    icon: <ForumIcon/>,
    page: `#Chat` ,
    title: 'Consult',
    active: false,
  },
  {
    id: 5,
    href: '/register',
    icon: <NoteAddIcon/>,
    page: `#Accounts` ,
    title: 'Register',
    active: false,
  },
  {
    id: 6,
    href: '/app/settings',
    icon: <SettingIcon/>,
    page: `#Settings` ,
    title: 'Settings',
    active: false,
  },
];

//function to display items below --- unused/untested as of now... needs makeActive() to work
//   const displayItem = (items: any) => {
//     items.forEach((item: any) => {
//     if (item.active === true ){
//       return <Redirect to={item.href} />
//     } 
//     else {
//       console.log('nothing to return' );
//       return null;
//    }
//   });
// };

//this checks the id of the item clicked and stores it in a variable  
//this goes thru the items array to compare which item is eq === to that variable
//if it is equal to the variable, the id switches on active to true 
//and then stores the item page as a return route/redirect fn 
//which can be called in any page or route to facilitate switch 
 
// const makeActive = (items: any) => {
//     items.map(item) = {
//       ''''
//     }
//  }


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: "#a09381",
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      backgroundColor: "#ffebcd",
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
      backgroundColor: "#ffebcd",
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

//the fn below assist in link redirect for listItems... see link tutorial
function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

// export default function MiniDrawer(props: typeof items) - consider this for typescript  
export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const returnItem = () => {
  //   items.map(item => {
  //     return <Redirect to='/Appointments' />;
  //  }
  // };
  
  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            HEALTHCARE MANAGER
          </Typography>
          <div style={{ marginLeft: 'auto', textAlign: "right", }}>
            <Typography >
              <Link href="/" to="/">
                Logout
              </Link>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>

        <Divider />
        
          {/* onClick={<Redirect to="item.href" />} */}
          {/* onClick={()=> item.href} */}

        {/* /The arrays below map the items const and slices 'em to arrange display accordingly*/}
        <List>
          {items.slice(0,6).map((item,index) => (
              //@ts-ignore
              <ListItemLink href={item.page} >
                <ListItem button key={item.title} >
                <ListItemIcon> { item.icon } </ListItemIcon>
                <ListItemText primary={item.title} />
                </ListItem>
              </ListItemLink>
          ))}
        </List>

        <div style={{position: 'absolute', bottom: 0, }}>    
        <Divider />
        </div>
        <div style={{position: 'absolute', bottom: 0, left: 0, }}>
        <List >
          { items.slice(6,8).map((item, index) => (
             //@ts-ignore
             <ListItemLink href={item.page} >
              <ListItem button key={item.title} >
              <ListItemIcon> { item.icon } </ListItemIcon>
              <ListItemText>  { item.title } </ListItemText> 
              </ListItem>
             </ListItemLink>
          ))}
        </List>
        </div>
      </Drawer>
       {/* <main className={classes.content}>
        <div className={classes.toolbar} > */}
        
        {/* <div id="mainview"> */}
             {/* <Routes/> */}
                      {/* <Switch>
                        <Route path="/pages/appointments/index" element={ <Appointments/> } />
                        <Route path="/pages/patients/index" element={ <Patients /> } />
                        <Route path="/pages/pharmacy/index" element={ <Pharmacy/> } />
                      </Switch> */}
            {/* <p>
            vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum q
            </p> */}
        {/* </div>  */}
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography> */}

            {/* </div> */}
      {/* </main>  */}
    </div>
  );
}

/*

const sideBar = (props) => {
    return (
        <div>
          <p>i am sidebar</p>
        </div>
    );
}


export default sideBar;
*/