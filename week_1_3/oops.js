//legCount , speak , name
class Animal{
    constructor(name , legCount , speaks){ 
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    // you can also have static fuctions
    // these are not associated with objects , these are associated with the the class itself
    static myType(){
        console.log("Animal");
    }
    speak(){
        console.log(`${this.name} says ${this.speaks}`);
    }
}

// class , objects

let dog = new Animal("doggie" , 4 , "bhow bhow");
dog.speak();
console.log(dog);
// dog.myType(); // this will give error as myType is static function
Animal.myType(); // correct way to call static function

let cat = new Animal("catty",4,"meow meow");
cat.speak();
console.log(cat);


// don't do this
// let dog1={
//     name:"doggie",
//     legCount:4,
//     speaks:"bhow bhow"
// }

// console.log(dog1);
