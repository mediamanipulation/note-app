import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

const notes= [{
    id: 1,
    title: 'woop woop',
    content: 'I need to finish the blog',
   date:'May 10th 2000, 11:09:21 am'
},
{
    id: 2,
    title: 'my second note',
    content: 'I need to finish the blog',
    date:'March 08th 2016, 03:09:21 pm'
}]
ReactDOM.render(<App notes={notes} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();