// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return "I have a " + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ", it is a " + this.model;
//   }
// }

// class Year extends  Car {
//     constructor( brand, yr){
//         super(brand);
//         this.year=yr;
//     }
//     data(){
//         return this.present() + ", year is : " + this.year;
//     }
// }

// let myCar = new Model("Ford", "Mustang" );
// console.log(myCar.show());

// let myCar1 = new Year("Ford" ,"2008")
// console.log(myCar1.data());


class Animals {
    constructor(name){
        this.name = name;
    }
    attack(){
        console.log(`${this.name} Attack `);
    }
    walk(){
        console.log(`${this.name} walk `);
    }
}

class FlyingAnimals extends Animals {
    fly(){
        console.log(`${this.name} Flew `);
    }
}

class SwimAnimals extends Animals {
    swim(){
        console.log(`${this.name} Swim`);
    }
}

let monster = new Animals('tigher');
monster.attack();
monster.walk();

let flyingmonster = new FlyingAnimals('eagel');
flyingmonster.fly();
flyingmonster.walk();
flyingmonster.attack();

let swimmonster = new SwimAnimals('Shark');
swimmonster.swim();
swimmonster.attack();