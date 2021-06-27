import Kiwi from './todo.jpg';
import './kiwi-image.scss';


class KiwiImage {
    render() {
        const img = document.createElement('img');
        img.src = Kiwi;
        img.alt = 'Kiwi';
        img.classList.add('kiwi-image');

        const bodyDOMElement = document.querySelector('body');
        bodyDOMElement.appendChild(img);

    }
}

export default KiwiImage;