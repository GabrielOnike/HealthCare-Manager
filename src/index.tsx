import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux'; // import Redux
import { configureStore } from './store'; //for redux from store.js
//import { Router, HashRouter } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

//imports below are directly used for darkMode but id have to still configure
//color and the toggle mode button
// import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';

//the below uses MuiTheme to choose the color pallet to dark mode or otherwise
// const theme = createMuiTheme({
//   palette: {
//     type: "dark",
//   }
// });
// ThemeProvider and CssBaseline are plugged in around before App to switch mode

ReactDOM.render<any, any>(
//{{/* <Provider store={configureStore()} >   */}} //incase of reducer errors, raise provider to this top-level
  <React.StrictMode>
    <Provider store={configureStore()} >
    {/* <ThemeProvider theme={theme}> */}
    {/* <CssBaseline /> */}
    <App />
    {/* </ThemeProvider> */}
    </Provider>
  </React.StrictMode>
  //</Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
