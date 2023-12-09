
import getWordCount from './functions/getWordCount.js';

import getTimeUtc from './functions/getTimeUtc.js';

test(' Checking the number of words in the text ', () => {
  expect(getWordCount('Lorem ipsum dolor ,sit amet , sit amet ', 'sit')).toBe(2);
  expect(getWordCount('Lorem ipsum dolor sit amet', 'ruble')).toBe(0);
  expect(getWordCount('Lorem ip%sum dolor sit amet', 'ipsum')).toBe(0);
  expect(getWordCount('Lorem ipsum dolor sit siT amet Sit SIT', 'sit')).toBe(2);
});




test('See the time in the time zone ', () => {
  expect(getTimeUtc(-7, false)).toBe(`a.m. ${new Date(2012, 1, 20, 3, 12).getHours() - 3}:${new Date().getMinutes()}`);
  expect(getTimeUtc(+10, false)).toBe(`a.m. ${new Date(2012, 1, 20, 3, 12).getHours() + 2}:${new Date().getMinutes()}`);
  expect(getTimeUtc(0,)).toBe(`p.m. ${new Date(2012, 1, 20, 13, 12).getHours() + 6}:${new Date().getMinutes()}`);
  expect(getTimeUtc(1.1,)).toBe('unavailable value');
  expect(getTimeUtc(15,)).toBe('unavailable value');
  expect(getTimeUtc(-15,)).toBe('unavailable value');


});









