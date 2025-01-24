abstract class Animal {
    abstract move()
}

class Dog extends Animal {
    move() {
        console.log('Dog is walking')
    }
}

class CatFish extends Animal {
    move() {
        console.log('CatFish is swimming')
    }
}

class Eagle extends Animal {
    move() {
        console.log('Eagle is flying')
    }
}

function moving(animal: Animal) {
    animal.move()
}

moving(new Dog())
moving(new CatFish())
moving(new Eagle())