import Heading from './components/heading/heading';
import HelloWorldButton from './components/hello-world-button/hello-world-button';
// import _ from 'lodash';
import React from 'react';

const heading = new Heading();
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
heading.render('hello-world');


if(process.env.NODE_ENV === 'development') {
    console.log('mode dev');
}
if (process.env.NODE_ENV === 'production') {
    console.log('mode prod');
}