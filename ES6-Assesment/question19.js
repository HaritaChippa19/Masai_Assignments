// 1. Template Literals + Expressions
//a
console.log(`5 + 7 = ${5 + 7}`); 
//b
const multiLine = `This is line 1
This is line 2
This is line 3`;
console.log(multiLine); 
//c
const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`); 

// 2. Arrow Functions & this
// a
const square = n => n * n;
console.log(square(5));
// b
const obj = {
  value: 50,
  test: () => console.log(this.value) 
};
obj.test(); 
// c
const object = {
  value: 50,
  test: function() { console.log(this.value); }
};
object.test(); 

// 3. Rest, Spread & Copying Objects
// a
const product = { name: "Pen", price: 10 };
const productCopy = { ...product };
console.log(productCopy);
// b
const aObj = { x: 1 };
const bObj = { y: 2 };
const mergedObj = { ...aObj, ...bObj };
console.log(mergedObj);
// c
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(3, 7, 2, 10));


// 4. Destructuring & Optional Chaining
// a
const arr = [10, 20, 30];
const [a, b] = arr;
console.log(a, b);
// b
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);
// c
const info = {};
console.log(info?.user?.name);

// 5. Scoping (let/var/const)
// a
for (var i = 0; i < 3; i++) {}
console.log(i); // 3
// b
for (let j = 0; j < 3; j++) {}
// console.log(j); // ReferenceError
// c
const PI = 3.14;
// PI = 3; 

// 6. Ternary Operator – Practice
let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

let age = 20;
console.log(age >= 18 ? "Adult" : "Minor");

let num = -5;
console.log(num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative");

// 7. Spread, Rest & Arrays
// a
const nums = [1,2,3];
const newNums = [...nums, 4,5];
console.log(newNums);
// b
const arr1 = ["x","y"];
const arr2 = ["z"];
const combined = [...arr1, ...arr2];
console.log(combined);
// c
const printNames = (...names) => names;
console.log(printNames("A","B","C"));

// 8. Object Destructuring & Shorthand
// a
const user1 = { id: 101, status: "active" };
const { id, status } = user1;
console.log(id, status);
// b
const id2 = 101;
const role = "admin";
const user2 = { id2, role };
console.log(user2);
// c
const name3 = "Sam";
const student = {
  name3,
  greet() { console.log("Hello"); }
};
student.greet();

// 9. Template Literals

console.log(`Today is ${new Date().toDateString()}`);

const NAME = "Alex";
const SCORE = 85;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);

// 10. Arrow Function Shorthands
const add = (a,b) => a + b;
console.log(add(2,3));

const isAdult = age => age >= 18;
console.log(isAdult(17));

const double = n => n * 2;
console.log(double(4));

// 11. Spread Operator (Arrays & Objects)
const arr3 = [1,2,3];
const arrClone = [...arr3];
console.log(arrClone);

const arrWith100 = [100, ...arr3];
console.log(arrWith100);

const obj1 = {a:1, b:2};
const obj2 = {b:3, c:4};
const mergedObj2 = {...obj1, ...obj2};
console.log(mergedObj2);

// 12. Optional Chaining 

const user3 = { name: "Alex", address: { city: "Bangalore" } };
console.log(user3?.address?.city); 
console.log(user3?.job?.title); 

const data = { user: { name: "Bob" } };
console.log(data.user.address?.city); 
