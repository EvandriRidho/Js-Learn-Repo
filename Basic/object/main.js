// Soal 1
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    start: function () {
        console.log("The car is starting...");
    }
}

// console.log(car.brand);
// car.start();

// Soal 2
car.color = "white";
console.log(car);

// Soal 3
const person = {
    name: "Alice",
    age: 30,
    occupation: "Engineer"
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Soal 4
function createPerson(name, age, occupation) {
    return {
        name,
        age,
        occupation
    }
}

const person1 = createPerson("Alice", 30, "Engineer");
console.log(person1);