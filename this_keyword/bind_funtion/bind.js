function farewell(){
    console.log(`Good Bye form ${this.name}`)
}

const person={
    name:'jhon'
}
const adminfarewell=farewell.bind(person);
adminfarewell();
