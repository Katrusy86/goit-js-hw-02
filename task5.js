'use strict';

const checkForSpam = function(message) {
    // делаем всю строку в нижнем регистре
    const checker = message.toLowerCase();
    // проверяем есть ли в строке включения слов с помощью строковой функции includes
    // или spam, или sale. Если есть, возвращаем true, иначе false
    if (checker.includes('spam') || checker.includes('sale')) {
        return true;
    }
    else return false;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true