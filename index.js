"use strict";
var AnimalType;
(function (AnimalType) {
    AnimalType["CAT"] = "Cat";
    AnimalType["GOAT"] = "Goat";
    AnimalType["TIGER"] = "Tiger";
})(AnimalType || (AnimalType = {}));
class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
        return this;
    }
}
class Cat extends Animal {
    constructor(name, sound) {
        super(name, AnimalType.CAT);
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`Name: ${this.name}, Type: ${this.type}, Make a Sound: ${this.sound}`);
    }
}
class Goat extends Animal {
    constructor(name, sound) {
        super(name, AnimalType.GOAT);
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`Name: ${this.name}, Type: ${this.type}, Make a Sound: ${this.sound}`);
    }
}
class Tiger extends Animal {
    constructor(name, sound) {
        super(name, AnimalType.TIGER);
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`Name: ${this.name}, Type: ${this.type}, Make a Sound: ${this.sound}`);
    }
}
let cat = new Cat("Oyenn", "Meongg minta ikan satu");
cat.makeSound();
let goat = new Goat("Messi", "Ronaldo is the GOAT");
goat.makeSound();
let tiger = new Tiger("Evos", "Ting ting ting Kami Punya Emwang");
tiger.makeSound();
