//Your savings decreases as you spend money...
let bankAccount = 100000;
const rent = 1200;
const carPayment = 250;
let income =2500;
let message1 = ' = Account Before Car Payment';
let message2 = ' = After Car Payment';
let message3 = ' = After Car Payment w/ Income';
//Guess what this will do!
bankAccount = bankAccount - 12*rent;
console.log(bankAccount+message1);
//Did you get what you expect?
//Write a new statement below which subtracts 5 years of a car payment on line 12.
//Below Computes Account After Car Payment
let YearlyCarPayment = carPayment*12;
bankAccount = bankAccount - YearlyCarPayment*5;
console.log(bankAccount+message2)

//Declare a variable named income on line 15, assign yourself 2500 in income.
//Below Computes Account After Car Payment + Income
bankAccount = bankAccount+income;
console.log(bankAccount+message3)
//On the next line


