/*function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function power(a, b) {
    return a ** b;
}

//функция высшего порядка 

function calculate(a, b, fn) {
    console.log(fn.name);
    const res = fn(a, b);
    return res;
}

let res = calculate(3, 5, add);
console.log(res);
res = calculate(3, 5, subtract);
console.log(res);
res = calculate(3, 5, power);
console.log(res);

console.log('------------------------------')

/*function power(pow) {
    return function (num) {
        return num ** pow;
    }
}*/

//Стрелочная функция 

const power = pow => num => num**pow;

const powerOfTwo = power(2);
console.log(powerOfTwo(5));
console.log(powerOfTwo(10));

const powerOfThree = power(3);
console.log(powerOfThree(5));
console.log(powerOfThree(10));