//constructor function
// function Car() {
//     this.name = 'Car'
//     this.color = 'Red'
//     this.engine = 'V6'
//     this.dimension = {
//         width: 100,
//         height: 200
//     }
//     this.getInfo = function() {
//         console.log(`${this.name}, witch ${this.color} color, and it's dimension ${this.dimension.width}`)
//     }
// }

//menggunakan parameter
function Car(name, color, engine, width, height) {
    this.name = name
    this.color = color
    this.engine = engine
    this.dimension = {
        width: width,
        height: height
    }
    this.getInfo = function() {
        console.log(`${this.name}, witch ${this.color} color, and it's dimension ${this.dimension.width}`)
    }
}

const car = new Car('Toyota', 'Silver', 'V8', 300, 100)

// const car1 = new Object
// const car = new Car() //membuat object dengan function constructor
// car.name = 'Toyota'

console.log(car)
car.getInfo()

//cara baru, pakai class
//penulisan sama dengan function constructor, yaitu menggunakan pascal case
class Animal {
    constructor(name, legs, genus) {
        this.name = name,
        this.legs = legs,
        this.genus = genus
    }
    getInfo(){
        console.log(`${this.name}, legs ${this.legs}, genus ${this.genus}`)
    }
    animalSound() {
        console.log('meong')
    }
    static getAnimal() {
        return 'Animal'
    }
}

const animal = new Animal('Kucing', 4, 'Mamalia') //membuat object dengan class
console.log(animal)
animal.getInfo()
animal.animalSound()
console.log(Animal.getAnimal())

//di Js ada banyak static method, salah satunya void