import Heading from './components/heading/heading.js';
import KiwiImage from './components/kiwi-image/kiwi-image.js';

const heading = new Heading();
heading.render('kiwi');
const kiwiImage = new KiwiImage();
kiwiImage.render();

import('HelloWorldApp/HelloWorldButton').then((ButtonModule) => {
    const HelloWorldButton = ButtonModule.default;
    const helloWorldButton = new HelloWorldButton();
    helloWorldButton.render();
});