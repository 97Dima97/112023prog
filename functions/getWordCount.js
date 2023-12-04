
const getWordCount = (text, word) => {
  const stringToArray = text.replace(/[^a-zа-яё0-9\s]/gi, ' ')
    .split(' ')
    .filter((el) => el != '');
  const result = stringToArray.reduce((acum, item) => {
    return (item === word ? ++acum : acum)
  }, 0);
  return result;
}


export default getWordCount;





















