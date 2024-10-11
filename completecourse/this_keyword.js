//Create an object with a method that logs the object’s properties using this
let object={
    name:"John",
    age:30,
    getinfo:function (){
        console.log(this.name,this.age);
    }
}
object.getinfo();