/*function getUser(id = 1, name) {
    console.log(id + ' ' + name);
}
getUser('Антон');

function a() {
    return c();
}
function b() {
    return 'Yes';
}
function c() {
    return b;
}
a();

function start() {
    return 'start';
}
function run() {
    return start() + ' finish ' + start();
}
run();

console.log(run())

function isAdmin(userId) {
    if (userId `===` 10) {
        return true;
    } else {
        return isAdmin(10);
    }
}
isAdmin(5);*/

const tasks = ['Задача 1'];

function Add(task) {
    tasks.push(task);
}

function Remove(task) {
    const index = tasks.indexOf(task); 
    if (index === -1) {
        return;
    }
    tasks.splice(index, 1);
}

function Prioritize(task) {
    const index = tasks.indexOf(task); 
     if (index === -1) {
        return;
    }
    const oldTask = tasks[index];
    tasks.splice(index, 1);
    tasks.unshift(oldTask);
}

Add('Задача 2');
Add('Задача 3');
Add('Задача 4');
console.log(tasks);

Remove('Задача 3');
console.log(tasks);

Prioritize('Задача 4');
console.log(tasks);

const userData = ['Антон', 18, 'Москва'];

function getData () {
    return ['Антон', 18, 'Москва'];
}

const [userName, age, city] = getData();

//const userName = userData[0];
//const age = userData[1];
//const city = userData[2];

console.log(userName, age, city)

const data = [1, 2, 3, 4, 5, 6];
const [one, two, ...odres] = data;

console.log(one, two, odres);

const url = 'https://purpleschool.ru/course/javascript';

function getUrlParts(url) {
    const [protocol, _, host, ...parts] = url.split('/');
    console.log(protocol, _, host, parts);
    console.log(`Протокол: ${protocol.split(':')[0]}`);
    console.log(`Доменное имя: ${host}`);
    console.log(`Путь внутри сайта: /${parts.join('/')}`);
}

getUrlParts(url);

let array = [1, 2, 3, 4];
const res = array.push(5);
console.log(res);

let arr = ['1', '2', '3'];
console.log(arr.indexOf(1));

let arr2 = ['1', '2', '3', '4'];
console.log(arr2.splice(1, 2));

let arr3 = ['1', '2', '3'];
console.log(arr3.includes('2'));

const fruits = ['яблоко', 'банан', 'апельсин', 'груша'];

console.log(fruits);