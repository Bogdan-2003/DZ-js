for(let i = 1; i < 10; i ++ ) {
    console.log(`Наш баланс ${i}$`)
}; // for (инициализация; условие; шаг) 

console.log('--------')

const tasks = ['Задача 1', 'Задача 2'];

for(let i = 0; i < tasks.length; i ++){
    console.log(tasks[i]);
}; // tasks.length длина массива можно указать(i < 2)

const tas = ['Задача 1', 'Задача 2', 'Задача 3'];

for(let i = 0; i < tas.length; i ++){
    if(tas[i] === 'Задача 2') {       // доходит до второй задачи и пропускает ее
        continue;  // останавливает, break - прекращает продолжение цикла полностью  
    }
    console.log(tas[i]);
};

console.log('--------') //разделитель

for(let i = 0; i < tas.length; i ++){
    if(tas[i] === 'Задача 2') {       // доходит до второй задачи и пропускает ее
        break;  // break - прекращает продолжение цикла полностью  
    }
    console.log(tas[i]);
};

console.log('-----')


/* Задание:
Необходимо написать цикл, который проходит по исходному массиву в 
обратном порядке и формирует новый массив с обратным порядком элементов.

Исходный массив: ["!", "js", "люблю", "я"].
Цель: Получить строку "я люблю js !". */

let arr = ["!", "js", "люблю", "я"];
let reverse = []; // создаем пустой массив для результата

//Цикл в обратном порядке: от последнего элемента к первому
for(let i = arr.length -1; i >= 0; i --){
    reverse.push(arr[i]); // Добавляем элемент в новый массив
};

//Преобразуем массив в строку с пробелами
let result = reverse.join(' ');
console.log(result);

// Цикл в цикле (Цикл 2 будет выполняться полностью после каждого цикла 1)

for(let i = 1; i < 5; i ++ ){
    console.log(`Цикл 1 ${i}`);
    for(let j = 1; j < 5; j ++){
        console.log(`Цикл 2 ${j}`);
    };
};

console.log('-----')


//Массив в мвссиве 

const tasks1 = [[1, 'Задача 1'], [2, 'Задача 2']];

for(let i = 0; i < tasks1.length; i ++ ){ // Внешний цикл: перебираем вложенные массивы (строки)
    for(let j = 0; j < tasks1[i].length; j ++){ // Внутренний цикл: перебираем элементы внутри текущего массива
        console.log(tasks1[i][j]); // Выводим элемент: [номер массива][номер элемента внутри]
    };
};

console.log('-----')

//while
for(let i = 1; i < 5; i++) {
    console.log(`Вывод - ${i}`);
};

let i = 1;
while(i < 5) {
    console.log(`Вывод - ${i}`);
    i++;
}

// 🔹 Используется: когда заранее известно, сколько раз нужно выполнить код
// 🔹 Пример: перебор массива, счётчик, фиксированное число повторений

for (let i = 0; i < 5; i++) {
    console.log(`Итерация ${i}`);
}
// Вывод: Итерация 0, 1, 2, 3, 4

// 🔹 Используется: когда нужно выполнять код, пока условие истинно
// 🔹 Пример: ожидание ввода пользователя, чтение данных до конца

let count = 0;

while (count < 5) {
    console.log(`Счёт: ${count}`);
    count++;  // ⚠️ Важно не забыть изменить условие!
}
// Вывод: Счёт: 0, 1, 2, 3, 4

// 🔹 Используется: когда код должен выполниться ХОТЯ БЫ ОДИН РАЗ
// 🔹 Пример: меню, повторный запрос после ошибки, валидация ввода

let attempt = 0;

do {
    console.log(`Попытка ${attempt + 1}`);
    attempt++;
} while (attempt < 3);
// Вывод: Попытка 1, 2, 3

// for — счётчик, массивы, фиксированное число повторений
// for (let i = 0; i < n; i++) { };

// while — условие, неизвестное количество итераций
// while (condition) { };

// do...while — минимум 1 выполнение, постусловие
// do { } while (condition);

console.log('-----')

const arr1 = [1, 4, 8, 7];

for(let i = 0; i < arr1.length; i ++) {
    console.log(arr1[i]);
}

for(let element of arr1) {
    console.log(element);
};

for(let index of arr1) {
    console.log(index);
};

// Примеры работы for of  → для массивов (получаем значения) → ЗНАЧЕНИЯ (массивы, строки, Map, Set)

// 📌 Массив
const numbers = [10, 20, 30];
for (const num of numbers) {
    console.log(num);  // 10, 20, 30
}

// 📌 Строка (перебор символов)
const text = 'Привет';
for (const char of text) {
    console.log(char);  // П, р, и, в, е, т
}

// 📌 Set
const unique = new Set([1, 2, 2, 3]);
for (const item of unique) {
    console.log(item);  // 1, 2, 3
}

// 📌 Map
const user = new Map([['name', 'Anna'], ['age', 25]]);
for (const [key, value] of user) {
    console.log(`${key}: ${value}`);
}
// name: Anna
// age: 25

// Примеры работы for in → для объектов (получаем ключи) -> КЛЮЧИ (объекты, реже массивы)

// 📌 Объект
const car = { brand: 'BMW', model: 'X5', year: 2020 };
for (const key in car) {
    console.log(`${key}: ${car[key]}`);
}
// brand: BMW
// model: X5
// year: 2020

// 📌 Массив (не рекомендуется, но работает)
const arr3 = ['a', 'b', 'c'];
for (const index in arr3) {
    console.log(index);      // '0', '1', '2' (строки!)
    console.log(arr[index]); // 'a', 'b', 'c'
}

// 📌 Вложенный объект
const company = {
    name: 'TechCorp',
    employees: {
        ceo: 'John',
        cto: 'Jane'
    }
};

for (const key in company) {
    console.log(`${key}: ${company[key]}`);
}
// name: TechCorp
// employees: [object Object]