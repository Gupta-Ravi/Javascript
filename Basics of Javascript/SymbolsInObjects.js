let name = Symbol('Name');
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
console.log(`User Name : ${user2[name]}, Age : ${user2[age]}, Email : ${user2[email]}`)