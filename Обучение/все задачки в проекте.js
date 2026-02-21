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