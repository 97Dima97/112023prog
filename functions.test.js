
import getWordCount from './functions/getWordCount.js';

test(' Checking the number of words in the text ', () => {
  expect(getWordCount('Lorem ipsum dolor sit amet , sit amet ', 'sit')).toBe(2);
  expect(getWordCount('Lorem ipsum dolor sit amet', 'ruble')).toBe(0);

});









