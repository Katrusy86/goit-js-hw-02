'use strict';

const formatString = function(string) {
    //проверяем сразу же, длину строки, если 40 и меньше, выводим
    if (string.length <= 40) {
        return string;
    }
    //если больше, отрезаем первые 40 символов и добавляем к ним '...'
    //отрезается функцией slice(начало, окончание), здесь окончание не отрезается
    else {
        return string.slice (0,40) + '...'    
    }
};

/*
* Вызовы функции для проверки работоспособности твоей реализации.
*/
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
),
);
// вернется форматированная строка