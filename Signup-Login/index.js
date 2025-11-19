function signup(userName) {
  let users = ["harita", "john", "alex", "megha"];

  if (users.includes(userName)) {
    return "User Already Registered, Please Login";
  } else {
    users.push(userName);
    return "Signup Successful, Please Login";
  }
}

console.log(signup("john"));   
console.log(signup("priya"));  

function login(userName, password) {
  let users = ["harita", "john", "alex", "megha"];

  if (!users.includes(userName)) {
    return "User Not Found, Please Signup.";
  }

  if (password !== "Emp@123") {
    return "Wrong Password....";
  }

  return "Login Successful...";
}

console.log(login("john", "Emp@123"));      
console.log(login("priya", "Emp@123"));     
console.log(login("alex", "wrongpass"));    
