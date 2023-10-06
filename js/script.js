/*--------------1----------------------*/
console.log('*--------------1----------------------*');

let stringOfNumbers = '';

for (let countOfNumbers = 10; countOfNumbers <= 20; countOfNumbers++) {
    countOfNumbers === 20 ? stringOfNumbers += countOfNumbers :  stringOfNumbers += countOfNumbers + ', '; // Для того: щоб не було коми після останнього числа
}

console.log(stringOfNumbers); 

/*--------------2----------------------*/
console.log('*--------------2----------------------*');

for (let countOfNumbers = 10; countOfNumbers <= 20; countOfNumbers++) {
    let squadOfNumbers = countOfNumbers ** 2;
    console.log(`Квадрат числа ${countOfNumbers}:`, squadOfNumbers);
}

/*--------------3----------------------*/
console.log('*--------------3----------------------*');

const firstMultiplier = 7;

for (let secondMultiplier = 1; secondMultiplier <= 10; secondMultiplier++) {
    console.log(`${firstMultiplier} * ${secondMultiplier} = ${firstMultiplier * secondMultiplier}`);
}

/*--------------4----------------------*/
console.log('*--------------4----------------------*');

let sumOfNumbers = 0;

for (let countOfNumbers = 1; countOfNumbers <= 15; countOfNumbers++) {
    sumOfNumbers += countOfNumbers;
}

console.log('Сума чисел від 1 до 15 =', sumOfNumbers);

/*--------------5----------------------*/
console.log('*--------------5----------------------*');

let resultMultiplyNumbers = 1n; //Щоб реузльтат був правильним, тип данних BigInt

for (let multiplyNumbers = 15n; multiplyNumbers <= 35; multiplyNumbers++) {
    resultMultiplyNumbers *= multiplyNumbers;
}

console.log('Добуток усіх чисел від 15 до 35: ', resultMultiplyNumbers)

/*--------------6----------------------*/
console.log('*--------------6----------------------*');

let resultSumNumbers = 0;

for (let countOfNumbers = 1; countOfNumbers <= 500; countOfNumbers++) {
    resultSumNumbers += countOfNumbers;
}

console.log(`Середнє арифметичне чисел від 1 до 500 дорівнює: `, resultSumNumbers / 500);

/*--------------7----------------------*/

console.log('*--------------7----------------------*');

let sumOfEvenNumbers = 0;

for (let countOfNumbers = 30; countOfNumbers <= 80; countOfNumbers++) {
    if (countOfNumbers % 2 !== 0) {
        continue;
    } else {
        sumOfEvenNumbers += countOfNumbers;
    }
}

console.log(`Сума парних чисел від 30 до 80: `, sumOfEvenNumbers);

/*--------------8----------------------*/

console.log('*--------------8----------------------*');
console.log('Числа від 100 до 200, які кратні 3:');

for (let countOfNumbers = 100; countOfNumbers <= 200; countOfNumbers++) {
    if (countOfNumbers % 3 !== 0) {
        continue;
    } else {
        console.log(countOfNumbers);
    }
}

/*--------------9, 10, 11----------------------*/

console.log('*--------------9, 10, 11----------------------*');

const numberFromUser = +prompt('Введіть будь яке натуральне число (до завдання №9,10):');
let countOfEvenDevideNumbers = 0;
let sumOfEvenDevideNumbers = 0;

if (numberFromUser) {
    console.log(`Всі дільники числа ${numberFromUser}:`);
    for (let devideNumber = 1; devideNumber <= numberFromUser; devideNumber++) {
        if (numberFromUser % devideNumber !== 0) {
            continue;
        } else if (devideNumber % 2 === 0){
            countOfEvenDevideNumbers++; //Лічильник для парних дільників
            sumOfEvenDevideNumbers += devideNumber; //Сума парних дільників
            console.log(devideNumber);
        } else {
            console.log(devideNumber);
        }
    }
    console.log(`Кількість парних дільників числа ${numberFromUser}:`, countOfEvenDevideNumbers);
    console.log(`Сума парних дільників числа ${numberFromUser}:`, sumOfEvenDevideNumbers);
} else {
    console.log('Щось пішло не так!');
}

/*--------------12----------------------*/

console.log('*--------------12----------------------*');
console.log('Таблица множення від 1 до 10:');

for (let firstNumberMultiply = 1; firstNumberMultiply <= 10; firstNumberMultiply++) {
    console.log('*-----------------------------------------------*');
    for (let secondNumberMultiply = 1; secondNumberMultiply <= 10; secondNumberMultiply++) {
        console.log(`${firstNumberMultiply} * ${secondNumberMultiply} =`, firstNumberMultiply * secondNumberMultiply);
    }
}

