import "../index.css";
import img from '../assets/javascript.png';

console.log('Hello World!');

const mainBody = document.querySelector('body');

const newH1 = document.createElement('h1');
newH1.textContent = 'I love JavaScript';
mainBody.append(newH1);

const newImg = document.createElement('img');
newImg.className = 'js-image';
newImg.src = img;
mainBody.append(newImg);