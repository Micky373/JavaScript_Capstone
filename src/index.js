import './styles.css';
import Image from './images/vegan.jpg';

const imageContainer = document.querySelector('.image_container');
const btn = document.querySelectorAll('.comments');
const popup = document.querySelector('.popup');
const x = document.querySelector('#x');

imageContainer.innerHTML = `<img class="logo_image" src="${Image}" alt="logo image"/>`;

btn.forEach((e) => {
  e.addEventListener('click', () => {
    popup.classList.toggle('d-none');
    popup.classList.toggle('d-f');
  });
});

x.addEventListener('click', () => {
  popup.classList.toggle('d-none');
  popup.classList.toggle('d-f');
});