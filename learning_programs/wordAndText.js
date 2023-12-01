
/*
*У функции два входных параметра: text, word
*Возвращает количество word в text 
*Искать полное соответствие слов(Регистр)
*/



const wordAndText = (text, word) => {
  let result = 0;
  text = text.split(' ')
  for (let i = 0; i < text.length; i++) {
    if (text[i].indexOf(word) === 0) { result += 1 }
  }
  return result
}





