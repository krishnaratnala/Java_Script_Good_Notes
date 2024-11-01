const student={
    name:"Jhon",
    printname:function(){
        console.log(this.name);
    }
}
student.printname();

const student1={
    name:'krishna'
}
// you print the name using with printname method how would you do?
//By using call funtion->obj1.printname.call(this)=here this referces to student1
student.printname.call(student1);



function greet(greeting ){
    console.log(`${greeting},my name is ${this.name}`)
}
const person={name:'Alice'}

greet.call(person,'hello')

