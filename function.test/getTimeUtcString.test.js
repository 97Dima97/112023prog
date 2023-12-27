import getTimeUtcString from '../functions/getTimeUtcString.js';
import MockDate from 'mockdate';

const date = new Date(2012, 1, 20, 3, 0);
const datePm = new Date(2012, 1, 20, 13, 0);
const timeMidnight = new Date(2012, 1, 20, 0, 0);

test('See the time in the time zone ', () => {
    MockDate.set(2012, 1, 20, 1, 12);
    expect(getTimeUtcString(-7, false)).toBe(`${date.getHours() + 2}:0${date.getMinutes()}`);
    expect(getTimeUtcString(+10, false)).toBe(`${date.getHours() + 7}:0${date.getMinutes()}`);
    expect(getTimeUtcString(0)).toBe(`${datePm.getHours() - 13}:0${datePm.getMinutes()}`);
    expect(getTimeUtcString(0)).toBe(`${timeMidnight.getHours()}:0${timeMidnight.getMinutes()}`);

    MockDate.reset();

});

test('exception catching ', () => {
    expect((getTimeUtcString) => {
        getTimeUtcString(1.1);

    }).toThrow();
    expect((getTimeUtcString) => {
        getTimeUtcString(15);

    }).toThrow();
    expect((getTimeUtcString) => {
        getTimeUtcString(-14);

    }).toThrow();

});



