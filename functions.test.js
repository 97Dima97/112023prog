
import getWordCount from './functions/wordAndText.js';





test(' Checking the number of words in the text ', () => {
  expect(getWordCount('!tt ,aa _rr AA ', 'aa')).toBe(1);
  expect(getWordCount('!tt ,aa _ rr ', 'rr')).toBe(1);
  expect(getWordCount('!tt ,aa _rr ', 'r')).toBe(1);
  expect(getWordCount('!tt ,aa _rr Br ', 'br')).toBe(0);
});


