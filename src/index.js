import './styles.css';
import Image from './images/vegan.jpg';

const btn = document.querySelectorAll('.comments');
const popup = document.querySelector('.popup');
const x = document.querySelector('#x');

btn.forEach((e) => {
    e.addEventListener('click', () => {
        popup.classList.toggle('d-none');
        popup.classList.toggle('d-f');
    })
})

x.addEventListener('click', () => {
    popup.classList.toggle('d-none');
    popup.classList.toggle('d-f');
})