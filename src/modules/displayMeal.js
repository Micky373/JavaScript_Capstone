import popUpDisplay from './popUpDisplay.js';
import addLike from './addLike.js';

const mealItems = document.querySelector('.items');
const popup = document.querySelector('.popup');
const popimg = document.querySelector('.img');
const popTitle = document.querySelector('.popup_title');
const likeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yKb2fopXHs8DBr8kZdp6/likes';

const displayMealList = async (meals) => {
  const response = await fetch(`${likeUrl}`);
  const data = await response.json();
  for (let i = 0; i < meals.length; i += 1) {
    const li = document.createElement('li');
    li.setAttribute('id', `${meals[i].idMeal}`);
    const img = `<img class= "meal_image"src="${meals[i].strMealThumb}" alt="logo image"/>`;
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    li.classList.add('item');
    div1.classList.add('img');
    div1.innerHTML = img;
    div2.classList.add('info');
    const span = document.createElement('span');
    span.classList.add('mealNmae');
    span.innerText = `${meals[i].strMeal}`;
    const icon = document.createElement('i');
    icon.setAttribute('data-id', `${meals[i].idMeal}`);
    icon.setAttribute('id', 'fales');
    icon.classList.add('fa');
    icon.classList.add('heart');
    icon.classList.add('fa-heart');
    icon.setAttribute('aria-hidden', 'true');
    let like = '0';
    for (let i = 0; i < data.length; i += 1) {
      if (data.item_id === meals[i].idMeal) like = data.likes;
    }
    icon.innerHTML = `<br><br><span class="likes_count">Likes(${like})`;
    const div11 = document.createElement('div');
    div11.classList.add('nameAndLikes');
    const div12 = document.createElement('div');
    div12.classList.add('likes');
    div12.appendChild(span);
    div12.appendChild(icon);
    div11.appendChild(div12);
    div2.appendChild(div11);
    div3.classList.add('commentsReservation');
    const cbtn = document.createElement('button');
    cbtn.classList.add('comments');
    cbtn.setAttribute('type', 'button');
    cbtn.innerText = 'Comments';
    const rbtn = document.createElement('button');
    rbtn.setAttribute('type', 'button');
    rbtn.innerText = 'reservation';
    div3.appendChild(cbtn);
    div3.appendChild(rbtn);
    li.appendChild(div1);
    li.appendChild(div2);
    li.appendChild(div3);
    mealItems.appendChild(li);
  }
  const btn = document.querySelectorAll('.comments');
  btn.forEach((e) => {
    e.addEventListener('click', () => {
      popup.classList.toggle('d-none');
      for (let i = 0; i < meals.length; i += 1) {
        if (meals[i].idMeal === e.parentNode.parentElement.id) {
          popimg.innerHTML = `<img class= "meal_image"src="${meals[i].strMealThumb}" alt="logo image"/>`;
          popTitle.innerText = `${meals[i].strMeal}`;
          popup.classList.toggle('d-f');
          popUpDisplay(e.parentNode.parentElement.id);
        }
      }
    });
  });
  const icon = document.querySelectorAll('.fa');
  icon.forEach((e) => {
    e.addEventListener('click', async (event) => {
      const { id } = event.target.parentNode.dataset;
      if (event.target.parentNode.id === 'fales') {
        addLike(id, likeUrl);
        event.target.parentNode.classList.add('liked');
        event.target.parentNode.classList.remove('heart');
        const response = await fetch(`${likeUrl}`);
        const data = await response.json();
        for (let i = 0; i < data.length; i += 1) {
          if (data.item_id === id) {
            event.target.parentNode.id = 'true';
            event.target.parentNode.innerHTML = `<br><br><span class="likes_count">Likes(${data.likes + 1})`;
          }
        }
      }
    });
  });
};
export default displayMealList;
