import getObjectCopies from '../functions/getObjectCopies.js';

const nambers = { a: 1, b: 2, c: 3, };
const result = [{ a: 1, b: 2, c: 3, serialNumber: 1 }, { a: 1, b: 2, c: 3, serialNumber: 2 }];

test('copy and version check', () => {
    expect(getObjectCopies(nambers, 2)).toStrictEqual(result);

});