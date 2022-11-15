function anagrams(w1, w2) {
  const word1Letters = JSON.stringify(w1.split('').sort());
  const word2Letters = JSON.stringify(w2.split('').sort());
  if (word1Letters == word2Letters) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

anagrams('superintended', 'unpredestined');
anagrams('pictorialness', 'documentarily');
