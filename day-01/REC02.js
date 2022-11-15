const repeatString = (string, n) => {
  if (n < 0) {
    return;
  }
  if (n === 1) {
    return string;
  }
  return string + repeatString(string, n - 1);
};
const result = repeatString('ab', 3);
console.log(result);
