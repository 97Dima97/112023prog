
const getWordCount = (text, word) => {
  return text.replace(/[^a-zа-яё0-9\s]/gi, ' ')
    .split(' ')
    .filter((el) => el != '')
    .reduce((acum, item) => {
      return (item === word || item.slice(1) === word.slice(1)) ? ++acum : acum;
    }, 0);
};

export default getWordCount;





















