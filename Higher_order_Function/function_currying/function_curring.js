let muliply=function (x,y){
    console.log(x*y);
}

let muliply_two=muliply.bind(this,4)
muliply_two(5);