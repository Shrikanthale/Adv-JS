//constructor
function Std(name , lname , age){
    this.name = name,
    this.lname = lname,
    this.age = age,

    this.details = function (){
        return `Full name of student is ${this.name}  ${this.lname} and age is ${this.age}`
    }
} 

// initlize object
const std1 = new Std( "SAM", "CURRAN" , 23 );
const std2 = new Std( "ALEX" , "CARRY" , 29 );

// console.log(std1);
// console.log(std2);

// console.log(std2.details());
console.log(std1);