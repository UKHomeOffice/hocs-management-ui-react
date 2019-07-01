import App from './App';
import ReactDOM from 'react-dom';
import React from 'react';
import './styles/app.scss';

const render = (_App) => {
    console.log("in render");
    if (typeof window !== 'undefined') {
        ReactDOM.render(
            <_App/>,
            document.getElementById('AppContainer')
        )
    }
};

render(App);
