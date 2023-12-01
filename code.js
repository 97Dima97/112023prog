
/*
У функции два входных параметра: text, word
Возвращает количество word в text */

const wordAndText = (text = 'qwer', word = 'er') => {
  let result = 0;
  text = text.toLowerCase().split(' ')
  for (let i = 0; i < text.length; i++) {
    if (text[i].indexOf(word.toLowerCase()) === 0) { result += 1 }
  }
  return result
}
console.log(wordAndText()) 

//




