//Create a constructor function Person that takes a name and age. Add a method greet to its prototype.

function Person(name, age) {
    this.name=name
    this.age=age
}

Person.prototype.greet=function (){
    console.log(this.name+" "+this.age )
}
var p=new Person("krishna",25);
p.greet();
