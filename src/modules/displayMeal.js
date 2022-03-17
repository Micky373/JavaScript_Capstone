const mealItems = document.querySelector(".items");
const popup = document.querySelector('.popup');
const popimg = document.querySelector('.img')
let template = "";
const displayMealList = (meals) => {
  for (let i = 0; i < meals.length; i += 1) {
    const li = document.createElement("li");
    li.setAttribute('id',`${meals[i].idMeal}`)
    const img = `<img class= "meal_image"src="${meals[i].strMealThumb}" alt="logo image"/>`;
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    li.classList.add("item");
    div1.classList.add("img");
    div1.innerHTML = img;
    div2.classList.add("info");
    const infoContent = `<div class="nameAndLikes">
      <div class="likes">
        <span class="mealNmae">${meals[i].strMeal}</span>
        <i class="fa fa-heart" aria-hidden="true"><br><br><span class="likes_count">Likes(4)</span></i>
      </div>`;
    div2.innerHTML = infoContent;
    div3.classList.add("commentsReservation");
    const cbtn = document.createElement("button");
    cbtn.classList.add("comments");
    cbtn.setAttribute('type', 'button');
    cbtn.innerText = "Comments";
    const rbtn = document.createElement("button");
    rbtn.setAttribute('type', 'button');
    rbtn.innerText = "reservation";
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
      for (let i of meals) {
        if (i.idMeal == e.parentNode.parentElement.id) {
          popimg.innerHTML = `<img class= "meal_image"src="${i.strMealThumb}" alt="logo image"/>`;
        }
      }
      popup.classList.toggle('d-f');
    });
  });
};
export default displayMealList;
