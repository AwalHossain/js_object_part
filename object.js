//Object literal

const person = {
    name:'awal',
    age: 22,
    job:'student'
}

//By class and constructor

class People{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const peop = new People('manush', 32)
// console.log(peop);

function Popular(man, age){
    this.man = man;
    this.age = age;
}

const pop = new Popular('max', 31)
console.log(pop);