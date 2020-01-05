console.log(__dirname, __filename);
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}
const personn = {
    name: 'Mayank Sati',
    age: 30
}

module.exports = Person;