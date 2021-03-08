// const hubby = "Elias Kanchon";
// console.log(hubby);

// function add(num1, num2 = 20){
//     return num1 + num2;
// }

// let total = add(15);
// console.log(total);
// total = add(15, 4);
// console.log(total);

// const firstName = "Justin";
// const lastName = "TimberLake";
// const fullName = firstName + " " + lastName + " is a good boy";
// const fullName2 = `${firstName} ${lastName} is a good boy`;
// const multiLine = "I love you\n" + "I miss you\n" + "I need you";
// const multiLine2 = `I love you 
// I miss you no. 
// I don't need you. 
// Baily road e dorkar nai.`
// console.log(multiLine);
// console.log(multiLine2);

const ages = [1,2,3,4];
const ages1 = [6,7,8,9];
const ages2 = [10,203,45];
const allAges = [...ages, ...ages1, 6, ...ages2];
console.log(allAges);
const allAges1 = ages.concat(ages1).concat(ages2);
console.log(allAges1);
console.log(Math.max(...ages2));