const cats = [
    "Milo", "Otis", "Garfield"
]

function destructivelyAppendCat(name) {
    cats.push(name)
    return cats
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
    return cats
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name)
    return cats
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
    return cats 
}
function appendCat(name) {
    var name1 = [...cats, name];
    return name1;
}

function prependCat(name) {
    var name2 = [name, ...cats];
    return name2

}

function removeLastCat() {

    var cats2= cats.slice(0,-1)
    return cats2;
}


  function removeFirstCat() {
    var catsss = cats.slice(1);
    return catsss
  }