class Dog {
    static spesiec
    static jumlah

    static {
        Dog.spesiec = 'Canis familiaris'
        Dog.jumlah = 0
    }

    static {
        console.log('static block')
    }

    name
    age
    race
    gender

    constructor(name, age, race, gender) {
        this.name = name
        this.age = age
        this.race = race
        this.gender = gender
        Dog.jumlah++
        console.log("Object Dibuat")
    }

    walking() {
        console.log(`${this.name} is walking`)
    }

    barking() {
        console.log(`${this.name} is barking`)
    }
}

let milo = new Dog('Milo', 3, 'Golden Retriever', 'male')
new Dog
new Dog