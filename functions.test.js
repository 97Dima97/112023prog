
import getWordCount from './functions/getWordCount.js';

test(' Checking the number of words in the text ', () => {
  expect(getWordCount('Lorem ipsum dolor sit amet', 'sit')).toBe(1);
  expect(getWordCount('Lorem ipsum ,dolor? sit amet', 'dolor')).toBe(1);
  expect(getWordCount('Lorem ipsum dolor sit am,et', 'amet')).toBe(0);
  expect(getWordCount('Lorem ipsum dolor sit amet', 'LoreM')).toBe(0);
  expect(getWordCount('Lorem ipsum dolor sit amet', 'd o l o r')).toBe(0);
  expect(getWordCount('Lorem ipsum dolor sit amet', 'ruble')).toBe(0);
  expect(getWordCount('Lorem ipsum dolor sit amet', ' ')).toBe(0);
  expect(getWordCount('Lorem ipsum dolor sit! amet', 'sit')).toBe(1);
  expect(getWordCount('Lorem  Lorem ,   Lorem ', 'Lorem')).toBe(3);
  expect(getWordCount('Lorem ipsum dolor sit amet , sit', 'sit')).toBe(2);
});








