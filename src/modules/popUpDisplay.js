const mealRegion = document.querySelector('.meal_region');
const mealTag = document.querySelector('.meal_tag');
const popUpDisplay = async (id) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const mealObj = await response.json();
  mealRegion.innerHTML = `<h1 class="popup_description">Area: ${mealObj.meals[0].strArea}</h1>`;
  mealTag.innerHTML = `<h1 class="popup_description">Tags: ${mealObj.meals[0].strTags == null ? 'N/A' : mealObj.meals[0].strTags}</h1>`;
};

export default popUpDisplay;