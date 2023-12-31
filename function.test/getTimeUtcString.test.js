import getTimeUtcString from '../functions/getTimeUtcString.js';
import MockDate from 'mockdate';

const аfternoonTime = new Date(2012, 1, 20, 13, 0);
const midnightTime = new Date(2012, 1, 20, 0, 0);

test('See the time in the time zone ', () => {
    MockDate.set(2012, 1, 20, 1, 12);
    expect(getTimeUtcString(-7, false)).toBe(`5:00`);
    expect(getTimeUtcString(+10, false)).toBe(`10:00`);
    expect(getTimeUtcString(0)).toBe(`${аfternoonTime.getHours() - 13}:0${аfternoonTime.getMinutes()}`);
    expect(getTimeUtcString(0)).toBe(`${midnightTime.getHours()}:0${midnightTime.getMinutes()}`);
    expect(getTimeUtcString()).toBe(`0:00`);

    MockDate.reset();
});

test('Checking for invalid values', () => {
    expect(getTimeUtcString => getTimeUtcString(1.1))
        .toThrow();
    expect(getTimeUtcString => getTimeUtcString(15))
        .toThrow();
    expect(getTimeUtcString => getTimeUtcString(-14))
        .toThrow();
});


