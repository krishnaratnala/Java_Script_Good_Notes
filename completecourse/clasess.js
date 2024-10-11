//Create a class Animal with a constructor that takes a name. Add a method speak to the class.
class Animal{
    constructor(name){
        this.name=name
        }speak(){
            console.log(this.name+" says hello");
    }
}
let dog=new Animal("krishna")
dog.speak();

