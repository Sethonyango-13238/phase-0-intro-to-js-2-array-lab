// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];
// beforeEach(function () {
//     cats.length = 0;

//     cats.push('Milo', 'Otis', 'Garfield');
//   });
console.log(cats)

function destructivelyAppendCat(name){
    cats.push(name);
}
destructivelyAppendCat("Ralph");
console.log(cats);

function destructivelyPrependCat(name){
    cats.unshift(name)
}
destructivelyPrependCat("BOb");
console.log(cats);

function destructivelyRemoveLastCat(name){
    cats.pop(name)
}
destructivelyRemoveLastCat("Ralph")
console.log(cats)

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}
destructivelyRemoveFirstCat("Bob");
console.log(cats);

function appendCat(cats, name){
    return [...cats,name];
}
const appendCats=appendCat(cats, "Broom")
console.log(cats);
console.log(appendCats);

function prependCat(cats, name){
    return [name, ...cats];
}
const prependCats=prependCat(cats, "Arnold")
console.log(cats);
console.log(prependCats);

function removeLastElement(arr) {
    return [...arr.slice(0, arr.length - 1)];
}

const newCats = removeLastElement(cats);

console.log(cats);      
console.log(newCats); 

function removeFirstElement(arr) {
    return cats.slice(1);
}

const newCatss = removeLastElement(cats);

console.log(cats);      
console.log(newCatss); 
