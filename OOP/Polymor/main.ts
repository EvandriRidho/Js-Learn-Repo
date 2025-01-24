// Inherentance
class Animal {
    protected name: string
    protected age
    protected gender

    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    eat() {
        console.log(`${this.name} is eating`)
    }
}
class Dog extends Animal {
    private race
    constructor(name, age, race, gender) {
        super(name, age, gender)
        this.race = race
    }
    // Overiding
    eat() {
        console.log(`${this.name} is eating meat`)
    }
}

class Cow extends Animal {
    constructor(name, age, gender) {
        super(name, age, gender)
    }
    // Overiding
    eat() {
        console.log(`${this.name} is eating grass`)
    }
}

class Fish extends Animal {
    constructor(name) {
        super(name, 0, 'male')
    }
    eat() {
        console.log(`${this.name} is eating worms`)
    }
}

function Feeding(...animals: Animal[]) {
    for (const animal of animals) {
        animal.eat()
    }
}

let animals = [
    new Dog('Milo', 3, 'Golden Retriever', 'male'),
    new Cow('Bessie', 4, 'female'),
    new Fish('Nemo')
]

Feeding(...animals)