const cats = ["Milo", "Otis", "Garfield"]

 function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
 } 

 function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
 }

 function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats;
 }

  function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats;
  }

  function appendCat(name) {
    let copyOfCat = [...cats, name ];
    return copyOfCat;
  }

  function prependCat(name) {
    let copyOfCats = [name,...cats];
    return copyOfCats;
  }

  function removeLastCat() {
    let removeCat = cats.slice(0, -1);
    return removeCat;
  }

  function removeFirstCat() {
   let removeFirstCat = cats.slice(1);
    return removeFirstCat;
  }