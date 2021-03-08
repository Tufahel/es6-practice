// //Class
// class Student{
//     constructor(sId, sName){
//         this.id = sId;
//         this.name = sName;
//         this.school = "kl school";
//     }
// }

// const student1 = new Student(12, "Shuvo");
// const student2 = new Student(22, "Mahiya");
// console.log(student1, student2);

// //inheritance
// class Parent{
//     constructor(){
//         this.fatherName = "Schwerznegger";
//     }
// }
// class Child extends Parent{
//     constructor(name){
//         super();
//         this.name = name;
//     }
//     getFUllName(){
//         return this.name + " " + this.fatherName;
//     }
// }
// const baby = new Child("Arnold");
// const baby2 = new Child("Tom");
// console.log(baby);
// console.log(baby2);
// console.log(baby.getFUllName());
// console.log(baby2.getFUllName());

//destructure
const person = {naem: 'Jack Wiliam', age: 17, job: 'Facebooker', gfName: 'Ema Watson', phone: 01734534322};
const { phone, gfName } = person;
const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger Leader'
    }
}
const {leader} = complexObject.info;
console.log(leader);

//const gfName = person.gfName;
// console.log(gfName, phone);
// const friends = ['Sakib Khan', 'Amir Khan', 'Shahruk Khan'];
// const [first, ...restfriends] = friends;
// console.log(restfriends);

