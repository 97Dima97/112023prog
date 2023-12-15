import getWordCount from './functions/getWordCount';
import getTimeUtcString from './functions/getTimeUtcString';
import MockDate from 'mockdate';

test(' Checking the number of words in the text ', () => {
  expect(getWordCount('Lorem ipsum dolor ,sit amet , sit amet ', 'sit')).toBe(2);
  expect(getWordCount('Lorem ipsum dolor sit amet', 'ruble')).toBe(0);
  expect(getWordCount('Lorem ip%sum dolor sit amet', 'ipsum')).toBe(0);
  expect(getWordCount('Lorem ipsum dolor sit siT amet Sit SIT', 'sit')).toBe(2);

});

//_________________________________________________________________________________________________________
const date = new Date(2012, 1, 20, 3, 0);
const datePm = new Date(2012, 1, 20, 13, 0);
const exclusion = 'enter an integer offset value in the range from -12 to +14'

MockDate.set(2012, 1, 20, 1, 12);

test('See the time in the time zone ', () => {
  expect(getTimeUtcString(-7, false)).toBe(`${date.getHours() + 2}:0${date.getMinutes()}`);
  expect(getTimeUtcString(+10, false)).toBe(`${date.getHours() + 7}:0${date.getMinutes()}`);
  expect(getTimeUtcString(0)).toBe(`${datePm.getHours() - 1}:0${datePm.getMinutes()}`);
  expect(getTimeUtcString(1.1)).toBe(exclusion);
  expect(getTimeUtcString(15)).toBe(exclusion);
  expect(getTimeUtcString(-15)).toBe(exclusion);

  MockDate.reset();

});

test('exception catching ', () => {
  expect((getTimeUtcString) => {
    getTimeUtcString(1.5);
  }).toThrow();

});
