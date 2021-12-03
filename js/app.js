//using let as scope to the block which they are defined 

// function sayHello(){
//     for(let i =0; i<5; i++) {
//         console.log(i);
//     }
//     console.log(i);
// }

// sayHello();


// OBJECTS
// const person = {
//     name: 'Esther',
    // walk: function () {} ...this function can be written as
//     walk() {
//         console.log(this);
//     },
//     talk() {}
// }

// Use dot or bracket notation to access the object method
// person.walk();

// const walk = person.walk.bind(person);
// walk();

// // backet notation is used when we don't know what property or method we are going to access
// person['name'] = 'John';

// REBINDING
// Arrow function don't rebind the this keyword

// const person = {
//     talk() {
//         var self = this;
//         setTimeout(() => {
//             console.log('this', this);
//         }, 1000);
//     }
// };

// person.talk();


// ARRAY.MAP FOR REDENRING 

// const colors = ['red', 'green', 'blue'];
// const items = colors.map((color) => `<li> ${color} </li>`);
// console.log(items);


// OBJECT DESTRUCTURING

// const address = {
//     street: '',
//     city: '',
//     country: ''
// }

    //extracting and storing in separate variables
// const {street, city, country} = address;
    //defining new const in object
    // const {street: str} = address;


// SPREAD OPERATOR

// const first = [1, 2, 3];
// const second = [4, 5, 6];

    // const combined = first.concat(second);
    // const combined = [...first, ...second];
    // console.log(combined);

    // const clone = [...first];
    // console.log(first);
    // console.log(clone);

    // e.g with object
    // const first = {name: 'Mosh'};
    // const second = {job: 'Instructor'};

    // const combined = {...first, ...second, location: 'Australia'};
    // console.log(combined);


// CLASSES

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     walk() {
//         console.log('walk');
//     }
// }

// const person = new Person('Esther');
// person.walk();

// INHERITANCE

// class Teacher extends Person {
//     constructor(name, degree) {
//         super(name);
//         this.degree = degree;
//     }
//     teach() {
//         console.log('teach');
//     }
// }

// const teacher = new Teacher('Esty', 'master of science');
// teacher.teach();


// MODULES

