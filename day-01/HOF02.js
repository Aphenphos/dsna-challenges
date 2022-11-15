const addFirst = (element) => {
  return (arr) => {
    const newArr = [element, ...arr];
    return newArr;
  };
};

const addOrange = addFirst('orange');
console.log(addOrange(['red', 'blue', 'green']));
// [orange,red,blue,green]
console.log(addOrange(['blue', 'blue', 'blue']));
// [orange,blue,blue,blue]

const addCat = addFirst('cat');
console.log(addCat(['dog', 'bird', 'lizard']));
// [cat,dog,bird,lizard]
console.log(addCat(['lizard', 'donkey', 'whale']));
// [cat,lizard,donkey,whale]
