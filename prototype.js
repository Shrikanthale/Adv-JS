function Std(name , lname , age){
    this.name = name,
    this.lname = lname,
    this.age = age;
} 

Std.prototype.country = "INDIA"

Std.prototype.details = function (){
    return `Full name of student is ${this.name}  ${this.lname} , age is ${this.age} and country is : ${this.country}`
}



const std1 = new Std( "SAM", "CURRAN" , 23 );
const std2 = new Std( "ALEX" , "CARRY" , 29 );

// console.log(std1);
console.log(std1.details());