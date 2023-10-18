class Person {
    constructor(name, age) {
        this.name = name;
        this.age=age
        this.info=`${this.name}s age is ${this.age}`

    }
    getInfo(){
        return this.info
    }
}

let jon=new Person('john', 34)
let jond=new Person('joddhn', 3455)

console.log(jon.getInfo())
console.log(jond.getInfo())