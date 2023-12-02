



const getWordCount = (text, word) => {
  let result = 0;
  text = text.split(' ')
  for (let i = 0; i < text.length; i++) {
    if (text[i].indexOf(word) === 0) { result += 1 }
  };
  return result
}

export default getWordCount;












