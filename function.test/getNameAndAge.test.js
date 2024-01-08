import getNameAndAge from '../functions/getNameAndAge.js'

const name = ['Alex', 'Vika', 'Max'];
const age = [1970, 2000, 1995];
const result = [{ name: 'Alex', age: 54 }, { name: 'Vika', age: 24 }, { name: 'Max', age: 29 }];

test('name check with real age', () => {
    expect(getNameAndAge(name, age)).toStrictEqual(result);
});