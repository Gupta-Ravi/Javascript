let userName = 'Ravi Gupta';
let searchChar = 'Ravi';
let changeChar = 'Kunal';

//Here gi = g for search the character in all string and i for case in-sensitive
let regExp = new RegExp(searchChar, 'gi');
let newUserName = userName.replace(regExp, changeChar);
console.log(`New User Name is ${newUserName}`);
