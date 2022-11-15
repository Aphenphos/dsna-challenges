function oddishOrEvenish(number) {
  const arr = number.split('');
  const result = arr.reduce((acc, n) => {
    return acc + parseInt(n);
  }, 0);
  if (result % 2 === 0) {
    console.log('evenish');
  } else {
    console.log('oddish');
  }
}

oddishOrEvenish('41');
