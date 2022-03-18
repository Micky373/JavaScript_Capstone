import displayMealList from './displayMeal.js';

const mealCount = document.querySelector('.meal_count');
const getMeal = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian');
  const mealObj = await response.json();
  displayMealList(mealObj.meals);
  mealCount.innerText = ` (${mealObj.meals.length})`;
};
export default getMeal;