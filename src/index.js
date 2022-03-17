import './styles.css';

const logoImage = document.querySelector('.logo_image')
const btn = document.querySelectorAll('.comments');
const popup = document.querySelector('.popup');
const x = document.querySelector('#x');

logoImage.src = './images/vegan.jpg'

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