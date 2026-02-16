function crypto(password) {
    const n = password.length;
  const half = Math.floor(n / 2);
  
  
  const leftPart = password.slice(0, half);
  const rightPart = password.slice(half);
  
  
  const reversedLeft = leftPart.split('').reverse().join('');
  
  
  let swappedRight;
  if (rightPart.length > 1) {
    swappedRight = 
      rightPart[rightPart.length - 1] +  
      rightPart.slice(1, -1) +           
      rightPart[0];                      
  } else {
    swappedRight = rightPart;
  }
  
  return reversedLeft + swappedRight;
}