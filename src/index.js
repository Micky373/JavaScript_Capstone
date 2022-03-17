import './styles.css';
import Image from './images/vegan.jpg';
import getMeal from './modules/getMealList.js';
import addComment from './modules/addComment.js'
getMeal();

const imageContainer = document.querySelector('.image_container');
const popup = document.querySelector('.popup');
const x = document.querySelector('#x');

imageContainer.innerHTML = `<img class="logo_image" src="${Image}" alt="logo image"/>`;

x.addEventListener('click', () => {
  popup.classList.toggle('d-none');
  popup.classList.toggle('d-f');
});

const form = document.querySelector('.addcomment');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('.name').value;
  const comment = document.querySelector('.comment').value;
  addComment(e.target.parentNode.parentNode.parentNode.dataset.id, name, comment);
  form.reset();
  console.log(e.target.parentNode.parentNode.parentNode.dataset.id);  
})
