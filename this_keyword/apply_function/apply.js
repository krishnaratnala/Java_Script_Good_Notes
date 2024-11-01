function introduce(lang1,lang2){
    console.log(`Hello,I speak ${lang1} and ${lang2}.My name is ${this.name}`)
}
const person={
    name:'Jhon'
}

introduce.apply(person,['English','Spanises']);
