/**
 * this
 * /@
 * #implicit binding
 * #explicit binding
 * #new binding
 * #window binding
 * @/
 * call
 * bind
 * apply
 */

// started 'this' with implicit binding
const person = {
  name: "John",
  age: 30,
  printPersonName: function () {
    console.log(`${this.name} is ${this.age}`);
  },
};

person.printPersonName();

const printName = function () {
  console.log(`${this.name} is ${v1}, ${v2} & ${v3}`);
};

const minhaj = {
  name: "minhaj",
  age: 24,
};

const v1 = "programmer";
const v2 = "cricketer";
const v3 = "lover";

const v = [v1, v2, v3];

printName.call(minhaj, v1, v2, v3);
printName.apply(minhaj, v);
const nameInstace = printName.bind(minhaj, v1, v2, v3);
nameInstace();

//new binding
function Person(name, age) {
  // const this = Object.create({});
  this.name = name;
  this.age = age;
  console.log(`${this.name} is ${this.age}`);
  // return this
}

const sakib = new Person("minhaj", 24);

// window binding
function PrintName(name) {
  console.log(`${this.name}`); //undefined
}

const window = {
  name: "window",
};

PrintName();
