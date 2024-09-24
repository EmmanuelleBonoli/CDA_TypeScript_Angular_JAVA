class  Person {
    private  name:  string;
    private  age: number; 

    constructor(name:  string, age:  number) {
        this.age  =  age;
        this.name  =  name;
    }

    tellMyName():  string {
        return  `I am ${this.name}`;
    }

    tellMyAge():  string {
        return  `I am ${this.age} years old`
    }

}

const  person1  =  new  Person('John', 40);
const  person2  =  new  Person('Mary', 35);

console.log(person1.tellMyName());
console.log(person2.tellMyName());

console.log(person1.tellMyAge());
console.log(person2.tellMyAge());