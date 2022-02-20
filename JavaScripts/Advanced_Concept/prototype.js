/**
 * prototype basic defination and practice as well
 * prototype is a property of an object
 * prototype is an object
 * prototype is a prototype of all objects
 */

// prototype example 00
const person = {};

person.name = "minhajsadik";
person.age = 24;
person.expertise = "javascript, golang";
person.eat = function () {
  console.log("minhajsadik, eating");
};
person.sleep = function () {
  console.log("minhajsadik, sleeping");
};

console.log(person.sleep);

// prototype example 01
function Person(name, age) {
  const person = {};

  person.name = "minhajsadik";
  person.age = 24;
  person.expertise = "javascript, golang";
  person.eat = function () {
    console.log("minhajsadik, eating");
  };
  person.sleep = function () {
    console.log("minhajsadik, sleeping");
  };
  return person;
}

const minhaj = Person("minhaj", 24);
const sadik = Person("sadik", 24);

// prototype example 02
const personMethod = {
  eat() {
    console.log("person eating");
  },
  sleep() {
    console.log("person sleeping");
  },
  play() {
    console.log("person playing");
  },
};

function Person1(name, age) {
  const person = {};
  person.eat = personMethod.eat;
  person.sleep = personMethod.sleep;
  person.play = personMethod.play;
  return person;
}

const minhaj1 = Person1("minhaj1", 24);
const sadik1 = Person1("sadik1", 24);

const captain = {
  name: "minhajsadik",
  age: 24,
  expertise: "javascript, golang, cricket, badminton, tennis",
};

const player = Object.create(captain);
console.log(player.name);

function Person2(name, age) {
  let person = Object.create(Person2.prototype);
  person.name = name;
  person.age = age;
  return person;
}

Person2.prototype = {
  eat() {
    console.log("person eating");
  },
  sleep() {
    console.log("person sleeping");
  },
  play() {
    console.log("person playing");
  },
};

const sakib = Person2("sakib", 24);
// sakib.eat();
const tamim = Person2("tamim", 24);

// prototype with new keyword
function PersonWithNew(name, age) {
  this.name = name;
  this.age = age;
}

PersonWithNew.prototype = {
  eat() {
    console.log("person eating");
  },
  sleep() {
    console.log("person sleeping");
  },
  play() {
    console.log("person playing");
  },
};

const samir = new PersonWithNew("sakib", 24);
// sakib.eat();
const karim = new PersonWithNew("tamim", 24);

// move forward on the prototype to class

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log("personClass eating");
  }

  sleep() {
    console.log("personClass sleeping");
  }

  play() {
    console.log("personClass playing");
  }
}

const minhajClass = new PersonClass("minhaj", 24);
minhajClass.eat();
const sadikClass = new PersonClass("sadik", 24);
