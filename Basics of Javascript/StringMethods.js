let userName = 'Ravi ravi Gupta';
let searchChar = 'Ravi';
let changeChar = 'Kunal';

let regExp = new RegExp(searchChar, 'gi');
let newUserName = userName.replace(regExp, changeChar);
console.log(`New User Name is ${newUserName}`);
