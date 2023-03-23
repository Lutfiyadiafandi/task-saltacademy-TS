enum AnimalType {
    CAT = "Cat",
    GOAT = "Goat",
    TIGER = "Tiger"
}

class Animal {
    name: string
    type: AnimalType

    constructor(name: string, type: AnimalType) {
        this.name = name
        this.type = type
    }
    getName(): string {
        return this.name
    }
    setName(name: string) {
        this.name = name
        return this
    }
}

class Cat extends Animal {
    sound: string

    constructor(name: string, sound: string) {
        super(name, AnimalType.CAT)
        this.name = name
        this.sound = sound
    }
    makeSound(): void {
        console.log(`Name: ${this.name}, Type: ${this.type}, Make a Sound: ${this.sound}`)
    }
}

class Goat extends Animal {
    sound: string

    constructor(name: string, sound: string) {
        super(name, AnimalType.GOAT)
        this.name = name
        this.sound = sound
    }
    makeSound(): void {
        console.log(`Name: ${this.name}, Type: ${this.type}, Make a Sound: ${this.sound}`)
    }
}

class Tiger extends Animal {
    sound: string

    constructor(name: string, sound: string) {
        super(name, AnimalType.TIGER)
        this.name = name
        this.sound = sound
    }
    makeSound(): void {
        console.log(`Name: ${this.name}, Type: ${this.type}, Make a Sound: ${this.sound}`)
    }
}

let cat: Cat = new Cat("Oyenn", "Meongg minta ikan satu")
cat.makeSound()

let goat: Goat = new Goat("Messi", "Ronaldo is the GOAT")
goat.makeSound()

let tiger: Tiger = new Tiger("Evos", "Ting ting ting Kami Punya Emwang")
tiger.makeSound()