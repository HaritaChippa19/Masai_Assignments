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

//Question 17
//a
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const merge = [...arr1, ...arr2];
console.log(merge); // [1, 2, 3, 4, 5]

//b
const sum = (...nums) => nums.reduce((acc, n) => acc + n, 0);

//c
const user1 = {
  name1: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

const {
  name1,
  address: { city, pin }
} = user1;

console.log(name1, city, pin);

//Question 18
//a
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);
console.log(x);

//Output
20
//ReferenceError: x is not defined
//b
const profile1 = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile1?.user?.details?.email);  
console.log(profile1?.user?.details?.phone);  

//c
const data = {
  user: {
    name: "Alice"
  }
};

console.log(data.user.address.city); 
console.log(data.user.address?.city); 




