
//  Keep these at the top of the file, has webpack and browserify underhood.
import React from 'react';
//  can plug and play different of libraries, like react native = for mobiles.
// gets these liraries from react modules
import ReactDOM from 'react-dom';
//  ./ means check in this currenr folder.
import './index.css';
import App  from './containers/App.js'
import * as serviceWorker from './serviceWorker';
import 'tachyons';
// destructing if there was more than one variable in the robot.js file.


// Gets the reactdom package use teh render method
// THis is where you render your Components
ReactDOM.render(
    //  has to go into a single div to return can not have more when 
    // rendering
    // THese are also props in here
        <div>
            <App/>
        </div>
        , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
