function Animal(name){
    this.name = name;
}

Animal.prototype.say = function(){
    console.log("Hello ", this.name)
}

function Dog(name, breed){
    Animal.call(this,name)
    this.breed = breed
}

Dog.prototype = Object.create(Animal.prototype)
// Dog.prototype.constructor = Dog;
const pet = new Dog("Dog", "Jarvis")
Dog.prototype.bark = function(){console.log("Barking...")}
pet.say()
pet.bark()
console.log(Animal.prototype)