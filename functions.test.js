import getWordCount from './functions/getWordCount.js';
import getTimeUtcString from './functions/getTimeUtcString.js';
import { date, datePm, exclusion, } from './function.Test/getTimeUtcStringTest.js';
import MockDate from 'mockdate';

test(' Checking the number of words in the text ', () => {
  expect(getWordCount('Lorem ipsum dolor ,sit amet , sit amet ', 'sit')).toBe(2);
  expect(getWordCount('Lorem ipsum dolor sit amet', 'ruble')).toBe(0);
  expect(getWordCount('Lorem ip%sum dolor sit amet', 'ipsum')).toBe(0);
  expect(getWordCount('Lorem ipsum dolor sit siT amet Sit SIT', 'sit')).toBe(2);
});

MockDate.set(2012, 1, 20, 1, 12);

test('See the time in the time zone ', () => {
  expect(getTimeUtcString(-7, false)).toBe(`${date.getHours() + 2}:0${date.getMinutes()}`);
  expect(getTimeUtcString(+10, false)).toBe(`${date.getHours() + 7}:0${date.getMinutes()}`);
  expect(getTimeUtcString(0,)).toBe(`${datePm.getHours() - 1}:0${datePm.getMinutes()}`);
  expect(getTimeUtcString(1.1)).toBe(exclusion);
  expect(getTimeUtcString(15)).toBe(exclusion);
  expect(getTimeUtcString(-15)).toBe(exclusion);

  MockDate.reset();

});



