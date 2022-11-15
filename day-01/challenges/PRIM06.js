function multiples(n) {
  const result = [];
  if (n > 50) return result;
  for (let i = 1; i <= 50; i++) {
    const toArr = n * i;
    if (toArr > 50) {
      break;
    }
    result.push(toArr);
  }
  return result;
}

const test = multiples(25);
console.log(test);
