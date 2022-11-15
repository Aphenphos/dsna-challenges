function titleCase(sentence) {
  const toLower = sentence.toLowerCase();
  const splitSentence = toLower.split(' ');
  const final = [];
  splitSentence.forEach((word) => {
    final.push(word.charAt(0).toUpperCase() + word.slice(1));
  });
  const finalSentence = final.join(' ');
  return finalSentence;
}

const result = titleCase('alchemy ROCKS goLD');
console.log(result);
