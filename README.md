# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


### The Build - ME
i followed the tutorial in : https://medium.com/@devesu/how-to-build-a-react-based-electron-app-d0f27413f17f

i created a react APP, using CMD 
- npx create-react-app healthcare-manager --typescript  // OR npm init react-app <app-name> --typescript

next, this , module installs necessary dependencies to help the project run with react
- npm install --save cross-env electron-is-dev // OR yarn add cross-env electron-is-dev

next , another lib
- npm install concurrently electron electron-builder wait-on

next, i created /public/electron.js and filled it with whats there now ( i'd edit this file later)

next, i changed the package.json file and added and changed  
- description, appname, homepage and main
- scripts { react-start, react-test, react,eject e.t.c.}

BUILD ERRORs
- npm install @types/react   
--this CMD solved an issue after build which showed a typescript error TS7016 . See link below
 [ https://medium.com/@pjausovec/how-to-fix-error-ts7016-could-not-find-a-declaration-file-for-module-xyz-has-an-any-type-ecab588800a8 ]



For distribution purpose use command —
- npm run build OR yarn build
Once yarn build command successful, you can see a new folder dist has been created inside your project folder. Navigate inside that folder and you can find installer file of your application.


DEPENDENCES
- material UI - npm i material-components-web  [done]
- npm install --save bootstrap
- npm install --save react-bootstrap
- npm i --save react-router-dom  [done] --i will use hashrouter via this dependency. see Link 1 (in biblio...) for explanation
- npm install --save @types/react-router-dom [done] -- solved import declaration error
- npm install --save redux react-redux  [done] -- for better state mgt, not sure yet how this comes in but i feel it'dbe handy to assist my current login dilema(https://bit.ly/3bvICz1)
- npm install --save @types/material-ui [done] -- decided to go with material ui for responsive uniformity i.e !! bootsrap may be uninstalled here later...also gone ahead straight to installing types as opposed to having to call it again after regular install with npm.
- npm install --save @material-ui/core -- this and the one below differ from materialUI package, had to be installed separately
- npm install --save @material-ui/icons  -- 
- npm install electron-devtools-installer --save-dev   -- had issues with routing, needed chrome react dev tool. This package handles that for me. see Main process for added code and link for tutorial. 
-  npm i -s moment -- moment is a package for formating date ad time in js(got it form material demo)


Other steps
- require('electron-reload')(__dirname); //for hot reload during dev. added to ./public/electron.js 


TYPESCRIPT PECULIARITIES
- *for* as in "<label for="email" > Email</label>" becomes = *htmlFor* 
   sanme principle applies to *class* to *className* in React 

- import for hashrouter in react-router-dom, at top of App.js kept throwing a declaration error. Solved by installing types as in : npm install --save @types/react-router-dom (via stackoverflow)                               If you would like to disable it site wide you can instead edit tsconfig.json and set noImplicitAny to false.

- once again, imports require types to work i.e. npm install --save-dev @types/react-redux -- had to do this for react-redux imports to work.                  
- alternatively, one can require the old method i.e const { Provider } = require('react-redux'); by calling in this way [not sure to always work]

- on imports once again.. typescript views imports as modules and will throw up errors unles - ./tsconfig.json is edited to contains [ "compilerOptions:{"checkJs": allowJS, "checkJs": false}] ... allow was true already so i added checkjs to see if it'll stop the errors.OR:                                                           Method2:  const SampleComp:any = require('./../pages/SampleComp')                  Method3:  import * as SampleComp from './../pages/SampleComp';

- routing was abit of a headache ... but using withrouter, hashrouter etc, i was able to get it to work see source files and comments for details. not that i had tried push.history but it failed to achieve the desired result

- again, on routing : getting the navbar(sideBar) links to display the appropriate pages was a nigtmare--  i had to eventually import/use the <ListItemLink> component for Typescript from Material UI and wrap it around <ListItem> ... i had tried using functions but it defetaed the purpose of bronging itnMaterial UI as well as other methods... see turotial in links
- [ TO DO ] - https://www.youtube.com/watch?v=CjFWbEOcq-Y implement a better route/onclick on drawer list

- using //@ts-ignore before a line helps the typechecker to ignore Typsecript errors on the line below it

- thereafter, i tried to display the sidebar conditionally(only on some routes-- i tried using location.pathname etc i.e see comments in page) but it didnt want to work programmatically ... eventually, i split the routes component into two consts (defaultcontainer and LoginContainer)  and then brought them into the <Routes> component before i could get that to work. see useful links i used below
- moreover, i edited the mixins.tsx and createMixins.tsx in the (see*)materialUIs/Core/Styles directory for drawer edist tho it may not have come in handy, but i left it there for future reference

- so, for about 2 days i treid to fix the drawer display issue --- the drawer kept covering the pages content and wouldnt adjust pogrammatically(i.e flex in css) ... after running around on the internet, i finally found a vid tut on youtube that showed materialUI+ReactRouter , here i saw a cleaner implementation of the onclick for the listItems using withRouter and History again... i also saw that i had to restructure my routes.tsx and i adjusted the class calls(css) in the DefaultContainer that housed drawer routes... i also converted the the Consts to fns(due to Ts errors not allowing const calls except in hooks and fn components) to enable me use malke use of the 'makeStyles' from MateriulUI/core... the link list has the youtube link or check the immediate point above

- also, im starting to get the hang of Typescripts scope and usage


OTHER LINKS/DIRECTORIES USED I.e Bibliography
 - LINK 1 - https://medium.com/folkdevelopers/the-ultimate-guide-to-electron-with-react-8df8d73f4c97 

- https://www.npmjs.com/package/electron-devtools-installer
- https://www.programmersought.com/article/75907734931/ -- install dev tools article

- https://www.gitmemory.com/issue/mui-org/material-ui/7877/493518825 - using TS Ignore

- https://material-ui.com/components/lists/ -- rnder a link in material UI Lists components
- https://www.youtube.com/watch?v=CjFWbEOcq-Y -- Material+ReactRouter Tutu/ a better way to implement onclick on drawer component
- https://www.pluralsight.com/guides/manipulating-arrays-and-objects-in-state-with-react -- manioulating arrays in react
- https://www.pluralsight.com/guides/defining-props-in-react-function-component-with-typescript -- props in Typsecript component

- https://www.semicolonworld.com/question/72319/how-to-hide-navbar-in-login-page-in-react-router - hide SideBar in loginPage
- https://levelup.gitconnected.com/material-ui-how-to-implement-dark-mode-and-edit-theme-colors-effcfa0893b9 - basic Dark theme implementation in material UI