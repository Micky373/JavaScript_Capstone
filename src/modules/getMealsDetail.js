import displayMealList from './displayMeal.js';

const getMealDetails = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian');
    const mealObj = await response.json();
    displayPopUp(mealObj.meals);
};
export default getMeal;