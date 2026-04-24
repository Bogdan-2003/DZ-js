// Циклы 
/* Цели:

Расчёт итогового баланса
Проверка наличия отрицательного баланса
Расчёт среднего дохода и среднего расхода
Данные:
Operations: Массив чисел (каждое число = операция)
Начальный баланс: 100 долларов 

Есть выгрузка операций пользователя
const operations = [1000, -700, 300, -500, 10000];
а так же начальный баланс в 100$
Необходимо сделать функции расчёта:
Итогового баланса
Наличия отрицательного баланса (если после очередной операции
баланс < 0, то выдавать false)
Расчёта среднего расхода и среднего дохода */

const operations = [1000, -700, 300, -500, 10000];
const initialBalance = 100;

// Расчёт итогового баланса getBalance
function getBalance(operations, initialBalance) {
    let currentBalance = initialBalance;
    for(const operation of operations){
        currentBalance += operation;
    }
    return currentBalance;
}
console.log(getBalance(operations, initialBalance));

//Проверка на наличие отрицательного баланса checkOperations
function checkOperations(operations, initialBalance){
    let currentBalance = initialBalance;
    for(const operation of operations) {
        currentBalance += operation;
        if(currentBalance < 0){
            return false;
        }
    }
    return true;
}
console.log(checkOperations(operations, initialBalance));

//Расчёт средних значений averageOperations
function averageOperations(operations) {
    let totalIncome = 0;
    let totalExpense = 0;
    let incomeCount = 0;
    let expenseCount = 0;
    
    for (const operation of operations) {
        if (operation > 0) {
            totalIncome += operation;
            incomeCount += 1;
        } 
        if (operation < 0) {
            totalExpense += operation;
            expenseCount += 1;
        }
    }
    
    let averageIncome = totalIncome / incomeCount;
    let averageExpense = totalExpense / expenseCount;
    
    return [averageIncome, averageExpense];
}

console.log(averageOperations(operations));


console.log('-------------');

// **Описание**: Создайте программу для анализа результатов сравнения значений с использованием различных операторов сравнения
// **Входные данные**: Два значения любых примитивных типов (число, строка, булево)
// **Выходные данные**: Объект с результатами различных видов сравнения и информацией о типах
// **Ограничения**: Входные значения могут быть только примитивными типами (number, string, boolean, null, undefined)
//
// Input: 10, '10'
// Output: {strict: false, loose: true, greater: false, less: false, firstType: 'number', secondType: 'string'}
//
// Input: false, 0
// Output: {strict: false, loose: true, greater: false, less: false, firstType: 'boolean', secondType: 'number'}

function analyzeComparison(value1, value2) {
    const strict = value1 === value2;
    const loose = value1 == value2;
    const greater = value1 > value2;
    const less = value1 < value2;
    const firstType = typeof value1;
    const secondType = typeof value2;

    return {
        strict,
        loose,
        greater,
        less,
        firstType,
        secondType
    };
}

console.log(analyzeComparison(10, '10'))

console.log('----------------------------------');


// **Описание**: Реализуйте программу для расчета стоимости покупки в интернет-магазине с учетом скидки и налога
// **Входные данные**: Три числа - базовая цена товара (price), процент скидки (discount) и процент налога (tax)
// **Выходные данные**: Итоговая стоимость покупки после применения скидки и налога
// **Ограничения**: 
// - Цена товара от 1 до 10000
// - Скидка от 0 до 50 процентов
// - Налог от 0 до 25 процентов
// - Сначала применяется скидка, затем налог
//
// Input: price = 100, discount = 10, tax = 5
// Output: 94.5
//
// Input: price = 200, discount = 25, tax = 12
// Output: 168

function calculateFinalPrice(price, discount, tax) {
    // Ваш код здесь
  const priseAfterDiscount = price * (1 - discount / 100);
  const finalPrise = priseAfterDiscount * (1 + tax / 100);
  return finalPrise.toFixed(2);
};

console.log(calculateFinalPrice(100, 10, 5)); // "94.50"  )

console.log('-------------------------------------')

// **Описание**: Реализуйте программу для определения победителя в соревновании по прыжкам в длину
// **Входные данные**: Три числа - результаты трёх спортсменов в метрах (athlete1, athlete2, athlete3)
// **Выходные данные**: Номер спортсмена-победителя (1, 2 или 3) и разность между лучшим и худшим результатом
// **Ограничения**: 
// - Результаты от 1.0 до 10.0 метров
// - Все результаты различны
// - Точность до одного знака после запятой
//
// Input: athlete1 = 6.5, athlete2 = 7.2, athlete3 = 6.8
// Output: Победитель: 2, Разность: 0.7
//
// Input: athlete1 = 5.4, athlete2 = 5.1, athlete3 = 5.9
// Output: Победитель: 3, Разность: 0.8

function solution(athlete1, athlete2, athlete3) {
    // Ваш код здесь
    let winner;
    if(athlete1 > athlete2 && athlete1 > athlete3) {
        winner = 1;
    }else if(athlete2 > athlete1 && athlete2 > athlete3) {
        winner = 2;
    }else {
        winner = 3;
    };

    const maxResult = Math.max(athlete1, athlete2, athlete3);
    const minResult = Math.min(athlete1, athlete2, athlete3);
    const difference = (maxResult - minResult).toFixed(1);

    return `Победитель: ${winner}, Разность: ${difference}`
}

console.log(solution(6.5, 7.2, 6.8));


console.log('---------------------------------');


// **Описание**: Реализуйте программу для проверки доступа к защищенной системе на основе нескольких условий
// **Входные данные**: Четыре параметра - возраст пользователя (age), статус верификации (isVerified - true/false), уровень доступа (accessLevel - число от 1 до 5), активность аккаунта (isActive - true/false)
// **Выходные данные**: Булево значение (true/false) - разрешен ли доступ к системе
// **Ограничения**: 
// - Возраст от 16 до 80 лет
// - Уровень доступа от 1 до 5
// - Доступ разрешается только если: возраст >= 18 И аккаунт верифицирован И (уровень доступа >= 3 ИЛИ аккаунт активен)
//
// Input: age = 25, isVerified = true, accessLevel = 4, isActive = false
// Output: true
//
// Input: age = 17, isVerified = true, accessLevel = 5, isActive = true
// Output: false



console.log('---------------------------------');


const arr = [2, 4, 4, 10];

let elGT5;
// for(const el of arr) {
    // if (el > 5) {
//         elGT5 = el;
//         break;
//     }
// }
// console.log(elGT5);

elGT5 = arr.find(el => el > 5);
elGT5Index = arr.findIndex(el => el > 5);
console.log(elGT5);
console.log(elGT5Index);