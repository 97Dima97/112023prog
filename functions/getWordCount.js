
const getWordCount = (text, word) => {
  text = text.replace(/[-_.,%?!]/g, ' ')
  let arrayTranslation = text.split(' ');
  arrayTranslation = arrayTranslation.reduce(function (acum, item) {
    if (item === word) { acum++ }

    return acum
  }, 0);
  return arrayTranslation
}

export default getWordCount;





















