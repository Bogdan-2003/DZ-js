/*const money = 100;

if (canBuy = money > 50) {
    console.log('Может купить наш продукт')
} else if (money > 5) {
    console.log('Можно купить частично')
} else {
    console.log('Нельзя купит')
}*/ 


/*let contribution = 12000;
let bid = 0.07;
let term = 24;
let houseCost = 13500;

const res = contribution * (1 + bid / 12) ** 24;
if (res > houseCost) {
    console.log(`Можем купить. ${res - houseCost}`);
} else {
    console.log('Нельзя купить')
}*/

/*const role = 'ceo';

if (role === 'manager') {
    console.log('Менеджер');
} else if (role === 'admin') {
    console.log('Админ');
} else if (role === 'ceo') {
    console.log('СЕО');
} else {
    console.log('Вход запрещён')
}*/ 

/*const bmw = 100000;
const ford = 10000;
const gtr = 10;
const budget = 1000000;

console.log(`я хочу купит ${budget > bmw ? 'BMW' : 'Welosiped'}`)*/ 



/*const res = prompt("Сколько будет 7 + или - 15?");
switch (true) {
    case res === 'Я не робот':
    case Number(res) === 22:
    case Number(res) === -8:
        console.log('Успех');
        break;
    default:
        console.log('Вы робот');
}

const a = 5;
console.log(a > 6 ? a < 3 : a > 5)*/


/*const isAdmin = false;
const canWrite = true;

console.log(`Системный файл ${isAdmin && canWrite}`); //и
console.log(`Обычный файл ${isAdmin || canWrite}`); //или
console.log(`Инвертируем права админа ${!isAdmin}`); //не not a*/

/*const balance = 2200;
const bonusBalance = 90;
const isBanned = false;
const isExist = false;
const isSelling = true;

const canBuy = (balance > 1000 || bonusBalance > 100) 
    && !isBanned
    && !isExist
    && isSelling;

console.log(`Могу купить игру: ${canBuy ? 'Да' : 'Нет'}`);*/

/*function logName() {
    console.log(`Мое имя Богдан`);
} 
 
logName();*/

/*function logName(name, surname) {
    console.log(`Мое имя ${name} ${surname}`);
} 
 
logName('Богдан', 'Кныш');

function countDepositSum(depositInUSD, month, rate) {
    const sum = depositInUSD * (1 + rate / 12) ** month;
    return sum;
}

const example1 = countDepositSum(1000, 24, 0.12);
console.log(example1)

function powerOfTwo(num) {
    return num * num;
}
console.log(powerOfTwo(5));

const poft = function(num){
    return num * num;
}

console.log(poft(6));


const p = (now) => now * now;
console.log(p(7));*/

/*function toPower (num, power = 3) {
    const res = num ** power;
    return res;
}

console.log(toPower(2));

const toPowerArrow = (num, power) => num ** power;
console.log(toPowerArrow(2, 3));

function canAccessWebsite (age) {
    if (age < 18) {
        return 'Нет';
    } else {
        return 'Да';
    }
}

console.log(canAccessWebsite(18));

const canAccessWebsite2 = age => age < 18 ? 'No': 'Yes';

console.log(canAccessWebsite2(14));



const KG_IN_USD = 7;
const KM_IN_USD = 5;

function calculateW(present) {
    return present * KG_IN_USD;
}

function calculateKM (distance) {
    return distance * KM_IN_USD;
}

/*function getExchagePrice(present1, present2, distance) {
    const price1 = present1 * KG_IN_USD;
    const price2 = present2 * KG_IN_USD;
    const distancePrice = distance * KM_IN_USD;
    return price1 + price2 + distancePrice;
}
console.log(getExchagePrice(1, 2, 10))*/

/*function getExchagePrice(present1, present2, distance) {
    const price1 = calculateW(present1);
    const price2 = calculateW(present2);
    const distancePrice = calculateKM(distance);
    return price1 + price2 + distancePrice;
}
console.log(getExchagePrice(1, 2, 10)) */



/*function computeCredit(age, hasJob = false) {
    switch(true) {
        case age > 24 && hasJob:
            return 500;
        case age > 24:
            return 100;
        default:
            return 0;
    }
}

function canBuy(productPrise, age, money, hasJob = false) {
    const creditMoney = computeCredit(age, hasJob);
    return productPrise <= money + creditMoney;
}

console.log(canBuy(2000, 25, 1900))

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(2));*/

//массивы 
/*const roles = ['admin', 'user', 'superuser'];
console.log(roles);
console.log(roles[1]);

const users = ['Аня', 'Вика', 'Катя'];
console.log(users);
users[2] = 'Кристина';
console.log(users)*/
// push - добавляет массив в конец, pop - добавляет массив в перед users.push()
// unshift - удаляе в концк, shift - удаляет в начале users.shift()

 const roles = ['user', 'admin', 'manager'];

 if (roles.includes('ad')) {
    console.log('Доступ есть');
 } else {
    console.log('Дотупа нет!');
 }

 const roles2 = ['user', 'admin', 'manager', 'superuser'];

 const res = roles2.slice(2,); //slice выбирает элементы от и да (2)-все элементы начиная со второго, (2, 4) начиная от второго заканчивая четвертым
 console.log(roles2);
 console.log(res);
// splice - обрезает массив (1)

const newRoles = ['sysandmin', 'developer'];
const res2 = roles2.concat(newRoles);
console.log(res2); // сщединяет роли конкатенация, reverse - переворачивает роли с переди на зад 



