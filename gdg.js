function getUser(id = 1, name) {
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
isAdmin(5);