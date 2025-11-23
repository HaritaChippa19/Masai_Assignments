//ques1
let arr1 = [10, 20, 30];
let arr2 = [40, 50];

let newArr = [...arr1, ...arr2];
console.log(newArr);

//ques2
let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };

let newPerson = {...person, ...extra};
console.log(newPerson);

//ques3
let sumAll = (...nums) =>{
    let total = 0;
    for(let num of nums){
        total += num;
    }
    return total;
};
console.log(sumAll(1,2,3,4));

//ques4
let numbers = [10, 20, 30, 40, 50];
let [a, ...remaining]= numbers;
console.log(a);
console.log(remaining);

//ques5
let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};

const {address:{city}} = user;
console.log(city);

const{address:{geo:{lat,lng}}} = user;
console.log(lat, lng);

//ques6
const multiply = (a, b)=> {
  return a * b;
}

console.log(multiply(3,8));

//ques7
let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};

console.log(emp.details.profile?.role);