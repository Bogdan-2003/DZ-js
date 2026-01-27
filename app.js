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



const res = prompt("Сколько будет 7 + или - 15?");
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
console.log(a > 6 ? a < 3 : a > 5)
