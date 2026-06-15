//let
let studentcount  = 10;
studentcount = 11;

console.log("student count:", studentcount);

//count
const collegename = "VETIAS";

console.log("college name:", collegename);

//Template literals
let studentname = "Arun";

console.log('Welcome ${studentname} to ${collegeName}');

//object
const student = {
    name: "Arun",
    age: 20,
    deptpartment:"IT"
};
console.log(student);

//Destructuring
const { name,age,department} = student;

console.log("Name:",name);
console.log("Age:",age);
console.log("Department:",department);

//Arrow Function
const displaystudent = () => {
    console.log('student Name:${name}');
};