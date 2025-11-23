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
