// Soal 1 - Dasar Array
let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
fruits.shift();

for (let i = 0; i < fruits.length; i++) {
    console.log(`buah dengan index ${i + 1} adalah ${fruits[i]}`);
}

// Soal 2 - Transformasi Array
let numbers = [1, 2, 3, 4, 5];
let quadratNumber = numbers.map((number) => number * number);
console.log(quadratNumber);

// Soal 3 - Filter Array
let ages = [12, 17, 18, 21, 16, 25]
let adults = ages.filter((age) => age >= 18);
console.log(adults);

// Soal 4 - Reduce Array
let prices = [1000, 2000, 3000, 4000, 5000];
let total = prices.reduce((total, price) => total + price);
console.log(total);

// Soal 5 - Mencari Elememnt
let names = ["Evandri", "Davina", "Evan", "Ridho", "Dadap"];
let index = names.findIndex((name) => name === "Davina");
console.log(index);

// Soal 6 - Menggabungkan Array
let oddNumbers = [1, 3, 5];
let evenNumbers = [2, 4, 6];

let allNumbers = oddNumbers.concat(evenNumbers).sort((a, b) => a - b);
console.log(allNumbers);