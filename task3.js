'use strict';

const findLongestWord = function(string) {
    const words = string.split(' ');
    let longerWord = words[0];

    for (const word of words){
        if (word.length > longerWord.length){
        longerWord = word;
        }
    };
    return longerWord
}
/*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

  console.log(findLongestWord('Google do a roll')); // 'Google'

  console.log(findLongestWord('May the force be with you')); // 'force'