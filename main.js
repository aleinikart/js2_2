//ES5


// let john = new Person('John', 1992);
// // let ann = new Teacher('Ann', 1980, 'math');
// //
// // // hoisting
// //
// // function Person(name, yearOfBirth) {
// //     this.name = name;
// //     this.yearOfBirth = yearOfBirth;
// // }
// //
// // Person.prototype.calcAge = function(){
// //     console.log(new Date().getFullYear() - this.yearOfBirth);
// // };
// // // Person.prototype.lastName = 'Smith';
// //
// // function Teacher(name, yearOfBirth, subject){
// //     Person.call(this, name, yearOfBirth);
// //     this.subject = subject;
// // }
// //
// // Teacher.prototype = Object.create(Person.prototype);
// // Teacher.prototype.constructor = Teacher;


// ES6

// class Person {
//     constructor(name, yearOfBirth){
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//     }
//     calcAge(){
//         return new Date().getFullYear() - this.yearOfBirth;
//     }
//     sayHi(){
//         return `${this.name} says hi`;
//     }
//     static triple(x){
//         if (x === undefined){
//             x = 2;
//         }
//         return x * 3;
//     }
// }
//
// class Teacher extends Person {
//     constructor(name, yearOfBirth, subject){
//         super(name, yearOfBirth); // Вызов конструктора родителя
//         this.subject = subject;
//     }
//     sayHi(){
//         return `${super.sayHi()} as teacher`;
//     }
//
// }
//
// let john = new Person('John', 1992);
// let ann = new Teacher('Ann', 1992, 'math');
// console.log(john.sayHi());
// console.log(ann.sayHi());
// console.log(Teacher.triple(3));
// console.log(ann.triple(3));
