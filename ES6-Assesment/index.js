//Question 11
const multiply = (a = 1, b = 1) => a * b;
console.log(multiply(3, 4)); 
console.log(multiply());

//Question 12
const calculate = n => ({ 
    square: n * n, cube: n * n * n 
});
console.log(calculate(5));

//Question 13
const people = [ 
    { 
        name: "Alice", 
        address: 
        { city: "New York", street: 
            { name: "Broadway", number: 123 } 
        } 
    }, 
    { name: "Bob", address: 
        { city: "Los Angeles", street: 
            { name: "Sunset Boulevard", number: 456 } 
        } 
    } 
];
const result = [];

for (const { name, address: { city, street: { name: streetName } } } of people) {
  result.push(`${name} lives in ${city} on ${streetName}`);
}

console.log(result);

//Question 14
const profile = {
  name: "Charlie",
  age: 29,
  address: {
    city: "San Francisco",
    zipcode: "94101"
  }
};

const updates = {
  age: 30,
  address: {
    zipcode: "94109",
    country: "USA"
  }
};

const merged = {
  ...profile,
  ...updates,
  address: {
    ...profile.address,
    ...updates.address
  }
};
console.log(merged);

//Question15
//a
const user = "Harita";
const course = "JavaScript";

console.log(`Hello ${user}, welcome to the ${course} course!`);
//b
const name = "Sam";
const age = 21;

const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};
//c
const getFullName = (first, last) => `${first} ${last}`;

//Question 16
//a
const isEven = n => n % 2 === 0;
//b
const result1 = marks >= 35 ? "Pass" : "Fail";
//c
const greet = name => `Hello, ${name ? name : "Guest"}`;


