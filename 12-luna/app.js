const card = '4561-2612-1234-5464';

function cardVerification(card) {
  const onlyDigits = card.replaceAll('-', '');

  let sum = 0;
  for (let i = 0; i < onlyDigits.length; i += 1) {
    const d = Number(onlyDigits[i]);
    const fromRight = onlyDigits.length -1 - i;
    if (fromRight % 2 ===1) {
      let v = d * 2;
      if (v > 9) v = v - 9;
      sum += v;
    } else {
      sum +=d;
    }
  }
  return sum % 10 ===0;
}

console.log(cardVerification(card));