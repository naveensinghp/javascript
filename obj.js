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


// Object Literals 

const objt = {
  firstname: 'naveem',
  lastname: 'singh',
  jobs: {
    BE: 0.7,
    ME: 67
  }
}


console.log(objt.jobs.BE);


const fruitname = 'apple';
const category = 'fruits';
const price = 55.09;

const product = {
  fruitname,
  category,
  price
}

console.log(product);



class Cart {
  constructor(){
    this.products = [];
  }
  addProduct(product){
    this.products.push(product)
  }

  getTotalPrice(){
    return this.products.reduce((total,p) => total + p.price,0)
  }

}

const cart = new Cart()
cart.addProduct({name: 'Orange',price:1.25});
cart.addProduct({name: 'lemon', price:1.74});

console.log(cart.getTotalPrice())



function Cinema(){
  const seats = [];

  function bookSeats(seat){
    seats.push(seat);
  }

  function getTotalPrice(){
    return seats.reduce((total,s) => total + s.price,0)
  }

  return {
    bookSeats,
    getTotalPrice
  }
}

const cinema = Cinema();
cinema.bookSeats({seat1: '001',price:300})
cinema.bookSeats({seat2: '001',price:300})

console.log(cinema.getTotalPrice()) // Output: 600