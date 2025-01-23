let userDetails = {
    name: "Ravi Gupta",
    email: "ravigupta@gmail.com",
    phone: 9004592315, 
    age: 22,
    "greet": "Hello World!",
    [Sym]: 56
};

console.log(`User Name:- ${userDetails.name} Greet:- ${userDetails["greet"]}`);