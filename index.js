// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
  cats.push("Ralph")

}

function destructivelyPrependCat() {
    cats.unshift("Bob")
}

function destructivelyRemoveFirstCat() {
   cats.shift()
}
// console.log(cats)

function destructivelyRemoveLastCat() {
    cats.pop()
}

function prependCat() {
    const newCat = ['Arnold',...cats ]
    return newCat
}
function appendCat() {
    const newCatt = [...cats, "Broom" ]
    return newCatt
}

function removeLastCat() {
    const catsTwo = cats.slice(0,2)
    return catsTwo
}
function removeFirstCat() {
    const catsThree = cats.slice(1,3)
    return catsThree
}