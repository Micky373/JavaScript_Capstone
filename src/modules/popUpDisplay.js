const mealRegion = document.querySelector('.meal_region');
const mealTag = document.querySelector('.meal_tag');
const getComment = async (id) =>{

return data
}
const popUpDisplay = async (id) => {
  const responsee = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yKb2fopXHs8DBr8kZdp6/comments?item_id=${id}`);
  const data = await responsee.json();
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const mealObj = await response.json();
  mealRegion.innerHTML = `<h1 data-id="${mealObj.meals[0].idMeal}" class="popup_description">Area: ${mealObj.meals[0].strArea}</h1>`;
  mealTag.innerHTML = `<h1 class="popup_description">Tags: ${mealObj.meals[0].strTags == null ? 'N/A' : mealObj.meals[0].strTags}</h1>`;
  const ul = document.createElement('ul');
  mealTag.appendChild(ul);
  if(data.length > 0) {
  for (let index of data ) {
    console.log(index)
    const li = document.createElement('li');
    li.innerText = `${index.creation_date} ${index.username}: ${index.comment}`
    ul.appendChild(li);
  }
}
  mealTag.parentNode.setAttribute('data-id', `${mealObj.meals[0].idMeal}`)
  
};

export default popUpDisplay;