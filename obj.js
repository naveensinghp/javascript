//1. JS Primitive Data Type
 // string
 // number 
 // boolean 
 // null 
 // undefined 

const obj = {name:'naveen',age:25,job:{ google:'USA',apple:'Califorina'} }

const name = 'Arya'
const age = 22
const job = { google : 'USA', apple: 'Califorina'}


const obj2 = {
    heroname: name,
    heroage: age,
    oldjobs: job
}


const obj3 = { name, age, job}


let o = {
  property: function (parameters) {},
  get property() {},
  set property(value) {}
};
console.log(o);


let number = [1,2,34,5];
let test = number.reverse()
console.log(test);


let numbertest = [];

for(let i=number; number.length -1; i >=0 ){
  numbertest.push(number[i])
}

console.log(numbertest)