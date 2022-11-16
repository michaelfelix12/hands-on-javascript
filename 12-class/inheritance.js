//inheritance
class Gender {
    constructor(genderName, foodType) {
        this.genderName = genderName
        this.foodType = foodType
    }
    getGender() {
        return this.genderName
    }
    getFoodType() {
        return this.foodType
    }
}

class Human extends Gender{
    constructor(name) {
        super('Mamalia', 'Carnivore')
        this.name = name
    }
    getInfo() {
        console.log(`${this.name} is a ${this.gender} with ${this.legs} legs`)
    }
}

class Plant {
    constructor(name) {
        this.name = name;
    }
    getInfo() {
        console.log(`${this.name} is a ${this.gender} with ${this.legs} legs`)
    }
}

const animal = new Human('Michael', 4, 'Mamalia')
console.log(animal.getGender())
console.log(animal.getFoodType())