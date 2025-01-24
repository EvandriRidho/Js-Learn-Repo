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

    walking() {
        console.log(`${this.name} is walking`)
    }

    get getName() {
        let name = this.name.charAt(0).toUpperCase() + this.name.substring(1).toLowerCase()
        return name
    }

    set setName(name: string) {
        for (let i = 0; i < name.length; i++) {
            if (name.charCodeAt(i) >= 65 && name.charCodeAt(i) <= 90) {
                continue
            }

            if (name.charCodeAt(i) >= 97 && name.charCodeAt(i) <= 122) {
                continue
            }

            console.log('Please enter a valid name')
            return
        }
        this.name = name
    }
}
class Dog extends Animal {
    private race
    constructor(name, age, race, gender) {
        super(name, age, gender)
        this.race = race
    }
    barking() {
        console.log(`${this.name} is barking, I am ${this.race}`)
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

let dog = new Dog('Milo', 3, 'Golden Retriever', 'male')
dog.setName = 'dito'
console.log(dog.getName)