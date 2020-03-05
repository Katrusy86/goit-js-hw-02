'use strict';

let input;
const numbers = [];
let total = 0;
do { 
    input = prompt ('Введите число');
    if(Number.isNaN(Number(input)) || input === ''){
        alert('Было введено не число. Попробуйте еще раз.')
    }
    else if (input !== null) {
        //  если это было число и не был нажат кенсел число складывает в массив чисел
        numbers.push(Number(input));
    }
} while(input !== null)

// проходим по всему массиву и суммируем все числа
for (const number of numbers) {
    total += number;
}

console.log(`Общая сумма чисел равна ${total}`);