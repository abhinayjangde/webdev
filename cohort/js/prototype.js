class Person{
    constructor(name, age){
        if(!new.target){
            return `Name : ${name}`
        }
        this.name = name
        this.age = age
    }
    static age = 2;

    static getAge(){
        return this.age
    }
}

const p = new Person("Abhi",23)
console.log(Person.getAge())

