console.log("==== Operator ====");
console.log("==== Operator Comparison ====");

let x = {}
let y = x

if (x === y) {
    console.log('true')
} else {
    console.log('false')
}

console.log("==== Operator Unary ====");
let nilai = 5
let result = nilai--

console.log(nilai, result)

console.log("==== Operator Binary ====");
let a = "5"
let b = 10
console.log(a + b)

console.log("==== Operator Logical ====");
let email = "evandri"
let password = "123"

let givenEmail = "evandri"
let givenPassword = "124"

console.log(email === givenEmail && password === givenPassword)
