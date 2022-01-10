// console.log("hello world");

// const str = "Shrikant";
// console.log(str);

// const s = "shrikant";
// console.log(typeof s);
//  console.log(s.toUpperCase());

// const str = new String('Hello');
// console.log(typeof str);

// console.log(window.navigator);
// console.log(window);
// window.alert('Hello');

//object literal
const std = {
    name : "Shrikant",
    lname : "kanthale",
    age : 22,

    details : function (){
        return `Full name of student is ${this.name}  ${this.lname} and age is ${this.age}`
    }
};

const std1 = {
    name : "sam",
    lname : "Curran",
    age : 22,

    details : function (){
        return `Full name of student is ${this.name}  ${this.lname} and age is ${this.age}`
    }
};

// console.log(std);
// console.log(std.name);
// console.log(Object.values(std));
// console.log(Object.keys(std));

console.log(std.details());

console.log(std1.details());

