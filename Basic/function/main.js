// Study Kasus 1 : Menghitung Rata - Rata
function calculateAverage(numbers) {
    const total = numbers.reduce((acc, num) => acc + num, 0)
    return total / numbers.length
}

const scores = [85, 90, 78, 92, 88];
console.log(calculateAverage(scores)); // Output yang diharapkan: 86.6

// Study Kasus 2 : Filter Angka Ganjil
function filterOddNumbers(numbers) {
    return numbers.filter(num => num % 2 != 0)
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterOddNumbers(nums)); // Output yang diharapkan: [1, 3, 5, 7, 9]

// Study Kasus 3 : Closure
const createCounter = () => {
    let count = 0

    return function () {
        count++
        return count
    }
}


const counter = createCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

// Study Kasus 4 : Rekursi
function factorial(n) {
    if (n === 1) return 1
    return n * factorial(n - 1)
}

console.log(factorial(5)); // Output yang diharapkan: 120

// Study Kasus 5 : Async / Await
async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    const title10 = data.slice(0, 10)

    const titles = title10.map(post => post.title)
    console.log(titles)
}

fetchPosts();
// Output yang diharapkan: Daftar judul dari API
// https://jsonplaceholder.typicode.com/posts

// Study Kasus 6 : Reduce untuk Total Harga
const products = [
    { name: "Apple", price: 2 },
    { name: "Banana", price: 1 },
    { name: "Orange", price: 3 },
];

function calculateTotal(products) {
    return products.reduce((total, product) => total + product.price, 0)
}

console.log(calculateTotal(products)); // Output yang diharapkan: 6