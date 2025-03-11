//==================================================================================
// Array
//==================================================================================\

let numbers = [1,2,3,4,5];
let language = ['java','javascript','python','typescript','html']

// when we use for-of on array it give the direct value not key's 
for (const num of numbers) {
    console.log(num);
}

// when we use for-in on array it gives the key value - key values in array's are index values.
for (const num in numbers) {
    console.log(num);
}

// for-each | other format arrayName.forEach(() => {})
language.forEach(item => {
    console.log(item);
});

//for-each hold everything on every ilteration
language.forEach((item, index, arr) => {
    console.log(item, index, arr);
    
});

//==================================================================================
// Maps
//==================================================================================

let firstMap = new Map();
firstMap.set('IN','India');
firstMap.set('USA','United States of America');
firstMap.set('JA','Japan');
// console.log(firstMap);

//for-in doesn't work on maps instead of that use for-of

for (const [key, value] of firstMap) {
    console.log(key,':', value);
}

// for (const key in firstMap) {
//     console.log(key);
    
// }

//==================================================================================
// Objects
//==================================================================================

let otherObject = {
    'game-1': 'NFS', 
    'game-2': 'PUBG', 
    'game-3': 'COD-WARZONE'
}

//for-of doesn't work on objects instead of that use for-in

for (const key in otherObject) {
    console.log(`${key} : ${otherObject[key]}`);
    
}

// for (const [key, value] of otherObject) { 
//     console.log(key,':', value);
// }