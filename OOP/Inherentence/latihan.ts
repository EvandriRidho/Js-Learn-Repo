class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    introduce(): string {
        return `My name is ${this.name} and I am ${this.age} years old.`
    }
}

class Student extends Person {
    job: string

    constructor(name: string, age: number, job: string) {
        super(name, age)
        this.job = job
    }

    // Override
    introduce(): string {
        return `My name is ${this.name} and I am ${this.age} years old. I am a ${this.job}.`
    }
}

let student = new Student('Evandri', 20, 'JavaScript Developer')
console.log(student.introduce())