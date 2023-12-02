
const getWordCount = (text, word) => {
  let result = 0;
  let arrayTranslation = text.replace(/[-_.,%?!]/g, '').split(' ');
  for (let i = 0; i < arrayTranslation.length; i++) {
    if (arrayTranslation[i].indexOf(word) === 0) { result += 1 }
  };
  return result
}

export default getWordCount;





















