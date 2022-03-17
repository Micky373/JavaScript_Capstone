import './styles.css';
import Image from './images/vegan.jpg';
import getMeal from './modules/getMealList.js';

const imageContainer = document.querySelector('.image_container');
const popup = document.querySelector('.popup');
const x = document.querySelector('#x');

imageContainer.innerHTML = `<img class="logo_image" src="${Image}" alt="logo image"/>`;

x.addEventListener('click', () => {
  popup.classList.toggle('d-none');
  popup.classList.toggle('d-f');
});

getMeal();
