const numbers = [3, 6, 9, 2];

function filterOutGreaterThanFive(num) {
    return num > 5;
  }

function removeBy(arr, filterOut) {
    const result = [];
    for(const num of arr) {
        const shouldDelete = filterOut(num);
        if(!shouldDelete) {
            result.push(num);
        }
    }
    return result;
}

const filtered = removeBy(numbers, filterOutGreaterThanFive);
console.log(filtered); 