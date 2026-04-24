
  


function createUserProfile(username, age, isPremium, referrals) {
    // Ваш код здесь
    const ageNumber = Number(age);
    const referralsNumber = Number(referrals);
    const bonusPoints = ageNumber * 10 + referralsNumber * 5;
    const isEligibleForRewards = bonusPoints >= 200 && ageNumber >= 21;
    const accountType = isPremium ? "Premium" : "Standard";
    const userProfile = {
        username: username,
        age: ageNumber,
        accountType: accountType,
        bonusPoints: bonusPoints,
        isEligibleForRewards: isEligibleForRewards,

    };
    return userProfile;
}

console.log(createUserProfile("alex_dev", 25, true, 8));


const score = [5, 10, 0, 15];

/*for (const [i, el] of score.entries()) {
    console.log(`Раунд ${i + 1}: ${el}`);
}*/

score.forEach(function (el) {
    console.log(`Раунд: ${el}`);
})

score.forEach((el) => {
    console.log(`Раунд: ${el}`);
});

score.forEach((scoreEl, i) => {
    console.log(`Раунд ${i + 1}: ${scoreEl}`);
})

console.log('------------------');

//map


const transactionInUSD = [10, -7, 50, -10, 100];

const transactionInRUB = transactionInUSD.map((transaction, i) => {
    return transaction * 60;
})
console.log(transactionInUSD);
console.log(transactionInRUB);

console.log('------------------');


// filter
const operations = [100, -20, 7, -20, 50];

const positiveOperations = operations.filter(operation => {
    return operation > 0;
});

const negativOperations = operations.filter(operation => {
    return operation < 0;
})

const positiveRUBOperations = operations
    .filter(operation => {
        return operation > 0;
    })
    .map(operation => operation * 60);


console.log(positiveOperations);
console.log(negativOperations);
console.log(`Рубли: ${positiveRUBOperations}`);



console.log('------------------');



const prices = [[100, 200], [120, 100], [200, 350]];

const result = prices
    .map(product => product[1] - product[0])
    .filter(price => price > 0);
console.log(result);

console.log('------------------');


const operations = [100, -20, 7, -30, 50];

let balance = 0;

for (const operation of operations) {
    balance += operation;

}
console.log(balance);

const finalBalance = operations.reduce((acc, operation, i) => {
    console.log(`Итерация ${i}, acc: ${acc}, operation ${operation}`) // пример как работает reduce
    return acc += operation;
}, 0);
console.log(finalBalance);

const arr = [2, 4, 4, 10];

const result = arr.reduce((acc, el, i) => {
    if (i != arr.length -1) {
        return acc + el;
    } else {
        return (acc + el) / arr.length;
    }
}, 0);
console.log(result);

 
