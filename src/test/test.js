const { countMeals, countComments } = require('./counter.js');

const commentArray = [
  {
    username: 'User 1',
    comment: 'Comment',
  },
  {
    username: 'User 2',
    comment: 'Comment 2',
  },
  {
    username: 'User 3',
    comment: 'Comment 3',
  },
  {
    username: 'User 4',
    comment: 'Comment 4',
  },
  {
    username: 'User 5',
    comment: 'Comment 5',
  },
];

const mealsArray = [
  {
    strMeal: 'Food1',
    idMeal: 1,
  },
  {
    strMeal: 'Food2',
    idMeal: 2,
  },
  {
    strMeal: 'Food3',
    idMeal: 3,
  },
  {
    strMeal: 'Food4',
    idMeal: 4,
  },
];

describe('Checking number of meals', () => {
  test('Checking our function passes for counting meals', () => {
    expect(countMeals(mealsArray)).toBe(4);
  });
});
describe('Checking number of comments', () => {
  test('Checking our function passes for counting comments', () => {
    expect(countComments(commentArray)).toBe(5);
  });
});