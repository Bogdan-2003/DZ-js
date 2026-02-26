/*let mathGrade = 85;
let englishGrade = '85';
let isPassing = true;
let extraCredit = null;
let finalGrade = undefined;

console.log(mathGrade == englishGrade, mathGrade === englishGrade, isPassing === true, extraCredit === null, finalGrade === undefined);

let temperature = 36.6;
let message = "Hello";
let isOnline = false;
let response = null;
let status = undefined;

console.log(`temperature to string: "${String(temperature)}"`);
console.log(`temperature to number: "${Number(temperature)}"`);
console.log(`temperature to boolean: "${Boolean(temperature)}"`);
console.log(`message to string: "${String(message)}"`);
console.log(`message to number: "${Number(message)}"`);
console.log(`message to boolean: "${Boolean(message)}"`);
console.log(`isOnline to string: "${String(isOnline)}"`);
console.log(`isOnline to number: "${Number(isOnline)}"`);
console.log(`isOnline to boolean: "${Boolean(isOnline)}"`);
console.log(`response to string: "${String(response)}"`);
console.log(`response to number: "${Number(response)}"`);
console.log(`response to boolean: "${Boolean(response)}"`);
console.log(`status to string: "${String(status)}"`);
console.log(`status to number: "${Number(status)}"`);
console.log(`status to boolean: "${Boolean(status)}"`);*/

/*let productPrice = 299.99;
let productName = "Laptop";
let inStock = true;
let discount = null;
let warranty = undefined;

console.log(`productPrice: ${productPrice} (${typeof productPrice})`);
console.log(`productName: ${productName} (${typeof productName})`);
console.log(`inStock: ${inStock} (${typeof inStock})`);
console.log(`discount: ${discount} (${typeof discount})`);
console.log(`warranty: ${warranty} (${typeof warranty})`);

let bookPages = 250;
let bookTitle = "JavaScript Guide";
let isAvailable = true;
let borrowerInfo = null;
let returnDate = undefined;

let oldBookPages = 250;
let oldBookTitle = "JavaScript Guide";
let oldIsAvailable = true;
let oldBorrowerInfo = null;
let oldReturnDate = undefined;

bookPages = 300;
bookTitle = "Advanced JavaScript";
isAvailable = false;
borrowerInfo = "John Smith";
returnDate = "2024-02-15";

console.log(`bookPages: ${oldBookPages} -> ${bookTitle}`);
console.log(`bookTitle: ${oldBookTitle} -> ${bookPages}`);
console.log(`isAvailable: ${oldIsAvailable} -> ${isAvailable}`);
console.log(`borrowerInfo: ${oldBorrowerInfo} -> ${borrowerInfo}`);
console.log(`returnDate: ${oldReturnDate} -> ${returnDate}`);
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Ваш код здесь

for(let i = 0; i < numbers.length; i++){
  if(numbers[i] % 2 === 0){
    continue; 
  } else {
    console.log(numbers[i]);
  }
}

console.log('_____________')

const numbers2 = [2, 3, 4];
const squares = [];

// Ваш код здесь

for(let index in numbers2){
    const current = numbers2[index];
    squares.push(current ** 2);
}

console.log(squares);

const data = { name: 123, age: 'hbbh', active: 'true' };
const rules = { name: 'string', age: 'number', active: 'boolean' };

function validateAndConvert(data, rules) {
  const result = {
    valid: true,
    converted: {}
  };
  for(let key in rules) {
    let value = data[key];
    let expectedType = rules[key];
    if(expectedType === 'number'){
      let num = Number(value);
      if(!isNaN(num)) {
        result.converted[key] = num;
      }else {
        result.valid = false;
      }
    }else if(expectedType === 'string') {
      result.converted[key] = String(value);
    }else if (expectedType === 'boolean') {
      let boolValue;
      if(value === true || value === 'true' || value === 1 || value === '1') {
        boolValue = true;
      }else if (value === false || value === 'false' || value === 0 || value === '0') {
        boolValue = false;
      }else {
        result.valid = false;
      }
      if(boolValue !== undefined) {
        result.converted[key] = boolValue;
      }
    }else {
      result.valid = false;
    }
  }
  return result;
}
console.log(validateAndConvert(data, rules));

console.log('------------------------')

/*const arr = ['hello', true, '42', 15, false];

function solution(arr) {

  for(let num of arr) {
    if(typeof num === 'number') {
      return num;
    }else if(typeof num === 'string') {
      let converted = Number(num);
      if(!isNaN(converted)) {
        return converted;
      }
    }
  };
  return null;
};
console.log(solution(arr));*/

console.log('------------------------');

const config = {timeout: '5000', enabled: 'true', name: 'MyApp', version: '1.0'};

function solution(config) {
  const result = {};
  for(let key in config) {
    const value = config[key];
    if(value === 'true'){
      result[key] = true;
    }else if(value === 'false') {
      result[key] = false;
    }else if(/^-?\d+$/.test(value)) {
      result[key] = Number(value);
    }else {
      result[key] = value;
    }
  }
  return result;
}

console.log(solution(config));