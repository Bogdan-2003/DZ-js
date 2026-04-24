function crypto(password) {
  const n = password.length;
  const half = n / 2; 
  
  const left = password.substring(0, half);
  const right = password.substring(half);
  
  const reversedLeft = left.split('').reverse().join('');
  
  let processedRight;
  if (right.length > 1) {
    const firstChar = right[0];
    const lastChar = right[right.length - 1];
    const middle = right.substring(1, right.length - 1);
    processedRight = lastChar + middle + firstChar;
  } else {
    processedRight = right;
  }
  
  return reversedLeft + processedRight;
}

function check(encrypted, candidate) {
  const decrypted = crypto(encrypted);
  
  return decrypted === candidate;
}