import getComparisonResultObj from '../functions/getComparisonResultObj';

const fruitBasket = { banana: 4, apple: 5, orange: 1, };
const secondFruitBasket = { apple: 3, lemon: 26, banana: 7, };
const result = { identicalProps: ['banana', 'apple'], objOne: ['banana', 'apple', 'orange'], objTwo: ['apple', 'lemon', 'banana'] };

test('search identical keys', () => {
    expect(getComparisonResultObj(fruitBasket, secondFruitBasket)).toStrictEqual(result);
});



