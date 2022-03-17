const mealItems = document.querySelector('.items');
let template = '';
const displayMealList = (meals) => {
    for (let i = 0; i < meals.length; i += 1) {
        template += `<li class="item">
        <div class="img"><img class= "meal_image"src="${meals[i].strMealThumb}" alt="logo image"/></div>
        <div class="info">
          <div class="nameAndLikes">
            <div class="likes">
              <span class="mealNmae">${meals[i].strMeal}</span>
              <i class="fa fa-heart" aria-hidden="true"><br><br><span class="likes_count">Likes(4)</span></i>
            </div>
            <div class="commentsReservation">
              <button class="main_page_comment" type="button">Comments</button
              ><button type="button">reservation</button>
            </div>
          </div>
        </div>
      </li>`;
    }
    mealItems.innerHTML = template;
};
export default displayMealList;