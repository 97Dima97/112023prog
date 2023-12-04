
const getWordCount = (text, word) => {
  let arrayTranslation = text.replace(/[-_.,%?!]/g, ' ').split(' ');
  arrayTranslation = arrayTranslation.reduce(function (acum, item) {
    if (item === word) { acum++ }

    return acum
  }, 0);
  return arrayTranslation
}

export default getWordCount;





















