//Reasone - 
/* We have defined symbol here because if we extract details of say 10 or 12 users from the database then we would have to create 5 variables for each user but by using symbol we just have to create a variable for users. examples - user1, user2, user3..., user12. */


//Code - 

/* let name = Symbol('Name');
let age = Symbol('Age');
let email = Symbol('Email');
let password = Symbol('Password');

let user1 = {
    [name]: 'Arvind Gupta',
    [age]: 22,
    [email]: 'arvindgupta@gmail.com',
    [password]: '123@abc'
}

console.log(user1);
console.log(`User Name : ${user1[name]}, Age : ${user1[age]}, Email : ${user1[email]}`)

let user2 = {
    [name]: 'Shubham Yadav',
    [age]: 23,
    [email]: 'shubhamyadav@gmail.com',
    [password]: '456@abc'
}

console.log(user2);
console.log(`User Name : ${user2[name]}, Age : ${user2[age]}, Email : ${user2[email]}`) */

let user1 = {
    name: 'Ravi Gupta',
    age: 32,
    email: 'ravigupta@gamil.com',
    passoword: 'RaviGupta12'
}

console.log(`User Name - ${user1.name}, Age : ${user1.age}, Email : ${user1.email}`)

let user2 = {
    name: 'Aujun Viswakarma',
    age: 25,
    email: 'arjunviswakarma@gamil.com',
    passoword: 'Arjun12'
}

console.log(`User Name - ${user2.name}, Age : ${user2.age}, Email : ${user2.email}`)