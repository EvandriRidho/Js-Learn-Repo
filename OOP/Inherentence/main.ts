// Inherentance
class Animal {
    name
    age
    gender

    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    walking() {
        console.log(`${this.name} is walking`)
    }
}
class Dog extends Animal {
    race
    constructor(name, age, race, gender) {
        super(name, age, gender)
        this.race = race
    }
    barking() {
        console.log(`${this.name} is barking`)
    }
}

class Cow extends Animal {
    constructor(name, age, gender) {
        super(name, age, gender)
    }
    speak() {
        console.log(`${this.name} is mooing`)
    }
}

class BeefCattle extends Cow {
    constructor(name, age, gender) {
        super(name, age, gender)
    }
}

let dog = new Dog('Milo', 3, 'Golden Retriever', 'male')
dog.walking()
dog.barking()

let cow = new Cow('Bessie', 4, 'female')
cow.walking()

let beefCattle = new BeefCattle('Beef', 5, 'male')
beefCattle.speak()
beefCattle.walking()